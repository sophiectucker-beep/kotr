"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ClipboardList,
  FileText,
  Heart,
  MapPinned,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { type BlogPostMeta, formatBlogDate } from "@/lib/blog-shared";

export function BlogIndexContent({
  posts,
  categories,
  doodleSrc,
}: {
  posts: BlogPostMeta[];
  categories: string[];
  doodleSrc: string;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const featuredGridPosts = filteredPosts.slice(0, 6);
  const olderPosts = filteredPosts.slice(6);
  const filters = ["All", ...categories];

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-[36rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              Blog
            </p>
            <h1 className="mt-4 max-w-[32rem] text-3xl font-bold leading-tight md:text-4xl">
              Bits worth reading
            </h1>
            <p className="mt-5 max-w-[28rem] font-sans text-lg leading-8 text-navy/70">
              Useful reads for Gibraltar families: thoughtful guides, practical
              round-ups, and the sort of things you meant to look up properly
              later.
            </p>
            <p className="mt-6 max-w-[34rem] font-sans text-base leading-8 text-navy/58">
              A lot of what lands here overlaps with{" "}
              <Link
                href="/forms"
                className="font-medium text-salmon underline-offset-4 transition hover:text-salmon-dark hover:underline"
              >
                forms
              </Link>
              ,{" "}
              <Link
                href="/clubs-classes"
                className="font-medium text-salmon underline-offset-4 transition hover:text-salmon-dark hover:underline"
              >
                clubs &amp; classes
              </Link>
              ,{" "}
              <Link
                href="/family-day-out"
                className="font-medium text-salmon underline-offset-4 transition hover:text-salmon-dark hover:underline"
              >
                family day out
              </Link>
              , and the bits parents keep Googling at odd hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {filters.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${
                      isActive
                        ? "bg-navy text-beige"
                        : "border border-navy/10 bg-beige text-navy/75 hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for the blog"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
        {posts.length === 0 ? (
          <div className="rounded-[1.5rem] border border-navy/10 bg-[#fffdfa] p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              Blog
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy">Nothing here yet</h2>
            <p className="mt-3 font-sans text-base leading-7 text-navy/68">
              The blog is ready for your first post.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredGridPosts.map((post) => (
              <article key={post.slug} className="flex h-full flex-col">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-salmon">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-sans text-base leading-7 text-navy/68">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link href={`/blog/${post.slug}`} className="inline-flex">
                      <Button variant="outline" size="sm">
                        Read post
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {olderPosts.length > 0 ? (
          <div className="mt-12 border-t border-navy/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              Older posts
            </p>

            <div className="mt-5 divide-y divide-navy/10">
              {olderPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-3 py-5 transition-colors hover:text-salmon sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex max-w-[48rem] items-start gap-3">
                    <span className="mt-1 inline-flex shrink-0 text-salmon">
                      {(() => {
                        const Icon = getArchiveIcon(post);
                        return <Icon className="size-6" strokeWidth={1.8} />;
                      })()}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-navy transition-colors hover:text-salmon">
                      {post.title}
                    </h3>
                  </div>
                  <p className="shrink-0 font-sans text-base text-navy/55">
                    {formatBlogDate(post.date)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}

function getArchiveIcon(post: BlogPostMeta): LucideIcon {
  const category = post.category.toLowerCase();
  const title = post.title.toLowerCase();

  if (category.includes("admin")) {
    return ClipboardList;
  }

  if (category.includes("days out")) {
    return MapPinned;
  }

  if (category.includes("family")) {
    return Heart;
  }

  if (category.includes("local")) {
    return MapPinned;
  }

  if (category.includes("updates")) {
    return NotebookPen;
  }

  if (title.includes("week") || title.includes("month")) {
    return CalendarDays;
  }

  if (title.includes("bag") || title.includes("keep")) {
    return ClipboardList;
  }

  return FileText;
}
