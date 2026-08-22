import type { MetadataRoute } from "next";
import { profile, isMissing } from "@/content/profile";

export default function robots(): MetadataRoute.Robots {
  const base = isMissing(profile.siteUrl) ? undefined : profile.siteUrl;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
