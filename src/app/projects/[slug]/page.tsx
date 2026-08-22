import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { CaseStudy } from "@/components/content/CaseStudy";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { profile, isMissing } from "@/content/profile";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  const url = isMissing(profile.siteUrl)
    ? undefined
    : `${profile.siteUrl}/projects/${project.slug}`;
  return {
    title: project.shortTitle,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article", url },
    alternates: url ? { canonical: url } : undefined,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const back = (
    <Container>
      <Link
        href="/projects"
        className="inline-block pt-10 font-mono text-label uppercase tracking-widest text-muted transition-colors hover:text-accent"
      >
        ← All work
      </Link>
    </Container>
  );

  // Full case study for flagship/major projects.
  if (project.caseStudy) {
    return (
      <>
        {back}
        <CaseStudy project={project} />
        <NextProjectLink slug={project.slug} />
      </>
    );
  }

  // Compact detail for supporting/foundational projects.
  return (
    <>
      {back}
      <Container>
        <article className="max-w-3xl pb-24 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="accent">{project.domain}</Tag>
            <span className="font-mono text-label uppercase tracking-widest text-faint">
              {project.year}
            </span>
          </div>
          <h1 className="mt-5 font-display text-display font-semibold text-ink">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>
          {project.context ? (
            <p className="mt-4 font-mono text-sm text-faint">{project.context}</p>
          ) : null}

          <h2 className="mt-10 font-mono text-label uppercase tracking-widest text-accent">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>

          {project.repo ? (
            <div className="mt-10">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm bg-accent px-4 py-2 font-mono text-label uppercase tracking-widest text-accent-ink transition-opacity hover:opacity-90"
              >
                View repository
              </a>
            </div>
          ) : null}
        </article>
      </Container>
    </>
  );
}

function NextProjectLink({ slug }: { slug: string }) {
  const caseStudies = projects.filter((p) => p.caseStudy);
  const idx = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  if (!next || next.slug === slug) return null;
  return (
    <div className="border-t border-hairline">
      <Container>
        <Link href={`/projects/${next.slug}`} className="group block py-10">
          <span className="font-mono text-label uppercase tracking-widest text-faint">
            Next case study
          </span>
          <span className="mt-2 block font-display text-2xl text-ink transition-colors group-hover:text-accent">
            {next.title} →
          </span>
        </Link>
      </Container>
    </div>
  );
}
