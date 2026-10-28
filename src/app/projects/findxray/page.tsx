"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Activity,
  Brain,
  Database,
  Globe,
  Server,
  Workflow,
} from "lucide-react";

const stack = [
  { icon: Brain, title: "Encoder", value: "RAD-DINO (int8 ONNX)" },
  { icon: Globe, title: "Browser Runtime", value: "ONNX Runtime Web" },
  { icon: Workflow, title: "Agent", value: "LangGraph + Gemini" },
  { icon: Activity, title: "Tracing", value: "Langfuse" },
  { icon: Server, title: "Backend", value: "FastAPI" },
  { icon: Database, title: "Data", value: "IU X-ray (Hugging Face)" },
];

const highlights = [
  {
    "value": "0.496",
    "label": "CheXbert micro-F1 of draft reports vs radiologists"
  },
  {
    "value": "~0.5 s",
    "label": "to encode an X-ray in the browser"
  },
  {
    "value": "86 MB",
    "label": "int8 encoder, down from 330 MB"
  }
];

const tables = [
  {
    "title": "Finding Similar Cases",
    "caption": "720 held-out test X-rays searched against the 2,517-case library. Mean, with 95% bootstrap CI for P@5.",
    "head": [
      "Encoder",
      "P@5",
      "P@5 (abnormal)",
      "mAP@10",
      "nDCG@10",
      "MRR"
    ],
    "best": 3,
    "rows": [
      [
        "Random",
        "0.246",
        "0.174",
        "0.125",
        "0.186",
        "0.444"
      ],
      [
        "DINOv2-base (general)",
        "0.334",
        "0.208",
        "0.206",
        "0.262",
        "0.505"
      ],
      [
        "BiomedCLIP",
        "0.374",
        "0.278",
        "0.237",
        "0.278",
        "0.542"
      ],
      [
        "RAD-DINO 224 (chosen)",
        "0.417 [0.396–0.443]",
        "0.326",
        "0.284",
        "0.310",
        "0.585"
      ],
      [
        "RAD-DINO 518",
        "0.428 [0.407–0.453]",
        "0.344",
        "0.292",
        "0.318",
        "0.617"
      ]
    ]
  },
  {
    "title": "Drafting the Report",
    "caption": "50 held-out studies never used for tuning. Reports labelled by CheXbert (14 findings) and compared with the radiologist's report.",
    "head": [
      "System",
      "Micro-F1",
      "Normal/Abnormal Correct"
    ],
    "best": 2,
    "rows": [
      [
        "Copy the most similar case's report",
        "0.389",
        "74%"
      ],
      [
        "Gemini, no similar cases",
        "0.374",
        "54%"
      ],
      [
        "FindXRay agent",
        "0.496",
        "78%"
      ]
    ]
  }
];

const findings = [
  {
    "title": "Retrieval Is What Helps",
    "description": "The agent beats copying the nearest case by +0.107 F1 [+0.010, +0.204] and the same model without retrieval by +0.122 [+0.003, +0.241]."
  },
  {
    "title": "The Checking Steps Didn't Move Accuracy",
    "description": "The second look and sentence verifier changed F1 by only +0.005: the gain comes from drafting with similar cases."
  },
  {
    "title": "Browser-Speed Model Choice",
    "description": "RAD-DINO at 518 px is slightly better, but the 224 px model runs fast enough in a browser (median 484 ms, multi-threaded WebAssembly)."
  },
  {
    "title": "Guarding a Free Quota",
    "description": "Live reports are capped at 60 a day so a crawler cannot use up the free Gemini quota; sample cases are pre-computed and need no API."
  }
];

export default function FindXRayPage() {
  return (
    <main className="bg-[#09090B] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Medical AI Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          FindXRay: Similar-Case
          <br />
          Search for Chest X-rays
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Upload a chest X-ray and see the most similar past cases, what they were diagnosed with, and a draft report that cites them. A research demo, not a medical device.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="https://findxray.onrender.com"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
          >
            Live Demo
            <ExternalLink className="h-5 w-5" />
          </Link>

          <Link
            href="https://github.com/tusharbansalwork/FindXRay"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            View Source
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>

      </section>

      {/* DESCRIPTION */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

          <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
            What It Does
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            In-browser encoding. Retrieval. A cited report.
          </h2>

          <p className="mt-8 max-w-4xl leading-8 text-zinc-400">
            The X-ray is encoded on the visitor&apos;s own device: RAD-DINO, compressed to int8 (330 MB to 86 MB with no measurable retrieval loss), runs in the browser through ONNX Runtime Web in about half a second. The embedding is matched against a 2,517-case IU X-ray library by a FastAPI search service (~2 ms per search), and a LangGraph agent on Gemini drafts a report from the similar cases (draft, second look, verify, revise), with every run traced in Langfuse.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-zinc-800 bg-[#111118] p-6">
                <p className="text-3xl font-semibold text-indigo-400">{h.value}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{h.label}</p>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* RESULTS */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          Evaluation Results
        </p>

        <div className="mt-10 space-y-8">

          {tables.map((t) => (
            <div key={t.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">

              <h3 className="text-xl font-semibold">{t.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">{t.caption}</p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500">
                      {t.head.map((h, i) => (
                        <th key={h} className={`pb-4 font-medium ${i > 0 ? "text-right" : ""}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r, ri) => (
                      <tr
                        key={ri}
                        className={`border-b border-zinc-900 last:border-0 ${ri === t.best ? "text-indigo-300" : "text-zinc-300"}`}
                      >
                        {r.map((c, ci) => (
                          <td key={ci} className={`py-4 ${ci > 0 ? "text-right tabular-nums" : ""} ${ri === t.best ? "font-semibold" : ""}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* STACK */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          Technology Stack
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <Icon className="h-8 w-8 text-indigo-400" />

                <p className="mt-6 text-sm uppercase tracking-wider text-zinc-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {item.value}
                </h3>

              </div>
            );
          })}

        </div>

      </section>

      {/* FINDINGS */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          What the Evaluation Caught
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {findings.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <h3 className="text-xl font-semibold">
                {f.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {f.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* SOURCE */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <Link
          href="https://github.com/tusharbansalwork/FindXRay"
          target="_blank"
          className="group block rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition hover:border-indigo-500/30 hover:bg-[#101014]"
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
                Source Code
              </p>

              <h2 className="mt-5 text-3xl font-semibold">
                View the complete implementation
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                Explore the retrieval benchmark, the in-browser encoder, the LangGraph report agent, the CheXbert evaluation and the deployment configuration on GitHub.
              </p>

            </div>

            <Github className="h-14 w-14 text-indigo-400 transition group-hover:scale-110" />

          </div>

          <div className="mt-10 flex items-center gap-3 text-indigo-400">

            View Repository

            <ArrowUpRight className="h-5 w-5" />

          </div>

        </Link>

      </section>

    </main>
  );
}
