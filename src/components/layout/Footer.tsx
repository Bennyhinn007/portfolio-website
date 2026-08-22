import Link from "next/link";
import { profile, isMissing } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-wide px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl text-ink">
              {profile.preferredName}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">{profile.role}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-label uppercase tracking-widest text-muted">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`} className="hover:text-accent">
              Email
            </a>
            {!isMissing(profile.links.tryhackme) ? (
              <a href={profile.links.tryhackme} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                TryHackMe
              </a>
            ) : null}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. Built with Next.js.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
