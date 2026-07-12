import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/common/page-placeholder";

export const metadata: Metadata = {
  title: "Research Notes",
  description: "Technical notes, literature reviews, and research insights.",
};

export default function ResearchNotesPage() {
  return (
    <PagePlaceholder
      title="Research Notes"
      description="Technical notes, literature reviews, and informal research insights shared throughout my work."
    />
  );
}
