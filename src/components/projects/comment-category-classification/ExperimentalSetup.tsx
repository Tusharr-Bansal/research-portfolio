"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const models = [
  {
    title: "Logistic Regression",
    subtitle: "Linear Baseline",
    purpose:
      "Established an interpretable baseline using sparse textual representations before evaluating more complex classifiers.",

    pipeline: [
      "Comments",
      "Word TF-IDF",
      "Metadata",
      "Logistic Regression",
    ],

    config: [
      ["Word TF-IDF", "50,000"],
      ["Metadata", "Included"],
      ["Solver", "Liblinear"],
      ["Class Weight", "Balanced"],
      ["Metric", "Macro F1"],
    ],
  },

  {
    title: "Linear SVM",
    subtitle: "Maximum Margin",
    purpose:
      "Evaluated whether a maximum-margin classifier could improve minority-class separation within a high-dimensional feature space.",

    pipeline: [
      "Comments",
      "Word TF-IDF",
      "Metadata",
      "Linear SVM",
    ],

    config: [
      ["Word TF-IDF", "50,000"],
      ["Metadata", "Included"],
      ["Kernel", "Linear"],
      ["Class Weight", "Balanced"],
      ["Metric", "Macro F1"],
    ],
  },

  {
    title: "LightGBM",
    subtitle: "Final Submission",
    purpose:
      "Combined sparse textual representations with engineered metadata, producing the strongest overall Macro F1 performance.",

    pipeline: [
      "Comments",
      "Word TF-IDF",
      "Character TF-IDF",
      "Metadata",
      "LightGBM",
    ],

    config: [
      ["Word TF-IDF", "50,000"],
      ["Char TF-IDF", "15,000"],
      ["Metadata", "Included"],
      ["Estimators", "500"],
      ["Learning Rate", "0.05"],
      ["Metric", "Macro F1"],
    ],
  },
];

export default function ExperimentalSetup() {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Experimental Setup
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl font-bold tracking-tight text-white"
        >
          Three progressively stronger models.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Each experiment built upon the previous one, improving feature
          representation and robustness under severe class imbalance.
        </motion.p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-indigo-500/30"
            >

              {/* Accent */}

              <div className="mb-8 h-1 w-16 rounded-full bg-indigo-500" />

              {/* Title */}

              <h3 className="text-3xl font-bold leading-tight text-white">
                {model.title}
              </h3>

              <p className="mt-3 text-indigo-400">
                {model.subtitle}
              </p>

              {/* Pipeline */}

              <div className="mt-10 flex flex-wrap items-center gap-2">

                {model.pipeline.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">

                    <span className="rounded-xl border border-indigo-500/20 bg-[#111118] px-3 py-2 text-xs text-zinc-300">
                      {step}
                    </span>

                    {i !== model.pipeline.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-indigo-500" />
                    )}

                  </div>
                ))}

              </div>

              {/* Configuration */}

              <div className="mt-10 border-t border-zinc-800 pt-8 space-y-4">

                {model.config.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-zinc-500">
                      {label}
                    </span>

                    <span className="font-medium text-zinc-200">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

              {/* Purpose */}

              <div className="mt-10 border-t border-zinc-800 pt-8">

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Purpose
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  {model.purpose}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}