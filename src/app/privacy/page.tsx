import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Bennyhinn's portfolio site.",
};

export default function PrivacyPage() {
  return (
    <Container>
      <div className="max-w-2xl py-16 sm:py-22">
        <p className="font-mono text-label uppercase tracking-widest text-accent">Privacy</p>
        <h1 className="mt-5 font-display text-display font-semibold text-ink">Privacy Policy</h1>
        <div className="prose-note mt-8">
          <p>
            This is a personal portfolio. It does not run a contact form, ask you to create an
            account, or collect personal information from you directly.
          </p>
          <p>
            The site is hosted on Vercel. Like most hosting providers, Vercel may record standard
            technical request logs (such as IP address and browser type) for security and
            operational purposes. That data is handled under Vercel&apos;s own policies, not mine.
          </p>
          <p>
            If you email me at {profile.links.email} or connect on LinkedIn or GitHub, any
            information you share is handled by those services and by me directly, only to respond
            to you.
          </p>
          <p>
            No advertising trackers or third-party analytics scripts are used at the time of
            writing. If that changes, this page will be updated.
          </p>
          <p>Questions? Reach me at {profile.links.email}.</p>
        </div>
      </div>
    </Container>
  );
}
