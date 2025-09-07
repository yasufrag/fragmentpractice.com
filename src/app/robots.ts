// app/robots.ts
import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/story"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}