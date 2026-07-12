import type { Metadata } from "next";

interface PagePlaceholderProps {
  title: string;
  description: string;
}

/** Reusable placeholder for pages under development */
export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-narrow">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Coming soon
        </p>
        <h1 className="heading-section mb-6">{title}</h1>
        <p className="text-body max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
