/**
 * Research & publications. Only real, supplied items.
 */

export interface Research {
  title: string;
  /** e.g. "Publication", "Applied research" */
  kind: string;
  venue?: string;
  year?: string;
  coAuthors?: string[];
  /** DOI link. */
  doi?: string;
  /** Paper / issue URL. */
  url?: string;
  problem: string;
  direction: string;
  status: string;
}

export const research: Research[] = [
  {
    title: "Mitigating ARP Poisoning Via Modified ICMP and Voting Mechanism",
    kind: "Publication",
    venue: "HBRP Publication",
    year: "2025",
    coAuthors: [
      "Dr. Harish Joshi",
      "Prof. Ashok Bawge",
      "Prof. Uzma Kausar",
      "Rishikesh",
      "Pratiksha",
      "Benny Hinn",
    ],
    doi: "https://doi.org/10.5281/zenodo.15573683",
    url: "http://hbrppublication.com/OJS/index.php/JREPS/issue/view/1598",
    problem:
      "ARP has no built-in authentication, which lets an attacker on a local network poison ARP caches and intercept or redirect traffic (a classic man-in-the-middle vector).",
    direction:
      "A prevention approach combining modified ICMP-based validation of claimed MAC/IP bindings with a centralized voting mechanism to corroborate legitimate mappings before they are trusted.",
    status: "Published — HBRP Publication",
  },
];
