import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { toolkit } from "@/content/toolkit";
import { certifications } from "@/content/certifications";
import { getProject } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { PortraitFrame } from "@/components/content/PortraitFrame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bennyhinn — engineering student at GNDEC Bidar (VTU), focused on cybersecurity, AI security, and blockchain. Background, experience, and toolkit.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <Container>
          <div className="grid gap-10 py-16 sm:py-22 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent">About</p>
              <h1 className="mt-5 max-w-2xl font-display text-display font-semibold text-ink">
                A student who learns by building and breaking.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {profile.preferredName} — {profile.role}, based in {profile.location}.
              </p>
            </div>
            <div className="justify-self-start lg:justify-self-auto">
              <PortraitFrame
                src="/benny-portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                caption={profile.name}
                tag="Bidar, IN"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Bio — written as a real student, not a copywriter. */}
      <Section label="Background" index="01">
        <div className="prose-note max-w-2xl text-lg">
          <p>
            I&apos;m {profile.preferredName}, a Computer Science &amp; Engineering student
            specializing in IoT, Cybersecurity, and Blockchain Technology at{" "}
            {profile.education.college}, under {profile.education.university}, graduating in{" "}
            {profile.education.graduation}. I&apos;m based in {profile.location}.
          </p>
          <p>
            Most of what I build sits at the intersection of security and systems. I got pulled
            into cybersecurity through hands-on work — scanning for vulnerabilities, testing web
            apps, and understanding how attacks actually land — and that curiosity spread into AI
            security and blockchain, where the interesting problems are about trust: can you rely
            on a model&apos;s output, and can a system prove it hasn&apos;t been tampered with?
          </p>
          <p>
            Right now I&apos;m going deeper on <strong>adversarial machine learning</strong> and{" "}
            <strong>LLM security</strong>, and on the tension between blockchain immutability and
            data-protection law — the problem behind my DPDP-compliant redactable blockchain
            project. I hold a CEH v13 and a CLLM.SC, and I&apos;ve done two cybersecurity
            internships.
          </p>
          <p>
            I&apos;d rather ship a working, honest prototype and understand its limits than
            polish something that only looks finished.
          </p>
        </div>
      </Section>

      {/* Experience */}
      <Section label="Experience" index="02">
        <h2 className="font-display text-title text-ink">Experience</h2>
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
              {job.relatedProjects?.length ? (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <span className="font-mono text-xs uppercase tracking-widest text-faint">
                    Deliverables:
                  </span>
                  {job.relatedProjects.map((slug) => {
                    const p = getProject(slug);
                    if (!p) return null;
                    return (
                      <TextLink key={slug} href={`/projects/${slug}`} className="text-sm">
                        {p.shortTitle}
                      </TextLink>
                    );
                  })}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Full toolkit */}
      <Section label="Toolkit" index="03">
        <h2 className="font-display text-title text-ink">Toolkit</h2>
        <p className="mt-3 max-w-prose text-muted">
          Grouped by capability. Listed as things I&apos;ve actually used — no proficiency
          percentages.
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <div key={group.title} className="border-t border-hairline pt-4">
              <h3 className="font-mono text-label uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              {group.note ? (
                <p className="mt-2 text-xs text-faint">{group.note}</p>
              ) : null}
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="after:ml-3 after:text-hairline after:content-['·'] last:after:content-none">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section label="Certifications" index="04">
        <h2 className="font-display text-title text-ink">Certifications</h2>
        <ul className="mt-8 divide-y divide-hairline border-t border-hairline">
          {certifications.map((c) => (
            <li key={c.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
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
                {c.year ? ` · ${c.year}` : ""}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-faint">
          Certificate names link to the issued credential.
        </p>
      </Section>
    </>
  );
}
