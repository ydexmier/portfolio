import Link from "next/link";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

const navLinks = [
  { href: "/#about", label: "À propos" },
  { href: "/#skills", label: "Compétences" },
  { href: "/projects", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
