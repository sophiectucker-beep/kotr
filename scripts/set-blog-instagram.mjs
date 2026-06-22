import fs from "node:fs/promises";
import path from "node:path";

const [, , slug, sourcePath] = process.argv;

if (!slug || !sourcePath) {
  console.error(
    "Usage: npm run blog:instagram -- <slug> <absolute-path-to-image>"
  );
  process.exit(1);
}

const projectRoot = process.cwd();
const targetPath = path.join(
  projectRoot,
  "public",
  "blog",
  `${slug}-instagram.png`
);

await fs.copyFile(sourcePath, targetPath);

console.log(`Saved Instagram image to ${targetPath}`);
console.log(
  `Capture future Instagram screenshots from http://localhost:3000/share-previews/blog/${slug}/instagram`
);
