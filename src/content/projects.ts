export type Project = {
  slug: string
  emoji: string
  title: string
  company: string
  period: string
  context: string
  challenge: string
  role: string
  stack: string[]
  impact: string
}

export const projects: Project[] = [
  {
    slug: 'psa-configurateur',
    emoji: '🚗',
    title: 'Configurateur automobile international',
    company: 'PSA — Peugeot / Citroën / DS',
    period: '2016 — 2019',
    context:
      "Mission chez PSA au sein d'une équipe Agile de ~15 personnes (PO, Scrum Masters, Dev Front/Back, UX/UI, DevOps), via TimmXware.",
    challenge:
      'Développer un configurateur de voiture en ligne déployé dans 30+ pays pour Peugeot, Citroën et DS, en plusieurs langues.',
    role: 'Développeur Frontend — Lead sur la résolution de bugs critiques en production.',
    stack: ['JavaScript ES6', 'ReactJS', 'CSS3', 'Stylus', 'Webpack', 'Jenkins', 'Git'],
    impact: 'Outil utilisé à grande échelle par 3 marques automobiles majeures dans 30+ pays.',
  },
  {
    slug: 'la-ruche-qui-dit-oui',
    emoji: '🛒',
    title: 'Refonte e-commerce',
    company: 'La Ruche qui dit Oui',
    period: '2023 — 2025',
    context: "Lead développeur Frontend au sein d'une équipe de 3 (2 orientés Backend).",
    challenge:
      "Moderniser une base de code legacy de 10+ ans sans régression, sur l'intégralité du parcours d'achat.",
    role: 'Lead Frontend — pilotage complet de la refonte.',
    stack: ['ReactJS', 'PHP / Symfony', 'Google Analytics', 'Git'],
    impact:
      "Refonte de 12 pages (catalogue, fiches produits, tunnel d'achat), suivi analytics des évolutions.",
  },
  {
    slug: 'questel',
    emoji: '🔍',
    title: 'Module from scratch',
    company: 'Questel',
    period: '2021 — 2023',
    context:
      'Équipe de 3 développeurs Frontend, collaboration distancielle avec le Backend et le PO basés à Sophia Antipolis.',
    challenge: 'Développer un module complet from scratch et créer un Design System standalone.',
    role: 'Développeur Frontend Senior.',
    stack: ['ReactJS', 'Storybook', 'API REST', 'Git'],
    impact: 'Styleguide de 15+ composants standalone, module livré de zéro.',
  },
  {
    slug: 'yoomap',
    emoji: '🎯',
    title: 'Design System SaaS',
    company: 'Yoomap',
    period: '2019 — 2021',
    context: 'Équipe de 5 développeurs Frontend — refonte graphique du SaaS.',
    challenge: "Structurer un Design System cohérent à l'échelle de l'équipe.",
    role: 'Développeur Fullstack.',
    stack: ['ReactJS', 'Storybook', 'API REST', 'Agile / Scrum', 'Git'],
    impact: '30+ composants React dans un styleguide structuré.',
  },
  {
    slug: 'dev-assiste-ia',
    emoji: '🤖',
    title: 'Dev assisté par IA',
    company: 'Projet personnel',
    period: '2025 — Maintenant',
    context: 'Autodidacte, exploration du développement assisté par IA.',
    challenge:
      "Intégrer l'IA dans un workflow de développement frontend complet, de la conception au déploiement.",
    role: 'Développeur — projet personnel.',
    stack: ['ReactJS', 'Next.js', 'MongoDB', 'Vercel', 'Claude Code'],
    impact:
      "Démonstration concrète de l'intégration de l'IA dans le workflow dev — ce portfolio en est le résultat.",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
