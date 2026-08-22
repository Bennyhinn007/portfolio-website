/**
 * Prefixes a local asset path with the configured basePath.
 *
 * Why this is needed: with `output: "export"`, Next applies basePath to
 * <Link> hrefs and framework assets automatically, but NOT to the `src` of
 * next/image (when unoptimized) or plain <img> tags. Without this prefix,
 * images 404 on GitHub Pages project sites served from /portfolio-website/.
 *
 * Keep this in sync with basePath in next.config.mjs.
 */
const BASE_PATH = "/portfolio-website";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // external or already-relative URL
  return `${BASE_PATH}${path}`;
}
