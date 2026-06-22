import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import blogDoodle from "@/app/open-doodles/png/ReadingDoodle.png";

import { BlogIndexContent } from "@/components/blog-index-content";
import {
  getAllPosts,
  getBlogCategories,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Kids on the Rock",
  description:
    "Helpful articles, local guides, and thoughtful round-ups for Gibraltar parents.",
  openGraph: {
    title: "Blog | Kids on the Rock",
    description:
      "Helpful articles, local guides, and thoughtful round-ups for Gibraltar parents.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock Blog page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Kids on the Rock",
    description:
      "Helpful articles, local guides, and thoughtful round-ups for Gibraltar parents.",
    images: ["/og-blog.png"],
  },
};

export default async function BlogIndexPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getBlogCategories(),
  ]);

  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-6 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-8 md:gap-8">
        <BlogIndexContent
          posts={posts}
          categories={categories}
          doodleSrc={blogDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
