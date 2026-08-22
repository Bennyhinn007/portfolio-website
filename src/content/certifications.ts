/**
 * Certifications. Years and official credential links supplied by Benny.
 */

export interface Certification {
  name: string;
  shortName: string;
  issuer: string;
  /** Year if confirmed. */
  year?: string;
  /** Official verification link, when provided. */
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Certified Ethical Hacker (CEH v13)",
    shortName: "CEH v13",
    issuer: "EC-Council",
    year: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1WWnj_wt9EC_JLBzwSsGd5X7PN5Q8-J8j/view?usp=drive_link",
  },
  {
    name: "Certified LLM Security Expert (CLLMSE)",
    shortName: "CLLMSE",
    issuer: "Red Team Leaders",
    year: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1gS80-NeYycCqjd-ukDYnPHjaF94bT2WN/view?usp=sharing",
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    shortName: "OCI Foundations",
    issuer: "Oracle",
    year: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/111x17vbZeSSwheOryeuqR0j-5GlWtMFT/view?usp=drive_link",
  },
  {
    name: "Generative AI Certificate",
    shortName: "Generative AI",
    issuer: "Microsoft × LinkedIn",
    year: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1lrNZOaDKv-errKlrsJZ6sFWw3Q6qN1wR/view?usp=drive_link",
  },
  {
    name: "Certified Online Fraud Prevention Specialist (COFPS)",
    shortName: "COFPS",
    issuer: "Hack and Tricks Academy",
    year: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1zdrumDT50cnSaGkS6VSo-AA_W_z7B7U7/view?usp=drive_link",
  },
  {
    name: "Introduction to Cybersecurity",
    shortName: "Intro to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1ipAZ3SRFxP_DwB4ByR4SEW5XopwA6uxm/view?usp=drive_link",
  },
  {
    name: "Linux Unhatched",
    shortName: "Linux Unhatched",
    issuer: "Cisco Networking Academy",
    year: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1jFwZHXgYbzsOCEA18UZ3WDgTsgfbYw-K/view?usp=drive_link",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    shortName: "Postman API Fundamentals",
    issuer: "Postman",
    year: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/1BWR-UmYkBY4LFBQVC_OK27hS-m16dZ4m/view?usp=drive_link",
  },
];
