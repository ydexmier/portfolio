import type { Metadata } from "next";

export const siteConfig = {
  name: "Yoann Dexmier",
  title: "Yoann Dexmier — Développeur Frontend Senior React",
  description:
    "Portfolio de Yoann Dexmier, développeur Frontend Senior spécialisé React/TypeScript. 10 ans d'expérience sur des projets à fort trafic.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoanndexmier.dev",
  keywords: ["développeur frontend", "React", "TypeScript", "Next.js", "Paris", "Noisy-le-Grand"],
};

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
