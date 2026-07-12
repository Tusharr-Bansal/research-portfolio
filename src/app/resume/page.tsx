"use client";

import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  FileText,
  Code2,
} from "lucide-react";

const summary = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "2 Degrees",
  },
  {
    icon: Briefcase,
    title: "Experience",
    value: "3 Positions",
  },
  {
    icon: FileText,
    title: "Research",
    value: "2 Publications",
  },
  {
    icon: Code2,
    title: "Projects",
    value: "3 Featured",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <section className="mx-auto max-w-7xl px-6 py-28">

        {/* HERO */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Academic Journey
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Researcher focused on Trustworthy AI,
          Medical AI, Machine Learning, and
          intelligent systems for real-world applications.
        </motion.p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="/resume/Tushar-Bansal-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>

          <a
            href="/resume/Tushar-Bansal-Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-indigo-500 hover:text-indigo-400"
          >
            <ExternalLink className="h-5 w-5" />
            View PDF
          </a>

        </div>

        
        
        {/* PDF */}

        <div className="mt-24">

          <h2 className="mb-8 text-3xl font-semibold">
            Resume Preview
          </h2>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <iframe
              src="/resume/Tushar-Bansal-Resume.pdf"
              className="h-[900px] w-full bg-white"
            />

          </div>

        </div>

      </section>

    </main>
  );
}