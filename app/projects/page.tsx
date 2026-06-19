import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = buildMetadata({
  title: "Projets",
  description: "Études de cas frontend : PSA, La Ruche qui dit Oui, Questel, Yoomap.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="03"
          title="Études de cas"
          description="Contexte → Problème → Solution → Stack → Résultat."
        />
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
