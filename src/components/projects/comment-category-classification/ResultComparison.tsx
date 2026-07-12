"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Fragment } from "react";

const models = [
  {
    name: "Logistic Regression",
    score: 0.7811,
    width: 95,
    best: false,
  },
  {
    name: "Linear SVM",
    score: 0.6789,
    width: 83,
    best: false,
  },
  {
    name: "LightGBM",
    score: 0.8206,
    width: 100,
    best: true,
  },
];

const classes = [
  "Benign",
  "Identity",
  "Political",
  "Violent",
];

const heatmap = [
  [0.953, 0.817, 0.817, 0.537],
  [0.946, 0.677, 0.796, 0.297],
  [0.957, 0.852, 0.822, 0.650],
];

function cellColor(value: number) {
  if (value >= 0.9)
    return "bg-indigo-500 text-white";

  if (value >= 0.8)
    return "bg-indigo-600 text-white";

  if (value >= 0.7)
    return "bg-indigo-700 text-white";

  if (value >= 0.6)
    return "bg-indigo-800 text-indigo-100";

  return "bg-zinc-800 text-zinc-300";
}

export default function ResultsComparison() {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Results
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl font-bold tracking-tight text-white"
        >
          Model Comparison
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Macro F1 was selected as the primary evaluation metric due to
          severe class imbalance. LightGBM achieved the strongest overall
          performance while substantially improving minority-class recall.
        </motion.p>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
          >

            <h3 className="text-2xl font-semibold text-white">
              Overall Performance
            </h3>

            <p className="mt-2 text-zinc-500">
              Validation Macro F1
            </p>

            <div className="mt-12 space-y-10">

              {models.map((model, index) => (
                <div key={model.name}>

                  <div className="mb-3 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <span className="font-medium text-white">
                        {model.name}
                      </span>

                      {model.best && (
                        <span className="flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                          <Trophy className="h-3 w-3" />
                          Best
                        </span>
                      )}

                    </div>

                    <span
                      className={`font-semibold ${
                        model.best
                          ? "text-indigo-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {model.score}
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${model.width}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.15,
                      }}
                      className={`h-full rounded-full ${
                        model.best
                          ? "bg-indigo-500"
                          : "bg-zinc-500"
                      }`}
                    />

                  </div>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
          >

            <h3 className="text-2xl font-semibold text-white">
              Per-Class Performance
            </h3>

            <p className="mt-2 text-zinc-500">
              Validation F1 Score
            </p>

            <div className="mt-10">

              <div className="grid grid-cols-5 gap-3">

                <div />

                {classes.map((c) => (
                  <div
                    key={c}
                    className="text-center text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    {c}
                  </div>
                ))}

                {heatmap.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <div
                      key={`label-${rowIndex}`}
                      className="flex items-center font-semibold text-white"
                    >
                      {["LR", "SVM", "LGBM"][rowIndex]}
                    </div>

                    {row.map((value, colIndex) => (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        initial={{
                          opacity: 0,
                          scale: 0.85,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay:
                            rowIndex * 0.12 +
                            colIndex * 0.05,
                        }}
                        className={`rounded-xl p-4 text-center text-sm font-semibold ${cellColor(
                          value
                        )}`}
                      >
                        {value.toFixed(3)}
                      </motion.div>
                    ))}
                  </Fragment>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}