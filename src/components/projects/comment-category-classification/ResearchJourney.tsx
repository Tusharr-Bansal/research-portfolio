"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pipeline = [
  {
    title: "Dataset",
    subtitle: "Input",
    items: [
      "198K Comments",
      "4 Classes",
      "Highly Imbalanced",
    ],
  },
  {
    title: "EDA",
    subtitle: "Understanding",
    items: [
      "Label Distribution",
      "Metadata Analysis",
      "Macro F1 Metric",
    ],
  },
  {
    title: "Pre-processing",
    subtitle: "Cleaning",
    items: [
      "Lowercase",
      "HTML Removal",
      "Metadata Scaling",
    ],
  },
  {
    title: "Feature Engineering",
    subtitle: "Representation",
    items: [
      "Word TF-IDF",
      "Character TF-IDF",
      "Metadata Features",
    ],
  },
  {
    title: "Model Training",
    subtitle: "Benchmarking",
    items: [
      "Logistic Regression",
      "Linear SVM",
      "LightGBM",
    ],
  },
  {
    title: "Evaluation",
    subtitle: "Validation",
    items: [
      "Macro F1",
      "Per-Class F1",
      "Model Comparison",
    ],
  },
  {
    title: "Submission",
    subtitle: "Final",
    items: [
      "LightGBM",
      "Macro F1 0.8206",
      "Best Model",
    ],
    highlight: true,
  },
];

export default function ResearchJourney() {
  return (
    <section className="bg-[#09090B] py-28 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Research Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl font-bold tracking-tight text-white"
        >
          End-to-End Research Pipeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          The project followed a structured experimental workflow—from
          understanding the dataset to engineering features, benchmarking
          multiple models, and selecting the strongest final submission.
        </motion.p>

        {/* Pipeline */}

        <div className="mt-20 overflow-x-auto pb-6">

          <div className="flex min-w-max items-start gap-5">

            {pipeline.map((step, index) => (
              <div
                key={step.title}
                className="flex items-center gap-5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`w-[230px] rounded-3xl border p-6 ${
                    step.highlight
                      ? "border-indigo-500/40 bg-indigo-500/5"
                      : "border-zinc-800 bg-zinc-950"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
                    {step.subtitle}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <div className="mt-6 space-y-3">
                    {step.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-zinc-800 bg-[#111118] px-3 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {index !== pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex h-full items-center"
                  >
                    <ArrowRight className="h-6 w-6 text-indigo-500" />
                  </motion.div>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}