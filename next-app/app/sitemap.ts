import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1.0],
    ["/menu", 0.9],
    ["/brew-rush", 0.8],
    ["/story", 0.6],
    ["/visit", 0.8],
  ];
  return pages.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), priority }));
}
