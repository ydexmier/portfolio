import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-border py-8 transition-colors first:pt-0 hover:bg-surface"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="font-mono text-xs text-muted">{project.period}</span>
          <h3 className="font-serif-display mt-1 text-xl font-medium group-hover:text-accent">
            {project.emoji} {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.company}</p>
        </div>
        <p className="font-mono text-xs text-muted sm:max-w-[14rem] sm:text-right">
          {project.stack.slice(0, 4).join(" / ")}
        </p>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{project.challenge}</p>
    </Link>
  );
}
