type Lang = 'fr' | 'en'

export type SkillCategory = {
  label: string
  dotColor: string
  skills: string[]
}

const skillsFr: SkillCategory[] = [
  {
    label: 'Techniques',
    dotColor: '#8e3b2f',
    skills: [
      'JavaScript / React',
      'HTML / CSS3',
      'Design Systems / Storybook',
      'Tests unitaires',
      'Git / GitHub / GitLab',
      'Next.js / MongoDB',
      'Dev assisté par IA',
    ],
  },
  {
    label: 'Méthodes',
    dotColor: '#d9a441',
    skills: ['Agile / Scrum', 'User Stories & EPICs', 'Ateliers de conception', 'Suivi analytique'],
  },
  {
    label: 'Soft skills',
    dotColor: '#4a8b7b',
    skills: [
      "Esprit d'équipe",
      'Autonomie & adaptabilité',
      'Curiosité technologique',
      'Accompagner / aider',
      'Gestion des priorités',
    ],
  },
]

const skillsEn: SkillCategory[] = [
  {
    label: 'Technical',
    dotColor: '#8e3b2f',
    skills: [
      'JavaScript / React',
      'HTML / CSS3',
      'Design Systems / Storybook',
      'Unit tests',
      'Git / GitHub / GitLab',
      'Next.js / MongoDB',
      'AI-assisted development',
    ],
  },
  {
    label: 'Methods',
    dotColor: '#d9a441',
    skills: ['Agile / Scrum', 'User Stories & EPICs', 'Design workshops', 'Analytics tracking'],
  },
  {
    label: 'Soft skills',
    dotColor: '#4a8b7b',
    skills: [
      'Team spirit',
      'Autonomy & adaptability',
      'Tech curiosity',
      'Mentoring / helping',
      'Priority management',
    ],
  },
]

export function getSkillCategories(lang: Lang): SkillCategory[] {
  return lang === 'en' ? skillsEn : skillsFr
}
