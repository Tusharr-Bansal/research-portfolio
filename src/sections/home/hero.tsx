"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { researchInterests } from "@/data/research";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HeroAnimation } from "@/sections/home/hero-animation";

export function Hero() {
  return (
    <section className="section-padding min-h-[92vh] flex items-center bg-[#09090B]">
      <div className="container-wide w-full">
        {/* Two-column grid: 55% text / 45% artwork on desktop */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[55%_45%] lg:gap-12">
          {/* LEFT — identity, mission, CTAs (always left-aligned) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start text-left order-1"
          >
            {/* Role label */}
            <motion.p
              variants={fadeInUp}
              className="mb-5 text-xs font-medium tracking-[0.25em] uppercase text-brand"
            >
              AI Researcher
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.05]"
            >
              Tushar Bansal
            </motion.h1>

            {/* Affiliation */}
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base text-muted-foreground md:text-lg"
            >
              Research Intern &bull; Molde University, Norway
              <br></br>
              B.S. Data Science and Applications &bull; IIT Madras
            </motion.p>

            {/* Mission block */}
            <motion.div variants={fadeInUp} className="mt-14 max-w-xl">
              <p className="mb-5 text-xs font-medium tracking-[0.25em] uppercase text-brand">
                Research Mission
              </p>

              <p className="text-2xl font-medium leading-[1.25] tracking-tight text-white sm:text-3xl md:text-4xl">
                Making AI Systems
                <br />
                that You and I can trust.
              </p>

              <p className="mt-6 text-[0.9375rem] leading-[1.75] text-muted-foreground md:text-base">
                Researching trustworthy AI, self-supervised learning,
                explainable AI, and robust machine learning systems
                for real-world healthcare.
              </p>
            </motion.div>

            {/* Research area pills */}
            <motion.div variants={fadeInUp} className="mt-12">
              <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Research Areas
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-sm text-white/85"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand text-white hover:bg-brand/90"
              >
                <Link href="/research">
                  Explore Research
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/resume/Tushar-Bansal-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500">
                  Download Resume
                  <Download />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — animated visualization (below text on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 w-full"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
