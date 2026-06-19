"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "À propos" },
  { href: "/#skills", label: "Compétences" },
  { href: "/projects", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      {open ? (
        <nav
          id="mobile-nav-menu"
          aria-label="Navigation principale"
          className="absolute left-0 top-16 w-full border-b border-border bg-background px-6 py-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
