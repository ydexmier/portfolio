import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading number="01" title="À propos" />
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-[3fr_2fr]">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-foreground">{profile.aboutText}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
              {profile.aboutValues.join(" / ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={profile.cvUrl} variant="secondary">
                Télécharger mon CV
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Formations</h3>
            <ul className="mt-4 space-y-4">
              {profile.formations.map((formation) => (
                <li key={formation.degree}>
                  <p className="text-sm font-medium">{formation.degree}</p>
                  <p className="text-sm text-muted">{formation.school}</p>
                  <p className="font-mono text-xs text-muted">{formation.period}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-wider text-muted">
              Centres d&apos;intérêt
            </h3>
            <p className="mt-3 text-sm text-muted">{profile.interests.join(" · ")}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
