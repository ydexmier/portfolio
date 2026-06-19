import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
