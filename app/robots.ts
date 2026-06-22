import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/styleguide"],
    },
    sitemap: "https://kidsontherock.gi/sitemap.xml",
    host: "https://kidsontherock.gi",
  };
}
