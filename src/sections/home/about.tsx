"use client";

import { motion } from "framer-motion";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { researchInterests } from "@/data/research";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <SectionWrapper id="about" className="border-t border-border" animate={false}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="container-narrow"
      >
        <SectionHeader
          label="About"
          title="Researcher at the intersection of theory and practice"
        />

        <motion.div variants={fadeInUp} className="max-w-3xl space-y-6">
          <p className="text-body">
            I am a researcher focused on building a principled understanding of
            artificial intelligence. My work spans mechanistic interpretability,
            alignment, and evaluation — with the goal of making frontier models
            more transparent, reliable, and aligned with human values.
          </p>
          <p className="text-body">
            I believe the most impactful AI research combines rigorous
            experimentation with clear theoretical framing. I am actively seeking
            opportunities to contribute to research labs and pursue doctoral
            studies in machine learning.
          </p>
        </motion.div>

        {/* Current research interests */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Current Interests
          </h3>
          <ul className="flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
              >
                {interest}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
