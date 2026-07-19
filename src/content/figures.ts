type Lang = 'fr' | 'en'

export type Figure = {
  rank: string
  suit: '♠' | '♦'
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
]

export function getFigures(lang: Lang): Figure[] {
  return lang === 'en' ? figuresEn : figuresFr
}
