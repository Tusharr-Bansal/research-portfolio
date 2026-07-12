"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ResearchJourney() {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Research Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-4xl font-semibold tracking-tight text-white"
        >
          Model Evolution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Four progressively more capable architectures were explored,
          beginning with handcrafted feature engineering and culminating in
          transformer-based representation learning.
        </motion.p>

        {/* ========================================== */}
        {/* MODEL 1 */}
        {/* ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-indigo-400">
                MODEL 01
              </p>

              <h3 className="mt-2 text-3xl font-semibold text-white">
                Classical Machine Learning
              </h3>
            </div>

            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-sm text-zinc-300">
              LightGBM · XGBoost · CatBoost
            </span>

          </div>

          {/* Pipeline */}

          <div className="mt-12 flex items-center gap-4 overflow-x-auto pb-2">

            {/* Raw Audio */}

            <div className="min-w-[180px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

              <p className="text-xs uppercase tracking-widest text-indigo-400">
                Input
              </p>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Raw Audio
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                WAV recordings
              </p>

            </div>

            <ArrowRight className="text-indigo-500 shrink-0" />

            {/* Feature Extraction */}

            <div className="min-w-[220px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

              <p className="text-xs uppercase tracking-widest text-indigo-400">
                Feature Engineering
              </p>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Feature Extraction
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                MFCC • Chroma • Mel • Spectral Features
              </p>

            </div>

            <ArrowRight className="text-indigo-500 shrink-0" />

            {/* Gradient Boosting */}

            <div className="min-w-[240px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

              <p className="text-xs uppercase tracking-widest text-indigo-400">
                Model
              </p>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Gradient Boosting
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                LightGBM • XGBoost • CatBoost
              </p>

            </div>

            <ArrowRight className="text-indigo-500 shrink-0" />

            {/* Output */}

            <div className="min-w-[180px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

              <p className="text-xs uppercase tracking-widest text-indigo-400">
                Output
              </p>

              <h4 className="mt-3 text-lg font-semibold text-white">
                10 Genres
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                Softmax Prediction
              </p>

            </div>

          </div>

          {/* Insight */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

            <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
              Research Insight
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              Handcrafted audio descriptors established a strong baseline
              and demonstrated that classical machine learning remained
              competitive. However, these engineered features struggled to
              generalize under severe distribution shift, motivating the
              transition toward deep representation learning.
            </p>

          </div>

        </motion.div>
        

        {/* ========================================== */}
{/* MODEL 2 */}
{/* ========================================== */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
>
  <div className="flex items-center justify-between">

    <div>
      <p className="text-sm font-medium text-indigo-400">
        MODEL 02
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-white">
        Convolutional Neural Network
      </h3>
    </div>

    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-sm text-zinc-300">
      CNN From Scratch
    </span>

  </div>

  {/* Pipeline */}

  <div className="mt-12 flex items-center gap-4 overflow-x-auto pb-2">

    {/* Raw Audio */}

    <div className="min-w-[170px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Input
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Raw Audio
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        WAV Recording
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Mel */}

    <div className="min-w-[220px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Pre-processing
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Mel Spectrogram
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        128 Mel Bands · 20 Seconds
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* CNN */}

    <div className="min-w-[230px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Feature Learning
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        4× CNN Blocks
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Conv → BatchNorm → ReLU → MaxPool
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Pool */}

    <div className="min-w-[190px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Pooling
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Adaptive Avg Pool
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Feature Compression
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* FC */}

    <div className="min-w-[180px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Classifier
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        FC Head
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        256 → 128 → 10
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Output */}

    <div className="min-w-[170px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Output
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        10 Genres
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Softmax Prediction
      </p>

    </div>

  </div>

  {/* Insight */}

  <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

    <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
      Research Insight
    </p>

    <p className="mt-4 leading-8 text-zinc-400">
      Instead of relying on handcrafted descriptors, the CNN learned
      hierarchical representations directly from mel spectrograms.
      This improved feature learning and captured local spectral
      patterns, but the architecture lacked an explicit mechanism
      for modelling long-range temporal dependencies across the audio.
    </p>

  </div>

</motion.div>

{/* ========================================== */}
{/* MODEL 03 */}
{/* ========================================== */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
>
  <div className="flex items-center justify-between">

    <div>
      <p className="text-sm font-medium text-indigo-400">
        MODEL 03
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-white">
        CNN + BiLSTM + Attention
      </h3>
    </div>

    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-sm text-zinc-300">
      CRNN
    </span>

  </div>

  {/* Pipeline */}

  <div className="mt-12 flex items-center gap-4 overflow-x-auto pb-2">

    {/* Input */}

    <div className="min-w-[170px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Input
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Raw Audio
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        WAV Recording
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Mel */}

    <div className="min-w-[220px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Pre-processing
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Mel Spectrogram
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Time–Frequency Representation
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* CNN */}

    <div className="min-w-[200px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Spatial Features
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        CNN Encoder
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Local Spectral Patterns
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* BiLSTM */}

    <div className="min-w-[210px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Temporal Learning
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        BiLSTM
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Bidirectional Sequence Modeling
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Attention */}

    <div className="min-w-[190px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Attention
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Attention Layer
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Important Frames
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* FC */}

    <div className="min-w-[170px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Classifier
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Fully Connected
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Dense Layers
      </p>

    </div>

    <ArrowRight className="text-indigo-500 shrink-0" />

    {/* Output */}

    <div className="min-w-[170px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Output
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        10 Genres
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Softmax Prediction
      </p>

    </div>

  </div>

  {/* Insight */}

  <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#0D0D10] p-6">

    <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
      Research Insight
    </p>

    <p className="mt-4 leading-8 text-zinc-400">
      The CRNN combined convolutional feature extraction with bidirectional
      sequence modelling, enabling the network to learn both spectral
      structure and temporal dependencies. An attention mechanism further
      emphasized the most informative regions of the spectrogram, improving
      genre recognition over the standalone CNN architecture.
    </p>

  </div>

</motion.div>
{/* ========================================== */}
{/* MODEL 04 */}
{/* ========================================== */}

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 rounded-3xl border border-indigo-500/40 bg-zinc-950 p-8 shadow-[0_0_40px_rgba(99,102,241,0.08)]"
>
  <div className="flex flex-wrap items-center justify-between gap-4">

    <div>
      <p className="text-sm font-medium text-indigo-400">
        MODEL 04
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-white">
        Audio Spectrogram Transformer
      </h3>
    </div>

    <div className="flex gap-3">

      <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
        AST
      </span>

      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
        Best Performing Model
      </span>

    </div>

  </div>

  {/* Pipeline */}

  <div className="mt-12 flex items-center gap-4 overflow-x-auto pb-2">

    {/* Input */}

    <div className="min-w-[180px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Input
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Audio Stems
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Training Dataset
      </p>

    </div>

    <ArrowRight className="shrink-0 text-indigo-500" />

    {/* Synthetic Data */}

    <div className="min-w-[230px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Data Generation
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Synthetic Mashups
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Stem Mixing • ESC-50 Noise • Tempo Shift
      </p>

    </div>

    <ArrowRight className="shrink-0 text-indigo-500" />

    {/* Spectrogram */}

    <div className="min-w-[220px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Representation
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Log-Mel Spectrogram
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        128 Mel Bands
      </p>

    </div>

    <ArrowRight className="shrink-0 text-indigo-500" />

    {/* AST */}

    <div className="min-w-[220px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Backbone
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Audio Spectrogram Transformer
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        ImageNet + AudioSet Pretraining
      </p>

    </div>

    <ArrowRight className="shrink-0 text-indigo-500" />

    {/* TTA */}

    <div className="min-w-[200px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Inference
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        Test-Time Augmentation
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Robust Predictions
      </p>

    </div>

    <ArrowRight className="shrink-0 text-indigo-500" />

    {/* Output */}

    <div className="min-w-[180px] rounded-2xl border border-indigo-500/20 bg-[#111118] p-5">

      <p className="text-xs uppercase tracking-widest text-indigo-400">
        Output
      </p>

      <h4 className="mt-3 text-lg font-semibold text-white">
        10 Genres
      </h4>

      <p className="mt-2 text-sm text-zinc-500">
        Macro F1 Evaluation
      </p>

    </div>

  </div>

  {/* Insight */}

  <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-[#0D0D10] p-6">

    <div className="flex flex-wrap items-center justify-between gap-4">

      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Research Insight
      </p>

      <span className="text-3xl font-bold tracking-tight text-indigo-400">
        0.89555
      </span>

    </div>

    <p className="mt-5 leading-8 text-zinc-400">
      The final architecture combined synthetic data generation with a
      pretrained Audio Spectrogram Transformer to address the hidden
      distribution shift between training and inference. By exposing the
      model to more realistic training samples and leveraging transfer
      learning, it achieved the strongest generalization performance across
      all evaluated architectures.
    </p>

  </div>

</motion.div>

      </div>
    </section>
  );
}