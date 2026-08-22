import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Bennyhinn's portfolio site.",
};

export default function TermsPage() {
  return (
    <Container>
      <div className="max-w-2xl py-16 sm:py-22">
        <p className="font-mono text-label uppercase tracking-widest text-accent">Terms</p>
        <h1 className="mt-5 font-display text-display font-semibold text-ink">Terms of Use</h1>
        <div className="prose-note mt-8">
          <p>
            This site showcases personal projects and writing. The content is provided as-is, for
            information. It reflects student and personal work, and may describe prototypes and
            experiments rather than production systems.
          </p>
          <p>
            Any security tools or techniques described here are for learning and authorized testing
            only. Use them solely on systems you own or have explicit permission to test.
            Unauthorized use is your responsibility, not mine.
          </p>
          <p>
            Project code is subject to the licence stated in each project&apos;s repository. Text
            and design on this site remain the author&apos;s. Feel free to link to it; please
            don&apos;t republish it wholesale as your own.
          </p>
          <p>
            External links are provided for convenience. I&apos;m not responsible for the content
            of sites I link to.
          </p>
        </div>
      </div>
    </Container>
  );
}
