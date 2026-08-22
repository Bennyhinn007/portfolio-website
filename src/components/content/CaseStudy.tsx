import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { asset } from "@/lib/asset";

/**
 * Renders a full project case study from typed data.
 * Structure follows the agreed spine: problem → approach → architecture →
 * implementation → results → limitations → future work.
 */
export function CaseStudy({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <article className="mx-auto max-w-content px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12">
      {/* Header */}
      <header className="border-b border-hairline pb-10">
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="accent">{project.domain}</Tag>
          <span className="font-mono text-label uppercase tracking-widest text-faint">
            {project.year}
          </span>
          {project.team ? (
            <span className="font-mono text-label uppercase tracking-widest text-faint">
              · Team: {project.team}
            </span>
          ) : null}
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-display font-semibold text-ink">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
          {cs.tagline}
        </p>
        {project.context ? (
          <p className="mt-4 font-mono text-sm text-faint">{project.context}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-accent px-4 py-2 font-mono text-label uppercase tracking-widest text-accent-ink transition-opacity hover:opacity-90"
            >
              Repository
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label uppercase tracking-widest text-ink underline decoration-accent underline-offset-4 hover:text-accent"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </header>

      {/* Stack + first media, side by side on wide screens */}
      <div className="grid gap-10 border-b border-hairline py-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div>
          <h2 className="font-mono text-label uppercase tracking-widest text-accent">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {cs.media[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(cs.media[0].src)}
              alt={cs.media[0].alt}
              className="w-full rounded border border-hairline"
              loading="lazy"
            />
          ) : (
            <MediaPlaceholder label={`${project.shortTitle} — screenshot pending`} />
          )}
        </div>
      </div>

      {/* Narrative blocks */}
      <div className="py-12">
        {cs.blocks.map((block) => (
          <section key={block.heading} className="mb-14 lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
            <h2 className="mb-4 font-mono text-label uppercase tracking-widest text-accent lg:mb-0 lg:sticky lg:top-24 lg:self-start">
              {block.heading}
            </h2>
            <div className="prose-note">
              {block.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: renderEmphasis(p) }} />
              ))}
              {block.note ? (
                <figure className="mt-5 overflow-x-auto rounded border border-hairline bg-surface/50 p-4">
                  <figcaption className="mb-2 font-mono text-xs uppercase tracking-widest text-faint">
                    {block.note.label}
                  </figcaption>
                  <pre className="font-mono text-sm leading-relaxed text-ink">
                    {block.note.lines.join("\n")}
                  </pre>
                </figure>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      {/* Interface — additional real screenshots (beyond the lead image). */}
      {cs.media.length > 1 ? (
        <section className="border-t border-hairline py-12">
          <h2 className="font-mono text-label uppercase tracking-widest text-accent">Interface</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {cs.media.slice(1).map((m) => (
              <figure key={m.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(m.src)}
                  alt={m.alt}
                  className="w-full rounded border border-hairline"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Results */}
      {cs.results ? (
        <section className="border-t border-hairline py-12">
          <h2 className="font-display text-title text-ink">Results</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  {cs.results.columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="py-3 pr-6 font-mono text-xs uppercase tracking-widest text-faint"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cs.results.rows.map((row) => (
                  <tr key={row.scenario} className="border-b border-hairline">
                    <th scope="row" className="py-3 pr-6 font-medium text-ink">
                      {row.scenario}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-3 pr-6 font-mono text-ink">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-prose text-sm italic leading-relaxed text-faint">
            {cs.results.disclaimer}
          </p>
        </section>
      ) : null}

      {/* Limitations + future work */}
      <section className="grid gap-10 border-t border-hairline py-12 sm:grid-cols-2 sm:gap-14">
        <div>
          <h2 className="font-mono text-label uppercase tracking-widest text-accent">
            Limitations
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            {cs.limitations.map((l, i) => (
              <li key={i} className="pl-4 -indent-4 before:mr-2 before:text-accent before:content-['—']">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-label uppercase tracking-widest text-accent">
            Future work
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            {cs.futureWork.map((f, i) => (
              <li key={i} className="pl-4 -indent-4 before:mr-2 before:text-accent before:content-['—']">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

/** Minimal **bold** → <strong> rendering for case-study prose. Escapes HTML. */
function renderEmphasis(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
