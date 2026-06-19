import Link from "next/link";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-2xl border border-border bg-surface p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="text-3xl" aria-hidden="true">
        {project.emoji}
      </span>
      <h3 className="mt-4 text-lg font-semibold group-hover:text-accent">{project.title}</h3>
      <p className="mt-1 text-sm text-muted">
        {project.company} · {project.period}
      </p>
      <p className="mt-3 text-sm text-muted">{project.challenge}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Link>
  );
}
