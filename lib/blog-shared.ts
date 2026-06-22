export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  author: string;
  coverImage: string;
  inlineImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  html: string;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
