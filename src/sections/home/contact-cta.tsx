"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function ContactCTA() {
  return (
    <SectionWrapper id="contact-cta" className="border-t border-white/5">
      <div className="container-narrow">
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl border border-brand/15 bg-card p-10 text-center md:p-16"
        >
          {/* Subtle Indigo Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at top, rgba(99,102,241,0.08), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            {/* Accent */}
            <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />

            {/* Label */}
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand">
              Contact
            </p>

            {/* Heading */}
            <h2 className="heading-section mb-5">
              Open to Research Collaborations
            </h2>

            {/* Description */}
            <p className="text-body mx-auto mb-10 max-w-2xl text-muted-foreground">
              I am always interested in collaborating on research involving
              trustworthy AI, medical AI, self-supervised learning, and
              explainable machine learning. Whether you are a researcher,
              student, or industry professional, I would be happy to connect.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand text-white hover:bg-brand/90 hover:text-white"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand/20 hover:border-brand/40 hover:bg-brand/5"
              >
                <Link href={`mailto:${siteConfig.author.email}`}>
                  {siteConfig.author.email}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}