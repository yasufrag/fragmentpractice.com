// app/sitemap.ts
import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

// ここに“公開して良い”URLだけを列挙します（/story は含めない）
const staticPaths = [
  "/",           // Home
  "/work",       // Work
  "/zine",       // ZINE（Coming Soon でもOK）
  "/company",    // Company
  "/contact",    // Contact
  "/privacy",    // プライバシー
  "/terms",      // 利用規約
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return staticPaths.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.6,
  }));
}