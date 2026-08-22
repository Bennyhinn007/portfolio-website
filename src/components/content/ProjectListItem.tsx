import Link from "next/link";
import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";

/**
 * A typographic list row — the alternative to a card grid.
 * Case-study projects link internally; others link to the repo.
 */
export function ProjectListItem({ project }: { project: Project }) {
  const hasCase = Boolean(project.caseStudy);
  const href = hasCase ? `/projects/${project.slug}` : project.repo ?? `/projects/${project.slug}`;
  const external = !hasCase && Boolean(project.repo);

  const Title = (
    <span className="font-display text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
      {project.title}
    </span>
  );

  return (
    <li className="group border-b border-hairline">
      <div className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
        <div>
          {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {Title}
            </a>
          ) : (
            <Link href={href}>{Title}</Link>
          )}
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{project.summary}</p>
          {project.context ? (
            <p className="mt-2 font-mono text-xs text-faint">{project.context}</p>
          ) : null}
          {project.team ? (
            <p className="mt-1 font-mono text-xs text-faint">Team project · {project.team}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-2">
          <Tag>{project.domain}</Tag>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>
      </div>
    </li>
  );
}
