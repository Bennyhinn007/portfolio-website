"use client";

import { useEffect, useState } from "react";

/**
 * Light/dark toggle. One cohesive design — only CSS variables change.
 * Persists to localStorage; respects system preference on first visit.
 * The inline script in <head> (see layout) sets the class before paint to
 * avoid a flash, so this component only handles interaction after hydration.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable; non-critical */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
      className="inline-flex h-9 items-center gap-2 rounded-sm border border-hairline px-2.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-accent" />
      {theme ?? "theme"}
    </button>
  );
}
