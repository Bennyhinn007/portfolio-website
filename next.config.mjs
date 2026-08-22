/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (no Node server available).
  output: "export",
  // Pages serves from a subfolder unless a custom domain is used.
  // Using custom domain bennyhinn.dev => no basePath needed.
  // If you switch to the default *.github.io/portfolio-website URL, set:
  //   basePath: "/portfolio-website",
  //   assetPrefix: "/portfolio-website/",
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
