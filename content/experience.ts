export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  duration: string;
  slug?: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 → Aujourd'hui",
    title: "Dev assisté par IA",
    company: "Projets personnels",
    duration: "En cours",
    slug: "dev-assiste-ia",
  },
  {
    period: "2023 → 2025",
    title: "Lead Frontend",
    company: "La Ruche qui dit Oui",
    duration: "2 ans",
    slug: "la-ruche-qui-dit-oui",
  },
  {
    period: "2021 → 2023",
    title: "Développeur Frontend Senior",
    company: "Questel",
    duration: "2 ans",
    slug: "questel",
  },
  {
    period: "2019 → 2021",
    title: "Développeur Fullstack",
    company: "Yoomap",
    duration: "2 ans",
    slug: "yoomap",
  },
  {
    period: "2016 → 2019",
    title: "Développeur Frontend — Mission PSA",
    company: "TimmXware",
    duration: "3 ans",
    slug: "psa-configurateur",
  },
];
