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
      "Co-op, solo, peu importe. Ce qui compte c'est de pouvoir revenir dessus avec une stratégie différente et devoir s'adapter à ce que la partie impose.",
  },
  {
    rank: '8',
    suit: '♦',
    emoji: '📖',
    title: 'Lecture',
    anecdote:
      "Principalement de la fantasy. Des univers avec leurs propres règles, leur propre cohérence. J'ai fini Les Maîtres Enlumineurs il y a peu.",
  },
  {
    rank: '9',
    suit: '♠',
    emoji: '🎮',
    title: 'Jeux vidéo',
    anecdote:
      'Surtout des rogue-lites. Chaque run est différent et force à composer avec ce que la partie propose sur le moment.',
  },
  {
    rank: '10',
    suit: '♥',
    emoji: '🏓',
    title: 'Tennis de table',
    anecdote:
      "Je joue depuis le lycée. J'aime analyser le jeu de mon adversaire, trouver la faille et m'adapter avec ce que j'ai.",
  },
  {
    rank: 'V',
    suit: '♣',
    emoji: '🍜',
    title: 'Food',
    anecdote:
      "Un bon repas avec des proches ou seul face à un plat qu'on a envie de tester. Dans les deux cas, c'est un moment pour soi.",
  },
]

const hobbiesEn: Hobby[] = [
  {
    rank: '7',
    suit: '♣',
    emoji: '♟',
    title: 'Board games',
    anecdote:
      "Co-op or solo, doesn't matter. What counts is being able to come back with a different strategy and having to adapt to what the game throws at you.",
  },
  {
    rank: '8',
    suit: '♦',
    emoji: '📖',
    title: 'Reading',
    anecdote:
      'Mostly fantasy. Worlds with their own rules, their own internal logic. I finished The Lightbringer trilogy recently.',
  },
  {
    rank: '9',
    suit: '♠',
    emoji: '🎮',
    title: 'Video games',
    anecdote:
      'Rogue-lites mostly. Each run is different and forces you to work with what the game gives you in the moment.',
  },
  {
    rank: '10',
    suit: '♥',
    emoji: '🏓',
    title: 'Table tennis',
    anecdote:
      "I've been playing since high school. I love reading my opponent's game, finding the weak spot and adapting with what I have.",
  },
  {
    rank: 'V',
    suit: '♣',
    emoji: '🍜',
    title: 'Food',
    anecdote:
      "A good meal with people you care about or alone with something you wanted to try. Either way, it's a moment for yourself.",
  },
]

export function getHobbies(lang: Lang): Hobby[] {
  return lang === 'en' ? hobbiesEn : hobbiesFr
}
