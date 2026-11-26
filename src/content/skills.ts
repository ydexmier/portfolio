type Lang = 'fr' | 'en'

export type SkillCategory = {
  label: string
  dotColor: string
  skills: string[]
}

const skillsFr: SkillCategory[] = [
  {
    label: 'Frontend',
    dotColor: '#8e3b2f',
    skills: [
      'React / TypeScript',
      'HTML / CSS3',
      'Design Systems / Storybook',
      'Accessibilité WCAG',
      'Next.js / Astro',
    ],
  },
  {
    label: 'Backend & données',
    dotColor: '#4a8b7b',
    skills: ['Node.js', "Conception d'API REST", 'PHP / Symfony', 'MongoDB', 'Tests unitaires'],
  },
  {
    label: 'Build & déploiement',
    dotColor: '#d9a441',
    skills: ['Git / GitHub / GitLab', 'Webpack / Vite', 'CI / CD (Jenkins)', 'Déploiement Vercel'],
  },
  {
    label: 'Méthodes & humain',
    dotColor: '#5c4d3d',
    skills: [
      'Agile / Scrum',
      'User Stories & EPICs',
      'Suivi analytique',
      'Dev assisté par IA',
      "Esprit d'équipe",
      'Accompagner / aider',
    ],
  },
]

const skillsEn: SkillCategory[] = [
  {
    label: 'Frontend',
    dotColor: '#8e3b2f',
    skills: [
      'React / TypeScript',
      'HTML / CSS3',
      'Design Systems / Storybook',
      'WCAG accessibility',
      'Next.js / Astro',
    ],
  },
  {
    label: 'Backend & data',
    dotColor: '#4a8b7b',
    skills: ['Node.js', 'REST API design', 'PHP / Symfony', 'MongoDB', 'Unit tests'],
  },
  {
    label: 'Build & delivery',
    dotColor: '#d9a441',
    skills: ['Git / GitHub / GitLab', 'Webpack / Vite', 'CI / CD (Jenkins)', 'Vercel deployment'],
  },
  {
    label: 'Methods & people',
    dotColor: '#5c4d3d',
    skills: [
      'Agile / Scrum',
      'User Stories & EPICs',
      'Analytics tracking',
      'AI-assisted development',
      'Team spirit',
      'Mentoring / helping',
    ],
  },
]

export function getSkillCategories(lang: Lang): SkillCategory[] {
  return lang === 'en' ? skillsEn : skillsFr
}
