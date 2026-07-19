// Données non-traduisibles — utilisées directement dans les composants
export const profile = {
  name: 'Yoann Dexmier',
  initials: 'YD',
  role: 'Développeur JavaScript Sénior',
  subtitle: 'Développeur Frontend Senior',
  location: 'Noisy-le-Grand, France',
  email: 'yoanndexmier.pro@gmail.com',
  phone: '0670667215',
  linkedin: 'https://linkedin.com/in/yoann-dexmier',
  github: 'https://github.com/ydexmier',
  experienceYears: 10,
  availability: 'Télétravail ou présentiel',
  cvUrl: '/cv-yoann-dexmier.pdf',
} as const

// Contenu bilingue — accéder via getProfileContent(lang)
const profileContent = {
  fr: {
    heroDescription:
      "Développeur Frontend Senior React/TypeScript, j'ai travaillé sur des projets à fort impact : configurateur Peugeot/Citroën/DS dans 30+ pays, refonte e-commerce, Design Systems de 30+ composants. Attentif à la qualité du code autant qu'à ce que l'utilisateur ressent, j'aime les équipes où on peut compter les uns sur les autres. Depuis 2025, je travaille avec l'IA au quotidien.",
    aboutParagraphs: [
      "J'ai commencé par des études d'informatique à l'Université d'Orléans, puis une formation spécialisée à l'Institut IEF2I de Vincennes. Très vite, j'ai su que c'était le Frontend qui m'intéressait, cet endroit précis où la technique se transforme en expérience utilisateur.",
      "TimmXware m'a permis d'enchaîner les missions en agences et PME. Symfony, JavaScript, Git au quotidien. C'est aussi via cette société que j'ai rejoint le Groupe PSA, où j'ai passé deux ans dans une équipe Agile de 15 personnes à déployer un configurateur automobile dans 30+ pays pour Peugeot, Citroën et DS.",
      "La suite m'a permis de diversifier ma palette. Chez Yoomap, j'ai structuré un Design System de 30+ composants React sous Storybook. Chez Questel, j'ai développé un module from scratch avec son propre Design System. Puis chez La Ruche qui dit Oui !, en tant que Lead Frontend, j'ai modernisé une codebase legacy de 10+ ans en refonçant 12 pages du parcours d'achat.",
      "Depuis 2025, j'intègre l'IA dans mon quotidien. Claude Code principalement, sur des projets réels dont ce portfolio. Ce que j'en retiens : on délègue différemment, on itère plus vite, et on passe plus de temps sur ce qui compte vraiment.",
      "En dehors du code, je joue aux jeux de société, je lis beaucoup, je pratique le tennis de table et j'explore la cuisine. Des activités assez différentes les unes des autres, mais qui ont toutes quelque chose en commun : difficile de décrocher une fois qu'on est dedans.",
    ],
    aboutRules: [
      {
        number: '1',
        title: 'Rigueur',
        text: "Je prends le temps de bien faire les choses dès le départ. Un code propre, bien nommé, accessible. Ce n'est pas du perfectionnisme, c'est juste plus facile à maintenir pour tout le monde.",
      },
      {
        number: '2',
        title: "Jeu d'équipe",
        text: "Mes meilleurs projets ont été faits à plusieurs. J'aime les discussions qui font avancer, et j'aime qu'on puisse compter sur moi quand c'est le moment de livrer.",
      },
      {
        number: '3',
        title: 'Curiosité',
        text: "Notre métier évolue vite, et en ce moment c'est particulièrement vrai. L'IA rebat les cartes pour les développeurs comme pour les entreprises, les règles du jeu sont en train de changer. Je préfère comprendre ce qui se passe maintenant que rattraper le retard plus tard.",
      },
    ],
    aboutValues: ['Qualité', 'Accessibilité', 'Durabilité', 'Collaboration'],
    softSkills: [
      'Empathie',
      'Gestion des priorités',
      'Curiosité technologique',
      'Autonomie',
      'Gestion du temps',
      'Résolution de problèmes',
      'Adaptabilité',
      "Esprit d'équipe",
      'Supporter / Accompagner / Aider',
    ],
    interests: ['Lecture', 'Jeux de société', 'Tennis de Table', 'Jeux vidéo'],
    contactMessage: "Un projet, une opportunité, ou juste envie d'échanger ? Je réponds sous 24h.",
    formations: [
      {
        degree: 'Concepteur Web',
        school: 'Institut IEF2I, Vincennes',
        period: '2013 — 2014',
      },
      {
        degree: 'Licence Informatique',
        school: "Université d'Orléans",
        period: '2009 — 2012',
      },
    ],
  },
  en: {
    heroDescription:
      "Senior Frontend Developer React/TypeScript, I've worked on high-impact projects: Peugeot/Citroën/DS car configurator in 30+ countries, e-commerce overhaul, 30+ component Design Systems. Attentive to code quality as much as to what the user experiences, I like teams where people can count on each other. Since 2025, I've been working with AI on a daily basis.",
    aboutParagraphs: [
      'I started with computer science studies at the University of Orléans, then specialized training at Institut IEF2I in Vincennes. Very quickly, I knew that Frontend was my calling, that precise place where technical work transforms into user experience.',
      'TimmXware gave me the chance to stack missions at agencies and SMEs. Symfony, JavaScript, Git on a daily basis. It was also through that firm that I joined Groupe PSA, where I spent two years in a 15-person Agile team deploying a car configurator across 30+ countries for Peugeot, Citroën and DS.',
      'What followed allowed me to diversify my skills. At Yoomap, I structured a 30+ component React Design System in Storybook. At Questel, I built a module from scratch with its own standalone Design System. Then at La Ruche qui dit Oui!, as Lead Frontend, I modernized a 10+ year legacy codebase by overhauling 12 pages of the purchase journey.',
      "Since 2025, I've been integrating AI into my daily work. Claude Code mainly, on real projects including this portfolio. What I take from it: you delegate differently, you iterate faster, and you spend more time on what actually matters.",
      'Outside of code, I play board games, read a lot, practice table tennis and explore cooking. Pretty different from one another, but they all have something in common: hard to stop once you are into it.',
    ],
    aboutRules: [
      {
        number: '1',
        title: 'Rigor',
        text: 'I take the time to do things right from the start. Clean code, clear naming, accessibility built in. Not perfectionism, just easier to maintain for everyone.',
      },
      {
        number: '2',
        title: 'Teamwork',
        text: "My best projects were built together. I like discussions that move things forward, and I like being someone people can count on when it's time to deliver.",
      },
      {
        number: '3',
        title: 'Curiosity',
        text: "Our field moves fast, and right now that's especially true. AI is reshaping the rules for developers and companies alike, the game is changing. I'd rather understand what's happening now than catch up later.",
      },
    ],
    aboutValues: ['Quality', 'Accessibility', 'Durability', 'Collaboration'],
    softSkills: [
      'Empathy',
      'Priority management',
      'Tech curiosity',
      'Autonomy',
      'Time management',
      'Problem solving',
      'Adaptability',
      'Teamwork',
      'Supporting / Mentoring / Helping',
    ],
    interests: ['Reading', 'Board games', 'Table tennis', 'Video games'],
    contactMessage: 'A project, an opportunity, or just want to chat? I reply within 24h.',
    formations: [
      {
        degree: 'Web Designer',
        school: 'Institut IEF2I, Vincennes',
        period: '2013 — 2014',
      },
      {
        degree: 'Computer Science Degree',
        school: 'University of Orléans',
        period: '2009 — 2012',
      },
    ],
  },
}

export type ProfileLang = typeof profileContent.fr

export function getProfileContent(lang: 'fr' | 'en'): ProfileLang {
  return profileContent[lang]
}
