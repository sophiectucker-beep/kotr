import blogDoodle from "@/app/open-doodles/png/ReadingDoodle.png";
import { BlogIndexContent } from "@/components/blog-index-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { getAllPosts, getBlogCategories } from "@/lib/blog";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogSharePreviewPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getBlogCategories(),
  ]);

  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <BlogIndexContent
          posts={posts}
          categories={categories}
          doodleSrc={blogDoodle.src}
        />
      </main>
    </div>
  );
}
