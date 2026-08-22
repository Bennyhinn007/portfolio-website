/**
 * Honest placeholder for screenshots not yet supplied.
 * Clearly labelled — not a fake dashboard, not a decorative graphic.
 * Once real assets arrive, populate `media` in projects.ts and these disappear.
 */
export function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center rounded border border-dashed border-hairline bg-surface/40 p-6 text-center"
      role="img"
      aria-label={label}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-faint">{label}</p>
    </div>
  );
}
