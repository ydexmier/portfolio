import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 font-mono text-xs text-muted lg:px-16">
      <p>
        Conçu et codé par {profile.name}. Next.js · Tailwind CSS · Motion. © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
