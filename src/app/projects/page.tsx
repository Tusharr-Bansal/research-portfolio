"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Music Genre Classification under Distribution Shift",
    description:
      "Investigated robust music genre classification under distribution shift by combining synthetic data generation, deep learning architectures, and transformer-based models.",
    status: "Research",
    tags: [
      "PyTorch",
      "Audio AI",
      "CNN",
      "AST",
      "Distribution Shift",
    ],
    href: "/projects/music-distribution-shift",
    cta: "View Case Study",
  },
  {
    title: "Comment Category Classification with Massive Class Imbalance",
    description:
      "Developed a scalable text moderation pipeline using TF-IDF, metadata engineering, and LightGBM to address severe class imbalance.",
    status: "Research",
    tags: [
      "NLP",
      "LightGBM",
      "Machine Learning",
      "TF-IDF",
    ],
    href: "/projects/comment-category-classification",
    cta: "View Case Study",
  },
  {
    title: "End-to-End Hospital Management System",
    description:
      "Designed and developed a distributed hospital management platform featuring role-based access control, asynchronous workflows, caching, and REST APIs.",
    status: "Engineering",
    tags: [
      "Flask",
      "Vue.js",
      "Redis",
      "Celery",
      "PostgreSQL",
    ],
    href: "/projects/hospital-management-system",
    cta: "Explore Project",
  },
  {
    title: "LLM Quiz Analysis Agent",
    description:
      "Built an autonomous LangGraph agent capable of solving multi-step analytical quizzes through web scraping, code execution, reasoning, and API orchestration.",
    status: "LLM Systems",
    tags: [
      "LangGraph",
      "Gemini",
      "FastAPI",
      "Playwright",
      "Agents",
    ],
    href: "/projects/llm-quiz-analyser",
    cta: "Explore Project",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <section className="mx-auto max-w-7xl px-6 py-28">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Selected Research &
          <br />
          Engineering Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          A collection of research projects and engineering
          systems spanning trustworthy AI, machine learning,
          large language models, and scalable software systems.
        </motion.p>

        <div className="mt-24 space-y-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={project.href}>

                <article className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#101014]">

                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

                    <div className="max-w-4xl">

                      <span className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-xs uppercase tracking-widest text-indigo-300">
                        {project.status}
                      </span>

                      <h2 className="mt-8 text-3xl font-semibold leading-tight transition-colors group-hover:text-indigo-300">
                        {project.title}
                      </h2>

                      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        {project.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-zinc-800 bg-[#111118] px-4 py-2 text-sm text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>

                    <div className="flex items-center">

                      <span className="flex items-center gap-3 text-lg font-medium text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">

                        {project.cta}

                        <ArrowUpRight className="h-5 w-5" />

                      </span>

                    </div>

                  </div>

                </article>

              </Link>
            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}