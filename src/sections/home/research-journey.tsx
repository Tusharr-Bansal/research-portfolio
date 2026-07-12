import { SectionPlaceholder } from "@/components/common/section-placeholder";

export function ResearchJourney() {
  return (
    <SectionPlaceholder
      id="journey"
      index="03"
      label="Research Timeline"
      title="Academic trajectory"
      description="Education, research positions, and milestones — from Molde University to future doctoral work."
      href="/resume"
      linkLabel="View resume →"
      className="pb-32"
    />
  );
}
