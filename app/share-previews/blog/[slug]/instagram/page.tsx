import Image from "next/image";
import { notFound } from "next/navigation";

import { getPostBySlug } from "@/lib/blog";

interface BlogInstagramPreviewPageProps {
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

export default async function BlogInstagramPreviewPage({
  params,
}: BlogInstagramPreviewPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-beige text-navy">
      <section className="mx-auto flex min-h-screen w-full max-w-[1080px] flex-col px-20 py-20">
        <div className="flex flex-1 flex-col rounded-[3rem] border border-white/70 bg-beige">
          <div className="mx-auto flex w-full max-w-[840px] flex-1 flex-col items-center justify-center">
            <h1 className="text-center text-[4.4rem] font-bold leading-[1.02] tracking-[-0.04em] text-navy">
              {post.title}
            </h1>

            {post.inlineImage ? (
              <div className="relative mt-14 h-[28rem] w-full max-w-[26rem]">
                <Image
                  src={post.inlineImage}
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="416px"
                  priority
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
