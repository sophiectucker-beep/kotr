import fs from "node:fs/promises";
import path from "node:path";

const [, , slug, sourcePath] = process.argv;

if (!slug || !sourcePath) {
  console.error(
    "Usage: npm run blog:og -- <slug> <absolute-path-to-screenshot>"
  );
  process.exit(1);
}

const projectRoot = process.cwd();
const targetPath = path.join(projectRoot, "public", "blog", `${slug}-og.png`);

await fs.copyFile(sourcePath, targetPath);

console.log(`Saved blog share image to ${targetPath}`);
console.log(`Post will now use /blog/${slug}-og.png as its social preview image.`);
console.log(
  `Capture future screenshots from http://localhost:3000/share-previews/blog/${slug}`
);
