"use client";

import Image from "next/image";
import { getImageProps } from "next/image";
import Link from "next/link";
import type { KeyboardEvent, MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Baby,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  PackageOpen,
  ShoppingBag,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  buySellCategories,
  getBuySellCategoryLabel,
  type BuySellCategory,
  type BuySellItem,
} from "@/lib/buy-sell";

type BuySellFilter = "all" | BuySellCategory;

const categoryStyles: Record<BuySellFilter, string> = {
  all: "bg-navy text-beige",
  prams: "bg-kotr-blue text-white",
  cots: "bg-kotr-green text-white",
  clothes: "bg-kotr-orange text-white",
  toys: "bg-salmon text-white",
  "car-seats": "bg-navy text-beige",
  carriers: "bg-[#9baa86] text-white",
  feeding: "bg-kotr-pink text-white",
  other: "bg-white text-navy border border-navy/10",
};

export function BuySellContent({
  items,
  doodleSrc,
}: {
  items: BuySellItem[];
  doodleSrc: string;
}) {
  const [activeFilter, setActiveFilter] = useState<BuySellFilter>("all");

  const orderedItems = useMemo(
    () =>
      [...items].sort(
        (a, b) =>
          a.title.localeCompare(b.title, "en", { sensitivity: "base" })
      ),
    [items]
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return orderedItems;
    return orderedItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, orderedItems]);

  const filters: BuySellFilter[] = [
    "all",
    ...buySellCategories.map((category) => category.value),
  ];

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-[36rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              Useful Stuff
            </p>
            <h1 className="mt-4 max-w-[32rem] text-3xl font-bold leading-tight md:text-4xl">
              Baby Buy & Sell
            </h1>
            <p className="mt-5 max-w-[30rem] font-sans text-lg leading-8 text-navy/72">
              A little noticeboard for baby bits being sold locally. Prams,
              cots, clothes, toys, carriers, car seats, and the
              random-but-useful things babies somehow need for about four
              minutes.
            </p>
            <p className="mt-4 max-w-[34rem] font-sans text-sm leading-7 text-navy/60">
              Items are checked before they appear here. Clicking a listing
              takes you to the original Facebook Marketplace post, so all
              messages and buying happen there. See an item that’s sold?{" "}
              <a
                href="mailto:hellokidsontherock@gmail.com?subject=Buy%20and%20sell%20item%20sold"
                className="font-semibold text-salmon underline decoration-salmon/35 underline-offset-4 transition-colors hover:text-navy"
              >
                Let me know!
              </a>
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/buy-sell/submit">
                  Submit a baby item
                  <ShoppingBag className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for baby buy and sell"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const inactiveClass = isActive
              ? ""
              : "border border-navy/10 bg-white text-navy hover:bg-beige";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  isActive ? categoryStyles[filter] : inactiveClass
                }`}
              >
                <span>{getFilterLabel(filter)}</span>
              </button>
            );
          })}
        </div>

        {filteredItems.length ? (
          <>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <BuySellCard key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/buy-sell/submit">
                  Submit a baby item
                  <ShoppingBag className="size-5" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-8 rounded-[1.75rem] border border-dashed border-navy/15 bg-beige/55 p-8 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white text-salmon shadow-[0_10px_24px_rgba(45,56,77,0.06)]">
              <PackageOpen className="size-7" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy">
              Nothing listed here yet.
            </h2>
            <p className="mx-auto mt-3 max-w-[30rem] font-sans text-sm leading-7 text-navy/60">
              This page is ready for approved listings. Once someone submits a
              baby item and it has been checked, it will show here as a card
              for <span className="whitespace-nowrap">30 days</span> (or until
              you tell me it’s sold).
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" size="sm">
                <Link href="/buy-sell/submit">Submit the first item</Link>
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function BuySellCard({ item }: { item: BuySellItem }) {
  const images = useMemo(
    () =>
      item.imageUrls?.length
        ? item.imageUrls
        : item.imageUrl
          ? [item.imageUrl]
          : [],
    [item.imageUrl, item.imageUrls]
  );
  const imageCount = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const activeImage = images[activeImageIndex];

  useEffect(() => {
    if (!isImageOpen || imageCount <= 1) return;

    const preloadLinks: HTMLLinkElement[] = [];

    images.forEach((src) => {
      if (src === activeImage) return;
      const {
        props: { srcSet, sizes, src: optimizedSrc },
      } = getImageProps({
        src,
        alt: "",
        width: 928,
        height: 928,
        sizes: "(max-width: 768px) 92vw, 58rem",
      });
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "image";
      preloadLink.href = optimizedSrc;
      if (srcSet) preloadLink.setAttribute("imagesrcset", srcSet);
      if (sizes) preloadLink.setAttribute("imagesizes", sizes);
      document.head.appendChild(preloadLink);
      preloadLinks.push(preloadLink);
    });

    return () => {
      preloadLinks.forEach((preloadLink) => preloadLink.remove());
    };
  }, [activeImage, imageCount, images, isImageOpen]);

  function openMarketplaceListing() {
    window.open(item.marketplaceUrl, "_blank", "noopener,noreferrer");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMarketplaceListing();
    }
  }

  function showPreviousImage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  }

  function showNextImage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) =>
      current === imageCount - 1 ? 0 : current + 1
    );
  }

  function openImageViewer(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setIsImageOpen(true);
  }

  function closeImageViewer() {
    setIsImageOpen(false);
  }

  return (
    <>
      <div
        role="link"
        tabIndex={0}
        onClick={openMarketplaceListing}
        onKeyDown={handleKeyDown}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white shadow-[0_12px_34px_rgba(45,56,77,0.06)] transition-transform hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] bg-beige">
          {activeImage ? (
            <>
              <button
                type="button"
                onClick={openImageViewer}
                className="relative block h-full w-full cursor-zoom-in overflow-hidden"
                aria-label={`Open larger photo of ${item.title}`}
              >
                <Image
                  src={activeImage}
                  alt={`${item.title} photo ${activeImageIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
              {imageCount > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-navy shadow-[0_8px_20px_rgba(45,56,77,0.16)] transition-colors hover:bg-salmon hover:text-white"
                    aria-label={`Show previous photo of ${item.title}`}
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-navy shadow-[0_8px_20px_rgba(45,56,77,0.16)] transition-colors hover:bg-salmon hover:text-white"
                    aria-label={`Show next photo of ${item.title}`}
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/92 px-3 py-1 font-sans text-xs font-semibold text-navy shadow-[0_8px_20px_rgba(45,56,77,0.12)]">
                    {activeImageIndex + 1}/{imageCount}
                  </span>
                </>
              ) : null}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-navy/35">
              <Baby className="size-14" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-salmon">
                {getBuySellCategoryLabel(item.category)}
              </p>
              <h2 className="mt-2 text-xl font-bold leading-tight text-navy">
                {item.title}
              </h2>
            </div>
            <p className="shrink-0 rounded-full bg-beige px-3 py-1 font-sans text-sm font-semibold text-navy">
              {item.price}
            </p>
          </div>

          <p className="mt-3 flex-1 font-sans text-sm leading-7 text-navy/68">
            {item.description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-navy/8 pt-4">
            <div className="min-w-0">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy/40">
                Seller
              </p>
              <p className="truncate font-sans text-sm font-medium text-navy/80">
                {item.sellerName}
              </p>
            </div>
            <span className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 font-sans text-sm font-semibold text-salmon">
              Open listing
              <ExternalLink className="size-4" />
            </span>
          </div>
        </div>
      </div>

      {isImageOpen && activeImage
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/82 p-4 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label={`${item.title} photo viewer`}
              onClick={closeImageViewer}
            >
              <div
                className="relative h-[min(84vh,58rem)] w-full max-w-[58rem]"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={activeImage}
                  alt={`${item.title} photo ${activeImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 92vw, 58rem"
                  priority
                />

                <button
                  type="button"
                  onClick={closeImageViewer}
                  className="absolute right-0 top-0 inline-flex size-11 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white text-navy shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-salmon hover:text-white"
                  aria-label={`Close ${item.title} photo`}
                >
                  <X className="size-5" />
                </button>

                {imageCount > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-0 top-1/2 inline-flex size-11 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-navy shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-salmon hover:text-white"
                      aria-label={`Show previous photo of ${item.title}`}
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-0 top-1/2 inline-flex size-11 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white/92 text-navy shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-salmon hover:text-white"
                      aria-label={`Show next photo of ${item.title}`}
                    >
                      <ChevronRight className="size-6" />
                    </button>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 rounded-full bg-white/92 px-3 py-1 font-sans text-xs font-semibold text-navy shadow-[0_8px_20px_rgba(0,0,0,0.16)]">
                      {activeImageIndex + 1}/{imageCount}
                    </span>
                  </>
                ) : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

function getFilterLabel(filter: BuySellFilter) {
  if (filter === "all") return "All";
  return getBuySellCategoryLabel(filter);
}
