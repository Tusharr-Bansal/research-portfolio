import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: "Research projects and publications.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      {/* Hero */}

      <section className="border-b border-white/5 py-28">
        <div className="mx-auto max-w-6xl px-6">

          <p className="text-xs uppercase tracking-[0.28em] text-brand">
            Research
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Research Journey
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            My research spans trustworthy AI, healthcare, machine learning,
            deep learning, and natural language processing. Below are my
            ongoing research projects, publications, and completed work.
          </p>

        </div>
      </section>

      {/* Timeline */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="relative">

            {/* Vertical timeline */}

            <div className="absolute left-[18px] top-0 h-full w-px bg-brand/20" />

            {/* ======================================================= */}
            {/* CARD 1 */}
            {/* ======================================================= */}

            <div className="relative mb-16 flex gap-8">

              <div className="relative z-10 mt-8 h-4 w-4 rounded-full bg-brand shadow-lg shadow-brand/40" />

              <div className="flex-1 rounded-3xl border border-brand/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-brand/30">

                <div className="mb-6 flex items-center justify-between">

                  <span className="rounded-full bg-brand/10 px-4 py-1 text-sm text-brand">
                    Ongoing Research
                  </span>

                  <span className="text-sm text-zinc-500">
                    2026 – Present
                  </span>

                </div>

                <h2 className="text-3xl font-semibold">
                  MySteth 2.0:
                  <br />
                  Trustworthy AI for Cardiac Screening
                </h2>

                <p className="mt-5 text-zinc-400">
                  <strong className="text-white">
                    Research Internship
                  </strong>
                  {" • "}
                  Molde University, Norway
                </p>

                <p className="mt-2 text-zinc-400">
                  Supervisor:
                  <span className="text-white">
                    {" "}
                    Dr. Swati Aggarwal
                  </span>
                </p>

                <p className="mt-8 max-w-3xl leading-8 text-zinc-400">
                  Conducting research on trustworthy artificial intelligence
                  for cardiac auscultation using phonocardiogram (PCG)
                  recordings. The project investigates reliable medical AI
                  through signal quality assessment, self-supervised learning,
                  uncertainty estimation, and explainable AI. Research is
                  currently ongoing.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {[
                    "Trustworthy AI",
                    "Medical AI",
                    "Explainable AI",
                    "Self-Supervised Learning",
                    "Healthcare"
                  ].map(tag => (

                    <span
                      key={tag}
                      className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </div>

            {/* ======================================================= */}
            {/* CARD 2 */}
            {/* ======================================================= */}

            <div className="relative mb-16 flex gap-8">

              <div className="relative z-10 mt-8 h-4 w-4 rounded-full bg-brand shadow-lg shadow-brand/40" />

              <div className="flex-1 rounded-3xl border border-brand/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-brand/30">

                <div className="grid gap-10 lg:grid-cols-[1fr_260px]">

                  {/* LEFT */}

                  <div>

                    <div className="mb-6 flex items-center justify-between">

                      <span className="rounded-full bg-green-500/10 px-4 py-1 text-sm text-green-400">
                        Presented
                      </span>

                      <span className="text-sm text-zinc-500">
                        ICETESS 2026
                      </span>

                    </div>

                    <h2 className="text-3xl font-semibold">
                      Neutrosophic Clustering
                      <br />
                      for Educational Data Analysis
                    </h2>

                    <p className="mt-5 text-zinc-400">
                      Conference Publication
                    </p>

                    <p className="mt-8 max-w-3xl leading-8 text-zinc-400">
                      Presented at ICETESS 2026, this work explores
                      neutrosophic clustering techniques for educational
                      datasets, improving clustering quality under
                      uncertainty while preserving interpretability for
                      academic decision making.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">

                      {[
                        "Neutrosophic Logic",
                        "Clustering",
                        "Educational Data Mining",
                        "Machine Learning"
                      ].map(tag => (

                        <span
                          key={tag}
                          className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm text-zinc-300"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                    <div className="mt-10 flex gap-4">

                      <Link
                        href="/papers/icetess-2026.pdf"
                        className="inline-flex items-center gap-2 text-brand hover:text-brand/80"
                      >
                        Read Paper
                        <ArrowRight size={18} />
                      </Link>

                      <Link
                        href="/papers/icetess-2026.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
                      >
                        PDF
                        <ExternalLink size={16} />
                      </Link>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div>

                    <iframe
                      src="/papers/icetess-2026.pdf#toolbar=0&navpanes=0"
                      className="h-[340px] w-full rounded-2xl border border-brand/20 bg-white"
                    />

                  </div>

                </div>

              </div>

            </div>
                        {/* ======================================================= */}
            {/* CARD 3 */}
            {/* ======================================================= */}

            <div className="relative mb-16 flex gap-8">

              <div className="relative z-10 mt-8 h-4 w-4 rounded-full bg-brand shadow-lg shadow-brand/40" />

              <div className="flex-1 rounded-3xl border border-brand/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-brand/30">

                <div className="mb-6 flex items-center justify-between">

                  <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
                    Research project (IITM Coursework)
                  </span>

                  <span className="text-sm text-zinc-500">
                    2025
                  </span>

                </div>

                <h2 className="text-3xl font-semibold">
                  Music Genre Classification
                  <br />
                  under Distribution Shift
                </h2>

                <p className="mt-5 text-zinc-400">
                  Research Project
                </p>

                <p className="mt-8 max-w-3xl leading-8 text-zinc-400">
                  Investigated robust music genre classification under severe
                  distribution shifts using synthetic data augmentation,
                  convolutional neural networks, CNN-BiLSTM architectures, and
                  Audio Spectrogram Transformers. The work focused on improving
                  generalization to noisy real-world audio while maintaining
                  competitive performance.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {[
                    "Deep Learning",
                    "Audio AI",
                    "Distribution Shift",
                    "Transformers",
                    "Computer Audition",
                    "Synthetic Data",
                  ].map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <div className="mt-10">

                  <Link
                    href="/projects/music-distribution-shift"
                    className="inline-flex items-center gap-2 text-brand hover:text-brand/80"
                  >
                    View Case Study
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </div>

            {/* ======================================================= */}
            {/* CARD 4 */}
            {/* ======================================================= */}

            <div className="relative flex gap-8">

              <div className="relative z-10 mt-8 h-4 w-4 rounded-full bg-brand shadow-lg shadow-brand/40" />

              <div className="flex-1 rounded-3xl border border-brand/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-brand/30">

                <div className="mb-6 flex items-center justify-between">

                  <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
                    Research project (IITM Coursework)
                  </span>

                  <span className="text-sm text-zinc-500">
                    2025
                  </span>

                </div>

                <h2 className="text-3xl font-semibold">
                  Comment Category Prediction
                  <br />
                  with Extreme Class Imbalance
                </h2>

                <p className="mt-5 text-zinc-400">
                  Natural Language Processing
                </p>

                <p className="mt-8 max-w-3xl leading-8 text-zinc-400">
                  Developed machine learning models for large-scale multi-class
                  text classification under highly imbalanced label
                  distributions. The project explored strategies to improve
                  minority class recognition while preserving strong overall
                  predictive performance.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {[
                    "Natural Language Processing",
                    "Machine Learning",
                    "Class Imbalance",
                    "Text Classification",
                    "Data Mining",
                  ].map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <div className="mt-10">

                  <Link
                    href="/projects/comment-category-classification"
                    className="inline-flex items-center gap-2 text-brand hover:text-brand/80"
                  >
                    View Case Study
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}