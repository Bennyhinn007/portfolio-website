import type { MetadataRoute } from "next";
import { profile, isMissing } from "@/content/profile";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = isMissing(profile.siteUrl) ? "https://example.com" : profile.siteUrl;
  const staticRoutes = ["", "/projects", "/about", "/research", "/privacy", "/terms"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );
  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.tier === "flagship" ? 0.9 : 0.5,
  }));
  return [...staticRoutes, ...projectRoutes];
}
