"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const tags = [
  "NLP",
  "Machine Learning",
  "Text Classification",
  "Class Imbalance",
];

const data = [
  { label: "Label 0", count: 114173 },
  { label: "Label 1", count: 15918 },
  { label: "Label 2", count: 62440 },
  { label: "Label 3", count: 5469 },
];


export default function ProjectHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center">

      <div className="mx-auto w-full max-w-6xl px-6 py-24">

        {/* Label */}

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Research Project • IIT Madras • 2025
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.05]"
        >
          Comment Category Prediction
          <br />

          <span className="text-zinc-400">
            with Massive Class Imbalance
          </span>
        </motion.h1>

        {/* Question */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-3xl text-xl leading-9 text-zinc-400"
        >
          Can machine learning models reliably detect
          minority moderation categories when some
          classes appear nearly twenty times less
          frequently than others?
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >

          <Link
            href="https://github.com/Tusharr-Bansal/Comment-Category-Classification/blob/main/project.ipynb"
            target="_blank"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
          >
            Research Notebook
            <ExternalLink size={16} />
          </Link>

        </motion.div>

        {/* Metrics */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-wrap items-end gap-8"
        >

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Dataset Size
            </p>

            <h2 className="mt-2 text-5xl font-semibold text-indigo-500">
              198K
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

        </motion.div>

        {/* Challenge + Chart */}

<motion.div
  initial={{ opacity: 0, y: 28 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.65 }}
  className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
>
  <div className="grid gap-10 lg:grid-cols-[1.45fr_0.9fr]">

    {/* LEFT */}

    <div>

      <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
        Research Challenge
      </p>

      <h3 className="mt-4 text-3xl font-semibold text-white">
        Extreme Class Imbalance
      </h3>

      <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
        Although all four moderation categories were equally important,
        the training data was heavily skewed toward the majority classes.
        The rarest category appeared nearly twenty times less frequently
        than the largest class, making conventional accuracy misleading
        and motivating a Macro-F1 driven modelling strategy.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

          <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
            Majority Classes
          </p>

          <h4 className="mt-3 text-xl font-semibold text-white">
            Labels 0 & 2
          </h4>

          <ul className="mt-5 space-y-2 text-sm text-zinc-400">
            <li>• 176,613 training samples</li>
            <li>• Frequently observed</li>
            <li>• Dominates optimisation</li>
            <li>• Easier decision boundaries</li>
          </ul>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

          <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
            Minority Classes
          </p>

          <h4 className="mt-3 text-xl font-semibold text-white">
            Labels 1 & 3
          </h4>

          <ul className="mt-5 space-y-2 text-sm text-zinc-400">
            <li>• 21,387 training samples</li>
            <li>• Rare occurrences</li>
            <li>• Underrepresented</li>
            <li>• Difficult to classify</li>
          </ul>

        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

      <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
        Dataset Distribution
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Label Frequency
      </h4>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        The rarest class contains nearly
        <span className="font-medium text-indigo-400"> 20× </span>
        fewer samples than the majority class.
      </p>

      <div className="mt-8 h-60">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#27272A"
              strokeDasharray="2 2"
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#A1A1AA",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#71717A",
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={{
                fill: "#18181B",
              }}
              contentStyle={{
                background: "#18181B",
                border: "1px solid #3F3F46",
                borderRadius: 12,
              }}
            />

            <Bar
              dataKey="count"
              radius={[8, 8, 0, 0]}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === 3 ? "#A5B4FC" : "#6366F1"}
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>

  </div>

</motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>

    </section>
  );
}