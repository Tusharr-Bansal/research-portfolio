"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import type { ResearchInterest } from "@/data/research";

interface SkillChipProps {
  skill: ResearchInterest;
  open: boolean;
  onToggle: () => void;
}

export function SkillChip({
  skill,
  open,
  onToggle,
}: SkillChipProps) {
  return (
    <div className="relative">

      {/* Pill */}

      <button
        onClick={onToggle}
        className="
          rounded-full
          border
          border-brand/25
          bg-brand/[0.06]
          px-4
          py-2
          text-sm
          text-white/90
          transition-all
          duration-300
          hover:border-brand/50
          hover:bg-brand/10
        "
      >
        {skill.title}
      </button>

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              y: 10,
              scale: 0.97,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 10,
              scale: 0.97,
            }}

            transition={{
              duration: 0.22,
            }}

            className="
              absolute
              left-0
              top-14
              z-50
              w-[340px]
              rounded-2xl
              border
              border-brand/20
              bg-zinc-900
              p-5
              shadow-2xl
            "

          >

            {/* Close */}

            <button
              onClick={onToggle}
              className="
                absolute
                right-4
                top-4
                text-zinc-500
                transition
                hover:text-white
              "
            >
              <X size={16} />
            </button>

            {/* Title */}

            <h3 className="text-lg font-semibold text-white">
              {skill.title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {skill.description}
            </p>

            {/* Divider */}

            <div className="my-5 h-px bg-white/10" />

            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brand">
              Applied In
            </p>

            <Link
              href={skill.project.href}
              className="
                group
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-brand/15
                bg-brand/[0.04]
                px-4
                py-3
                transition
                hover:border-brand/40
                hover:bg-brand/[0.08]
              "
            >

              <span className="text-white">
                {skill.project.title}
              </span>

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}