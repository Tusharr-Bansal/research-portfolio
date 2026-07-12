import { SectionPlaceholder } from "@/components/common/section-placeholder";

export function PublicationsSection() {
  return (
    <SectionPlaceholder
      id="publications"
      index="02"
      label="Publications"
      title="Papers & preprints"
      description="Peer-reviewed publications and preprints across medical AI, explainability, and representation learning."
      href="/publications"
      linkLabel="View publications →"
    />
  );
}
