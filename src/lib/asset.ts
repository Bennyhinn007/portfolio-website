export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return path;
}
