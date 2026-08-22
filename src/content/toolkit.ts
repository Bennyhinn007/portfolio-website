/**
 * Toolkit — grouped by capability. Shown as evidence, never as percentages.
 * Only technologies confirmed by Benny are listed.
 */

export interface ToolkitGroup {
  title: string;
  /** Optional short framing sentence. */
  note?: string;
  items: string[];
}

export const toolkit: ToolkitGroup[] = [
  {
    title: "Programming",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Cybersecurity",
    note: "Practised across two internships and hands-on lab work.",
    items: [
      "Ethical Hacking",
      "Penetration Testing",
      "VAPT",
      "Web Security",
      "Network Security",
      "Vulnerability Assessment",
      "SIEM",
      "Incident Response",
      "Threat Detection",
      "OWASP Top 10",
      "Digital Forensics",
      "AI Security",
      "LLM Security",
    ],
  },
  {
    title: "Security Tools",
    items: [
      "Nmap",
      "Burp Suite",
      "Wireshark",
      "Metasploit",
      "Nessus",
      "OWASP ZAP",
      "Shodan",
      "Gophish",
      "Splunk",
      "Amass",
      "Netcat",
      "John the Ripper",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "Scikit-learn",
      "MobileNetV2",
      "CIFAR-10",
      "FGSM",
      "PGD",
      "Adversarial Training",
      "Feature Squeezing",
      "Median Filtering",
      "JPEG Compression",
      "Generative AI",
      "LLM Security",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Ethereum",
      "Ganache",
      "Smart Contracts",
      "Redactable Blockchain",
      "Chameleon Hashing",
      "AES",
      "SHA-256",
    ],
  },
  {
    title: "Development",
    items: ["React", "Next.js", "Flask", "Vite", "Tailwind CSS", "Streamlit"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, VPC, IAM, S3, CloudTrail, Security Groups)",
      "Vercel",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "CI/CD",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Operating Systems",
    items: ["Kali Linux", "Ubuntu", "Windows"],
  },
];
