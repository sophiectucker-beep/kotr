import fs from "node:fs/promises";
import path from "node:path";

const [, , slug] = process.argv;
const previewBaseUrl =
  process.env.BLOG_PREVIEW_BASE_URL ?? "http://127.0.0.1:3000";

if (!slug) {
  console.error("Usage: node scripts/generate-blog-instagram.mjs <slug>");
  process.exit(1);
}

const projectRoot = process.cwd();
const blogPath = path.join(projectRoot, "content", "blog", `${slug}.md`);
const outputDir = path.join(projectRoot, "Instagram");

const outputPath = path.join(outputDir, `${slug}-instagram.png`);

await fs.mkdir(outputDir, { recursive: true });
await fs.access(blogPath);

const response = await fetch(`${previewBaseUrl}/blog/${slug}/instagram-image`);

if (!response.ok) {
  console.error(`Could not fetch Instagram image route for ${slug}.`);
  process.exit(1);
}

const arrayBuffer = await response.arrayBuffer();
await fs.writeFile(outputPath, Buffer.from(arrayBuffer));

console.log(outputPath);
