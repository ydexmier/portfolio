# CLAUDE.md — Portfolio Yoann Dexmier

> Fichier de contexte pour Claude Code.

---

## 👤 Identité & Profil

**Nom :** Yoann Dexmier  
**Titre :** Développeur JavaScript Sénior  
**Sous-titre :** Développeur Frontend Senior  
**Localisation :** Noisy-le-Grand, France  
**Email :** yoanndexmier.pro@gmail.com  
**Téléphone :** 0670667215  
**LinkedIn :** linkedin.com/in/yoann-dexmier  
**GitHub :** github.com/ydexmier  
**Expérience :** 10 ans  
**Disponibilité :** Télétravail ou présentiel

> Les données du profil sont dans `src/content/profile.ts` — ne jamais les dupliquer dans les composants.

### Softskills (à intégrer naturellement dans les textes)

**Issus de l'analyse AssessFirst :**

- Approche consciencieuse et méthodique (réussit par l'effort)
- Prise de décision raisonnée, pas précipitée
- Fort besoin de stabilité et d'investissement dans la durée
- Organisation et structuration avant l'action
- Soutien aux autres comme activité prioritaire (100%)
- Bienveillance, proximité, respect

### Centres d'intérêt

Lecture • Jeux de société • Tennis de Table • Jeux vidéo • Food

---

## 🛠️ Stack Technique

### Framework

- **Astro 5** — zéro JS par défaut, pages statiques pré-rendues, islands React là où JS est nécessaire
- **React 19** + **@astrojs/react** — uniquement pour `ContactForm.tsx` (formulaire interactif)
- **TypeScript strict**

### Style

- **Tailwind CSS v4** — via `@tailwindcss/vite` (plugin Vite, pas de fichier `tailwind.config`)
- Tokens définis dans `src/styles/global.css` via `@theme {}`, pas de config externe
- **Approche Tailwind-first** : utiliser les classes Tailwind pour tout. Scoped `<style>` uniquement pour les cas impossibles (voir règles plus bas)

### Polices (auto-hébergées via fontsource, pas de CDN)

| Token Tailwind | Police                      | Usage                                               |
| -------------- | --------------------------- | --------------------------------------------------- |
| `font-logo`    | Young Serif                 | H1, H2 de sections, titres narratifs, nom           |
| `font-ui`      | Archivo Variable            | Nav, kickers, boutons, labels techniques, pastilles |
| `font-serif`   | Georgia (built-in Tailwind) | Corps de texte, bio, descriptions, métadonnées      |
| `font-mono`    | IBM Plex Mono               | Coins de cartes (rang/enseigne), données brutes     |
| `font-display` | Fraunces Variable           | Défini mais **non utilisé en pratique**             |

### Animations

- **CSS pur** — préféré pour tous les effets visuels (hover, transforms, flip 3D, fan de cartes)
- **React island** (`client:load`) — uniquement pour `ContactForm.tsx` (états idle/sending/success/error)
- Toujours `motion-reduce:transition-none` ou `@media (prefers-reduced-motion: reduce)` quand des transitions sont présentes

### Internationalisation

- **Astro i18n intégré** — FR (défaut, sans préfixe) + EN (sous `/en/`)
- Toutes les chaînes de texte dans `src/i18n/ui.ts`, accessibles via `t('clé')`

### Déploiement

- **Vercel** + adapter `@astrojs/vercel`
- Port dev par défaut : **4321**

### Qualité

- **Prettier** + **prettier-plugin-astro** (pre-commit via Husky)
- **`astro check`** — vérification TypeScript des fichiers `.astro`
- **Lighthouse score cible : 95+**
- Accessibilité **WCAG AA** obligatoire

---

## 🗂️ Architecture du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── islands/
│   │   │   └── ContactForm.tsx      # Seul island React — formulaire contact
│   │   ├── layout/
│   │   │   ├── Navbar.astro         # Nav sticky — contextuelle (voir règle nav)
│   │   │   ├── Footer.astro         # Fond sombre — prop compact (voir règle footer)
│   │   │   ├── GoogleAnalytics.astro # Injection script GA4 (conditionnel)
│   │   │   └── AnalyticsEvents.astro # Tracking clics + IntersectionObserver sections
│   │   ├── pages/                   # Contenu réel des pages (reçoit lang en prop)
│   │   │   ├── HomePage.astro
│   │   │   ├── AProposPage.astro
│   │   │   └── ContactPage.astro
│   │   ├── sections/                # Sections de la homepage
│   │   │   ├── Hero.astro           # Photo, nom, tagline, dés animés
│   │   │   ├── Plateau.astro        # Timeline en cartes numérotées
│   │   │   ├── Figures.astro        # 2 projets phares (cartes grandes)
│   │   │   ├── Jetons.astro         # Compétences en pill-badges
│   │   │   ├── HorsTable.astro      # Loisirs en éventail CSS pur (flip 3D)
│   │   │   └── Formation.astro      # Formations (homepage + à-propos, prop topPadding)
│   │   └── ui/
│   │       └── SectionHeader.astro  # En-tête réutilisable (kicker + titre + sous-titre)
│   ├── content/                     # Source unique des données
│   │   ├── profile.ts               # Identité, bio, aboutParagraphs, aboutRules, formations
│   │   ├── plateau.ts               # 8 cases du plateau (PlateauCase[])
│   │   ├── figures.ts               # 2 projets phares (Figure[])
│   │   ├── skills.ts                # 3 rangées jetons (label + dotColor + skills[])
│   │   ├── hobbies.ts               # 5 loisirs (rank + suit + emoji + title + anecdote)
│   │   └── projects.ts              # Projets généraux (page contact / autres usages)
│   ├── i18n/
│   │   ├── ui.ts                    # Dictionnaire FR + EN de toutes les chaînes UI
│   │   └── utils.ts                 # getLangFromUrl(), useTranslations(), getLocalizedPath()
│   ├── layouts/
│   │   └── BaseLayout.astro         # Shell HTML — prop footerCompact
│   ├── lib/
│   │   └── utils.ts                 # cn() — clsx + tailwind-merge
│   ├── pages/                       # Routing Astro (fichiers minces, délèguent à components/pages/)
│   │   ├── index.astro
│   │   ├── a-propos.astro
│   │   ├── contact.astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   ├── a-propos.astro
│   │   │   └── contact.astro
│   │   └── api/
│   │       └── contact.ts           # POST endpoint Resend (prerender = false)
│   └── styles/
│       └── global.css               # @import tailwindcss + @theme {} (tokens)
├── public/
│   ├── cv-yoann-dexmier.pdf
│   └── favicon.svg
├── design_handoff_portfolio/        # Maquettes de référence (ne pas supprimer)
├── astro.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 📄 Sections & Contenu

### Structure homepage (ordre d'affichage)

| Section        | ID ancre      | Concept                         | Données source              |
| -------------- | ------------- | ------------------------------- | --------------------------- |
| Hero           | —             | Photo + nom + dés flottants     | `profile.ts`                |
| Le Plateau     | `#plateau`    | Timeline = plateau de jeu       | `plateau.ts`                |
| Les Figures    | `#figures`    | Projets phares = cartes grandes | `figures.ts` (PSA + Yoomap) |
| Mes Jetons     | `#jetons`     | Compétences = pill-badges       | `skills.ts`                 |
| Hors Table     | `#hors-table` | Loisirs = éventail flip 3D      | `hobbies.ts`                |
| Formation      | —             | Formations centrées             | `profile.ts` (formations[]) |
| Footer contact | `#contact`    | CTA mailto + coordonnées        | `profile.ts` + i18n         |

### Page À propos (`/a-propos`)

Ordre : Hero réduit → Bio (5 §, lettrine) → Règles du jeu (3 cartes) → Formation → Footer compact

### Pages séparées

- `/a-propos` — bio longue, règles, formations, footer compact (28px, lien /contact)
- `/contact` — formulaire ContactForm (island React `client:load`)
- `/en/*` — versions EN (même composants, `lang` différent)

---

## 🎨 Design & UX

### Direction artistique : thème jeu de cartes

- **Y♠D** — logo/monogramme avec enseigne pique
- **Le Plateau** — carrière comme plateau de jeu numéroté
- **Les Figures** — projets phares comme grandes cartes (R♠, D♦)
- **Mes Jetons** — compétences comme jetons misés
- **Hors Table** — loisirs en éventail, flip 3D au hover

### Palette exacte (tokens `global.css`)

| Token               | Valeur    | Usage                          |
| ------------------- | --------- | ------------------------------ |
| `--color-paper`     | `#f7f2e9` | Fond général                   |
| `--color-ink`       | `#2b2118` | Texte principal                |
| `--color-ink-muted` | `#6b5a48` | Texte secondaire               |
| `--color-card-bg`   | `#fffdf8` | Fond des cartes                |
| `--color-border`    | `#e4dac6` | Bordures légères               |
| `--color-red`       | `#8e3b2f` | Accents, enseignes ♥♦, kickers |
| `--color-gold`      | `#d9a441` | CTA footer, bouton doré        |
| `--color-footer-bg` | `#2b2118` | Fond footer (= ink)            |

Couleurs hors token (valeurs pixel-précises, à utiliser en arbitraire Tailwind) :

- `#cbbba5` — texte footer discret (métadonnées)
- `#8a7a63` — copyright footer (le plus discret)
- `#4a3d30` — corps de texte narratif (bio, descriptions)
- `#5c4d3d` — texte légèrement plus clair (dos de cartes HorsTable, règles)
- `#c9b89e` — bordures légères de jetons/chips

### Comportement de la Navbar

- **Homepage** : liens de section `[Le plateau | Les figures | Mes jetons | Hors table | À propos]`
- **Autres pages** : liens simplifiés `[Accueil | À propos]`
- Sur une page non-homepage, les ancres sont préfixées : `/#plateau`, `/#figures`, etc. (via `anchorHref()`)

### Footer — variantes

- **Full (homepage)** : `id="contact"`, `scroll-margin-top: 70px`, padding 70px, titre 34px, sous-titre, CTA `mailto:`, copyright "fait en coopération avec IA."
- **Compact (À propos)** : pas de `id`, padding 56px, titre 28px, pas de sous-titre, CTA → `/contact`, pas de copyright
- Contrôlé par `<BaseLayout footerCompact={true}>` → `<Footer compact={true}>`

### Composant SectionHeader

Réutilisable pour toutes les sections. Props : `kicker`, `title`, `subtitle?`.

- Kicker : Archivo 600, 13px, uppercase, letter-spacing 4px, `text-red`
- Titre H2 : Young Serif 30px, `text-ink`
- Sous-titre : Georgia 14px, `#8a7a63`

### Éventail HorsTable (CSS pur)

- Fan de 5 cartes avec transforms d'éventail passés en **inline style** (via index)
- Hover : `translateY(-14px) rotate(0deg) !important` (nécessite `!important` pour écraser l'inline style)
- Flip 3D : `perspective`, `transform-style: preserve-3d`, `backface-visibility: hidden` via classes Tailwind arbitraires
- `group`/`group-hover` Tailwind pour déclencher le flip sur `.mini-in` depuis le hover `.mini`
- `prefers-reduced-motion` : `motion-reduce:transition-none`

---

## 🌐 Internationalisation

- **Ne jamais hardcoder de texte** dans les composants — utiliser `t('clé')` systématiquement
- Toute nouvelle clé doit être ajoutée dans `src/i18n/ui.ts` en FR **et** EN simultanément
- La langue est détectée via `getLangFromUrl(Astro.url)` dans les pages de routing
- Les composants reçoivent `lang` en prop depuis les pages de routing

---

## 📊 Analytics (Google Analytics 4)

### Architecture

| Composant                                     | Rôle                                                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/layout/GoogleAnalytics.astro` | Injecte le script GA4 dans le `<head>` via `BaseLayout.astro` — conditionnel : inactif si `PUBLIC_GA_MEASUREMENT_ID` n'est pas défini |
| `src/components/layout/AnalyticsEvents.astro` | Script Astro (bundlé) : tracking des clics via `data-ga` + Intersection Observer pour les sections                                    |

### Événements custom trackés

| Événement GA4         | Déclencheur                                           | Paramètre clé                              |
| --------------------- | ----------------------------------------------------- | ------------------------------------------ |
| `file_download`       | Clic sur lien CV (`data-ga="cv_download"`)            | `file_name`, `link_text: "navbar"\|"hero"` |
| `click` (outbound)    | Clic LinkedIn (`data-ga="linkedin_click"`)            | `event_category: "outbound"`               |
| `click` (contact)     | Clic mailto (`data-ga="email_click"`)                 | `event_category: "contact"`                |
| `section_view`        | Scroll ≥ 30 % sur une section trackée, une seule fois | `section_id`                               |
| `contact_form_submit` | Soumission formulaire — succès uniquement             | `event_category: "contact"`                |
| Page views            | Automatique via GA4                                   | —                                          |

### Sections observées par l'IntersectionObserver

`plateau` · `figures` · `jetons` · `hors-table` · `contact`

### Convention data-ga

- `data-ga="<action>"` — sur l'élément cliquable, déclenche le tracking
- `data-ga-label="<contexte>"` — précision optionnelle (ex: `"hero"`, `"navbar"`, `"footer_cta"`)
- Tout nouvel élément à tracker doit utiliser cette convention plutôt qu'un script inline

### Règle : ne pas utiliser window.gtag directement dans les composants

Sauf dans `ContactForm.tsx` (island React) où `window.gtag?.()` est inévitable. Pour tout autre élément, ajouter `data-ga` et laisser `AnalyticsEvents.astro` gérer.

---

## 🔍 SEO

Props de `BaseLayout.astro` :

```astro
<BaseLayout title={t('meta.home.title')} description={t('meta.home.description')} />
```

Clés dans `src/i18n/ui.ts` : `meta.home.title`, `meta.home.description`, `meta.about.description`, `meta.contact.description`.

---

## ⚙️ Variables d'environnement

```
RESEND_API_KEY=xxx              # Requis pour l'endpoint /api/contact
PUBLIC_GA_MEASUREMENT_ID=G-XXX # Optionnel — Google Analytics 4 (voir section Analytics)
```

---

## 🚀 Commandes

```bash
pnpm dev          # Serveur de développement (http://localhost:4321)
pnpm build        # Build production
pnpm preview      # Prévisualiser le build
pnpm type-check   # Vérification TypeScript via astro check
pnpm format       # Formatage Prettier (inclut .astro)
```

---

## 📋 Règles pour Claude Code

### À toujours faire

- TypeScript strict, jamais `any`
- **Toujours utiliser `t('clé')`** pour les textes — aucun string en dur dans les composants
- Ajouter toute nouvelle clé dans `src/i18n/ui.ts` en FR et EN simultanément
- Toutes les données viennent de `src/content/` — jamais hardcodées dans les composants
- `aria-*` sur tous les éléments interactifs
- `alt` sur toutes les images
- `motion-reduce:transition-none` ou `@media (prefers-reduced-motion: reduce)` sur toute transition/animation
- **Tailwind-first** : utiliser les classes Tailwind (y compris arbitraires `text-[13.5px]`, `leading-[1.65]`, `max-[760px]:`) avant de recourir à un bloc `<style>`

### Quand utiliser un bloc `<style>` scoped

Uniquement pour les cas **impossibles** en Tailwind :

- `::first-letter`, `::before`, `::after` (pseudo-éléments avec contenu ou float)
- `!important` pour écraser un **inline style** (ex: hover qui override un `style=` d'éventail)
- Sélecteurs parents-enfants dynamiques non couverts par `group-hover` (rare)

Jamais pour : couleurs, fonts, espacements, responsive, hover simples — tout ça se fait en classes Tailwind.

### À ne jamais faire

- `any` en TypeScript
- Texte en dur dans un composant
- Créer un island React pour quelque chose faisable en CSS ou Astro pur
- `<script>` inline dans les composants Astro (sauf `GoogleAnalytics.astro` et `AnalyticsEvents.astro` qui sont des composants d'infrastructure dédiés)
- Appeler `window.gtag()` directement dans un composant — utiliser `data-ga` à la place (sauf `ContactForm.tsx`)
- Dupliquer la logique de langue — toujours passer `lang` en prop depuis les pages de routing
- Apostrophes non-échappées dans les strings TypeScript (`'`, utiliser `"` ou échapper)

### Convention de commits

```
feat: ajout section projets
fix: correction accessibilité header
style: ajustement espacements hero
perf: optimisation images projets
a11y: ajout aria-labels navigation
i18n: ajout traduction EN section jetons
```

---

## 🎯 Objectif du portfolio

1. **Attirer des recruteurs** en CDI dans des entreprises françaises (fintech, grandes entreprises, secteur public) autour de Paris / Noisy-le-Grand ou en remote
2. **Démontrer l'expertise** React, accessibilité, qualité frontend et intégration IA — le portfolio lui-même est une preuve de compétence

Le ton est **professionnel mais humain** — empathie, rigueur, esprit d'équipe, envie de s'inscrire dans la durée.
