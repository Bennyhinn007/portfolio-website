/**
 * Experience timeline. Represents student experience honestly.
 * Role and scope taken directly from Benny's supplied information.
 */

export interface Experience {
  role: string;
  organization: string;
  period?: string; // NEEDS_INPUT: dates
  /** Bullet points of actual work done. */
  contributions: string[];
  /** Slugs of related projects (links the timeline to real deliverables). */
  relatedProjects?: string[];
}

export const experience: Experience[] = [
  {
    role: "Cybersecurity Intern",
    organization: "Thiranex",
    period: "May 2026 – Jun 2026",
    contributions: [
      "Built a Password Strength Analyzer to evaluate complexity and recommend stronger passwords.",
      "Developed a Vulnerability Scanner to identify security weaknesses and generate assessment reports.",
      "Built an ML-based Phishing Email Detection model using Scikit-learn.",
      "Designed a Secure Login System with password hashing, input validation, and SQL-injection protection.",
    ],
    relatedProjects: [
      "password-strength-analyzer",
      "vulnerability-scanner",
      "phishing-email-detection",
      "secure-login-system",
    ],
  },
  {
    role: "Cybersecurity Intern",
    organization: "Future Interns",
    period: "Jun 2025 – Jul 2025",
    contributions: [
      "Conducted VAPT on 10+ web applications and network services.",
      "Identified OWASP Top 10 vulnerabilities — SQL Injection, XSS, and misconfigurations — with remediation recommendations.",
    ],
  },
];
