import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * A section with an editorial margin label (like a running head in a paper).
 * The label sits in the left margin on wide screens, above content on mobile.
 * This is genuine wayfinding, not decorative metadata.
 */
export function Section({
  id,
  label,
  index,
  children,
  className,
  wide = false,
}: {
  id?: string;
  label?: string;
  index?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-22 lg:py-30", className)}>
      <Container wide={wide}>
        {label ? (
          <div className="lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-baseline gap-3 lg:sticky lg:top-24 lg:flex-col lg:gap-1">
                {index ? (
                  <span className="font-mono text-label uppercase text-accent">{index}</span>
                ) : null}
                <span className="font-mono text-label uppercase tracking-widest text-faint">
                  {label}
                </span>
              </div>
            </div>
            <div>{children}</div>
          </div>
        ) : (
          children
        )}
      </Container>
    </section>
  );
}
