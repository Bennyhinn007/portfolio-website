import { cn } from "@/lib/cn";

export function Tag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "high" | "medium" | "low";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[0.7rem] leading-5",
        variant === "default" && "border-hairline text-muted",
        variant === "accent" && "border-accent/40 text-accent",
        // Severity variants use real status colour — genuine data, not decoration.
        variant === "high" && "border-accent/50 text-accent",
        variant === "medium" && "border-hairline text-ink",
        variant === "low" && "border-hairline text-faint"
      )}
    >
      {children}
    </span>
  );
}
