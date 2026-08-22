/**
 * Skip link for keyboard users. Shows on :focus-visible only.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-2 top-2 z-50 -translate-y-[200%] rounded-sm bg-accent px-4 py-2 font-mono text-sm text-accent-ink transition-transform focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  );
}
