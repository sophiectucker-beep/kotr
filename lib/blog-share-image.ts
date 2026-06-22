import fs from "node:fs";
import path from "node:path";

export function getBlogShareImageUrl(slug: string) {
  const publicPath = path.join(process.cwd(), "public", "blog", `${slug}-og.png`);

  if (fs.existsSync(publicPath)) {
    return `/blog/${slug}-og.png`;
  }

  return `/blog/${slug}/opengraph-image?v=4`;
}
