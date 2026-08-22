import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "./MobileNav";

const NAV = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          aria-label={`${profile.preferredName} — home`}
        >
          {profile.preferredName}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-label uppercase tracking-widest text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="font-mono text-label uppercase tracking-widest text-ink transition-colors hover:text-accent"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
