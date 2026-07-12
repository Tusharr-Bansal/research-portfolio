"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Brain,
  Workflow,
  Database,
  Code2,
  Globe,
  FileText,
  ExternalLink
} from "lucide-react";


const stack = [
  {
    icon: Brain,
    title: "LLM",
    value: "Gemini 2.5 Flash",
  },
  {
    icon: Workflow,
    title: "Orchestration",
    value: "LangGraph",
  },
  {
    icon: Globe,
    title: "Backend",
    value: "FastAPI",
  },
  {
    icon: Code2,
    title: "Browser",
    value: "Playwright",
  },
  {
    icon: Database,
    title: "Execution",
    value: "Python",
  },
  {
    icon: FileText,
    title: "Deployment",
    value: "Docker",
  },
];

const challenges = [
  {
    title: "Heterogeneous Data",
    description:
      "The agent must reason across webpages, PDFs, CSV files, images, audio and APIs without assuming a fixed input format.",
  },
  {
    title: "Dynamic Tool Selection",
    description:
      "Each task requires choosing the appropriate tool—scraping, downloading, Python execution or API requests—based on the problem.",
  },
  {
    title: "Autonomous Planning",
    description:
      "Rather than following a predefined workflow, the agent plans, executes, evaluates intermediate results and iterates until completion.",
  },
];

export default function LLMQuizAnalyserPage() {
  return (
    <main className="bg-[#09090B] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          AI Systems Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Autonomous LLM
          <br />
          Quiz Analysis Agent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          An autonomous LangGraph agent capable of solving
          multi-step analytical quizzes through web scraping,
          reasoning, Python execution and API orchestration.
        </motion.p>
        <Link
          href="https://github.com/Tusharr-Bansal/llm-analyzer"
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-indigo-500 hover:text-indigo-400"
        >
          View Source

          <ExternalLink className="h-5 w-5" />
        </Link>

      </section>

      {/* DESCRIPTION */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

          <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
            What the Agent Does
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            One workflow. Multiple reasoning tools.
          </h2>

          <p className="mt-8 max-w-4xl leading-8 text-zinc-400">
            Starting from a quiz URL, the agent autonomously
            decides how to solve each task by combining
            browser automation, file processing, Python code
            execution and LLM reasoning. Depending on the
            problem, it can analyse webpages, PDFs, CSV files,
            images, audio recordings and APIs before producing
            and submitting the final answer.
          </p>

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

      {/* CHALLENGES */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          Engineering Challenges
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <h3 className="text-xl font-semibold">
                {challenge.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {challenge.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* SOURCE */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <Link
          href="https://github.com/Tusharr-Bansal/llm-analyzer/"
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
                Explore the LangGraph workflow,
                FastAPI backend, modular tool
                architecture and deployment
                configuration on GitHub.
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