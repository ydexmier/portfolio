import { projects } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            number="03"
            title="Projets"
            description="Contexte → Problème → Solution → Stack → Résultat."
          />
        </Reveal>
        <div>
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
