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
          <SectionHeading number="05" title="Contact" description={profile.contactMessage} />
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-[3fr_2fr]">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              Coordonnées directes
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className="hover:text-accent">
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <p className="mt-6 font-mono text-xs text-muted">
              {profile.location} · {profile.availability}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
