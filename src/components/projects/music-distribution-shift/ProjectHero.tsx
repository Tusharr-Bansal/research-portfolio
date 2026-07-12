"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
const tags = [
  "Audio AI",
  "Distribution Shift",
  "AST",
  "Synthetic Data",
];

export default function ProjectHero() {
  return (
    <section className="relative flex min-h-screen items-center bg-[#09090B] overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">

        {/* Research Label */}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.35em] text-indigo-500 font-semibold"
        >
          Research Project • IIT Madras • 2026
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-5xl text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1]"
        >
          Music Genre Classification
          <br />
          <span className="text-zinc-400">
            under Distribution Shift
          </span>
        </motion.h1>

        {/* Research Question */}

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-3xl text-xl leading-9 text-zinc-400"
        >
          Can a model trained on clean instrument stems
          generalize to noisy real-world mashups?
        </motion.p>

        {/* Action Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="https://github.com/21f3001891/dl-project-21f3001891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-indigo-500/30 bg-transparent px-6 py-3 text-sm font-medium text-indigo-300 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="/papers/music-distribution-shift-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-indigo-500/30 bg-transparent px-6 py-3 text-sm font-medium text-indigo-300 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"            >
              Read Report
            </Link>
          </motion.div>

        {/* Metric */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 flex flex-wrap items-end gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Best Public Macro F1
            </p>

            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-indigo-500">
              0.89555
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Challenge Card */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-10">

            {/* Training */}

            <div className="flex-1 min-w-[250px]">
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
                Training
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Clean Instrument Stems
              </h3>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>• Individual stems</li>
                <li>• Single song recordings</li>
                <li>• Clean audio</li>
                <li>• Balanced across genres</li>
              </ul>
            </div>

            {/* Arrow */}

            <ArrowRight className="hidden lg:block h-8 w-8 text-indigo-500" />

            {/* Inference */}

            <div className="flex-1 min-w-[250px]">
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
                Inference
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Noisy Mashups
              </h3>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>• Multiple songs mixed</li>
                <li>• Environmental noise</li>
                <li>• Tempo variations</li>
                <li>• Different data distribution</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 border-t border-zinc-800 pt-8">

            <p className="max-w-4xl text-lg leading-8 text-zinc-400">
              Although both datasets represented the same ten music genres,
              the model was trained on clean instrument stems while inference
              was performed on noisy mashups. This hidden distribution shift
              became the central research challenge and ultimately motivated
              the synthetic data generation strategy.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}