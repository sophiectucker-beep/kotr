"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Accessibility,
  ArrowUpDown,
  Baby,
  Coffee,
  MapPin,
  ShoppingBag,
  Store,
  Sun,
  Toilet,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import gibraltarMapImage from "../Visit Gibraltar map City Centre.png";

import { useSiteLanguage } from "@/components/language-provider";
import type { BabyChangingCategory, BabyChangingSpot } from "@/lib/baby-changing";

type BabyChangingFilter = "all" | BabyChangingCategory;

type FilterConfigItem = {
  label: { en: string; es: string };
  pillClass: string;
  icon?: LucideIcon;
};

const filterConfig: Record<BabyChangingFilter, FilterConfigItem> = {
  all: {
    label: { en: "All", es: "Todo" },
    pillClass: "bg-navy text-beige",
  },
  "baby-changing": {
    label: { en: "Baby changing", es: "Cambiador" },
    pillClass: "bg-salmon text-white",
    icon: Baby,
  },
  lifts: {
    label: { en: "Lifts", es: "Ascensores" },
    pillClass: "bg-kotr-blue text-white",
    icon: ArrowUpDown,
  },
  "buggy-friendly-toilets": {
    label: { en: "Buggy-friendly toilets", es: "Baños para carritos" },
    pillClass: "bg-kotr-green text-white",
    icon: Toilet,
  },
  "baby-items": {
    label: { en: "Baby Items", es: "Cosas de bebé" },
    pillClass: "bg-kotr-pink text-white",
    icon: ShoppingBag,
  },
  "toy-stores": {
    label: { en: "Toy Stores", es: "Tiendas de juguetes" },
    pillClass: "bg-kotr-orange text-white",
    icon: Store,
  },
  "feeding-friendly-spots": {
    label: { en: "Feeding-friendly spots", es: "Sitios cómodos para alimentar" },
    pillClass: "bg-kotr-teal text-white",
    icon: Baby,
  },
  "shaded-places": {
    label: { en: "Shaded places to stop", es: "Sitios con sombra" },
    pillClass: "bg-kotr-yellow text-navy",
    icon: Sun,
  },
  "family-friendly-cafes": {
    label: { en: "Family-friendly cafes", es: "Cafés para familias" },
    pillClass: "bg-kotr-blue text-white",
    icon: Coffee,
  },
  snacks: {
    label: { en: "Where to buy snacks", es: "Dónde comprar snacks" },
    pillClass: "bg-kotr-green text-white",
    icon: Utensils,
  },
} as const;

const filterOrder: BabyChangingFilter[] = [
  "all",
  "baby-changing",
  "lifts",
  "buggy-friendly-toilets",
  "baby-items",
  "toy-stores",
  "feeding-friendly-spots",
  "shaded-places",
  "family-friendly-cafes",
  "snacks",
];

export function BabyChangingContent({
  entries,
  doodleSrc,
}: {
  entries: BabyChangingSpot[];
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<BabyChangingFilter>("all");

  const filteredEntries = useMemo(() => {
    if (activeFilter === "all") {
      return [];
    }

    return entries.filter((entry) => entry.category === activeFilter);
  }, [activeFilter, entries]);

  const activeEntry = useMemo(
    () => filteredEntries.find((entry) => entry.slug === activeSlug) ?? null,
    [activeSlug, filteredEntries]
  );

  useEffect(() => {
    if (!activeSlug) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (
        target.closest("[data-family-map-pin-button]") ||
        target.closest("[data-family-map-pin-popover]")
      ) {
        return;
      }

      setActiveSlug(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeSlug]);

  const copy =
    language === "es"
      ? {
          label: "USEFUL STUFF",
          title: "Mapa familiar",
          intro:
            "Un mapa simple para no andar adivinando dónde hay cambiador, ascensor, baño útil, sombra, snacks o sitio cómodo donde parar.",
          mapTitle: "Mapa de Gibraltar",
          mapBody:
            "Pulsa un pin redondo para abrir la foto del sitio y ver el nombre y la dirección.",
          emptyMap:
            "Aún no hay sitios en esta categoría. En cuanto los tengamos verificados,",
          submitOwn: "Envía el tuyo.",
          pinsAppear: "los pines aparecerán aquí.",
          emptyCard:
            "Todavía no hemos cargado los sitios reales. Cuando tengamos las fotos y ubicaciones, cada pin abrirá la imagen del lugar y su dirección.",
          where: "Dónde está",
          growTitle: "¡Ayuda a que crezca el mapa!",
          growBodyBefore: "Mándame tus fotos de instalaciones locales ",
          growLink: "por email",
          growBodyAfter: ".",
        }
      : {
          label: "USEFUL STUFF",
          title: "Family Map",
          intro:
            "A simple map for the moments when you do not want to guess where to find a changing table, lift, decent loo, shade, snacks, or somewhere easy to stop.",
          mapTitle: "Gibraltar map",
          mapBody:
            "Tap a round pin to open the facility photo and see the name and address.",
          emptyMap:
            "Nothing in this category yet. Once we have verified places,",
          submitOwn: "Submit your own.",
          pinsAppear: "the pins will appear here.",
          emptyCard:
            "The real facilities are not loaded yet. Once we add the saved photos and locations, each pin will open the place image and address.",
          where: "Where it is",
          growTitle: "Help our map grow!",
          growBodyBefore: "Submit your photos of local facilities by ",
          growLink: "emailing me",
          growBodyAfter: ".",
        };

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
            <div className="max-w-[36rem]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                {copy.label}
              </p>
              <h1 className="mt-4 max-w-[32rem] text-3xl font-bold leading-tight md:text-4xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-[30rem] font-sans text-lg leading-8 text-navy/72">
                {copy.intro}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
              <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={doodleSrc}
                  alt="Open Doodles illustration for baby changing"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
        <div>
          <div className="mb-7 flex flex-wrap gap-3">
            {filterOrder.map((filter) => {
              const isActive = activeFilter === filter;
              const Icon = filterConfig[filter].icon ?? Accessibility;
              const inactiveClass = isActive
                ? ""
                : "border border-navy/10 bg-white text-navy hover:bg-beige";

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                    setActiveSlug(null);
                    setHoveredSlug(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    isActive ? filterConfig[filter].pillClass : inactiveClass
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{filterConfig[filter].label[language]}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              {copy.mapTitle}
            </p>
            <p className="font-sans text-sm leading-7 text-navy/62">{copy.mapBody}</p>
          </div>

          <div className="relative mt-6 overflow-visible rounded-[1.75rem] border border-navy/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(248,236,224,0.92)_48%,_rgba(240,226,212,0.88))]">
            <div className="relative aspect-[1266/890] min-h-[36rem] w-full">
              <Image
                src={gibraltarMapImage}
                alt="Map of Gibraltar"
                fill
                className={`object-cover brightness-[1.03] contrast-[0.92] saturate-[0.72] sepia-[0.18] hue-rotate-[-8deg] transition-opacity duration-200 ${
                  activeFilter === "all" || hoveredSlug ? "opacity-100" : "opacity-20"
                }`}
                priority
              />

              {filteredEntries.map((entry) => {
                const isActive = activeEntry?.slug === entry.slug;
                const popupWantsLeft = entry.x > 64;
                const popupWantsTop = entry.y > 72;

                return (
                  <div
                    key={entry.slug}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${entry.x}%`, top: `${entry.y}%` }}
                  >
                    <button
                      type="button"
                      data-family-map-pin-button
                      onClick={() =>
                        setActiveSlug((current) => (current === entry.slug ? null : entry.slug))
                      }
                      onMouseEnter={() => setHoveredSlug(entry.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      onFocus={() => setHoveredSlug(entry.slug)}
                      onBlur={() => setHoveredSlug(null)}
                      className={`overflow-hidden rounded-full border-4 border-salmon shadow-[0_10px_30px_rgba(45,56,77,0.18)] transition-transform hover:scale-105 ${
                        isActive ? "z-20" : "z-10"
                      }`}
                      aria-label={entry.name}
                    >
                      {entry.imageUrl ? (
                        <span className="relative block size-11 bg-beige">
                          <Image src={entry.imageUrl} alt={entry.name} fill className="object-cover" />
                        </span>
                      ) : (
                        <span className="flex size-11 items-center justify-center bg-salmon text-white">
                          <Baby className="size-5" />
                        </span>
                      )}
                    </button>

                    {isActive ? (
                      <div
                        data-family-map-pin-popover
                        className={`absolute z-30 w-[17rem] rounded-[1.5rem] border border-white/80 bg-white/95 p-3 shadow-[0_18px_40px_rgba(45,56,77,0.16)] backdrop-blur-sm ${
                          popupWantsLeft ? "right-[calc(100%+12px)]" : "left-[calc(100%+12px)]"
                        } ${popupWantsTop ? "bottom-0" : "top-0"}`}
                      >
                        <div className="overflow-hidden rounded-[1.1rem] border border-navy/10 bg-beige">
                          {entry.imageUrl ? (
                            <div className="w-full">
                              <Image
                                src={entry.imageUrl}
                                alt={entry.name}
                                width={900}
                                height={1600}
                                className="h-auto w-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="flex aspect-[4/3] items-center justify-center bg-beige text-salmon">
                              <Baby className="size-14" />
                            </div>
                          )}
                        </div>

                        <div className="mt-3">
                          <h2 className="text-xl font-bold leading-tight text-navy">{entry.name}</h2>
                          <div className="mt-3 flex items-start gap-2.5">
                            <MapPin className="mt-1 size-4 shrink-0 text-salmon" />
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-salmon">
                                {copy.where}
                              </p>
                              <p className="mt-1 font-sans text-sm leading-6 text-navy/72">
                                {entry.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}

              {activeFilter !== "all" && filteredEntries.length === 0 ? (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="max-w-[20rem] rounded-[1.5rem] border border-white/70 bg-white/90 p-5 text-center shadow-[0_18px_40px_rgba(45,56,77,0.08)]">
                    <p className="font-sans text-sm leading-7 text-navy/68">
                      {copy.emptyMap}{" "}
                      <span className="whitespace-nowrap">{copy.pinsAppear}</span>
                      <Link
                        href="mailto:hellokidsontherock@gmail.com?subject=Family%20Map%20submission"
                        className="mt-2 block font-medium text-salmon underline decoration-salmon/30 underline-offset-4 transition-colors hover:text-navy"
                      >
                        {copy.submitOwn}
                      </Link>
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-salmon/18 bg-salmon/10 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-salmon">
              {copy.growTitle}
            </p>
            <p className="mt-2 font-sans text-sm leading-7 text-navy/70">
              {copy.growBodyBefore}
              <Link
                href="mailto:hellokidsontherock@gmail.com"
                className="font-medium text-salmon underline decoration-salmon/30 underline-offset-4 transition-colors hover:text-navy"
              >
                {copy.growLink}
              </Link>
              {copy.growBodyAfter}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
