# CLAUDE.md — Portfolio Yoann Dexmier

> Fichier de contexte pour Claude Code. À placer à la racine du projet.

---

## 👤 Identité & Profil

**Nom :** Yoann Dexmier  
**Titre :** Développeur JavaScript Sénior  
**Sous-titre :** Développeur Frontend Senior  
**Localisation :** Noisy-le-Grand, France  
**Email :** yoanndexmier.pro@gmail.com  
**Téléphone :** 0670667215  
**LinkedIn :** linkedin.com/in/yoann-dexmier  
**Expérience :** 10 ans  
**Disponibilité :** Télétravail ou présentiel

### Accroche (hero)

> Ce qui me motive depuis 10 ans ? Construire des interfaces que les gens utilisent vraiment — et qui durent.
> Développeur Frontend Senior React/TypeScript, j'ai travaillé sur des projets à fort impact : configurateur Peugeot/Citroën/DS dans 30+ pays, refonte e-commerce, Design Systems de 30+ composants. Rigoureux et naturellement tourné vers la collaboration, je fais le lien entre technique et expérience utilisateur. Aujourd'hui, j'intègre l'IA dans mon workflow pour aller encore plus loin.

### Softskills (à intégrer naturellement dans les textes)

**Issus de l'analyse AssessFirst :**

- Approche consciencieuse et méthodique (réussit par l'effort)
- Prise de décision raisonnée, pas précipitée
- Style d'apprentissage : approfondir, se fier aux informations éprouvées
- Fort besoin de stabilité et d'investissement dans la durée
- Organisation et structuration avant l'action
- Soutien aux autres comme activité prioritaire (100%)
- Bienveillance, proximité, respect

**Softskills affichés sur le CV :**

- Empathie
- Gestion des priorités
- Curiosité technologique
- Autonomie
- Gestion du temps
- Résolution de problèmes
- Adaptabilité
- Esprit d'équipe
- Supporter / Accompagner / Aider

### Centres d'intérêt

Lecture • Cinéma • Tennis de Table • Jeux de sociétés

---

## 🛠️ Stack Technique

### Framework principal

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Raison : SSG/SSR natif pour SEO optimal, déploiement Vercel zero-config, React Server Components pour performance maximale

### Style

- **Tailwind CSS v4**
- Raison : utility-first, parfaitement intégré Next.js, pas de runtime CSS

### Animations

- **Motion (ex-Framer Motion)** — animations déclaratives React, layout transitions, scroll-based
- **GSAP** (optionnel) — si animations complexes type scroll-pinned ou text reveals
- Respecter `prefers-reduced-motion` via le hook `useReducedMotion` de Motion

### Déploiement

- **Vercel** — zero-config, preview deployments automatiques, analytics intégrés
- Domaine custom recommandé : `yoanndexmier.fr` ou `yoanndexmier.dev`

### Qualité & SEO

- **Vercel Analytics** + **Vercel Speed Insights**
- **next/image** pour optimisation automatique des images
- **next/font** avec Geist (font Vercel) ou Inter
- Sitemap auto + robots.txt + JSON-LD schema
- **Lighthouse score cible : 95+** sur toutes les métriques
- Accessibilité **WCAG AA** obligatoire (c'est une compétence clé à démontrer)

### Tests

- **Vitest** + **Testing Library** pour les composants critiques

### Outils de dev

- **pnpm** (gestionnaire de paquets)
- **ESLint** + **Prettier** + **Husky** (pre-commit hooks)
- **TypeScript strict mode**

---

## 🗂️ Architecture du projet

```
portfolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Layout global (fonts, metadata, analytics)
│   ├── page.tsx                # Homepage (one-page ou redirection)
│   ├── globals.css             # Variables CSS + reset Tailwind
│   ├── projects/
│   │   ├── page.tsx            # Liste des projets
│   │   └── [slug]/
│   │       └── page.tsx        # Case study détaillé
│   └── contact/
│       └── page.tsx            # Page contact
├── components/
│   ├── ui/                     # Composants atomiques (Button, Badge, Card...)
│   ├── sections/               # Sections de la homepage
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── content/
│   └── projects/               # Données des projets (MDX ou JSON)
│       ├── psa-configurateur.mdx
│       ├── la-ruche.mdx
│       ├── questel.mdx
│       └── yoomap.mdx
├── lib/
│   ├── utils.ts                # Helpers
│   └── metadata.ts             # Metadata helpers SEO
├── public/
│   ├── images/
│   │   ├── projects/           # Screenshots projets
│   │   └── profile.jpg         # Photo pro
│   └── cv-yoann-dexmier.pdf    # CV téléchargeable
├── CLAUDE.md                   # Ce fichier
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 Sections & Contenu

### 1. Hero

- Titre animé : "Développeur Frontend Senior"
- Accroche (voir ci-dessus)
- CTA : "Voir mes projets" + "Me contacter"
- Animation d'entrée fluide (Motion)
- Photo ou avatar minimaliste

### 2. À propos

**Texte :**

> Ce qui me motive depuis 10 ans ? Construire des interfaces que les gens utilisent vraiment — et qui durent. Développeur Frontend Senior spécialisé React/TypeScript, je fais le lien entre enjeux métier et expérience utilisateur. Rigoureux, organisé, naturellement tourné vers la collaboration. Aujourd'hui, j'intègre l'IA dans mon workflow pour aller encore plus loin.

- Valeurs à faire ressortir visuellement : Qualité • Accessibilité • Durabilité • Collaboration
- Lien téléchargement CV (PDF)
- Liens réseaux sociaux

### 3. Compétences

**Frontend — Cœur de métier**

- JavaScript / TypeScript
- React / Next.js
- HTML5 / CSS3
- Architecture de composants
- Design Systems / Storybook
- Performance web / WCAG / Accessibilité

**Workflow & Méthodes**

- Git / GitHub / GitLab
- CI/CD
- Tests unitaires (Jest / Vitest)
- Méthode Agile / Scrum

**IA & Automatisation**

- LLM / Automatisations
- Claude Code
- AI-powered features
- Workflow assisté par IA

**Notions**

- Node.js / API REST
- PHP / Symfony
- MongoDB

### 4. Projets (Case Studies)

> ⚠️ Chaque projet suit la structure : Contexte → Problème → Solution → Stack → Résultat

#### 🚗 PSA — Configurateur automobile international

- **Période :** 2016-2019 (TimmXware)
- **Contexte :** Mission chez PSA au sein d'une équipe Agile de ~15 personnes (PO, Scrum Masters, Dev Front/Back, UX/UI, DevOps)
- **Défi :** Développer un configurateur de voiture en ligne déployé dans 30+ pays pour Peugeot, Citroën et DS, en plusieurs langues
- **Rôle :** Développeur Frontend — Lead sur la résolution de bugs critiques en production
- **Stack :** JavaScript ES6, ReactJS, CSS3, Stylus, Webpack, Jenkins, Git
- **Impact :** Outil utilisé à grande échelle par 3 marques automobiles majeures dans 30+ pays

#### 🛒 La Ruche qui dit Oui — Refonte e-commerce

- **Période :** 2023-2025
- **Contexte :** Lead développeur Frontend (équipe de 3, 2 orientés Backend)
- **Défi :** Moderniser une base de code legacy de 10+ ans sans régression, sur l'intégralité du parcours d'achat
- **Rôle :** Lead Frontend — pilotage complet de la refonte
- **Stack :** ReactJS, PHP/Symfony, Google Analytics, Git
- **Impact :** Refonte de 12 pages (catalogue, fiches produits, tunnel d'achat), suivi analytics des évolutions

#### 🔍 Questel — Module from scratch

- **Période :** 2021-2023
- **Contexte :** Équipe de 3 devs Frontend, collaboration distancielle avec Backend et PO à Sophia Antipolis
- **Défi :** Développer un module complet from scratch + créer un Design System standalone
- **Rôle :** Développeur Frontend Senior
- **Stack :** ReactJS, Storybook, API REST, Git
- **Impact :** Styleguide de 15+ composants standalone, module livré de zéro

#### 🎯 Yoomap — Design System SaaS

- **Période :** 2019-2021
- **Contexte :** Équipe de 5 devs Frontend — refonte graphique du SaaS
- **Défi :** Structurer un Design System cohérent à l'échelle de l'équipe
- **Rôle :** Développeur Fullstack
- **Stack :** ReactJS, Storybook, API REST, Agile/Scrum, Git
- **Impact :** 30+ composants React dans un styleguide structuré

#### 🤖 Projet personnel — Dev assisté par IA

- **Période :** 2025 - Maintenant
- **Contexte :** Autodidacte, exploration du développement assisté par IA
- **Stack :** ReactJS, Next.js, MongoDB, Vercel, Claude Code
- **Impact :** Démonstration concrète de l'intégration de l'IA dans le workflow dev

### 5. Expérience (Timeline)

Affichage chronologique inversé :

- 2025 → Aujourd'hui : Projets personnels / Dev assisté IA
- 2023 → 2025 : La Ruche qui dit Oui (2 ans)
- 2021 → 2023 : Questel (2 ans)
- 2019 → 2021 : Yoomap (2 ans)
- 2016 → 2019 : TimmXware / Mission PSA (3 ans)
- 2016 → 2019 : TimmXware — début de carrière (3 ans)

### 6. Contact

- Formulaire simple (nom, email, message)
- Ou redirection vers email direct
- Liens : LinkedIn + GitHub + Email
- Message d'accroche : "Un projet, une opportunité, ou juste envie d'échanger ? Je réponds sous 24h."

---

## 🎨 Design & UX

### Direction artistique

- Palette sobre et professionnelle : fond sombre (`#0a0a0a`) ou blanc cassé (`#fafafa`)
- Accent couleur unique (ex: vert menthe `#4ade80`, ou bleu nuit `#3b82f6`)
- Typographie lisible et moderne : **Geist** (Vercel) ou **Inter**
- Espacements généreux, hiérarchie claire
- Minimalisme assumé — le contenu prime sur la décoration

### Principes UX à respecter (= démontrer son expertise)

- Navigation fluide sans rechargement (SPA behavior via Next.js)
- Scroll smooth
- Transitions de page élégantes (Motion)
- Focus visible pour accessibilité clavier
- Responsive mobile-first (breakpoints Tailwind)
- Dark mode / Light mode toggle
- `prefers-reduced-motion` respecté sur toutes les animations
- Images optimisées via `next/image` (WebP, lazy loading)
- Pas de Cumulative Layout Shift (CLS)

### Animations recommandées

- Hero : entrée en fondu + décalage vertical (stagger)
- Sections : révélation au scroll (IntersectionObserver via Motion)
- Projets : hover card avec scale subtil
- Timeline : apparition séquentielle des items
- Pas d'animation gratuite — chaque mouvement a un sens

---

## 🔍 SEO & Performance

```typescript
// app/layout.tsx — Metadata de base
export const metadata: Metadata = {
  title: "Yoann Dexmier — Développeur Frontend Senior React",
  description:
    "Portfolio de Yoann Dexmier, développeur Frontend Senior spécialisé React/TypeScript. 10 ans d'expérience sur des projets à fort trafic.",
  keywords: ["développeur frontend", "React", "TypeScript", "Next.js", "Paris", "Noisy-le-Grand"],
  authors: [{ name: "Yoann Dexmier" }],
  openGraph: {
    title: "Yoann Dexmier — Développeur Frontend Senior",
    description: "Portfolio · React · TypeScript · Design System · 10 ans d'expérience",
    url: "https://yoanndexmier.dev",
    siteName: "Yoann Dexmier",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoann Dexmier — Développeur Frontend Senior",
  },
  robots: { index: true, follow: true },
};
```

---

## ⚙️ Configuration Vercel

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

**Variables d'environnement Vercel à configurer :**

```
NEXT_PUBLIC_SITE_URL=https://yoanndexmier.dev
RESEND_API_KEY=xxx  # Si formulaire de contact via Resend
```

---

## 🚀 Commandes

```bash
# Installation
pnpm install

# Développement
pnpm dev

# Build production
pnpm build

# Linter
pnpm lint

# Tests
pnpm test

# Vérification TypeScript
pnpm type-check
```

---

## 📋 Règles pour Claude Code

### À toujours faire

- Utiliser TypeScript strict, jamais `any`
- Composants en arrow functions avec types explicites
- Nommer les composants en PascalCase, les fichiers en kebab-case
- `next/image` obligatoire pour toutes les images
- `next/link` obligatoire pour tous les liens internes
- Respecter `prefers-reduced-motion` sur toutes les animations
- Attributs `aria-*` sur tous les éléments interactifs
- Textes alternatifs sur toutes les images

### À ne jamais faire

- `any` en TypeScript
- `<img>` sans `next/image`
- `<a>` pour les liens internes (utiliser `<Link>`)
- Animations sans fallback `prefers-reduced-motion`
- Inline styles (utiliser Tailwind)
- Composants trop longs (max ~150 lignes, découper si besoin)
- Hardcoder le contenu dans les composants (passer par `content/`)

### Convention de commits

```
feat: ajout section projets
fix: correction accessibilité header
style: ajustement espacements hero
perf: optimisation images projets
a11y: ajout aria-labels navigation
```

---

## 🎯 Objectif du portfolio

Ce portfolio a un double objectif :

1. **Attirer des recruteurs** en CDI dans des entreprises françaises (secteur public, fintech, grandes entreprises) autour de Paris / Noisy-le-Grand ou en remote — **télétravail ou présentiel**
2. **Démontrer l'expertise** en React, accessibilité et qualité frontend — le portfolio lui-même est une preuve de compétence

Le ton est **professionnel mais humain** — mettre en avant l'empathie, la rigueur, l'esprit d'équipe et l'envie de s'inscrire dans la durée plutôt que de "vendre" des compétences de façon froide.

### Formations

- **Concepteur Web** — Institut IEF2I, Vincennes (2013-2014)
- **Licences Informatique** — Université d'Orléans (2009-2012)
