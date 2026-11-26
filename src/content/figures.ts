type Lang = 'fr' | 'en'

export type Figure = {
  rank: string
  suit: '♠' | '♥' | '♦'
  company: string
  years: string
  mission: string
  description: string
  achievements: string[]
}

const figuresFr: Figure[] = [
  {
    rank: 'R',
    suit: '♠',
    company: 'Groupe PSA',
    years: '2017 — 2019',
    mission: 'Mission TimmXware',
    description:
      "Configurateur de voiture en ligne au sein d'une équipe Agile de 15 personnes (PO, Scrum Masters, Dev Front/Back, UX/UI, DevOps), déployé dans 30+ pays pour Peugeot, Citroën et DS.",
    achievements: [
      'Équipe Agile de 15 personnes : PO, Scrum Masters, Dev, UX/UI, DevOps',
      'Déployé dans 30+ pays pour 3 marques automobiles majeures',
      'Études, User Stories, ateliers de conception et résolution de hotfix critiques',
    ],
  },
  {
    rank: 'D',
    suit: '♦',
    company: 'Yoomap',
    years: '2019 — 2021',
    mission: 'Design System',
    description:
      "Refonte graphique complète d'un SaaS et construction d'un Design System structuré à l'échelle d'une équipe de 5 développeurs Frontend.",
    achievements: [
      '30+ composants ReactJS documentés sous Storybook',
      'EPICs & User Stories, pilotage des cycles de livraison',
      'Corrections de bugs et développement de nouvelles fonctionnalités',
    ],
  },
  {
    rank: 'V',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    years: '2023 — 2025',
    mission: 'Refonte e-commerce',
    description:
      "Lead Frontend d'une équipe de 3 sur la refonte du parcours d'achat complet, d'une codebase legacy de 10+ ans vers du React moderne, sans régression et sans interruption de service.",
    achievements: [
      "12 pages refondues : catalogue, fiches produits, tunnel d'achat",
      'React devant, PHP / Symfony derrière, migration progressive',
      'Suivi analytics des conversions pour valider chaque évolution',
    ],
  },
]

const figuresEn: Figure[] = [
  {
    rank: 'R',
    suit: '♠',
    company: 'Groupe PSA',
    years: '2017 — 2019',
    mission: 'TimmXware contract',
    description:
      'Online car configurator within a 15-person Agile team (PO, Scrum Masters, Front/Back Dev, UX/UI, DevOps), deployed in 30+ countries for Peugeot, Citroën and DS.',
    achievements: [
      '15-person Agile team: PO, Scrum Masters, Dev, UX/UI, DevOps',
      'Deployed in 30+ countries for 3 major automotive brands',
      'Research, User Stories, design workshops and critical hotfix resolution',
    ],
  },
  {
    rank: 'D',
    suit: '♦',
    company: 'Yoomap',
    years: '2019 — 2021',
    mission: 'Design System',
    description:
      'Complete visual overhaul of a SaaS and construction of a Design System structured for a team of 5 Frontend developers.',
    achievements: [
      '30+ ReactJS components documented in Storybook',
      'EPICs & User Stories, managing delivery cycles',
      'Bug fixes and new feature development',
    ],
  },
  {
    rank: 'V',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    years: '2023 — 2025',
    mission: 'E-commerce overhaul',
    description:
      'Lead Frontend of a team of 3 on the overhaul of the full purchase journey, from a 10+ year legacy codebase to modern React, with no regressions and no downtime.',
    achievements: [
      '12 pages rebuilt: catalogue, product pages, checkout funnel',
      'React on the front, PHP / Symfony behind, progressive migration',
      'Analytics tracking of conversions to validate every change',
    ],
  },
]

export function getFigures(lang: Lang): Figure[] {
  return lang === 'en' ? figuresEn : figuresFr
}
