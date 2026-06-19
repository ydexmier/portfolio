import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug } from "@/content/projects";
import { Container } from "@/components/ui/container";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Projet introuvable" });

  return buildMetadata({
    title: project.title,
    description: project.challenge,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 sm:py-28">
      <Container>
        <Link href="/projects" className="font-mono text-xs text-muted hover:text-accent">
          ← Tous les projets
        </Link>

        <div className="mt-6">
          <span className="font-mono text-xs text-muted">{project.period}</span>
          <h1 className="font-serif-display mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
            {project.emoji} {project.title}
          </h1>
          <p className="mt-2 text-muted">{project.company}</p>
        </div>

        <div className="mt-10 space-y-8 divide-y divide-border">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Contexte</h2>
            <p className="mt-2 leading-relaxed">{project.context}</p>
          </section>
          <section className="pt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Problème</h2>
            <p className="mt-2 leading-relaxed">{project.challenge}</p>
          </section>
          <section className="pt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
              Solution / Rôle
            </h2>
            <p className="mt-2 leading-relaxed">{project.role}</p>
          </section>
          <section className="pt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Stack</h2>
            <p className="mt-2 text-sm text-muted">{project.stack.join(" / ")}</p>
          </section>
          <section className="pt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Résultat</h2>
            <p className="mt-2 leading-relaxed">{project.impact}</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
