import Link from "next/link";
import { profile } from "@/content/profile";
import { projectsByTier } from "@/content/projects";
import { experience } from "@/content/experience";
import { research } from "@/content/research";
import { certifications } from "@/content/certifications";
import { toolkit } from "@/content/toolkit";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectFeature } from "@/components/content/ProjectFeature";
import { ProjectListItem } from "@/components/content/ProjectListItem";
import { PortraitFrame } from "@/components/content/PortraitFrame";
import { Tag } from "@/components/ui/Tag";

export default function HomePage() {
  const flagships = projectsByTier("flagship");
  const selected = [
    ...projectsByTier("major"),
    ...projectsByTier("supporting").slice(0, 4),
  ];
  const paper = research[0];

  return (
    <>
      {/* Hero — identity + substance, two CTAs. No decorative illustration. */}
      <section className="border-b border-hairline">
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-start lg:py-30">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent">
                {profile.location}
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-display-lg font-semibold text-ink">
                I build security-focused systems,
                <br className="hidden sm:block" /> then try to break them.
                <span className="mt-4 block text-title text-muted">
                  And I&apos;m a <span className="text-accent">full-stack developer</span> by passion.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {profile.preferredName} — engineering student at GNDEC Bidar (VTU).
                My work runs across three fronts: <span className="text-ink">adversarial AI
                robustness</span>, <span className="text-ink">blockchain data-protection</span>,
                and <span className="text-ink">web &amp; network security</span> — grounded in
                two cybersecurity internships and hands-on lab work.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-sm bg-accent px-5 py-2.5 font-mono text-label uppercase tracking-widest text-accent-ink transition-opacity hover:opacity-90"
                >
                  View work
                </Link>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label uppercase tracking-widest text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  GitHub
                </a>
                <Link
                  href="/#contact"
                  className="font-mono text-label uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right column: portrait above the factual sidebar. Stacks below
                the hero text on mobile — no overlap with nav or content. */}
            <div className="flex flex-col gap-8 lg:w-64 lg:border-l lg:border-hairline lg:pl-8">
              <PortraitFrame
                src="/benny-portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                caption={profile.name}
                tag="Bidar, IN"
              />

              {/* Compact factual sidebar — real numbers only, no fake stats. */}
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-hairline pt-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">Focus</dt>
                  <dd className="mt-1 text-sm text-ink">Security &amp; AI</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">Grad</dt>
                  <dd className="mt-1 text-sm text-ink">{profile.education.graduation}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">CGPA</dt>
                  <dd className="mt-1 text-sm text-ink">{profile.education.gpa}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">Interned</dt>
                  <dd className="mt-1 text-sm text-ink">{experience.length} security roles</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship projects — disproportionate space, as agreed. */}
      <Section id="work" label="Selected work" index="01">
        <div className="mb-4">
          <h2 className="font-display text-title text-ink">Flagship projects</h2>
          <p className="mt-3 max-w-prose text-muted">
            Two projects carry the most engineering weight. Each has a full case study.
          </p>
        </div>
        <div className="space-y-16 lg:space-y-24">
          {flagships.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Selected supporting + major work as a typographic list. */}
      <Section label="More work" index="02">
        <div className="mb-4 flex items-end justify-between gap-6">
          <h2 className="font-display text-title text-ink">Also built</h2>
          <Link
            href="/projects"
            className="whitespace-nowrap font-mono text-label uppercase tracking-widest text-accent underline underline-offset-4"
          >
            All projects
          </Link>
        </div>
        <ul>
          {selected.map((p) => (
            <ProjectListItem key={p.slug} project={p} />
          ))}
        </ul>
      </Section>

      {/* Experience — connects internships to real deliverables. */}
      <Section label="Experience" index="03">
        <h2 className="font-display text-title text-ink">Where I&apos;ve worked</h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <div key={job.organization} className="border-t border-hairline pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-ink">
                  {job.role} — <span className="text-accent">{job.organization}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-faint">
                  {job.period ?? "dates pending"}
                </span>
              </div>
              <ul className="mt-4 max-w-prose space-y-2 text-sm leading-relaxed text-muted">
                {job.contributions.map((c, i) => (
                  <li key={i} className="pl-4 -indent-4 before:mr-2 before:text-accent before:content-['—']">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Research */}
      {paper ? (
        <Section label="Research" index="04">
          <h2 className="font-display text-title text-ink">Research</h2>
          <div className="mt-8 border-t border-hairline pt-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="accent">{paper.kind}</Tag>
              {paper.venue ? <Tag>{paper.venue}</Tag> : null}
            </div>
            <h3 className="mt-4 max-w-3xl font-display text-2xl leading-snug text-ink">
              {paper.title}
            </h3>
            <p className="mt-4 max-w-prose text-muted">{paper.problem}</p>
            <div className="mt-6">
              <Link
                href="/research"
                className="font-mono text-label uppercase tracking-widest text-accent underline underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </div>
        </Section>
      ) : null}

      {/* Toolkit — grouped evidence, no percentages. */}
      <Section label="Toolkit" index="05">
        <div className="mb-4 flex items-end justify-between gap-6">
          <h2 className="font-display text-title text-ink">Toolkit</h2>
          <Link
            href="/about"
            className="whitespace-nowrap font-mono text-label uppercase tracking-widest text-accent underline underline-offset-4"
          >
            Full breakdown
          </Link>
        </div>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.slice(0, 6).map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-label uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {group.items.slice(0, 8).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section label="Certifications" index="06">
        <h2 className="font-display text-title text-ink">Certifications</h2>
        <ul className="mt-8 divide-y divide-hairline border-t border-hairline">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              {c.credentialUrl ? (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {c.name}
                </a>
              ) : (
                <span className="text-ink">{c.name}</span>
              )}
              <span className="font-mono text-xs uppercase tracking-widest text-faint">
                {c.issuer}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact — direct methods only, as an editorial list. */}
      <section id="contact" className="border-t border-hairline">
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent">Contact</p>
              <h2 className="mt-5 max-w-2xl font-display text-display font-semibold text-ink">
                Open to internships, research collaboration, and security work.
              </h2>
              <p className="mt-6 max-w-prose text-muted">
                The fastest way to reach me is email. I read everything, and I reply to messages
                that are specific about what you&apos;re building or looking for.
              </p>
            </div>
            <dl className="space-y-5 border-t border-hairline pt-6 lg:min-w-[16rem] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <ContactRow label="Email" value={profile.links.email} href={`mailto:${profile.links.email}`} />
              <ContactRow label="LinkedIn" value="/in/bennyhinn29" href={profile.links.linkedin} external />
              <ContactRow label="GitHub" value="@Bennyhinn007" href={profile.links.github} external />
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <dt className="font-mono text-xs uppercase tracking-widest text-faint">{label}</dt>
      <dd>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {value}
        </a>
      </dd>
    </div>
  );
}
