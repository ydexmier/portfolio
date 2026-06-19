"use client";

import { useTheme } from "@/components/layout/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      aria-pressed={isDark}
      className="font-mono text-xs text-muted transition-colors hover:text-accent"
    >
      {isDark ? "☀ clair" : "● sombre"}
    </button>
  );
}
