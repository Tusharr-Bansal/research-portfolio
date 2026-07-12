"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const validationData = [
  { epoch: 0, value: 0.838 },
  { epoch: 1, value: 0.824 },
  { epoch: 2, value: 0.852 },
  { epoch: 3, value: 0.838 },
  { epoch: 4, value: 0.844 },
];

const lossData = [
  { epoch: 0, value: 0.76 },
  { epoch: 1, value: 0.64 },
  { epoch: 2, value: 0.58 },
  { epoch: 3, value: 0.55 },
  { epoch: 4, value: 0.53 },
];

const trainData = [
  { epoch: 0, value: 0.91 },
  { epoch: 1, value: 0.95 },
  { epoch: 2, value: 0.972 },
  { epoch: 3, value: 0.981 },
  { epoch: 4, value: 0.987 },
];

function ChartCard({
  title,
  data,
}: {
  title: string;
  data: { epoch: number; value: number }[];
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </p>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272A" strokeDasharray="3 3" />

            <XAxis
              dataKey="epoch"
              stroke="#71717A"
              tick={{ fill: "#71717A", fontSize: 12 }}
            />

            <YAxis
              stroke="#71717A"
              tick={{ fill: "#71717A", fontSize: 12 }}
              domain={["auto", "auto"]}
            />

            <Tooltip
              contentStyle={{
                background: "#18181B",
                border: "1px solid #3F3F46",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 4, fill: "#6366F1" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Results
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-4xl font-semibold tracking-tight text-white"
        >
          Robustness through better data.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Synthetic data generation combined with transformer-based
          representation learning substantially improved generalization
          under distribution shift.
        </motion.p>

        {/* Hero Metric */}

        <div className="mt-16 rounded-3xl border border-indigo-500/20 bg-zinc-950 p-10 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Best Public Macro F1
          </p>

          <h2 className="mt-4 text-7xl font-bold tracking-tight text-indigo-400">
            0.89555
          </h2>

          <p className="mt-4 text-zinc-400">
            Kaggle Leaderboard Score
          </p>

        </div>

        {/* Charts */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          <ChartCard
            title="Validation F1"
            data={validationData}
          />

          <ChartCard
            title="Training Loss"
            data={lossData}
          />

          <ChartCard
            title="Training F1"
            data={trainData}
          />

        </div>

        {/* Metrics */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            ["5000+", "Synthetic Mashups"],
            ["10", "Music Genres"],
            ["4", "Model Families"],
            ["85 / 15", "Train / Validation Split"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <div className="text-4xl font-bold text-indigo-400">
                {value}
              </div>

              <div className="mt-3 text-zinc-400">
                {label}
              </div>
            </div>
          ))}

        </div>

        {/* Key Takeaways */}

        <div className="mt-20">

          <h3 className="text-3xl font-semibold text-white">
            Key Takeaways
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h4 className="text-xl font-semibold text-white">
                Data Matters
              </h4>

              <p className="mt-4 leading-8 text-zinc-400">
                The largest improvement came from reducing the gap between
                training and inference distributions rather than simply
                increasing model complexity.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h4 className="text-xl font-semibold text-white">
                Transfer Learning
              </h4>

              <p className="mt-4 leading-8 text-zinc-400">
                Fine-tuning a pretrained Audio Spectrogram Transformer
                produced stronger and more stable representations than
                training deep networks from scratch.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h4 className="text-xl font-semibold text-white">
                Research Insight
              </h4>

              <p className="mt-4 leading-8 text-zinc-400">
                Distribution shift was the real challenge. Understanding
                the data generation process proved more impactful than
                searching for increasingly complex architectures.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}