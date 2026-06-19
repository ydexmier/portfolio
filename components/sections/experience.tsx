import Link from "next/link";
import { experience } from "@/content/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading number="04" title="Parcours" />
        </Reveal>
        <ol className="divide-y divide-border border-y border-border">
          {experience.map((item, index) => (
            <Reveal key={`${item.period}-${item.company}`} delay={index * 0.05}>
              <li className="grid gap-1 py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8">
                <span className="font-mono text-xs text-muted">{item.period}</span>
                <div>
                  <h3 className="text-base font-medium">
                    {item.slug ? (
                      <Link href={`/projects/${item.slug}`} className="hover:text-accent">
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-sm text-muted">
                    {item.company} · {item.duration}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
