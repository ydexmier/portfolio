type Lang = 'fr' | 'en'

export type Hobby = {
  rank: string
  suit: '♠' | '♥' | '♦' | '♣'
  emoji: string
  title: string
  anecdote: string
}

const hobbiesFr: Hobby[] = [
  {
    rank: '7',
    suit: '♣',
    emoji: '♟',
    title: 'Jeux de société',
    anecdote:
      'Stratégie, coopération, négociation — tout ce qui fait une bonne partie… et un bon sprint.',
  },
  {
    rank: '8',
    suit: '♦',
    emoji: '📖',
    title: 'Lecture',
    anecdote: "Le meilleur moyen d'explorer d'autres univers — et de nourrir la veille.",
  },
  {
    rank: '9',
    suit: '♠',
    emoji: '🎮',
    title: 'Jeux vidéo',
    anecdote: "Là où l'UX et le game design se rencontrent.",
  },
  {
    rank: '10',
    suit: '♥',
    emoji: '🏓',
    title: 'Tennis de table',
    anecdote: 'Réactivité, précision, sens du placement.',
  },
  {
    rank: 'V',
    suit: '♣',
    emoji: '🍜',
    title: 'Food',
    anecdote: 'Découvrir, goûter, refaire à la maison — itérer, toujours.',
  },
]

const hobbiesEn: Hobby[] = [
  {
    rank: '7',
    suit: '♣',
    emoji: '♟',
    title: 'Board games',
    anecdote:
      'Strategy, cooperation, negotiation — everything that makes a good game… and a good sprint.',
  },
  {
    rank: '8',
    suit: '♦',
    emoji: '📖',
    title: 'Reading',
    anecdote: 'The best way to explore other universes — and fuel your curiosity.',
  },
  {
    rank: '9',
    suit: '♠',
    emoji: '🎮',
    title: 'Video games',
    anecdote: 'Where UX and game design meet.',
  },
  {
    rank: '10',
    suit: '♥',
    emoji: '🏓',
    title: 'Table tennis',
    anecdote: 'Reactivity, precision, positioning.',
  },
  {
    rank: 'V',
    suit: '♣',
    emoji: '🍜',
    title: 'Food',
    anecdote: 'Discover, taste, recreate at home — always iterating.',
  },
]

export function getHobbies(lang: Lang): Hobby[] {
  return lang === 'en' ? hobbiesEn : hobbiesFr
}
