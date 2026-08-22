import type { Metadata } from "next";
import Link from "next/link";
import { projectsByTier } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { ProjectFeature } from "@/components/content/ProjectFeature";
import { ProjectListItem } from "@/components/content/ProjectListItem";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Bennyhinn across AI security, blockchain data-protection, and web security — with full case studies for flagship work.",
};

export default function ProjectsPage() {
  const flagship = projectsByTier("flagship");
  const major = projectsByTier("major");
  const supporting = projectsByTier("supporting");
  const foundational = projectsByTier("foundational");

  return (
    <>
      <section className="border-b border-hairline">
        <Container>
          <div className="py-16 sm:py-22">
            <p className="font-mono text-label uppercase tracking-widest text-accent">Work</p>
            <h1 className="mt-5 max-w-3xl font-display text-display font-semibold text-ink">
              Projects, ordered by weight — not by date.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              The strongest work gets the most room. Flagship projects have full case studies;
              internship deliverables and practice work are grouped honestly below.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Flagship */}
        <div className="py-16 sm:py-22">
          <h2 className="mb-10 font-mono text-label uppercase tracking-widest text-faint">
            Flagship
          </h2>
          <div className="space-y-16 lg:space-y-24">
            {flagship.map((p, i) => (
              <ProjectFeature key={p.slug} project={p} flip={i % 2 === 1} />
            ))}
          </div>
        </div>

        {/* Major */}
        <div className="border-t border-hairline py-16 sm:py-22">
          <h2 className="mb-8 font-mono text-label uppercase tracking-widest text-faint">
            Major
          </h2>
          <ul>
            {major.map((p) => (
              <ProjectListItem key={p.slug} project={p} />
            ))}
          </ul>
        </div>

        {/* Supporting */}
        <div className="border-t border-hairline py-16 sm:py-22">
          <h2 className="mb-2 font-mono text-label uppercase tracking-widest text-faint">
            Supporting
          </h2>
          <p className="mb-8 max-w-prose text-sm text-muted">
            Focused security and full-stack work. Several were built during cybersecurity
            internships — noted per project.
          </p>
          <ul>
            {supporting.map((p) => (
              <ProjectListItem key={p.slug} project={p} />
            ))}
          </ul>
        </div>

        {/* Foundational */}
        <div className="border-t border-hairline py-16 sm:py-22">
          <h2 className="mb-2 font-mono text-label uppercase tracking-widest text-faint">
            Foundations
          </h2>
          <p className="mb-8 max-w-prose text-sm text-muted">
            Practice and coursework — kept here honestly to show range, not dressed up as more.
          </p>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {foundational.map((p) => (
              <a
                key={p.slug}
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-hairline pt-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-accent">
                    {p.shortTitle}
                  </span>
                  <Tag>{p.year}</Tag>
                </div>
                <p className="mt-2 text-sm text-muted">{p.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
