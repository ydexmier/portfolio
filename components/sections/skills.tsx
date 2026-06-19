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
            number="02"
            title="Compétences"
            description="Du développement frontend au workflow assisté par IA."
          />
        </Reveal>
        <dl className="divide-y divide-border border-y border-border">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06}>
              <div className="grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {category.title}
                </dt>
                <dd className="text-sm leading-relaxed">{category.skills.join(" / ")}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
