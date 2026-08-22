import type { Metadata } from "next";
import { profile, isMissing } from "@/content/profile";

const siteUrl = isMissing(profile.siteUrl) ? "https://example.com" : profile.siteUrl;

// Absolute OG image URL under the deployed subpath. Built explicitly so it does
// not get resolved against the bare origin (which would drop /portfolio-website).
const ogImageUrl = `${siteUrl}/og.svg`;

const description =
  "Bennyhinn — engineering student working across AI security, blockchain data-protection, and web security. Selected projects, research, and case studies.";

export const baseMetadata: Metadata = {
  // Trailing slash keeps any relative metadata resolution inside the subpath.
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.preferredName}`,
  },
  description,
  keywords: [
    "Bennyhinn",
    "cybersecurity",
    "AI security",
    "adversarial machine learning",
    "blockchain",
    "GNDEC Bidar",
    "VTU",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: `${profile.name} — Portfolio`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${profile.name} — ${profile.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

/** Person + relevant JSON-LD built from real data only. */
export function personJsonLd() {
  const sameAs: string[] = [profile.links.github, profile.links.linkedin];
  if (!isMissing(profile.links.tryhackme)) sameAs.push(profile.links.tryhackme);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.preferredName,
    email: `mailto:${profile.links.email}`,
    url: siteUrl,
    jobTitle: profile.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: `${profile.education.college}, ${profile.education.university}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bidar",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs,
  };
}
