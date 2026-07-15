"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Award,
  FileText,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const certifications = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issued: "October 2025",
    expires: "October 2027",
    badge: "/certifications/oci-ai-foundations.pdf",
    pdf: "https://drive.google.com/file/d/1qRsbN4UcCRn-4zhVbZTW8Y-0fuBrb2La/view",

    description:
      "Established a strong foundation in Artificial Intelligence, Machine Learning concepts, Responsible AI, and Oracle Cloud AI services for building intelligent enterprise applications.",

    learnings: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Concepts",
      "Responsible AI Principles",
      "Oracle Cloud AI Services",
    ],

    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Oracle Cloud",
      "Responsible AI",
    ],
  },

  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",

    issued: "October 2025",
    expires: "October 2027",

    badge: "/certifications/oci-generative-ai.pdf",

    pdf: "https://drive.google.com/file/d/10Hr3fhtpC18p2Kzn92IjSQXZwtQa1SbP/view",

    description:
      "Developed practical knowledge of enterprise Generative AI systems including Large Language Models, Prompt Engineering, Retrieval-Augmented Generation and Oracle AI infrastructure.",

    learnings: [
      "Large Language Models",
      "Prompt Engineering",
      "Retrieval-Augmented Generation",
      "Enterprise AI",
    ],

    skills: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Generative AI",
      "Oracle Cloud",
    ],
  },

  {
    title:
      "Oracle AI Vector Search Certified Professional",

    issued: "October 2025",
    expires: "October 2027",

    badge: "/certifications/oci-vector-search.pdf",

    pdf: "https://drive.google.com/file/d/1mDuYWnd4NWlFTYmogR6nHwI7_pVMYYu4/view",

    description:
      "Explored semantic retrieval using vector embeddings, similarity search, and Oracle AI Vector Search for building modern AI-powered search and recommendation systems.",

    learnings: [
      "Vector Embeddings",
      "Semantic Search",
      "Similarity Search",
      "Oracle AI Vector Search",
    ],

    skills: [
      "Vector Search",
      "Embeddings",
      "Semantic Search",
      "Oracle Database",
      "AI Retrieval",
    ],
  },
];

export default function CertificationsPage() {
  const [open, setOpen] = useState(0);

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <section className="mx-auto max-w-7xl px-6 py-28">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Certifications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Professional Certifications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Industry certifications demonstrating expertise in Artificial
          Intelligence, Machine Learning, Generative AI, and Oracle Cloud
          technologies.
        </motion.p>

        <div className="mt-20">

          {certifications.map((cert, index) => (

            <motion.article
              key={cert.title}
              layout
              className="border-b border-zinc-800"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between py-8 text-left"
              >

                <div>

                  <h2 className="text-2xl font-semibold">
                    {cert.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-zinc-500">

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Issued {cert.issued}
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Expires {cert.expires}
                    </div>

                  </div>

                </div>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 text-zinc-400"
                >

                  <span className="hidden md:block">
                    {open === index ? "Less" : "More"}
                  </span>

                  <ChevronDown className="h-5 w-5" />

                </motion.div>

              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                    <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                    >
                    <div className="grid gap-10 pb-10 lg:grid-cols-[1.15fr_360px]">

                        {/* LEFT */}

                        <div>

                        <p className="leading-8 text-zinc-400">
                            {cert.description}
                        </p>

                        <div className="mt-8">

                            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Key Learnings
                            </h3>

                            <ul className="mt-4 space-y-3 text-zinc-400">

                            {cert.learnings.map((item) => (

                                <li
                                key={item}
                                className="flex items-start gap-3"
                                >
                                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-indigo-400" />

                                <span>{item}</span>

                                </li>

                            ))}

                            </ul>

                        </div>

                        <div className="mt-8">

                            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Skills
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">

                            {cert.skills.map((skill) => (

                                <span
                                key={skill}
                                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                                >
                                {skill}
                                </span>

                            ))}

                            </div>

                        </div>

                        <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-5 py-3 transition hover:bg-indigo-500/10"
                        >
                            <FileText className="h-5 w-5 text-indigo-400" />

                            View Certificate

                            <ArrowUpRight className="h-4 w-4 text-indigo-400" />
                        </a>

                        </div>

                        {/* RIGHT */}

                        <div>

                        <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl">

                            <iframe
                            src={cert.badge}
                            title={cert.title}
                            className="h-[500px] w-full bg-white"
                            />

                        </div>

                        </div>

                    </div>

                    </motion.div>
                )}
                </AnimatePresence>

            </motion.article>

          ))}

        </div>

      </section>

    </main>
  );
}