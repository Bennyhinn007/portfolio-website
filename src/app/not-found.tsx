import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="font-mono text-label uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-5 max-w-2xl font-display text-display font-semibold text-ink">
          That page isn&apos;t here.
        </h1>
        <p className="mt-5 max-w-prose text-muted">
          The link may be broken or the page may have moved. Nothing dramatic — let&apos;s get you
          back on track.
        </p>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm bg-accent px-5 py-2.5 font-mono text-label uppercase tracking-widest text-accent-ink transition-opacity hover:opacity-90"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="font-mono text-label uppercase tracking-widest text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent"
          >
            View work
          </Link>
        </div>
      </div>
    </Container>
  );
}
