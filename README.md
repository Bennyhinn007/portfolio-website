# Benny — Portfolio

Personal engineering portfolio. Next.js (App Router) + TypeScript + Tailwind CSS.
Editorial "engineering notebook" design: typography-led, one accent (Signal amber),
cohesive light/dark, minimal JavaScript, static-generated.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where the content lives

All content is typed data in `src/content/`. **This is the only place you edit to
update the site** — no need to touch components. Everything is a source of truth:

| File | Controls |
|------|----------|
| `profile.ts` | Name, role, education, links, site URL |
| `projects.ts` | All projects, tiers, and flagship case studies |
| `certifications.ts` | Certifications list |
| `toolkit.ts` | Grouped skills / tools |
| `experience.ts` | Internship timeline (links to project slugs) |
| `research.ts` | Publications / research |

### Adding a project
Append an entry to the `projects` array in `src/content/projects.ts`.
- Set `tier` to `"flagship" | "major" | "supporting" | "foundational"` to control
  how much space it gets.
- Add a `caseStudy` block to give it a full case-study page. Without one, it renders
  as a compact detail page and links to the repo.

### Adding real screenshots
1. Drop image files in `public/` (e.g. `public/dpdp-dashboard.png`).
2. In the project's `caseStudy.media` array, add `{ src: "/dpdp-dashboard.png", alt: "..." }`.
3. The "screenshot pending" placeholder is replaced automatically.

## Items still marked `NEEDS_INPUT`

Most content is now confirmed. Remaining optional items:

- **Resume PDF** — none supplied; no download link is shown.
- **Verified Adversarial AI metrics** — none available, so the case-study results
  keep the "author-reported / illustrative" label (intentional).

Filled and live: domain, TryHackMe URL, all certification years + credential links,
research paper (year, authors, DOI, URL), Defenxia role + contributions, internship
dates, and real screenshots for DPDP and Defenxia.

## Notes

- **Results honesty:** the Adversarial AI case study shows accuracy figures that are
  explicitly labelled *author-reported / illustrative*, not benchmarked. Keep that
  disclaimer unless real, measured numbers replace them.
- **Security patch:** `next@14.2.33` is pinned. When your network is stable, run
  `npm audit` / `npm audit fix` (or bump to the latest patched 14.x) before deploying.

## Deploy (Vercel)

1. Push to a Git repo.
2. Import into Vercel — it auto-detects Next.js. No config needed.
3. Set `profile.siteUrl` to your production domain first so metadata is correct.
