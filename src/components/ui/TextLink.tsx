import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Underline-on-rest, accent-on-hover text link. External links get rel/target.
 */
export function TextLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = cn(
    "underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent hover:text-accent",
    className
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
