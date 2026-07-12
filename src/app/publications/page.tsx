"use client";

import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <section className="mx-auto max-w-7xl px-6 py-28">

        {/* Header */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Publications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Research Publications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Peer-reviewed conference publications and
          research outputs in Artificial Intelligence,
          Machine Learning and Data Science.
        </motion.p>

        {/* Publication */}

        <motion.article
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
        >

          <div className="grid lg:grid-cols-[1.3fr_420px]">

            {/* Left */}

            <div className="p-10">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-xs uppercase tracking-wider text-indigo-300">
                  Presented
                </span>

                <span className="text-sm text-zinc-500">
                  ICETESS 2026
                </span>

              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-tight">
                Clustering Districts by Educational Performance Using Machine Learning and Neutrosophic Logic
              </h2>

              <p className="mt-6 text-zinc-400">
                <strong className="font-medium text-zinc-200">
                  Authors
                </strong>
                <br />
                Tushar Bansal, Kanika Bhutani
              </p>

              <div className="mt-10">

                <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Abstract
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-zinc-400">

                  The proposed study suggests a statistically based neutrosophic feature transformation to cluster the dataset of 768 Indian districts with 6 educational dimensions, the Performance Grading Index-District (PGID) 2022-23 & 2023-24. The independent Truth, Falsity and Indeterminacy components are used to represent each district. This transformation extends the classical feature space into an uncertainty aware representation. Comparative clustering is done on the basis of Euclidean K-means and the cosine based agglomerative algorithms. 
                </p>

              </div>

              <a
                href="/papers/icetess-2026.pdf"
                target="_blank"
                className="mt-12 inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-6 py-3 transition hover:bg-indigo-500/10"
              >
                <FileText className="h-5 w-5 text-indigo-400" />

                Read Paper

                <ArrowUpRight className="h-4 w-4 text-indigo-400" />

              </a>

            </div>

            {/* Right */}

            <div className="border-l border-zinc-800 bg-[#0D0D10] p-8">

              <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">

                <iframe
                  src="/papers/icetess-2026.pdf"
                  className="h-[560px] w-full bg-white"
                />

              </div>

            </div>

          </div>

        </motion.article>

      </section>

    </main>
  );
}