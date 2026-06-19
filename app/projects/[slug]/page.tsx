import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

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
      <Container className="max-w-3xl">
        <Link href="/projects" className="text-sm text-muted hover:text-foreground">
          ← Tous les projets
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <span className="text-4xl" aria-hidden="true">
            {project.emoji}
          </span>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-1 text-muted">
              {project.company} · {project.period}
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Contexte</h2>
            <p className="mt-2 leading-relaxed">{project.context}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Problème</h2>
            <p className="mt-2 leading-relaxed">{project.challenge}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Solution / Rôle
            </h2>
            <p className="mt-2 leading-relaxed">{project.role}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Résultat</h2>
            <p className="mt-2 leading-relaxed">{project.impact}</p>
          </section>
        </div>
      </Container>
    </article>
  );
}
