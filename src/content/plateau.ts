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
      "Missions variées auprès d'agences web et de PME : Symfony, JavaScript, CSS et Git au quotidien.",
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
      'Refonte graphique du SaaS et Design System de 30+ composants React dans Storybook.',
    variant: 'featured',
  },
  {
    rank: '9',
    suit: '♣',
    company: 'Questel',
    period: '2021 — 2023',
    description: 'Module from scratch + Design System standalone (15+ composants Storybook).',
    variant: 'default',
  },
  {
    rank: '10',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    period: '2023 — 2025',
    description:
      "Lead Frontend, refonte de 12 pages du parcours d'achat sur une codebase legacy de 10+ ans.",
    variant: 'default',
  },
  {
    rank: 'A',
    suit: '♠',
    company: 'Projets perso + IA',
    period: "2025 — aujourd'hui",
    description: 'Développement assisté par IA, exploration de Claude Code et des workflows IA.',
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
      'Various missions for web agencies and SMEs: Symfony, JavaScript, CSS and Git on a daily basis.',
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
      'Complete visual overhaul of the SaaS and a 30+ component React Design System in Storybook.',
    variant: 'featured',
  },
  {
    rank: '9',
    suit: '♣',
    company: 'Questel',
    period: '2021 — 2023',
    description: 'Module built from scratch + standalone Design System (15+ Storybook components).',
    variant: 'default',
  },
  {
    rank: '10',
    suit: '♥',
    company: 'La Ruche qui dit Oui !',
    period: '2023 — 2025',
    description:
      'Lead Frontend, overhaul of 12 pages of the purchase journey on a 10+ year legacy codebase.',
    variant: 'default',
  },
  {
    rank: 'A',
    suit: '♠',
    company: 'Personal + AI projects',
    period: '2025 — today',
    description: 'AI-assisted development, exploring Claude Code and AI workflows.',
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
