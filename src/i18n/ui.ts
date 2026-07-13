export const languages = {
  fr: 'Français',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const ui = {
  fr: {
    'nav.accueil': 'Accueil',
    'nav.plateau': 'Le plateau',
    'nav.figures': 'Les figures',
    'nav.jetons': 'Mes jetons',
    'nav.horstable': 'Hors table',
    'nav.apropos': 'À propos',
    'nav.contact': 'Me contacter',
    'nav.cv': 'Mon CV',
    'lang.toggle': 'EN',
    'lang.toggle.href': '/en',

    'hero.tagline': 'Développeur web senior — 10 ans de partie, toujours la bonne carte',
    'hero.cta.projects': 'Découvrir la notice ↓',
    'hero.cta.contact': 'On fait une partie ?',

    'plateau.label': 'Le plateau',
    'plateau.title': '10 ans de partie, case par case',
    'plateau.subtitle':
      'Chaque case est une vraie expérience — cliquez sur une carte pour le détail.',
    'plateau.start': 'Case départ',
    'plateau.empty': 'Votre projet ici ?',

    'figures.label': 'Les figures',
    'figures.title': 'Les deux coups décisifs',

    'jetons.label': 'Mes jetons',
    'jetons.title': "Ce que j'apporte à la table",

    'horstable.label': 'Hors table',
    'horstable.title': 'Ma main du dimanche',
    'horstable.subtitle':
      'Ce qui nourrit mon goût des systèmes bien conçus et des règles élégantes.',

    'contact.label': 'Contact',
    'contact.title': 'On fait une partie ?',
    'contact.subtitle':
      'Disponible pour un CDI ou une mission freelance. Parlez-moi de votre produit, je ramène les cartes.',
    'contact.cta': 'Me proposer une partie',
    'contact.btn.email': 'Écrire un email',
    'contact.btn.linkedin': 'LinkedIn',
    'contact.btn.cv': 'Télécharger mon CV',
    'contact.chip.cdi': 'Disponible en CDI',
    'contact.chip.freelance': 'Missions freelance',
    'contact.note': 'Parlez-moi de votre produit — je ramène les cartes.',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Votre email',
    'contact.form.message': 'Votre message',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours…',
    'contact.form.success': 'Message envoyé ! Je reviens vers vous sous 24h.',
    'contact.form.error': "Une erreur s'est produite. Écrivez-moi directement par email.",

    'about.label': 'À propos',
    'about.title': 'Derrière les cartes',
    'about.subtitle': 'La bio complète — qui je suis, comment je joue.',
    'about.formation.label': 'Formation',
    'about.cv': 'Télécharger le CV',
    'about.softskills.label': 'Soft skills',
    'about.values.label': 'Valeurs',
    'about.rules.kicker': 'Les règles du jeu',
    'about.rules.title': 'Ma façon de jouer',
    'about.rules.number': 'Règle nº',
    'about.footer.title': "Envie d'en savoir plus ?",
    'about.footer.cta': 'Voir la page contact',

    'footer.copy': 'fait en coopération avec IA.',

    'meta.home.title': 'Yoann Dexmier — Développeur Frontend Senior React / TypeScript',
    'meta.home.description':
      "Yoann Dexmier, développeur Frontend Senior React / TypeScript, 10 ans d'expérience en Île-de-France. Disponible en CDI ou freelance, télétravail ou présentiel.",
    'meta.about.title': 'À propos — Yoann Dexmier, Développeur Frontend Senior',
    'meta.about.description':
      'Parcours, valeurs et formations de Yoann Dexmier — développeur React / TypeScript senior basé à Noisy-le-Grand, disponible en Île-de-France et en télétravail.',
    'meta.contact.title': 'Contact — Yoann Dexmier, Développeur React / TypeScript',
    'meta.contact.description':
      'Contacter Yoann Dexmier — développeur Frontend Senior React / TypeScript disponible en CDI ou freelance, en Île-de-France ou en télétravail.',
  },
  en: {
    'nav.accueil': 'Home',
    'nav.plateau': 'The board',
    'nav.figures': 'The figures',
    'nav.jetons': 'My chips',
    'nav.horstable': 'Off the table',
    'nav.apropos': 'About',
    'nav.contact': 'Contact me',
    'nav.cv': 'My résumé',
    'lang.toggle': 'FR',
    'lang.toggle.href': '/',

    'hero.tagline': 'Senior web developer — 10 years in the game, always the right card',
    'hero.cta.projects': 'See the rulebook ↓',
    'hero.cta.contact': 'Want to play a game?',

    'plateau.label': 'The board',
    'plateau.title': '10 years in the game, square by square',
    'plateau.subtitle': 'Each square is a real experience — click a card for the details.',
    'plateau.start': 'Starting square',
    'plateau.empty': 'Your project here?',

    'figures.label': 'The figures',
    'figures.title': 'The two decisive moves',

    'jetons.label': 'My chips',
    'jetons.title': 'What I bring to the table',

    'horstable.label': 'Off the table',
    'horstable.title': 'My Sunday hand',
    'horstable.subtitle': 'What fuels my love for well-designed systems and elegant rules.',

    'contact.label': 'Contact',
    'contact.title': 'Shall we play?',
    'contact.subtitle':
      'Available for a full-time role or freelance mission. Tell me about your product, I bring the cards.',
    'contact.cta': 'Propose a game',
    'contact.btn.email': 'Send an email',
    'contact.btn.linkedin': 'LinkedIn',
    'contact.btn.cv': 'Download my resume',
    'contact.chip.cdi': 'Available for full-time',
    'contact.chip.freelance': 'Freelance missions',
    'contact.note': 'Tell me about your product — I bring the cards.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Message sent! I will get back to you within 24h.',
    'contact.form.error': 'Something went wrong. Email me directly.',

    'about.label': 'About',
    'about.title': 'Behind the cards',
    'about.subtitle': 'The full bio — who I am, how I play.',
    'about.formation.label': 'Education',
    'about.cv': 'Download CV',
    'about.softskills.label': 'Soft skills',
    'about.values.label': 'Values',
    'about.rules.kicker': 'The rules of the game',
    'about.rules.title': 'The way I play',
    'about.rules.number': 'Rule no.',
    'about.footer.title': 'Want to know more?',
    'about.footer.cta': 'Visit contact page',

    'footer.copy': 'handcrafted, no cheating.',

    'meta.home.title': 'Yoann Dexmier — Senior Frontend Developer React / TypeScript',
    'meta.home.description':
      'Yoann Dexmier, Senior Frontend Developer React / TypeScript with 10 years of experience. Available for full-time or freelance, remote or on-site near Paris, France.',
    'meta.about.title': 'About — Yoann Dexmier, Senior Frontend Developer',
    'meta.about.description':
      'Background, values and education of Yoann Dexmier — Senior React / TypeScript developer based near Paris, available remote or on-site.',
    'meta.contact.title': 'Contact — Yoann Dexmier, React / TypeScript Developer',
    'meta.contact.description':
      'Contact Yoann Dexmier — Senior Frontend Developer React / TypeScript available for full-time or freelance, remote or on-site near Paris.',
  },
} as const
