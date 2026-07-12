"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
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
  {
    title: "Clustering Districts by Educational Performance Using Machine Learning and Neutrosophic Logic",
    description:
      "Proposed a statistically grounded neutrosophic feature transformation for clustering 768 Indian districts using the Performance Grading Index–District (PGID) dataset, enabling uncertainty-aware educational analytics and improved pattern discrimination.",
    status: "Conference Paper",
    year: "2026",
    href: "/publications/",
  },
];

export function FeaturedResearch() {
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

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
            >

              <Link href={project.href}>

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

      </div>
    </section>
  );
}