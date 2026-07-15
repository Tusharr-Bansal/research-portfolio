"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/** Brand indigo — used only for accent elements in the animation */
const INDIGO = "#6366F1";
const PULSE = "#818CF8";
const FIBER = "rgba(99,102,241,0.30)";
const FIBER_SOFT = "rgba(99,102,241,0.15)";
const SOMA = "rgba(99,102,241,0.65)";
const CONTOUR = "rgba(99,102,241,0.28)";

/** Animation phases in the visual story: Signal → ML → Neural Intelligence → Trust */
type Phase = "ecg" | "dissolve" | "reorganize" | "connect" | "complete";

/** Duration of each stage before advancing (ms) */
const PHASE_DURATIONS: Record<Exclude<Phase, "complete">, number> = {
  ecg: 3200,
  dissolve: 2200,
  reorganize: 2800,
  connect: 2400,
};

/** Idle loop duration before restarting the sequence (ms) */
const LOOP_IDLE_MS = 8000;

/** Cadence of ambient neuron firing / traveling signal pulse once idle (ms) */
const PULSE_INTERVAL_MS = 3600;

/** Slow breathing cycle duration once idle (ms) */
const BREATH_MS = 6000;

/* --------------------------------------------------------------------- */
/*  Deterministic pseudo-random helpers (stable across renders)          */
/* --------------------------------------------------------------------- */

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(1337);

interface Point {
  x: number;
  y: number;
}

/* --------------------------------------------------------------------- */
/*  Procedural brain silhouette                                          */
/*  A radial contour (periodic Catmull-Rom over hand-tuned keyframes)    */
/*  gives the lobed cortex outline — wide dome up top, temporal bulges   */
/*  low on each side, pulled in toward a brainstem gap at the bottom —   */
/*  plus a smaller cerebellum blob and a tapering brainstem stub.        */
/*  These contours are never filled or rendered boldly; they exist to    */
/*  (a) constrain where neurons are sampled and (b) supply one extremely */
/*  faint grounding outline so the shape reads clearly even with a       */
/*  sparse neuron count.                                                 */
/* --------------------------------------------------------------------- */

/** [angleDeg, radiusFactor] keyframes around the cortex, periodic */
const CORTEX_KEYFRAMES: [number, number][] = [
  [270, 1.05],
  [300, 1.0],
  [330, 0.95],
  [0, 0.92],
  [30, 0.88],
  [55, 0.98],
  [80, 0.55],
  [100, 0.46],
  [120, 0.55],
  [145, 0.98],
  [170, 0.88],
  [200, 0.92],
  [230, 0.95],
  [260, 1.0],
];

const CEREBELLUM_KEYFRAMES: [number, number][] = [
  [0, 0.9],
  [45, 1.0],
  [90, 0.85],
  [135, 0.95],
  [180, 0.9],
  [225, 0.95],
  [270, 1.05],
  [315, 1.0],
];

function wrapDeg(d: number): number {
  let r = d % 360;
  if (r < 0) r += 360;
  return r;
}

/** Periodic Catmull-Rom interpolation over (angle, radius) keyframes */
function radiusAtAngle(thetaDeg: number, keyframes: [number, number][]): number {
  const t = wrapDeg(thetaDeg);
  let i = 0;
  for (; i < keyframes.length; i++) {
    const cur = keyframes[i][0];
    const next = keyframes[(i + 1) % keyframes.length][0];
    const nextW = next > cur ? next : next + 360;
    const tt = t >= cur ? t : t + 360;
    if (tt >= cur && tt <= nextW) break;
  }
  const p0 = keyframes[(i - 1 + keyframes.length) % keyframes.length];
  const p1 = keyframes[i % keyframes.length];
  const p2 = keyframes[(i + 1) % keyframes.length];
  const p3 = keyframes[(i + 2) % keyframes.length];
  const a1 = p1[0];
  let a2 = p2[0];
  if (a2 <= a1) a2 += 360;
  const tt = t >= a1 ? t : t + 360;
  const localT = (tt - a1) / (a2 - a1);

  const cr = (v0: number, v1: number, v2: number, v3: number, f: number) =>
    0.5 *
    (2 * v1 +
      (-v0 + v2) * f +
      (2 * v0 - 5 * v1 + 4 * v2 - v3) * f * f +
      (-v0 + 3 * v1 - 3 * v2 + v3) * f * f * f);

  return cr(p0[1], p1[1], p2[1], p3[1], localT);
}

interface Blob {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  points: Point[];
  wobbleFreqA: number;
  wobbleFreqB: number;
  wobblePhase: number;
}

/** Build a lobed, organic closed contour as sample points around the center */
function buildBlob(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  keyframes: [number, number][],
  segments: number,
  wobbleAmp: number,
  seedPhase: number
): Blob {
  const points: Point[] = [];
  const wobbleFreqA = 8 + Math.floor(rand() * 3);
  const wobbleFreqB = 15 + Math.floor(rand() * 5);
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * 360;
    let r = radiusAtAngle(theta, keyframes);
    const rad = (theta * Math.PI) / 180;
    r *=
      1 +
      wobbleAmp * Math.sin(rad * wobbleFreqA + seedPhase) +
      wobbleAmp * 0.55 * Math.sin(rad * wobbleFreqB + seedPhase * 1.7);
    points.push({
      x: cx + Math.cos(rad) * rx * r,
      y: cy + Math.sin(rad) * ry * r,
    });
  }
  return { cx, cy, rx, ry, points, wobbleFreqA, wobbleFreqB, wobblePhase: seedPhase };
}

/** Convert a closed set of points into a smooth SVG path via Catmull-Rom → Bézier */
function blobToPath(blob: Blob): string {
  const pts = blob.points;
  const n = pts.length;
  if (n < 3) return "";
  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(
      2
    )} ${p2.y.toFixed(2)} `;
  }
  return d.trim() + " Z";
}

/** Ray-casting point-in-polygon test against a blob's sample points */
function pointInBlob(x: number, y: number, blob: Blob): boolean {
  const poly = blob.points;
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x;
    const yi = poly[i].y;
    const xj = poly[j].x;
    const yj = poly[j].y;
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const CORTEX = buildBlob(200, 178, 118, 108, CORTEX_KEYFRAMES, 72, 0.035, 1.3);
const CEREBELLUM = buildBlob(214, 272, 44, 26, CEREBELLUM_KEYFRAMES, 48, 0.05, 0.6);

const CORTEX_PATH = blobToPath(CORTEX);
const CEREBELLUM_PATH = blobToPath(CEREBELLUM);

/** Brainstem: a simple tapering stub beneath the cortex, drawn with two
 * gently bowed bezier sides rather than a mechanical straight-edged shape. */
const BRAINSTEM_TOP: Point = { x: 200, y: 258 };
const BRAINSTEM_BOTTOM: Point = { x: 196, y: 306 };
const BRAINSTEM_PATH = `M ${BRAINSTEM_TOP.x - 9} ${BRAINSTEM_TOP.y} C ${BRAINSTEM_TOP.x - 12} ${
  BRAINSTEM_TOP.y + 20
}, ${BRAINSTEM_BOTTOM.x - 7} ${BRAINSTEM_BOTTOM.y - 14}, ${BRAINSTEM_BOTTOM.x - 3} ${
  BRAINSTEM_BOTTOM.y
} L ${BRAINSTEM_BOTTOM.x + 3} ${BRAINSTEM_BOTTOM.y} C ${BRAINSTEM_BOTTOM.x + 8} ${
  BRAINSTEM_BOTTOM.y - 14
}, ${BRAINSTEM_TOP.x + 13} ${BRAINSTEM_TOP.y + 20}, ${BRAINSTEM_TOP.x + 9} ${BRAINSTEM_TOP.y} Z`;

/** Longitudinal fissure — the faint curved seam separating the hemispheres */
const FISSURE_PATH = "M 200 82 C 197 120, 203 150, 199 182 C 196 208, 202 224, 199 244";

/** Half-width of the fissure gap used to exclude neuron samples near the
 * midline, tapering from wide near the top to nothing lower in the cortex. */
function fissureGapAt(y: number): number {
  const topY = 90;
  const bottomY = 235;
  if (y <= topY) return 11;
  if (y >= bottomY) return 0;
  const t = (y - topY) / (bottomY - topY);
  return 11 * (1 - t) * (1 - t);
}

/* --------------------------------------------------------------------- */
/*  Neurons                                                               */
/* --------------------------------------------------------------------- */

interface Branch {
  d: string;
  strokeWidth: number;
  opacity: number;
}

interface Neuron {
  id: number;
  region: "cortexLeft" | "cortexRight" | "cerebellum" | "brainstem";
  x: number;
  y: number;
  somaR: number;
  fibers: Branch[];
  pulsePhase: number;
  major: boolean;
}

const TOTAL_NEURONS = 120;

/** Recursively build a branching dendrite/axon system from an origin point. */
function growBranches(
  origin: Point,
  angle: number,
  length: number,
  depth: number,
  maxDepth: number,
  out: Branch[],
  baseWidth: number
) {
  if (depth > maxDepth || length < 3) return;

  const wobble = (rand() - 0.5) * 0.9;
  const endAngle = angle + wobble;
  const end: Point = {
    x: origin.x + Math.cos(endAngle) * length,
    y: origin.y + Math.sin(endAngle) * length,
  };

  const bow = (rand() - 0.5) * length * 0.6;
  const perpAngle = endAngle + Math.PI / 2;
  const mid: Point = {
    x: (origin.x + end.x) / 2 + Math.cos(perpAngle) * bow,
    y: (origin.y + end.y) / 2 + Math.sin(perpAngle) * bow,
  };
  const c1: Point = {
    x: origin.x + (mid.x - origin.x) * 0.6,
    y: origin.y + (mid.y - origin.y) * 0.6,
  };
  const c2: Point = {
    x: end.x + (mid.x - end.x) * 0.6,
    y: end.y + (mid.y - end.y) * 0.6,
  };

  out.push({
    d: `M ${origin.x.toFixed(2)} ${origin.y.toFixed(2)} C ${c1.x.toFixed(2)} ${c1.y.toFixed(
      2
    )}, ${c2.x.toFixed(2)} ${c2.y.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
    strokeWidth: Math.max(0.4, baseWidth * (1 - depth / (maxDepth + 1))),
    opacity: 1 - depth * 0.16,
  });

  const childCount = depth === 0 ? 3 : rand() > 0.45 ? 2 : 1;
  for (let i = 0; i < childCount; i++) {
    const spread = 0.5 + rand() * 0.9;
    const dir = i % 2 === 0 ? 1 : -1;
    const childAngle = endAngle + dir * spread * (0.6 + rand() * 0.5);
    const childLength = length * (0.55 + rand() * 0.2);
    growBranches(end, childAngle, childLength, depth + 1, maxDepth, out, baseWidth * 0.72);
  }
}

/** Rejection-sample a point inside a blob's bounding ellipse until it lands
 * within the true lobed polygon. */
function samplePointInBlob(blob: Blob): Point {
  for (let tries = 0; tries < 30; tries++) {
    const ux = rand() * 2 - 1;
    const uy = rand() * 2 - 1;
    if (ux * ux + uy * uy > 1) continue;
    const x = blob.cx + ux * blob.rx * 1.05;
    const y = blob.cy + uy * blob.ry * 1.05;
    if (pointInBlob(x, y, blob)) return { x, y };
  }
  return { x: blob.cx, y: blob.cy };
}

/** Generate the full neuron field: cortex (split into left/right by the
 * fissure gap), cerebellum, and a handful along the brainstem. */
function generateNeurons(): Neuron[] {
  const neurons: Neuron[] = [];
  let id = 0;

  const cortexCount = Math.round(TOTAL_NEURONS * 0.72);
  const cerebellumCount = Math.round(TOTAL_NEURONS * 0.2);
  const brainstemCount = TOTAL_NEURONS - cortexCount - cerebellumCount;

  for (let i = 0; i < cortexCount; i++) {
    let p = samplePointInBlob(CORTEX);
    let attempts = 0;
    while (Math.abs(p.x - CORTEX.cx) < fissureGapAt(p.y) && attempts < 8) {
      p = samplePointInBlob(CORTEX);
      attempts++;
    }
    const region = p.x < CORTEX.cx ? "cortexLeft" : "cortexRight";
    const major = rand() > 0.8;
    const somaR = major ? 1.7 + rand() * 1.4 : 1.1 + rand() * 1.1;
    const baseWidth = major ? 0.9 : 0.5;
    const maxDepth = major ? 4 : 3;
    const branchCount = major ? 3 : 2;
    const fibers: Branch[] = [];
    for (let b = 0; b < branchCount; b++) {
      const angle = rand() * Math.PI * 2;
      const length = (major ? 13 : 7) + rand() * (major ? 11 : 7);
      growBranches(p, angle, length, 0, maxDepth, fibers, baseWidth);
    }
    neurons.push({ id: id++, region, x: p.x, y: p.y, somaR, fibers, pulsePhase: rand(), major });
  }

  for (let i = 0; i < cerebellumCount; i++) {
    const p = samplePointInBlob(CEREBELLUM);
    const major = rand() > 0.85;
    const somaR = major ? 1.4 + rand() * 0.9 : 0.9 + rand() * 0.8;
    const fibers: Branch[] = [];
    const branchCount = 2;
    for (let b = 0; b < branchCount; b++) {
      const angle = rand() * Math.PI * 2;
      const length = 5 + rand() * 6;
      growBranches(p, angle, length, 0, 2, fibers, 0.45);
    }
    neurons.push({
      id: id++,
      region: "cerebellum",
      x: p.x,
      y: p.y,
      somaR,
      fibers,
      pulsePhase: rand(),
      major,
    });
  }

  for (let i = 0; i < brainstemCount; i++) {
    const t = i / Math.max(1, brainstemCount - 1);
    const y = BRAINSTEM_TOP.y + t * (BRAINSTEM_BOTTOM.y - BRAINSTEM_TOP.y);
    const x = BRAINSTEM_TOP.x + (rand() - 0.5) * 6;
    const fibers: Branch[] = [];
    growBranches({ x, y }, Math.PI / 2 + (rand() - 0.5) * 0.6, 8 + rand() * 6, 0, 2, fibers, 0.4);
    neurons.push({
      id: id++,
      region: "brainstem",
      x,
      y,
      somaR: 1 + rand() * 0.7,
      fibers,
      pulsePhase: rand(),
      major: false,
    });
  }

  return neurons;
}

/* --------------------------------------------------------------------- */
/*  ECG intro path (the raw signal, before it becomes neural tissue)     */
/* --------------------------------------------------------------------- */

const ECG_PATH =
  "M 30 200 H 70 L 78 200 L 82 200 L 86 168 L 92 232 L 98 178 L 104 200 " +
  "H 140 L 148 200 L 152 200 L 156 175 L 162 225 L 168 185 L 174 200 " +
  "H 210 L 218 200 L 222 200 L 226 168 L 232 232 L 238 178 L 244 200 " +
  "H 280 L 288 200 L 292 200 L 296 175 L 302 225 L 308 185 L 314 200 " +
  "H 370";

const ECG_SAMPLES: Point[] = [
  { x: 50, y: 200 },
  { x: 86, y: 168 },
  { x: 92, y: 232 },
  { x: 98, y: 178 },
  { x: 120, y: 200 },
  { x: 156, y: 175 },
  { x: 162, y: 225 },
  { x: 180, y: 200 },
  { x: 226, y: 168 },
  { x: 232, y: 232 },
  { x: 250, y: 200 },
  { x: 296, y: 175 },
  { x: 302, y: 225 },
  { x: 320, y: 200 },
  { x: 350, y: 200 },
];

const DISSOLVE_OFFSETS = ECG_SAMPLES.map((_, i) => ({
  dx: Math.sin(i * 1.7) * 22,
  dy: Math.cos(i * 2.3) * 16,
}));

/* --------------------------------------------------------------------- */
/*  Traveling signal pathway — a chain of major cortical neurons the      */
/*  pulse dot visits, left hemisphere to right, evoking a thought         */
/*  crossing the corpus callosum without drawing a literal graph edge.    */
/* --------------------------------------------------------------------- */

function buildSignalStops(neurons: Neuron[]): Neuron[] {
  const majors = neurons
    .filter((n) => n.major && (n.region === "cortexLeft" || n.region === "cortexRight"))
    .sort((a, b) => a.x - b.x);
  const stops: Neuron[] = [];
  const step = Math.max(1, Math.floor(majors.length / 8));
  for (let i = 0; i < majors.length; i += step) stops.push(majors[i]);
  return stops.slice(0, 8);
}

function buildTravelPath(stops: Neuron[]): string {
  if (stops.length < 2) return "";
  let d = `M ${stops[0].x.toFixed(2)} ${stops[0].y.toFixed(2)} `;
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    const midx = (a.x + b.x) / 2;
    const midy = (a.y + b.y) / 2 + (rand() - 0.5) * 8;
    d += `Q ${midx.toFixed(2)} ${midy.toFixed(2)}, ${b.x.toFixed(2)} ${b.y.toFixed(2)} `;
  }
  return d.trim();
}

interface HeroAnimationProps {
  className?: string;
}

/**
 * Decorative hero visualization telling the story:
 * ECG signal → particles → an anatomical brain grown entirely from
 * neural tissue, its cortex, cerebellum, and brainstem formed by a
 * sparse field of individually branching neurons.
 */
export function HeroAnimation({ className }: HeroAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(prefersReducedMotion ? "complete" : "ecg");
  const [cycle, setCycle] = useState(0);
  const [beat, setBeat] = useState(0);
  const [activeNeuronSet, setActiveNeuronSet] = useState<Set<number>>(new Set());

  /** Generated once, memoized — the anatomical neural structure never
   * needs to be recomputed on re-render. */
  const neurons = useMemo(() => generateNeurons(), []);
  const signalStops = useMemo(() => buildSignalStops(neurons), [neurons]);
  const travelPath = useMemo(() => buildTravelPath(signalStops), [signalStops]);

  const ambientCandidates = useMemo(
    () => neurons.filter((n) => n.major).map((n) => n.id),
    [neurons]
  );

  /** Advance through animation stages, then loop */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (phase === "ecg") {
      timers.push(setTimeout(() => setPhase("dissolve"), PHASE_DURATIONS.ecg));
    } else if (phase === "dissolve") {
      timers.push(setTimeout(() => setPhase("reorganize"), PHASE_DURATIONS.dissolve));
    } else if (phase === "reorganize") {
      timers.push(setTimeout(() => setPhase("connect"), PHASE_DURATIONS.reorganize));
    } else if (phase === "connect") {
      timers.push(setTimeout(() => setPhase("complete"), PHASE_DURATIONS.connect));
    } else if (phase === "complete") {
      timers.push(
        setTimeout(() => {
          setCycle((c) => c + 1);
          setPhase("ecg");
        }, LOOP_IDLE_MS)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [phase, prefersReducedMotion]);

  const isComplete = phase === "complete" || prefersReducedMotion;

  /** Ambient activity: every ~3.6s, a small cluster of neurons fires and
   * the signal dot travels its path — subtle, not synchronized to a beat. */
  useEffect(() => {
    if (!isComplete) return;
    const interval = setInterval(() => {
      setBeat((b) => b + 1);

      const size = 4 + Math.floor(rand() * 5);
      const picks = new Set<number>();
      for (let i = 0; i < size && ambientCandidates.length > 0; i++) {
        const idx = Math.floor(rand() * ambientCandidates.length);
        picks.add(ambientCandidates[idx]);
      }
      setActiveNeuronSet(picks);
      const clear = setTimeout(() => setActiveNeuronSet(new Set()), 850);
      return () => clearTimeout(clear);
    }, PULSE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isComplete, ambientCandidates]);

  /** Subtle mouse parallax — kept under 5px, text remains primary focus */


  /** Map ECG sample particles toward a spread of neuron soma positions,
   * so the dissolve→reorganize stage seeds directly into real anatomy. */
  const particleTargets = useMemo(
    () =>
      ECG_SAMPLES.map((sample, i) => ({
        start: sample,
        scatter: {
          x: sample.x + DISSOLVE_OFFSETS[i].dx,
          y: sample.y + DISSOLVE_OFFSETS[i].dy,
        },
        end: neurons[(i * 7) % neurons.length],
      })),
    [neurons]
  );

  const showEcg = phase === "ecg";
  const showDissolveParticles = phase === "dissolve" || phase === "reorganize";
  const showNeurons = phase === "reorganize" || phase === "connect" || phase === "complete";
  const showFibers = phase === "connect" || phase === "complete";
  const showContour = phase === "connect" || phase === "complete";

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ background: "transparent" }}
    >
      <motion.div
        animate={
          isComplete && !prefersReducedMotion
            ? { scale: [1, 1.012, 1] }
            : { scale: 1 }
        }
        transition={
          isComplete
            ? {
                duration: BREATH_MS / 1000,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className="relative aspect-square w-full max-w-[580px] mx-auto lg:mx-0 lg:ml-auto scale-[1.15] -translate-y-4"
      >
        {/* Extremely subtle radial glow behind the tissue */}
        <div
          className="pointer-events-none absolute inset-[12%] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)`,
          }}
        />

        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" key={cycle}>
          <defs>
            <filter id="soma-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pulse-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stage 1: ECG line sweeping across — the raw signal */}
          {showEcg && (
            <motion.path
              d={ECG_PATH}
              stroke={INDIGO}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
          )}

          {(phase === "dissolve" || phase === "reorganize") && (
            <motion.path
              d={ECG_PATH}
              stroke={INDIGO}
              strokeWidth={1}
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          )}

          {/* Stage 2–3: signal particles dissolving, then migrating into
              the anatomical field where neurons will form */}
          {showDissolveParticles &&
            particleTargets.map((particle, i) => {
              const isDissolving = phase === "dissolve";
              const target = isDissolving ? particle.scatter : particle.end;

              return (
                <motion.circle
                  key={`particle-${cycle}-${i}`}
                  r={2.2}
                  fill={INDIGO}
                  initial={{ cx: particle.start.x, cy: particle.start.y, opacity: 0 }}
                  animate={{
                    cx: target.x,
                    cy: target.y,
                    opacity: isDissolving ? 0.8 : 0,
                  }}
                  transition={{
                    duration: isDissolving ? 1.4 : 2,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}

          {/* Grounding contour — a near-invisible reference outline of the
              cortex, cerebellum, brainstem, and longitudinal fissure. This
              is what keeps the silhouette reading as a brain even with a
              sparse neuron count; it is never a bold or literal line. */}
          {showContour && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <path d={CORTEX_PATH} stroke={CONTOUR} strokeWidth={0.75} fill="none" />
              <path d={CEREBELLUM_PATH} stroke={CONTOUR} strokeWidth={0.6} fill="none" />
              <path d={BRAINSTEM_PATH} stroke={CONTOUR} strokeWidth={0.6} fill="none" />
              <path
                d={FISSURE_PATH}
                stroke={CONTOUR}
                strokeWidth={0.6}
                strokeLinecap="round"
                fill="none"
              />
            </motion.g>
          )}

          {/* Stage 4: dendritic / axonal fibers drawing in as organic
              branching curves — never straight graph edges */}
          {showFibers &&
            neurons.map((n) =>
              n.fibers.map((fiber, fi) => (
                <motion.path
                  key={`fiber-${cycle}-${n.id}-${fi}`}
                  d={fiber.d}
                  stroke={n.major ? FIBER : FIBER_SOFT}
                  strokeWidth={fiber.strokeWidth}
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: fiber.opacity }}
                  transition={{
                    duration: 1.1,
                    delay: (n.id % 40) * 0.015 + fi * 0.05,
                    ease: "easeOut",
                  }}
                />
              ))
            )}

          {/* Stage 3–5: neuron somas forming the brain's tissue */}
          {showNeurons &&
            neurons.map((n) => {
              const active = activeNeuronSet.has(n.id);
              return (
                <motion.circle
                  key={`soma-${cycle}-${n.id}`}
                  cx={n.x}
                  cy={n.y}
                  r={n.somaR}
                  fill={active ? INDIGO : SOMA}
                  filter={n.major || active ? "url(#soma-glow)" : undefined}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: active ? 1 : n.major ? 0.85 : 0.55,
                    fill: active ? INDIGO : SOMA,
                  }}
                  transition={{
                    scale: { duration: 0.45, delay: (n.id % 60) * 0.012 },
                    opacity: { duration: active ? 0.35 : 0.6 },
                    fill: { duration: 0.4 },
                  }}
                />
              );
            })}

          {/* Idle: a soft signal traveling a chain of cortical neurons,
              left hemisphere to right, on each ambient activity tick */}
          {isComplete && travelPath && (
            <motion.circle
              key={`pulse-${beat}`}
              r={2.4}
              fill={PULSE}
              filter="url(#pulse-glow)"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
              style={{
                offsetPath: `path('${travelPath}')`,
                offsetRotate: "0deg",
              }}
            />
          )}

          {isComplete && travelPath && (
            <path d={travelPath} stroke="rgba(129,140,248,0.08)" strokeWidth={0.6} fill="none" />
          )}
        </svg>
      </motion.div>
    </div>
  );
}