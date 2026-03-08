import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://speedboys.gr",
    sitemap: "https://speedboys.gr/sitemap.xml",
  };
}

