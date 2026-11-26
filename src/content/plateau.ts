type Lang = 'fr' | 'en'

export type PlateauCase = {
  rank: string
  suit: '♠' | '♥' | '♦' | '♣'
  company: string
  period: string
  description: string
  variant: 'default' | 'featured' | 'empty'
  hasPion?: boolean
}

const plateauFr: PlateauCase[] = [
  {
    rank: '2',
    suit: '♣',
    company: 'Case départ',
    period: '2009 — 2014',
    description:
      "Licences informatique à l'Université d'Orléans, puis formation concepteur web à l'Institut IEF2I (Vincennes).",
    variant: 'default',
  },
  {
    rank: '7',
    suit: '♥',
    company: 'TimmXware',
    period: '2016 — 2019',
    description:
      "Missions variées auprès d'agences web et de PME : développement fullstack Symfony, JavaScript, CSS et Git au quotidien.",
    variant: 'default',
  },
  {
    rank: 'R',
    suit: '♠',
    company: 'Groupe PSA',
    period: '2017 — 2019',
    description:
      'Le nouveau configurateur de voiture en ligne, déployé dans plusieurs pays pour Peugeot, Citroën et DS.',
    variant: 'featured',
  },
  {
    rank: 'D',
    suit: '♦',
    company: 'Yoomap',
    period: '2019 — 2021',
    description:
      'Développeur fullstack : refonte graphique du SaaS, Design System de 30+ composants React dans Storybook et les API REST qui alimentaient le produit.',
    variant: 'featured',
  },
  {
    rank: '9',
    suit: '♣',
    company: 'Questel',
    period: '2021 — 2023',
    description:
      'Module from scratch avec ses endpoints REST + Design System standalone (15+ composants Storybook).',
    variant: 'default',
  },
  {
    rank: '10',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    period: '2023 — 2025',
    description:
      "Lead Frontend, refonte de 12 pages du parcours d'achat sur une codebase legacy de 10+ ans : React devant, Symfony derrière.",
    variant: 'default',
  },
  {
    rank: 'A',
    suit: '♠',
    company: 'Projets perso + IA',
    period: "2025 — aujourd'hui",
    description:
      'Projets fullstack Next.js / MongoDB déployés sur Vercel, développement assisté par IA avec Claude Code.',
    variant: 'default',
    hasPion: true,
  },
  {
    rank: '',
    suit: '♠',
    company: '',
    period: '',
    description: '',
    variant: 'empty',
  },
]

const plateauEn: PlateauCase[] = [
  {
    rank: '2',
    suit: '♣',
    company: 'Starting square',
    period: '2009 — 2014',
    description:
      'Computer science degree at the University of Orléans, then web designer training at Institut IEF2I (Vincennes).',
    variant: 'default',
  },
  {
    rank: '7',
    suit: '♥',
    company: 'TimmXware',
    period: '2016 — 2019',
    description:
      'Various missions for web agencies and SMEs: fullstack development with Symfony, JavaScript, CSS and Git on a daily basis.',
    variant: 'default',
  },
  {
    rank: 'R',
    suit: '♠',
    company: 'Groupe PSA',
    period: '2017 — 2019',
    description:
      'The new online car configurator, deployed in several countries for Peugeot, Citroën and DS.',
    variant: 'featured',
  },
  {
    rank: 'D',
    suit: '♦',
    company: 'Yoomap',
    period: '2019 — 2021',
    description:
      'Fullstack developer: visual overhaul of the SaaS, a 30+ component React Design System in Storybook and the REST APIs feeding the product.',
    variant: 'featured',
  },
  {
    rank: '9',
    suit: '♣',
    company: 'Questel',
    period: '2021 — 2023',
    description:
      'Module built from scratch with its REST endpoints + standalone Design System (15+ Storybook components).',
    variant: 'default',
  },
  {
    rank: '10',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    period: '2023 — 2025',
    description:
      'Lead Frontend, overhaul of 12 pages of the purchase journey on a 10+ year legacy codebase: React on the front, Symfony behind.',
    variant: 'default',
  },
  {
    rank: 'A',
    suit: '♠',
    company: 'Personal + AI projects',
    period: '2025 — today',
    description:
      'Fullstack Next.js / MongoDB projects deployed on Vercel, AI-assisted development with Claude Code.',
    variant: 'default',
    hasPion: true,
  },
  {
    rank: '',
    suit: '♠',
    company: '',
    period: '',
    description: '',
    variant: 'empty',
  },
]

export function getPlateau(lang: Lang): PlateauCase[] {
  return lang === 'en' ? plateauEn : plateauFr
}
