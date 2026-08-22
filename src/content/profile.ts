/**
 * Single source of truth for identity + links.
 * Update these values as confirmed information arrives.
 * Fields marked NEEDS_INPUT render as clearly-labelled placeholders in the UI
 * and are hidden from public metadata until filled.
 */

export const NEEDS_INPUT = "NEEDS_INPUT" as const;

export type MaybeMissing = string | typeof NEEDS_INPUT;

export const profile = {
  // Display name used across the UI (nav, footer, hero, prose).
  name: "Bennyhinn",
  preferredName: "Bennyhinn",
  role: "Engineering Student — IoT & Cybersecurity, Blockchain, AI",
  // Positioning line, written from real work — not marketing filler.
  positioning:
    "I build security-focused systems, then try to break them — across AI robustness, blockchain data-protection, and web security.",
  education: {
    degree: "B.E. Computer Science & Engineering",
    college: "Guru Nanak Dev Engineering College (GNDEC), Bidar",
    university: "Visvesvaraya Technological University (VTU)",
    graduation: "2027",
    gpa: "8.7",
  },
  location: "Bidar, Karnataka, India",

  links: {
    github: "https://github.com/Bennyhinn007",
    linkedin: "https://www.linkedin.com/in/bennyhinn29/",
    email: "bennysangnalkar@gmail.com",
    tryhackme: "https://tryhackme.com/p/bennyhinn" as MaybeMissing,
  },

  // Deployed origin — used for canonical URLs, sitemap, OG.
  siteUrl: "https://bennyhinn.dev" as MaybeMissing,
} as const;

export function isMissing(value: MaybeMissing): boolean {
  return value === NEEDS_INPUT;
}
