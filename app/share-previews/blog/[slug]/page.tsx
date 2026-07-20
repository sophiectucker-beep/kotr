import Image from "next/image";
import { notFound } from "next/navigation";

import { getPostBySlug } from "@/lib/blog";

interface BlogSharePreviewPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogSharePreviewPage({
  params,
}: BlogSharePreviewPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const previewImage = post.inlineImage ?? post.coverImage;

  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="mx-auto flex min-h-screen w-full max-w-[1200px] items-center px-20 py-14">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_20rem] items-start gap-10">
          <div className="min-w-0">
            <h1 className="text-[4.5rem] font-bold leading-[0.98] tracking-[-0.04em] text-navy">
              {post.title}
            </h1>
            <p className="mt-10 max-w-[35rem] font-sans text-[1.35rem] leading-[1.9] text-navy/70">
              {post.excerpt}
            </p>
          </div>

          {previewImage ? (
            <div className="self-stretch justify-self-end">
              <div className="relative h-[25rem] w-[20rem]">
                <Image
                  src={previewImage}
                  alt=""
                  fill
                  className="object-contain object-right"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
