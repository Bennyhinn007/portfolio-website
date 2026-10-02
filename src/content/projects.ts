/**
 * Project data — source of truth for the project index and case-study pages.
 * All narrative content is drawn from the actual repository READMEs.
 * Results that are author-reported/illustrative are explicitly marked so.
 * To add a project: append an entry. To promote it: change `tier`.
 */

export type ProjectTier = "flagship" | "major" | "supporting" | "foundational";
export type Domain = "AI Security" | "Blockchain" | "Web Security" | "SOC / Blue Team" | "Full-Stack" | "Foundations";

export interface CaseStudyBlock {
  heading: string;
  /** Paragraphs of prose. Use **bold** sparingly for emphasis. */
  body: string[];
  /** Optional monospace notation block (real equations/config only). */
  note?: { label: string; lines: string[] };
}

export interface ResultRow {
  scenario: string;
  values: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Short label shown in lists. */
  shortTitle: string;
  tier: ProjectTier;
  domain: Domain;
  /** One-line summary — plain, no marketing language. */
  summary: string;
  year: string;
  repo?: string;
  demo?: string;
  /** True when this is a team effort; credited honestly. */
  team?: string;
  /** Context tag, e.g. internship or hackathon. */
  context?: string;
  stack: string[];
  /** Case-study content — only present for flagship/major projects. */
  caseStudy?: {
    tagline: string;
    blocks: CaseStudyBlock[];
    results?: {
      columns: string[];
      rows: ResultRow[];
      disclaimer: string;
    };
    limitations: string[];
    futureWork: string[];
    /** Screenshots. Empty until real assets are supplied. */
    media: { src: string; alt: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "dpdp-redactable-blockchain",
    title: "DPDP-Compliant Redactable Blockchain Healthcare System",
    shortTitle: "DPDP Redactable Blockchain",
    tier: "flagship",
    domain: "Blockchain",
    summary:
      "A healthcare data platform that reconciles blockchain immutability with India's DPDP right-to-erasure using Chameleon Hash-based authorized redaction.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/DPDP-Compliant-Blockchain-Based-Personal-Data-Protection-and-Consent-Management-System",
    stack: [
      "Flask 3",
      "Python 3.11",
      "React 18",
      "TypeScript",
      "MongoDB 7",
      "Ethereum (Ganache)",
      "Web3.py",
      "AES-256-GCM",
      "Chameleon Hashing",
      "JWT / bcrypt",
      "Docker Compose",
    ],
    caseStudy: {
      tagline:
        "Blockchains are designed to be unchangeable. Data-protection law requires that personal data can be corrected and erased. This system resolves that contradiction.",
      blocks: [
        {
          heading: "Problem",
          body: [
            "India's Digital Personal Data Protection Act (2023) grants individuals the right to correct and erase their personal data. Traditional blockchains guarantee the opposite: once written, records cannot change. A healthcare system that anchors records on-chain for integrity therefore appears fundamentally incompatible with DPDP compliance.",
            "The core question: **can you keep verifiable, tamper-evident records and still honour a legal right to erasure?**",
          ],
        },
        {
          heading: "Approach",
          body: [
            "The system uses a **Chameleon Hash Function** to enable authorized redaction. A chameleon hash lets a holder of a secret trapdoor find a controlled hash collision — meaning an authorized party can rewrite specific data while the chain's hash links remain valid. Unauthorized modification remains computationally infeasible.",
            "This is paired with a **dual integrity model**: a hash-chained audit trail plus blockchain anchoring on Ethereum (Ganache), so every correction and erasure leaves a verifiable proof.",
          ],
          note: {
            label: "Integrity model",
            lines: [
              "hash-chained audit log  →  SHA-256 links",
              "on-chain anchor         →  Ganache (Ethereum) via Web3.py",
              "authorized redaction    →  Chameleon Hash trapdoor",
            ],
          },
        },
        {
          heading: "Architecture",
          body: [
            "A React + TypeScript frontend talks to a Flask API behind a gateway layer that enforces rate limiting, JWT validation, and role-based access control. Nine backend services separate concerns: auth, patients, consent, doctors, audit, encryption, blockchain, chameleon hash, and compliance.",
            "Personally identifiable data is encrypted field-level with AES-256 (Fernet) before it reaches MongoDB. Doctor access to records is **consent-gated** — role permissions alone are not enough; an active, purpose-limited patient consent must exist.",
          ],
        },
        {
          heading: "Implementation",
          body: [
            "The API exposes DPDP-mapped endpoints: consent grant/withdraw, record correction, record erasure, integrity verification, audit timeline, and a live compliance score. Corrections and erasures run through the chameleon hash workflow so the on-chain anchor stays consistent.",
            "The build includes **80+ automated tests** covering auth, encryption, blockchain, consent, audit, and the chameleon hash integration, plus Swagger/OpenAPI documentation. Design documentation lives in the repository's spec folder.",
          ],
        },
        {
          heading: "DPDP Act mapping",
          body: [
            "Each feature maps to a specific DPDP obligation: consent management (Sec 5-6), right to access (Sec 11), right to correction and erasure (Sec 12), security safeguards (Sec 8(4)), and breach-notification support via a severity-tagged audit trail (Sec 8(6)). The compliance service surfaces a real-time score so the mapping is observable, not just claimed.",
          ],
        },
      ],
      limitations: [
        "Blockchain runs on Ganache (local Ethereum) — a development chain, not a production network.",
        "Chameleon Hash redaction is implemented as a working demonstration of the mechanism, intended for evaluation rather than clinical deployment.",
        "Demo data and seed accounts ship with the repo for evaluation and are not real records.",
      ],
      futureWork: [
        "Migrate the anchor from Ganache to a permissioned production chain.",
        "Formal threat modelling of the trapdoor key custody.",
        "Independent security review of the redaction workflow.",
      ],
      media: [
        {
          src: "/projects/dpdp-compliance-dashboard.png",
          alt: "DPDP Health DPO Command Center dashboard showing a 100 out of 100 DPDP compliance score, counts for total patients, health records, active consents, blockchain anchors, audit events, and registered users, plus a rights-requests panel for corrections, erasures, and redacted records.",
        },
        {
          src: "/projects/dpdp-user-intelligence.png",
          alt: "DPDP Health Identity Governance and User Intelligence screen with user role counts, a role distribution chart, platform activity metrics for records, consents, anchors, corrections, and erasures, and an identity risk assessment section.",
        },
        {
          src: "/projects/dpdp-profile-security.png",
          alt: "DPDP Health user profile page showing identity details and a security status panel listing JWT (HS256) authentication, AES-256 encryption, India data residency, and MFA status.",
        },
        {
          src: "/projects/dpdp-signin.png",
          alt: "DPDP Healthcare Platform sign-in screen labelled secure, consent-driven health data management, with a note that the platform is DPDP Act compliant with data residency in India.",
        },
      ],
    },
  },
  {
    slug: "adversarial-ai-vs-defence",
    title: "RakshaNet — Adversarial AI Attack & Defence Simulator",
    shortTitle: "RakshaNet — Adversarial AI Attack & Defence Simulator",
    tier: "flagship",
    domain: "AI Security",
    summary:
      "An interactive simulator for running adversarial attacks (FGSM, PGD) against image classifiers and evaluating how defence mechanisms recover robustness.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Adversarial-AI-vs-Defence-Simulator",
    stack: [
      "Python",
      "PyTorch",
      "Streamlit",
      "MobileNetV2",
      "CIFAR-10",
      "NumPy",
      "FGSM",
      "PGD",
      "Adversarial Training",
      "Feature Squeezing",
      "Median Filtering",
      "JPEG Compression",
    ],
    caseStudy: {
      tagline:
        "State-of-the-art image models can be fooled by perturbations invisible to the human eye. This simulator makes that failure — and its defences — measurable.",
      blocks: [
        {
          heading: "Why adversarial attacks matter",
          body: [
            "A machine learning model can be reduced from near-perfect accuracy to near-random by adding a small, carefully computed perturbation to its input. The altered image looks identical to a person, but the model misclassifies it with high confidence.",
            "This is not a theoretical curiosity. Any system that trusts a model's output — content filtering, biometric checks, autonomous perception — inherits this vulnerability. Understanding attack and defence is prerequisite to building AI that can be relied on.",
          ],
        },
        {
          heading: "Problem definition & threat model",
          body: [
            "The simulator frames the problem as **Red team vs Blue team**. The Red side crafts adversarial examples to maximise a classifier's loss; the Blue side applies defences to detect or neutralise them. An evaluation engine scores each round on clean accuracy, accuracy under attack, and accuracy after defence.",
            "The threat model assumes a white-box attacker with gradient access — the standard, strongest first-order setting used to stress-test robustness.",
          ],
        },
        {
          heading: "Attacks — FGSM and PGD",
          body: [
            "**FGSM (Fast Gradient Sign Method)** is the foundational single-step attack: it nudges every pixel in the direction that increases the model's loss. Cheap and fast.",
            "**PGD (Projected Gradient Descent)** is the iterative form — multiple small steps, each projected back inside an epsilon-ball around the original image. It is considered the strongest first-order attack and is far harder to defend against.",
          ],
          note: {
            label: "Attack formulation",
            lines: [
              "FGSM:  x_adv = x + ε · sign(∇x J(θ, x, y))",
              "PGD :  x_{t+1} = Π_{x+S}( x_t + α · sign(∇x J) )",
            ],
          },
        },
        {
          heading: "Defences",
          body: [
            "Four defences are implemented, spanning preprocessing and training-time hardening: **Feature Squeezing** (reduce input precision/colour depth to collapse adversarial perturbations), **Median Filtering** (smooth out pixel-level noise before inference), **JPEG Compression** (lossy re-encoding that discards high-frequency adversarial signal), and **PGD Adversarial Training** (train directly on adversarial examples so robustness is built into the weights).",
            "The attack and defence stages are modular, so new techniques can be dropped in without touching the evaluation core.",
          ],
        },
        {
          heading: "My role",
          body: [
            "I implemented the FGSM and PGD attacks, the Feature Squeezing, Median Filtering, and JPEG Compression defences, and PGD adversarial training. I built the Streamlit interface and integrated the complete attack/defence pipeline end to end.",
          ],
        },
        {
          heading: "Evaluation pipeline",
          body: [
            "Each experiment runs a fixed sequence: train a baseline on clean data, generate adversarial examples at a chosen epsilon, apply a defence, then score the round. This isolates the effect of each attack/defence pairing.",
          ],
          note: {
            label: "Pipeline",
            lines: [
              "1  train baseline on clean data",
              "2  adversary generates examples (FGSM / PGD, tunable ε)",
              "3  apply defence (feature squeeze / median / JPEG / adv-train)",
              "4  score: accuracy · robustness · attack success rate",
            ],
          },
        },
      ],
      results: {
        columns: ["Scenario", "Clean", "Under attack", "After defence"],
        rows: [
          { scenario: "FGSM (ε=0.1)", values: ["~95%", "~30%", "~78%"] },
          { scenario: "PGD (ε=0.1)", values: ["~95%", "~12%", "~65%"] },
        ],
        disclaimer:
          "Figures are author-reported and illustrative of the observed trend, not benchmarked measurements. The consistent takeaway: weak attacks cause large accuracy drops, and defences recover a substantial (not complete) portion of that loss — with a clean-accuracy trade-off.",
      },
      limitations: [
        "Reported accuracy figures are illustrative, not formally benchmarked with fixed seeds and held-out reporting.",
        "White-box first-order setting only; adaptive and black-box attacks are out of scope in this version.",
      ],
      futureWork: [
        "Real-time visualization dashboard (in progress).",
        "LLM-based adversarial attacks.",
        "Multi-agent Red vs Blue simulation and SOC integration.",
        "Docker containerization for reproducible runs.",
      ],
      media: [
        {
          src: "/projects/adversarial-attack-vs-defense.png",
          alt: "Adversarial simulator comparing an attacked image against a defended image side by side, using a MobileNetV2 model with an FGSM attack at epsilon 0.03 and a JPEG-compression defence applied.",
        },
        {
          src: "/projects/adversarial-configuration.png",
          alt: "Adversarial simulator configuration panel: model selection (ResNet-18), attack type (FGSM), attack strength epsilon slider at 0.02, PGD iterations, and an image upload area for the input image and adversarial output.",
        },
        {
          src: "/projects/adversarial-attack-output.png",
          alt: "Attack results screen showing original top-5 ImageNet class indices and probabilities, with the predicted class flipping from index 166 to 242 after an FGSM attack, and reported perturbation norms of L-infinity 0.030 and L2 8.314.",
        },
        {
          src: "/projects/adversarial-defended-topk.png",
          alt: "Defended output showing the model recovering the correct class (index 242) at confidence 1.00 after the JPEG-compression defence, with defended top-5 indices and probabilities listed.",
        },
      ],
    },
  },
  {
    slug: "defenxia-rural-banking-security",
    title: "Defenxia — Adaptive Cybersecurity for Rural Digital Banking",
    shortTitle: "Defenxia",
    tier: "major",
    domain: "Web Security",
    summary:
      "A fraud-protection framework for first-time rural banking users: real-time scam detection, multilingual guidance, and persona-based protection.",
    year: "2025",
    team: "Team Cyber Samurai",
    context: "Built in 24 hours at the Advaya 2.0 Hackathon, BGSCET Bengaluru",
    repo: "https://github.com/Bennyhinn007/Defenxia-AI-Powered-Adaptive-Cybersecurity-Framework-for-Rural-Digital-Banking",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Supabase", "Supabase Edge Functions", "PostgreSQL", "VirusTotal", "Vercel"],
    caseStudy: {
      tagline:
        "As rural India comes online, first-time banking users are the most exposed to fraud and the least served by existing, English-only, always-connected security tools.",
      blocks: [
        {
          heading: "Problem",
          body: [
            "OTP scams, phishing links, and fake UPI requests disproportionately harm people who just got their first smartphone. Existing security tooling assumes technical literacy, English fluency, and constant connectivity — none of which hold for the users most at risk.",
          ],
        },
        {
          heading: "Approach",
          body: [
            "Defenxia detects suspicious OTP patterns, phishing URLs, and fake UPI requests, and explains *why* something was flagged so users can build trust rather than blindly accept a verdict.",
            "It adapts to the user through **persona-based protection** — distinct modes for elderly users, farmers, and first-time bankers — with regional-language guidance and core features that work offline, syncing when connectivity returns.",
          ],
        },
        {
          heading: "My role",
          body: [
            "I was the **Project Lead and Research** for this hackathon build. My contributions covered research and problem analysis alongside development and integration — framing the threat model for rural banking users and wiring the pieces together into a working demo under the 24-hour constraint.",
            "The tools I personally worked with were ChatGPT and Claude, Vercel, GitHub, Supabase, and VirusTotal.",
          ],
        },
        {
          heading: "What it does",
          body: [
            "The prototype ships several protection surfaces visible in the demo: a **Banking Protection Dashboard** with a trusted-device posture score and a \"Secure Environment\" toggle to enable before UPI or net-banking use; an **AI SMS Shield** that triages suspicious SMS text and reinforces that banks never ask for OTP, PIN, or CVV; and a **QR code scanner** that checks codes for security threats. Language selection spans English, Hindi, Kannada, Marathi, Telugu, Tamil, and Malayalam.",
          ],
        },
      ],
      limitations: [
        "Built within a 24-hour hackathon window — a working prototype rather than a production system.",
        "Fraud-detection heuristics are demonstration-grade and would need real-world validation.",
      ],
      futureWork: [
        "Validate detection heuristics against real fraud datasets.",
        "Expand regional-language coverage.",
      ],
      media: [
        {
          src: "/projects/defenxia-dashboard.png",
          alt: "Defenxia Banking Protection Dashboard showing a Secure Environment toggle set to ON, a trusted banking device posture score of 83 percent, and a language selector covering English, Hindi, Kannada, Marathi, Telugu, Tamil, and Malayalam.",
        },
        {
          src: "/projects/defenxia-sms-shield.png",
          alt: "Defenxia AI SMS Shield screen with a field to paste suspicious SMS text, a Scan for Fraud action, a warnings and critical counter, and guidance that banks never ask for OTP, PIN, CVV, or card number.",
        },
        {
          src: "/projects/defenxia-qr-scanner.png",
          alt: "Defenxia QR Code Scanner screen for checking QR codes for security threats, with a camera preview placeholder.",
        },
      ],
    },
  },
  {
    slug: "hacktober-2026-event-platform",
    title: "HACKTOBER 2026 — National Event Management Platform",
    shortTitle: "HACKTOBER 2026 Platform",
    tier: "major",
    domain: "Full-Stack",
    context: "Official portal for GNDEC Bidar's national-level cybersecurity event",
    summary:
      "A full-stack event portal and hardened admin system: multi-step registration with dynamic pricing, cryptographically signed QR passes, and a role-based operations dashboard.",
    year: "2026",
    repo: "https://github.com/Bennyhinn007/College-Event-Management-System",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "MongoDB Atlas",
      "JWT (HS256)",
      "bcrypt",
      "HMAC-SHA256",
      "Zod",
      "Vercel",
    ],
    caseStudy: {
      tagline:
        "The official platform for HACKTOBER 2026, a national-level event under Cybersecurity Awareness Month at GNDEC Bidar — built full-stack, with the admin side hardened like a product, not a demo.",
      blocks: [
        {
          heading: "Problem",
          body: [
            "A national-level, multi-day event needs more than a landing page: public registration across five competitions, dynamic multi-event pricing, payment verification, attendance tracking, and an administrative back office — all handling real participant data that must stay private and tamper-resistant.",
          ],
        },
        {
          heading: "Registration & QR passes",
          body: [
            "The public portal runs a multi-step registration wizard with a dynamic pricing engine (₹79 for one event up to ₹350 for five) and semester constraints. Each confirmed registration gets a **non-sequential ID** (`HT26-` + 6 random characters) and a printable accreditation pass.",
            "Rather than encoding participant PII in the QR code, the pass carries an **HMAC-SHA256 signed token** (`HT26-XXXXXX-<hmac>`). A public verification route confirms authenticity, college, events, and payment status without leaking phone or email.",
          ],
        },
        {
          heading: "Hardened admin operations",
          body: [
            "The admin side is treated as an attack surface. It uses a **role-based hierarchy** (SUPER_ADMIN > ADMIN > VIEWER), a sliding-window **brute-force lockout** (5 failed attempts → 15-minute block, HTTP 429), **constant-time comparison** to mitigate timing attacks on login, HttpOnly session cookies, and strict security headers (`X-Frame-Options: DENY`, `nosniff`, `no-store`).",
            "Organizers get a live analytics dashboard, a payment-verification queue with side-by-side receipt review, a camera-based QR attendance scanner with duplicate check-in detection, filter-aware CSV/Excel exports, and an immutable audit log.",
          ],
        },
        {
          heading: "Verification",
          body: [
            "The platform ships with a **unit and business-rules suite (50/50 passing)** covering pricing, event limits, semester constraints, rate limiting, HMAC tokens, RBAC, and the payment lifecycle, plus a **live HTTP end-to-end suite (8/8 passing)** exercising registration, QR verification, payment approval, attendance check-in, and exports.",
          ],
        },
      ],
      limitations: [
        "Built for a specific event; some rules (pricing tiers, semester options) are domain-specific rather than general-purpose.",
      ],
      futureWork: [
        "Generalize the registration engine for reuse across future department events.",
      ],
      media: [], // NEEDS_INPUT: HACKTOBER 2026 screenshots
    },
  },

  // --- Supporting: focused, real, internship-linked where applicable ---
  {
    slug: "blockchain-identity-asset-management",
    title: "Blockchain Identity, Access Control & Asset Management",
    shortTitle: "Blockchain Identity Platform",
    tier: "supporting",
    domain: "Blockchain",
    summary:
      "A working prototype of a blockchain-backed identity and asset workflow — register, verify, assign roles, and transfer ownership — with every operation producing a real on-chain transaction.",
    year: "2026",
    repo: "https://github.com/Bennyhinn007/Mock-Project-Blockchain-and-Backend-",
    stack: ["Solidity 0.8.20", "Hardhat", "OpenZeppelin", "Python", "Flask", "Web3.py", "SQLite"],
  },
  {
    slug: "ai-adaptive-firewall",
    title: "AI-Assisted Adaptive Firewall with SIEM Analytics",
    shortTitle: "AI Adaptive Firewall",
    tier: "supporting",
    domain: "SOC / Blue Team",
    summary:
      "A firewall prototype that analyzes real network traffic with Zeek, detects anomalies using an unsupervised Isolation Forest model, and emits SIEM-ready security events with severity scoring.",
    year: "2026",
    repo: "https://github.com/Bennyhinn007/ai-adaptive-firewall",
    stack: ["Python", "Zeek", "scikit-learn", "Isolation Forest", "FastAPI", "Elastic Stack", "PostgreSQL", "Docker"],
  },
  {
    slug: "vulnerability-scanner",
    title: "Vulnerability Scanner",
    shortTitle: "Vulnerability Scanner",
    tier: "supporting",
    domain: "Web Security",
    context: "Cybersecurity Internship — Thiranex",
    summary:
      "A Python assessment tool for authorized targets: threaded port scanning, banner grabbing, HTTP security-header and TLS checks, DNS/WHOIS lookups, and multi-format reports.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Vulnerability-Scanner",
    stack: ["Python", "Threaded scanning", "TLS/SSL checks", "DNS/WHOIS", "PDF/JSON reporting", "Tkinter GUI"],
  },
  {
    slug: "phishing-email-detection",
    title: "Phishing Email Detection Model",
    shortTitle: "Phishing Detection",
    tier: "supporting",
    domain: "AI Security",
    context: "Cybersecurity Internship — Thiranex",
    summary:
      "A machine-learning classifier that flags phishing emails, built with Scikit-learn during the Thiranex internship.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Phishing-Email-Detection-Model",
    stack: ["Python", "Scikit-learn", "ML classification"],
  },
  {
    slug: "secure-login-system",
    title: "Secure Login System",
    shortTitle: "Secure Login System",
    tier: "supporting",
    domain: "Web Security",
    context: "Cybersecurity Internship — Thiranex",
    summary:
      "An authentication system built with password hashing, input validation, and SQL-injection protection.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Secure-Login-System",
    stack: ["Password hashing", "Input validation", "SQLi protection"],
  },
  {
    slug: "password-strength-analyzer",
    title: "Password Strength Analyzer",
    shortTitle: "Password Analyzer",
    tier: "supporting",
    domain: "Web Security",
    context: "Cybersecurity Internship — Thiranex",
    summary:
      "A tool that evaluates password complexity and recommends stronger alternatives.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Password-Strength-Analyzer",
    stack: ["Python"],
  },
  {
    slug: "soc-alert-monitoring",
    title: "SOC Alert Monitoring & Incident Response Simulation",
    shortTitle: "SOC Simulation",
    tier: "supporting",
    domain: "SOC / Blue Team",
    summary:
      "A simulation of SOC analyst workflow: log analysis, alert triage by severity, and incident-response documentation using SIEM tooling.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Alert-Monitoring-Incident-Response-Simulation",
    stack: ["Splunk", "Elastic Stack (ELK)", "Log analysis", "Incident response"],
  },
  {
    slug: "secure-file-sharing",
    title: "Secure File Sharing System",
    shortTitle: "Secure File Sharing",
    tier: "supporting",
    domain: "Web Security",
    summary: "A system for sharing files with a focus on secure transfer and access control.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Secure-File-Sharing-System",
    stack: ["Encryption", "Access control"],
  },
  {
    slug: "web-application-security-testing",
    title: "Web Application Security Testing",
    shortTitle: "Web App Security Testing",
    tier: "supporting",
    domain: "Web Security",
    summary: "Hands-on web application security testing exercises covering common OWASP-class vulnerabilities.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/Web-Application-Security-Testing",
    stack: ["OWASP", "Web security testing"],
  },
  {
    slug: "ai-journal-system",
    title: "AI Journal System",
    shortTitle: "AI Journal",
    tier: "supporting",
    domain: "Full-Stack",
    summary:
      "A full-stack journaling app that analyzes emotional patterns from reflection sessions using an LLM, with a caching layer for repeated analysis.",
    year: "2025",
    repo: "https://github.com/Bennyhinn007/ai-journal-system",
    stack: ["Node.js", "Express", "React 18", "SQLite", "Groq LLM API"],
  },

  // --- Foundational: honest practice & coursework ---
  {
    slug: "flowmind",
    title: "FlowMind — Productivity & Task Management",
    shortTitle: "FlowMind",
    tier: "foundational",
    domain: "Full-Stack",
    summary: "A productivity and task-management application.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/FlowMind-AI-Powered-Productivity-Task-Management-System-",
    stack: ["Full-stack"],
  },
  {
    slug: "finance-data-access-control",
    title: "Finance Data Processing & Access Control",
    shortTitle: "Finance Data / Access Control",
    tier: "foundational",
    domain: "Web Security",
    summary: "A project exploring finance data processing with access-control mechanisms.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/Finance-Data-Processing-and-Access-Control",
    stack: ["Access control"],
  },
  {
    slug: "social-post-application",
    title: "Social Post Application",
    shortTitle: "Social Post App",
    tier: "foundational",
    domain: "Full-Stack",
    summary: "A social posting application.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/Social-Post-Application",
    stack: ["Full-stack"],
  },
  {
    slug: "task-management",
    title: "Task Management",
    shortTitle: "Task Management",
    tier: "foundational",
    domain: "Full-Stack",
    summary: "A task-management application.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/Task-Management",
    stack: ["Full-stack"],
  },
  {
    slug: "photo-gallery-react",
    title: "Photo Gallery",
    shortTitle: "Photo Gallery",
    tier: "foundational",
    domain: "Foundations",
    summary: "A photo gallery built with React.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/Photo-Gallery-using-React",
    stack: ["React"],
  },
  {
    slug: "calculator",
    title: "Calculator",
    shortTitle: "Calculator",
    tier: "foundational",
    domain: "Foundations",
    summary: "A calculator application.",
    year: "2024",
    repo: "https://github.com/Bennyhinn007/calculator",
    stack: ["JavaScript"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsByTier(tier: ProjectTier): Project[] {
  return projects.filter((p) => p.tier === tier);
}

export function caseStudyProjects(): Project[] {
  return projects.filter((p) => p.caseStudy);
}
