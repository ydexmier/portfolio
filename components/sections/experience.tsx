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
          <SectionHeading eyebrow="Expérience" title="Parcours" />
        </Reveal>
        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((item, index) => (
            <Reveal key={`${item.period}-${item.company}`} delay={index * 0.08}>
              <li className="relative">
                <span
                  className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-accent">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {item.slug ? (
                    <Link href={`/projects/${item.slug}`} className="hover:underline">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-sm text-muted">
                  {item.company} · {item.duration}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
