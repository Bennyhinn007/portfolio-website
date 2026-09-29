/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },

  trailingSlash: true,
};

export default nextConfig;
