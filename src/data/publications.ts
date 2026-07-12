export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "conference" | "journal" | "preprint" | "workshop";
  href?: string;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Probing Emergent Reasoning Circuits in Transformer Models",
    authors: "Tushar, et al.",
    venue: "NeurIPS Workshop on Interpretability",
    year: 2025,
    type: "workshop",
    href: "#",
  },
  {
    id: "pub-2",
    title: "A Comparative Analysis of Preference Optimization Methods for LLM Alignment",
    authors: "Tushar, et al.",
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint",
    href: "#",
  },
  {
    id: "pub-3",
    title: "Compositional Generalization in Vision-Language Embedding Spaces",
    authors: "Tushar, et al.",
    venue: "ICML",
    year: 2024,
    type: "conference",
    href: "#",
  },
  {
    id: "pub-4",
    title: "Benchmarking Chain-of-Thought Faithfulness in Language Models",
    authors: "Tushar, et al.",
    venue: "ACL Findings",
    year: 2024,
    type: "conference",
    href: "#",
  },
];
