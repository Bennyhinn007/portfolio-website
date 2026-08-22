/** @type {import('next').NextConfig} */

// Deploying to the default GitHub Pages project URL:
//   https://bennyhinn007.github.io/portfolio-website/
// Pages serves from the /portfolio-website subpath, so basePath + assetPrefix
// are required for CSS/JS/images/links to resolve.
const basePath = "/portfolio-website";

const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (no Node server available).
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
  // Emit /path/index.html so links work without a server rewriting routes.
  trailingSlash: true,
};

export default nextConfig;
