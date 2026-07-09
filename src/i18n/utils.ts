import { ui, type Lang } from './ui'

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  if (first === 'en') return 'en'
  return 'fr'
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['fr']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui['fr'] as Record<string, string>)[key]
  }
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'fr') return path
  return `/en${path === '/' ? '' : path}`
}
