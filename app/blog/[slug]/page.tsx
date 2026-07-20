import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BlogArticleWithPopups } from "@/components/blog-article-with-popups";
import { BlogPostActions } from "@/components/blog-post-actions";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { getBlogShareImageUrl } from "@/lib/blog-share-image";
import { formatBlogDate } from "@/lib/blog-shared";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Kids on the Rock",
    };
  }

  const shareImageUrl = getBlogShareImageUrl(slug);

  return {
    title: `${post.title} | Kids on the Rock`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Kids on the Rock" }],
    creator: "Kids on the Rock",
    publisher: "Kids on the Rock",
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://kidsontherock.gi/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Kids on the Rock"],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [shareImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const shareImageUrl = getBlogShareImageUrl(slug);
  const headerImage =
    post.inlineImage ?? (post.coverImage !== "/blog/default-cover.svg" ? post.coverImage : null);

  const articleHtml = replaceSchoolContactTable(
    replaceUniformNotesBox(
      addHeadingAnchorIds(
        addExternalLinkTargets(stripRepeatedTitle(post.html, post.title))
      )
    )
  );
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kids on the Rock",
        item: "https://kidsontherock.gi/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kidsontherock.gi/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://kidsontherock.gi/blog/${slug}`,
      },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Organization",
      name: "Kids on the Rock",
    },
    publisher: {
      "@type": "Organization",
      name: "Kids on the Rock",
      logo: {
        "@type": "ImageObject",
        url: "https://kidsontherock.gi/icon.png",
      },
    },
    mainEntityOfPage: `https://kidsontherock.gi/blog/${slug}`,
    image: [
      {
        "@type": "ImageObject",
        url: `https://kidsontherock.gi${shareImageUrl}`,
        width: 1200,
        height: 630,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-beige text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
          <div className="mx-auto max-w-[700px]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-salmon"
            >
              <ArrowLeft className="size-4" strokeWidth={1.8} />
              Back to blog
            </Link>

            <header className="mt-8 border-b border-navy/10 pb-8">
              <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,1fr)_18rem] md:items-start md:gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                    {post.category}
                  </p>
                  <h1 className="mt-4 text-[2.2rem] font-bold leading-[1.05] md:text-[2.55rem] lg:text-[2.75rem]">
                    {post.title}
                  </h1>
                  <p className="mt-4 font-sans text-lg leading-8 text-navy/70">
                    {post.excerpt}
                  </p>
                </div>

                {headerImage ? (
                  <div className="mx-auto w-full max-w-[12rem] md:ml-auto md:mr-0 md:w-full md:max-w-none md:self-stretch">
                    <div className="relative aspect-square md:h-full md:min-h-[18rem] md:w-full lg:min-h-[19rem]">
                      <Image
                        src={headerImage}
                        alt=""
                        fill
                        className="object-contain object-right"
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 192px"
                      />
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 font-sans text-sm text-navy/55">
                <span>{formatBlogDate(post.date)}</span>
                <BlogPostActions slug={slug} title={post.title} />
              </div>
            </header>

            <BlogArticleWithPopups html={articleHtml} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function stripRepeatedTitle(html: string, title: string) {
  const escapedTitle = escapeRegExp(title.trim());
  return html.replace(
    new RegExp(`^<h1>${escapedTitle}</h1>\\s*`, "i"),
    ""
  );
}

function addExternalLinkTargets(html: string) {
  return html.replace(/<a\s+href="(https?:\/\/[^"]+)"/g, (_match, href) => {
    return `<a href="${href}" target="_blank" rel="noreferrer noopener"`;
  });
}

function addHeadingAnchorIds(html: string) {
  const anchors = new Map([
    ["St Paul's uniform", "st-pauls-uniform"],
    ["Governor's Meadow uniform", "governors-meadow-uniform"],
    ["Notre Dame uniform", "notre-dame-uniform"],
    ["St Bernard's uniform", "st-bernards-uniform"],
    ["St Joseph's uniform", "st-josephs-uniform"],
    ["St Mary's uniform", "st-marys-uniform"],
    ["St Martin's uniform", "st-martins-uniform"],
  ]);

  for (const [heading, id] of anchors) {
    html = html.replace(`<h3>${heading}</h3>`, `<h3 id="${id}">${heading}</h3>`);
  }

  return html;
}

function replaceUniformNotesBox(html: string) {
  return html.replace(
    /<blockquote>\s*<p><strong>A few uniform notes<\/strong><\/p>\s*(<ul>[\s\S]*?<\/ul>)\s*<\/blockquote>/,
    '<aside class="blog-note-box"><p class="blog-note-box__title">A few uniform notes</p>$1</aside>'
  );
}

function replaceSchoolContactTable(html: string) {
  const tablePattern =
    /<table>\s*<thead>\s*<tr>\s*<th>School<\/th>\s*<th>Headteacher<\/th>\s*<th>Phone number<\/th>\s*<\/tr>\s*<\/thead>\s*<tbody>([\s\S]*?)<\/tbody>\s*<\/table>/;

  const match = html.match(tablePattern);

  if (!match) {
    return html;
  }

  const rows = Array.from(
    match[1].matchAll(
      /<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>/g
    )
  ).map((row) => ({
    school: row[1],
    headteacher: row[2],
    phone: row[3],
  }));

  if (rows.length === 0) {
    return html;
  }

  const desktopRows = rows
    .map(
      (row) => `
        <tr>
          <td>${row.school}</td>
          <td>${row.headteacher}</td>
          <td>${formatPhoneLink(row.phone)}</td>
        </tr>`
    )
    .join("");

  const mobileCards = rows
    .map(
      (row) => `
<div class="blog-school-card">
  <p class="blog-school-card__label">School</p>
  <p class="blog-school-card__value">${row.school}</p>
  <p class="blog-school-card__label">Headteacher</p>
  <p class="blog-school-card__value">${row.headteacher}</p>
  <p class="blog-school-card__label">Phone number</p>
  <p class="blog-school-card__value">${formatPhoneLink(row.phone)}</p>
</div>`
    )
    .join("");

  const replacement = `
<div class="blog-school-contacts">
  <div class="hidden md:block">
    <table class="blog-school-table">
      <thead>
        <tr>
          <th>School</th>
          <th>Headteacher</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        ${desktopRows}
      </tbody>
    </table>
  </div>
  <div class="blog-school-cards md:hidden">
    ${mobileCards}
  </div>
</div>`;

  return html.replace(tablePattern, replacement);
}

function formatPhoneLink(phone: string) {
  const tel = phone.replace(/[^\d+]/g, "");
  return `<a href="tel:${tel}">${phone}</a>`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
