import { skillCategories } from "@/content/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Compétences"
            title="Ce que je maîtrise"
            description="Du développement frontend au workflow assisté par IA."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold">{category.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
