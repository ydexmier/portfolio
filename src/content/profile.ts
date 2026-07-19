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
      "Développeur Frontend Senior React/TypeScript, j'ai travaillé sur des projets à fort impact : configurateur Peugeot/Citroën/DS dans 30+ pays, refonte e-commerce, Design Systems de 30+ composants. Rigoureux et naturellement tourné vers la collaboration, je fais le lien entre technique et expérience utilisateur. Aujourd'hui, j'intègre l'IA dans mon workflow pour aller encore plus loin.",
    aboutParagraphs: [
      "J'ai commencé par des études d'informatique à l'Université d'Orléans, puis une formation spécialisée à l'Institut IEF2I de Vincennes. Très vite, j'ai su que c'était le Frontend qui m'intéressait, cet endroit précis où la technique se transforme en expérience utilisateur.",
      "Ma carrière a pris son vrai rythme avec TimmXware, une société de conseil qui m'a envoyé en mission chez des agences et des PME. Puis tout a changé avec le Groupe PSA. Au sein d'une équipe Agile de 15 personnes, j'ai contribué pendant deux ans à déployer un configurateur automobile dans 30+ pays pour Peugeot, Citroën et DS. Mon premier projet à vraie échelle.",
      "La suite m'a permis de diversifier ma palette. Chez Yoomap, j'ai structuré un Design System de 30+ composants React sous Storybook. Chez Questel, j'ai développé un module from scratch avec son propre Design System. Puis chez La Ruche qui dit Oui !, en tant que Lead Frontend, j'ai modernisé une codebase legacy de 10+ ans en refonçant 12 pages du parcours d'achat.",
      "Depuis 2025, j'explore ce qui change en profondeur notre métier : l'IA. Claude Code, les workflows assistés, l'intégration de l'IA dans le cycle de développement Frontend. Ce portfolio en est une démonstration concrète. Je suis convaincu que les développeurs qui apprennent à travailler avec l'IA auront un avantage décisif.",
      "En dehors du code, je joue aux jeux de société, je lis beaucoup, je pratique le tennis de table et j'explore la cuisine. Des activités qui nourrissent ma réflexion sur les systèmes bien conçus, les règles élégantes et l'importance d'itérer.",
    ],
    aboutRules: [
      {
        number: '1',
        title: 'Rigueur',
        text: "Je code comme je construirais une maison : les fondations d'abord. Structure, nommage, accessibilité. Pas du perfectionnisme, de la durabilité.",
      },
      {
        number: '2',
        title: "Jeu d'équipe",
        text: "Mes meilleurs projets ont été faits à plusieurs. J'apporte autant à la réflexion collective qu'à la production individuelle, et j'aime qu'on puisse compter sur moi.",
      },
      {
        number: '3',
        title: 'Curiosité',
        text: "Je veille, j'expérimente, j'intègre. L'IA dans mon workflow en est la preuve la plus récente. La prochaine évolution est déjà en cours.",
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
      "Senior Frontend Developer React/TypeScript, I've worked on high-impact projects: Peugeot/Citroën/DS car configurator in 30+ countries, e-commerce overhaul, 30+ component Design Systems. Methodical and naturally collaborative, I bridge the gap between technical execution and user experience. Today, I integrate AI into my workflow to go even further.",
    aboutParagraphs: [
      'I started with computer science studies at the University of Orléans, then specialized training at Institut IEF2I in Vincennes. Very quickly, I knew that Frontend was my calling, that precise place where technical work transforms into user experience.',
      'My career really took shape with TimmXware, a consulting firm that sent me on missions to agencies and SMEs. Then everything changed with Groupe PSA. As part of a 15-person Agile team, I spent two years contributing to the deployment of an online car configurator across 30+ countries for Peugeot, Citroën and DS. My first truly large-scale project.',
      'What followed allowed me to diversify my skills. At Yoomap, I structured a 30+ component React Design System in Storybook. At Questel, I built a module from scratch with its own standalone Design System. Then at La Ruche qui dit Oui!, as Lead Frontend, I modernized a 10+ year legacy codebase by overhauling 12 pages of the purchase journey.',
      "Since 2025, I've been exploring what's profoundly changing our field: AI. Claude Code, assisted workflows, AI integration in the Frontend development cycle. This portfolio itself is a concrete demonstration. I'm convinced that developers who learn to work with AI will have a decisive advantage.",
      'Outside of code, I play board games, read a lot, practice table tennis and explore cooking. Activities that fuel my thinking about well-designed systems, elegant rules and the importance of iteration.',
    ],
    aboutRules: [
      {
        number: '1',
        title: 'Rigor',
        text: 'I code like I would build a house: foundations first. Structure, naming, accessibility. Not perfectionism, durability.',
      },
      {
        number: '2',
        title: 'Teamwork',
        text: 'My best projects were built together. I contribute as much to collective thinking as to individual output, and I like being someone people can count on.',
      },
      {
        number: '3',
        title: 'Curiosity',
        text: 'I watch, experiment, integrate. AI in my workflow is the most recent proof. The next evolution is already underway.',
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
