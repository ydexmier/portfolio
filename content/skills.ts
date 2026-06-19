export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend — Cœur de métier",
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "HTML5 / CSS3",
      "Architecture de composants",
      "Design Systems / Storybook",
      "Performance web / WCAG / Accessibilité",
    ],
  },
  {
    title: "Workflow & Méthodes",
    skills: [
      "Git / GitHub / GitLab",
      "CI/CD",
      "Tests unitaires (Jest / Vitest)",
      "Méthode Agile / Scrum",
    ],
  },
  {
    title: "IA & Automatisation",
    skills: [
      "LLM / Automatisations",
      "Claude Code",
      "AI-powered features",
      "Workflow assisté par IA",
    ],
  },
  {
    title: "Notions",
    skills: ["Node.js / API REST", "PHP / Symfony", "MongoDB"],
  },
];
