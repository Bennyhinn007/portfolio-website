/**
 * Minimal className joiner. No dependency needed for this scale of project.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
