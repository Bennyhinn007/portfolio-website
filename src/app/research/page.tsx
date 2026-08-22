import type { Metadata } from "next";
import { research } from "@/content/research";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and publications by Bennyhinn, including work on ARP poisoning prevention using ICMP-based validation and centralized voting.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <Container>
          <div className="py-16 sm:py-22">
            <p className="font-mono text-label uppercase tracking-widest text-accent">Research</p>
            <h1 className="mt-5 max-w-3xl font-display text-display font-semibold text-ink">
              Where curiosity turns into a written contribution.
            </h1>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-16 sm:py-22">
          <div className="space-y-16">
            {research.map((item) => (
              <article key={item.title} className="border-t border-hairline pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag variant="accent">{item.kind}</Tag>
                  {item.venue ? <Tag>{item.venue}</Tag> : null}
                  <span className="font-mono text-xs uppercase tracking-widest text-faint">
                    {item.year ?? "year pending"}
                  </span>
                </div>
                <h2 className="mt-4 max-w-4xl font-display text-2xl leading-snug text-ink sm:text-title">
                  {item.title}
                </h2>

                <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <h3 className="font-mono text-label uppercase tracking-widest text-accent">
                      Problem
                    </h3>
                    <p className="mt-3 text-muted">{item.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-label uppercase tracking-widest text-accent">
                      Direction
                    </h3>
                    <p className="mt-3 text-muted">{item.direction}</p>
                  </div>
                </div>

                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-hairline pt-6">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-faint">Status</dt>
                    <dd className="mt-1 text-sm text-ink">{item.status}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                      Authors
                    </dt>
                    <dd className="mt-1 text-sm text-ink">
                      {item.coAuthors?.length ? item.coAuthors.join(", ") : "details pending"}
                    </dd>
                  </div>
                  {item.url ? (
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                        Paper
                      </dt>
                      <dd className="mt-1 text-sm">
                        <TextLink href={item.url}>Read paper</TextLink>
                      </dd>
                    </div>
                  ) : null}
                  {item.doi ? (
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widest text-faint">DOI</dt>
                      <dd className="mt-1 text-sm">
                        <TextLink href={item.doi}>10.5281/zenodo.15573683</TextLink>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
