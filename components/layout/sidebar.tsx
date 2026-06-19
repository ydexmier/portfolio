"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Sidebar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const currentActive = pathname.startsWith("/projects")
    ? "projects"
    : pathname === "/contact"
      ? "contact"
      : activeId;

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[340px] flex-col justify-between border-r border-border px-10 py-14 lg:flex">
      <div>
        <Link href="/" className="font-serif-display block text-2xl font-medium leading-tight">
          {profile.name}
        </Link>
        <p className="mt-2 text-sm font-medium text-accent">{profile.subtitle}</p>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
          Je fais le lien entre enjeux métier et expérience utilisateur. {profile.experienceYears}{" "}
          ans à construire des interfaces qui durent.
        </p>

        <nav aria-label="Navigation principale" className="mt-14">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = currentActive === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-sm"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={
                        "font-mono text-xs transition-colors " +
                        (isActive ? "text-accent" : "text-muted group-hover:text-accent")
                      }
                    >
                      {item.number}
                    </span>
                    <span
                      className={
                        "transition-colors " +
                        (isActive
                          ? "font-medium text-foreground"
                          : "text-muted group-hover:text-foreground")
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex gap-5 text-sm text-muted">
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
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              Email
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </aside>
  );
}
