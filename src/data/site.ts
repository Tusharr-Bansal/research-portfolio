export const siteConfig = {
  name: "Tushar Bansal",
  shortName: "Tushar",
  title: "Tushar Bansal — AI Research",
  description:
    "AI researcher studying trustworthy and explainable medical AI at Molde University, Norway.",
  url: "https://research-portfolio.dev",
  role: "AI Researcher",
  affiliation: "Research Intern · Molde University, Norway",
  mission:
    "Making medical AI systems that clinicians can trust.",
  missionStatement:
    "I study how self-supervised learning and explainable methods can produce AI that is transparent, reliable, and safe for clinical decision-making — bridging rigorous machine learning with real-world healthcare needs.",
  author: {
    name: "Tushar Bansal",
    email: "tusharbansal030@gmail.com",
    github: "https://github.com/tusharr-bansal",
    linkedin: "https://linkedin.com/in/tusharr-bansal",
    scholar: "https://scholar.google.com",
  },
} as const;

export const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;
