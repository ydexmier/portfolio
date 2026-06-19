import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="À propos" title="Qui je suis" />
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground">{profile.aboutText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.aboutValues.map((value) => (
                <Badge key={value}>{value}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={profile.cvUrl} variant="secondary">
                Télécharger mon CV
              </Button>
              <Button href={profile.linkedin} variant="secondary">
                LinkedIn
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Formations
              </h3>
              <ul className="mt-4 space-y-4">
                {profile.formations.map((formation) => (
                  <li key={formation.degree}>
                    <p className="font-medium">{formation.degree}</p>
                    <p className="text-sm text-muted">{formation.school}</p>
                    <p className="text-sm text-muted">{formation.period}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">
                Centres d&apos;intérêt
              </h3>
              <p className="mt-2 text-sm text-muted">{profile.interests.join(" · ")}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
