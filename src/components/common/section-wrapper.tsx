"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Disable scroll-triggered animation */
  animate?: boolean;
}

/** Consistent section container with optional scroll reveal */
export function SectionWrapper({
  children,
  className,
  id,
  animate = true,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (!animate) {
    return (
      <section id={id} className={cn("section-padding", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn("section-padding", className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

/** Reusable section heading block */
export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div variants={fadeInUp} className={cn("mb-16 max-w-2xl", className)}>
      {label && (
        <p className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-brand">
          {label}
        </p>
      )}
      <h2 className="heading-section">{title}</h2>
      {description && <p className="mt-4 text-body">{description}</p>}
    </motion.div>
  );
}
