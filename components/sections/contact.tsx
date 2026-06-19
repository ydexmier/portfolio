import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            description={profile.contactMessage}
          />
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-6 text-sm">
              <p className="font-medium">Coordonnées directes</p>
              <ul className="mt-4 space-y-2 text-muted">
                <li>
                  <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${profile.phone}`} className="hover:text-foreground">
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-muted">
                {profile.location} · {profile.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
