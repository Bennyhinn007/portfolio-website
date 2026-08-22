import Link from "next/link";
import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { asset } from "@/lib/asset";

/**
 * Large asymmetric feature block for flagship projects on the home page.
 * `flip` mirrors the composition so two stacked features don't look templated.
 * No card, no shadow — separation comes from a hairline and generous space.
 */
export function ProjectFeature({ project, flip = false }: { project: Project; flip?: boolean }) {
  const media = project.caseStudy?.media?.[0];
  return (
    <article className="grid items-start gap-8 border-t border-hairline pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-14">
      <div className={flip ? "lg:order-2" : ""}>
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="accent">{project.domain}</Tag>
          <span className="font-mono text-label uppercase tracking-widest text-faint">
            {project.year}
          </span>
        </div>
        <h3 className="mt-4 font-display text-title text-ink">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        {project.caseStudy?.tagline ? (
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
            {project.caseStudy.tagline}
          </p>
        ) : (
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">{project.summary}</p>
        )}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key technologies">
          {project.stack.slice(0, 6).map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-label uppercase tracking-widest text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
          >
            Read case study
          </Link>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label uppercase tracking-widest text-muted transition-colors hover:text-accent"
            >
              Repository
            </a>
          ) : null}
        </div>
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        {media ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(media.src)}
            alt={media.alt}
            className="w-full rounded border border-hairline"
            loading="lazy"
          />
        ) : (
          <MediaPlaceholder label={`${project.shortTitle} — screenshot pending`} />
        )}
      </div>
    </article>
  );
}
