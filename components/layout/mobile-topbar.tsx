"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function MobileTopbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur lg:hidden">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/" className="font-serif-display text-lg font-medium">
            {profile.name}
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="flex h-9 w-9 items-center justify-center text-foreground"
            >
              <span aria-hidden="true" className="font-mono text-sm">
                {open ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav-menu"
          aria-label="Navigation principale"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background px-6 py-6 lg:hidden"
        >
          <ul className="space-y-5">
            {navItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{item.number}</span>
                <Link href={item.href} onClick={() => setOpen(false)} className="text-base">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex gap-5 text-sm text-muted">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
