"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Brain,
  Cloud,
  Cpu,
  Database,
  Globe,
  Search,
} from "lucide-react";

const stack = [
  { icon: Brain, title: "LLM", value: "Gemini" },
  { icon: Database, title: "Database", value: "Postgres + pgvector" },
  { icon: Search, title: "Retrieval", value: "BM25 + Vector (RRF)" },
  { icon: Cpu, title: "Embeddings", value: "bge-small (ONNX)" },
  { icon: Globe, title: "Backend", value: "FastAPI" },
  { icon: Cloud, title: "Deployment", value: "Render + Neon" },
];

const highlights = [
  {
    "value": "0",
    "label": "invalid citations across 174 evaluated answers"
  },
  {
    "value": "0",
    "label": "unsupported claims in a blind review of 60 answers"
  },
  {
    "value": "91%",
    "label": "answers correct with the default single search"
  }
];

const tables = [
  {
    "title": "Retrieval Quality",
    "caption": "45 hand-verified single-passage questions over 29 papers, each anchored to an evidence quote.",
    "head": [
      "Retrieval",
      "Recall@10",
      "MRR"
    ],
    "best": 0,
    "rows": [
      [
        "Hybrid: BM25 + Vector, RRF (default)",
        "0.78",
        "0.53"
      ],
      [
        "BM25 only",
        "0.73",
        "—"
      ],
      [
        "Vector only (bge-small)",
        "0.64",
        "—"
      ],
      [
        "Postgres ts_rank_cd",
        "0.49",
        "—"
      ]
    ]
  }
];

const findings = [
  {
    "title": "A Regression, Found and Fixed",
    "description": "Generalising the prompts made the agent rewrite questions worse than the user's own wording. Always searching the question as typed recovered +17 points of evidence recall."
  },
  {
    "title": "A Single Search Is Enough",
    "description": "One hybrid search (one LLM call, ~4 s) was as accurate as the multi-step agent (three calls, ~8 s): 0.87 correct for both. Single search became the default and the agent an opt-in Deep Search."
  },
  {
    "title": "Automatic Grading Overstated Quality",
    "description": "An LLM judge rated 98% of answers faithful; a blind human review found 83%. The reviewed figure is the one reported."
  },
  {
    "title": "LLM-Written Test Questions Flatter Retrieval",
    "description": "Recall@10 was 0.96 on the LLM's own drafted questions but 0.57 on natural rewrites of the same questions, which is why the test set is hand-verified."
  }
];

export default function SeeCitePage() {
  return (
    <main className="bg-[#09090B] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Agentic AI Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          SeeCite: Research Papers
          <br />
          That Cite Their Answers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          A retrieval-augmented research assistant: upload the PDFs from a literature review, ask questions, and get answers with numbered citations to the exact passage, validated in code.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="https://seecite.onrender.com"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
          >
            Live Demo
            <ExternalLink className="h-5 w-5" />
          </Link>

          <Link
            href="https://github.com/Tusharr-Bansal/SeeCite-Research-Agent"
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
            Hybrid search. Validated citations. Measured.
          </h2>

          <p className="mt-8 max-w-4xl leading-8 text-zinc-400">
            Users create a project, upload papers from any field, and ask questions. SeeCite searches the papers with hybrid retrieval (BM25 + vector search in Postgres/pgvector, fused with reciprocal rank fusion) and answers with [S#] citations that are checked against the retrieved passages. By default it runs one search per question; an optional Deep Search agent plans several searches, checks whether the evidence is enough, and searches again if not. When the papers don&apos;t contain the answer, it says so instead of guessing. The demo project holds the 29 open-access papers from my MySteth literature review.
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
          href="https://github.com/Tusharr-Bansal/SeeCite-Research-Agent"
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
                Explore the ingestion pipeline, hybrid retrieval, citation validation, the agent, the evaluation suite and the decision records on GitHub.
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
