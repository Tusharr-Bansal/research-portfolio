"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FindXRay: Similar-Case Search for Chest X-rays",
    description:
      "Built a deployed chest X-ray case finder that encodes images in the browser, retrieves similar past cases from a 2,517-study library, and drafts cited reports with a LangGraph agent, improving report F1 from 0.374 to 0.496 over the same model without retrieval.",
    status: "Medical AI",
    year: "2026",
    href: "/projects/findxray",
  },
  {
    title: "SeeCite: Research Assistant with Verified Citations",
    description:
      "Built a deployed RAG agent that answers questions over uploaded research papers with code-validated citations, using hybrid BM25 + vector retrieval and reaching zero invalid citations across 174 evaluated answers.",
    status: "Agentic AI",
    year: "2026",
    href: "/projects/seecite",
  },
  {
    title: "Clustering Districts by Educational Performance Using Machine Learning and Neutrosophic Logic",
    description:
      "Proposed a statistically grounded neutrosophic feature transformation for clustering 768 Indian districts using the Performance Grading Index–District (PGID) dataset, enabling uncertainty-aware educational analytics and improved pattern discrimination.",
    status: "Conference Paper",
    year: "2026",
    href: "/publications/",
  },
  {
    title: "Music Genre Classification under Distribution Shift",
    description:
      "Developed robust deep learning models for music genre classification under severe distribution shifts using synthetic augmentation and transformer-based architectures.",
    status: "Research",
    year: "2025",
    href: "/projects/music-distribution-shift",
  },
  {
    title: "Comment Category Classification with Massive Class Imbalance",
    description:
      "Investigated methods for highly imbalanced multi-class NLP classification, improving minority class recognition while maintaining overall performance.",
    status: "Research",
    year: "2025",
    href: "/projects/comment-category-classification",
  },
];

export function FeaturedResearch() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [atEnd, setAtEnd] = useState(false);

  const updateEnd = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateEnd();
    window.addEventListener("resize", updateEnd);
    return () => window.removeEventListener("resize", updateEnd);
  }, [updateEnd]);

  /** Move one card to the right; from the last card, go back to the first. */
  const next = () => {
    const el = trackRef.current;
    if (!el) return;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  /* Click-and-drag with a mouse (touch and trackpads scroll natively) */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    const el = trackRef.current;
    if (!d.active || !el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) {
      d.moved = true;
      el.style.scrollSnapType = "none";
    }
    el.scrollLeft = d.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.scrollSnapType = "";
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section
      id="featured-research"
      className="border-t border-white/5 bg-[#09090B] py-28"
    >
      <div className="container-wide">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.28em] text-brand"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .05 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-semibold tracking-tight text-white"
        >
          Research & Engineering
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          Selected projects spanning trustworthy AI, deep learning,
          natural language processing, and production software engineering.
        </motion.p>

        <div className="relative mt-12">

        <div
          ref={trackRef}
          onScroll={updateEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          className="flex cursor-grab snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth py-4 pr-16 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {projects.map((project, index) => (

            <motion.div
              data-card
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-4rem)/3)]"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
            >

              <Link href={project.href} draggable={false} className="block h-full">

                <article
                  className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-brand/10
                  bg-white/[0.02]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand/30
                  hover:bg-white/[0.035]
                  hover:shadow-[0_20px_60px_rgba(99,102,241,.10)]
                  "
                >

                  <div className="mb-8 h-1 w-12 rounded-full bg-brand" />

                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 flex-grow leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">

                    <div className="flex justify-between text-sm">

                      <span className="uppercase tracking-widest text-zinc-500">
                        Status
                      </span>

                      <span className="text-white">
                        {project.status}
                      </span>

                    </div>

                    <div className="mt-4 flex justify-between text-sm">

                      <span className="uppercase tracking-widest text-zinc-500">
                        Year
                      </span>

                      <span className="text-white">
                        {project.year}
                      </span>

                    </div>

                  </div>

                  <div
                    className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-brand
                    transition-transform
                    group-hover:translate-x-1
                    "
                  >

                    View Case Study

                    <ArrowRight
                      className="h-4 w-4"
                    />

                  </div>

                </article>

              </Link>

            </motion.div>

          ))}

        </div>

        <button
          type="button"
          onClick={next}
          aria-label={atEnd ? "Back to first project" : "Next project"}
          className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-brand/30 bg-[#09090B]/90 text-brand shadow-[0_10px_30px_rgba(0,0,0,.5)] backdrop-blur transition hover:border-brand/60 hover:bg-brand/10"
        >
          <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${atEnd ? "rotate-180" : ""}`} />
        </button>

        </div>

      </div>
    </section>
  );
}