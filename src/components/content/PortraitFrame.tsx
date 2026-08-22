import Image from "next/image";
import { asset } from "@/lib/asset";

/**
 * Distinctive hero portrait frame.
 *
 * Design intent: a "registration frame" borrowed from technical drawing and
 * print production — an offset accent rule sitting behind the image plus corner
 * registration ticks (crop marks). It reads as precise and engineered rather
 * than decorative. Built entirely from borders and positioned elements: no
 * gradient, glow, blur, or shadow, so it holds up with effects stripped.
 *
 * A small monospace caption plate anchors it to the "engineering notebook"
 * language and carries real information (name + role tag).
 */
export function PortraitFrame({
  src,
  alt,
  caption,
  tag,
}: {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}) {
  return (
    <figure className="relative w-44 sm:w-56 lg:w-64">
      {/* Offset accent rule behind the portrait — sits down-right. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded border border-accent/70"
      />

      {/* The portrait itself, on a solid plate so the offset rule reads cleanly. */}
      <div className="relative rounded border border-ink/80 bg-paper p-1.5">
        {/* Aspect ratio locked (4:5) so the box is reserved before paint — no layout shift. */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src={asset(src)}
            alt={alt}
            width={512}
            height={640}
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 11rem, (max-width: 1024px) 14rem, 16rem"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Corner registration ticks — the four crop marks. */}
        <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent" />
        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-accent" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-accent" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent" />
      </div>

      {/* Caption plate — monospace, factual. */}
      <figcaption className="relative mt-4 flex items-center justify-between gap-3 border-t border-hairline pt-2 font-mono text-[0.65rem] uppercase tracking-widest">
        <span className="text-ink">{caption}</span>
        <span className="text-accent">{tag}</span>
      </figcaption>
    </figure>
  );
}
