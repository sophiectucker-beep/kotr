import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

import type { BlogPost, BlogPostMeta } from "@/lib/blog-shared";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const canPreviewDrafts = process.env.NODE_ENV === "development";

interface BlogFrontmatter {
  title?: string;
  excerpt?: string;
  date?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
  author?: string;
  coverImage?: string;
}

function getFirstInlineImage(markdown: string) {
  const match = markdown.match(/!\[[^\]]*]\((\/[^)\s]+)\)/);
  return match?.[1];
}

function sortPosts<T extends BlogPostMeta>(posts: T[]) {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function getSlugFromFilename(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

function toMeta(fileName: string, frontmatter: BlogFrontmatter): BlogPostMeta {
  const slug = getSlugFromFilename(fileName);

  return {
    slug,
    title: frontmatter.title ?? slug,
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? new Date().toISOString(),
    category: frontmatter.category ?? "Guides",
    tags: frontmatter.tags ?? [],
    featured: frontmatter.featured ?? false,
    draft: frontmatter.draft ?? false,
    author: frontmatter.author ?? "Kids on the Rock",
    coverImage: frontmatter.coverImage ?? "/blog/default-cover.svg",
  };
}

export async function getAllPosts() {
  const files = await fs.readdir(BLOG_CONTENT_DIR);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const filePath = path.join(BLOG_CONTENT_DIR, fileName);
      const source = await fs.readFile(filePath, "utf8");
      const { data } = matter(source);

      return toMeta(fileName, data as BlogFrontmatter);
    })
  );

  return sortPosts(posts).filter((post) => canPreviewDrafts || !post.draft);
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);
    const meta = toMeta(`${slug}.md`, data as BlogFrontmatter);

    if (meta.draft && !canPreviewDrafts) {
      return null;
    }

    const processedContent = await remark().use(gfm).use(html).process(content);

    return {
      ...meta,
      content,
      html: processedContent.toString(),
      inlineImage: getFirstInlineImage(content),
    } satisfies BlogPost;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs() {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getBlogCategories() {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}
