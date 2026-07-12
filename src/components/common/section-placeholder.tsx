"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  /** Visual section index, e.g. "01" */
  index: string;
  label: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  id?: string;
  className?: string;
}

/**
 * Minimal placeholder block for homepage sections awaiting content.
 * Keeps hierarchy clear without filler data.
 */
export function SectionPlaceholder({
  index,
  label,
  title,
  description,
  href,
  linkLabel = "View all →",
  id,
  className,
}: SectionPlaceholderProps) {
  return (
    <section id={id} className={cn("section-padding border-t border-border", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="container-narrow"
      >
        {/* Section index + label */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-brand">{index}</span>
          <span className="h-px flex-1 max-w-12 bg-brand/30" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand">
            {label}
          </p>
        </div>

        <h2 className="heading-section mb-4">{title}</h2>
        <p className="text-body max-w-xl mb-12">{description}</p>

        {/* Empty state */}
        <div className="rounded-2xl border border-dashed border-border/70 bg-card/30 px-8 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            Content coming soon.
          </p>
        </div>

        {href && (
          <div className="mt-10">
            <Link
              href={href}
              className="link-underline text-sm font-medium text-muted-foreground hover:text-brand"
            >
              {linkLabel}
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}
