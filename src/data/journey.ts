export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "education" | "research" | "publication" | "award";
}

export const researchJourney: JourneyMilestone[] = [
  {
    id: "journey-1",
    year: "2025",
    title: "Research Intern — AI Safety Lab",
    description:
      "Working on mechanistic interpretability of reasoning behaviors in frontier language models.",
    type: "research",
  },
  {
    id: "journey-2",
    year: "2024",
    title: "Paper Accepted at ICML",
    description:
      "First-author publication on compositional generalization in multimodal embedding spaces.",
    type: "publication",
  },
  {
    id: "journey-3",
    year: "2023",
    title: "M.S. in Computer Science",
    description:
      "Thesis on alignment methods for large language models. Advisor: Prof. [Name].",
    type: "education",
  },
  {
    id: "journey-4",
    year: "2022",
    title: "Research Assistant — NLP Lab",
    description:
      "Developed evaluation frameworks for chain-of-thought reasoning faithfulness.",
    type: "research",
  },
  {
    id: "journey-5",
    year: "2021",
    title: "B.S. in Computer Science",
    description:
      "Graduated with honors. Focus on machine learning and theoretical computer science.",
    type: "education",
  },
];
