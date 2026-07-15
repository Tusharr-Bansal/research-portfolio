export interface ResearchInterest {
  title: string;
  description: string;
  project: {
    title: string;
    href: string;
  };
}

export const researchInterests: ResearchInterest[] = [
  {
    title: "Trustworthy AI",
    description:
      "Developing reliable AI systems through uncertainty estimation, explainability, and robust learning to enable safe real-world deployment.",
    project: {
      title: "MySteth 2.0",
      href: "/research",
    },
  },

  {
    title: "Machine Learning",
    description:
      "Applying machine learning algorithms and uncertainty-aware modeling to solve complex real-world problems across diverse domains.",
    project: {
      title: "Educational Performance Clustering",
      href: "/publications",
    },
  },

  {
    title: "Healthcare AI",
    description:
      "Building intelligent healthcare solutions using medical signals and data-driven approaches for clinical decision support and diagnosis.",
    project: {
      title: "MySteth 2.0",
      href: "/research",
    },
  },

  {
    title: "Audio Intelligence",
    description:
      "Researching machine learning techniques for understanding and analyzing audio, from music classification to biomedical acoustic signals.",
    project: {
      title: "Music Genre Classification",
      href: "/projects/music-distribution-shift",
    },
  },

  {
    title: "Natural Language AI",
    description:
      "Designing NLP systems for language understanding, text classification, and intelligent moderation using modern machine learning methods.",
    project: {
      title: "Comment Category Classification",
      href: "/projects/comment-category-classification",
    },
  },
];