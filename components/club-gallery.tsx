"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ClubGalleryImage } from "@/lib/clubs";

export function ClubGallery({ images }: { images: ClubGalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];
  const canStep = images.length > 1;

  return (
    <div className="relative mt-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
        Gallery
      </p>

      <div className="group relative overflow-hidden rounded-[1.5rem] border border-navy/8 bg-beige/55">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="relative block aspect-[4/3] w-full cursor-zoom-in"
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </button>

        {canStep ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setActiveIndex((current) =>
                  current === 0 ? images.length - 1 : current - 1
                )
              }
              className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/88 text-navy opacity-0 shadow-[0_12px_30px_rgba(45,56,77,0.16)] transition-all duration-200 hover:bg-salmon hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                setActiveIndex((current) =>
                  current === images.length - 1 ? 0 : current + 1
                )
              }
              className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/88 text-navy opacity-0 shadow-[0_12px_30px_rgba(45,56,77,0.16)] transition-all duration-200 hover:bg-salmon hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {canStep ? (
        <div className="mt-4 flex items-center justify-center">
          <p className="font-sans text-sm text-navy/55">
            {activeIndex + 1} of {images.length}
          </p>
        </div>
      ) : null}

      {canStep ? (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-16 overflow-hidden rounded-[0.9rem] border transition-all sm:w-[4.5rem] ${
                index === activeIndex
                  ? "border-salmon opacity-100 shadow-[0_8px_20px_rgba(238,135,133,0.18)]"
                  : "border-navy/8 opacity-55 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-square w-full bg-beige/40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            </button>
          ))}
        </div>
      ) : null}

      {isLightboxOpen ? (
        <div className="absolute inset-0 z-20 rounded-[1.5rem] bg-navy/78 backdrop-blur-sm">
          <div
            className="relative flex h-full w-full items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/90 text-navy shadow-[0_12px_34px_rgba(45,56,77,0.18)] transition-colors hover:bg-salmon hover:text-white"
              aria-label="Close image"
            >
              <X className="size-5" />
            </button>

            <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-white/15 bg-white/95 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
              <div className="relative h-full w-full min-h-[18rem]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />

                {canStep ? (
                  <>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === 0 ? images.length - 1 : current - 1
                        )
                      }
                      className="absolute left-4 top-1/2 z-10 size-11 -translate-y-1/2 rounded-full border-white/30 bg-white/92 text-navy hover:bg-salmon hover:text-white"
                    >
                      <ChevronLeft className="size-5" />
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === images.length - 1 ? 0 : current + 1
                        )
                      }
                      className="absolute right-4 top-1/2 z-10 size-11 -translate-y-1/2 rounded-full border-white/30 bg-white/92 text-navy hover:bg-salmon hover:text-white"
                    >
                      <ChevronRight className="size-5" />
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
