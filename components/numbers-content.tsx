"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  HeartPulse,
  Phone,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import type { NumbersCategory, UsefulNumberItem } from "@/lib/numbers";
import { cn } from "@/lib/utils";

type NumbersFilter = "all" | NumbersCategory;

const categoryConfig = {
  all: {
    label: { en: "All", es: "Todo" },
    title: { en: "All useful numbers", es: "Todos los números útiles" },
    icon: Phone,
    pillClass: "bg-navy text-beige",
  },
  "emergency-safety": {
    label: { en: "Emergency & Safety", es: "Emergencias y seguridad" },
    title: { en: "Emergency & Safety", es: "Emergencias y seguridad" },
    icon: ShieldAlert,
    pillClass: "bg-kotr-orange text-white",
  },
  healthcare: {
    label: { en: "Healthcare", es: "Salud" },
    title: { en: "Healthcare", es: "Salud" },
    icon: HeartPulse,
    pillClass: "bg-salmon text-white",
  },
  "education-school": {
    label: { en: "Education & School", es: "Educación y colegio" },
    title: { en: "Education & School", es: "Educación y colegio" },
    icon: GraduationCap,
    pillClass: "bg-kotr-blue text-white",
  },
  "family-support-benefits": {
    label: { en: "Family Support", es: "Apoyo familiar" },
    title: { en: "Family Support & Benefits", es: "Apoyo familiar y ayudas" },
    icon: BookOpen,
    pillClass: "bg-kotr-green text-white",
  },
  "support-lines": {
    label: { en: "Support Lines", es: "Líneas de ayuda" },
    title: { en: "Support Lines", es: "Líneas de ayuda" },
    icon: Phone,
    pillClass: "bg-kotr-pink text-white",
  },
} as const;

export function NumbersContent({
  entries,
  verifiedDate,
  doodleSrc,
}: {
  entries: UsefulNumberItem[];
  verifiedDate: string;
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [activeFilter, setActiveFilter] = useState<NumbersFilter>("all");

  const copy =
    language === "es"
      ? {
          label: "Useful Numbers",
          title: "Números útiles para cuando no te apetece andar buscándolos.",
          intro:
            "Los números que más se acaban necesitando: urgencias, GHA, colegio, ayudas familiares y unas cuantas líneas de apoyo también.",
          note: `Comprobado con páginas oficiales y fuentes públicas de Gibraltar en ${verifiedDate}. Aun así, conviene volver a comprobar por si algo ha cambiado.`,
          directoryTitle: "Directorio",
          source: "Fuente",
          nothing: "No hay nada en esa sección ahora mismo.",
        }
      : {
          label: "Useful Numbers",
          title: "Useful numbers for when you really can't be bothered to go hunting.",
          intro:
            "The main ones parents actually end up needing: urgent help, GHA, school bits, and family support.",
          directoryTitle: "Directory",
          source: "Source",
          nothing: "Nothing showing in this section right now.",
        };

  const orderedEntries = useMemo(() => {
    return [...entries].sort((a, b) => a.service.localeCompare(b.service));
  }, [entries]);

  const visibleCategories = useMemo(() => {
    if (activeFilter === "all") {
      return (
        Object.keys(categoryConfig).filter(
          (key) => key !== "all"
        ) as NumbersCategory[]
      ).filter((category) =>
        orderedEntries.some((entry) => entry.category === category)
      );
    }

    return [activeFilter];
  }, [activeFilter, orderedEntries]);

  const filterOrder: NumbersFilter[] = [
    "all",
    "emergency-safety",
    "healthcare",
    "education-school",
    "family-support-benefits",
    "support-lines",
  ];

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-[36rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              {copy.label}
            </p>
            <h1 className="mt-4 max-w-[32rem] text-3xl font-bold leading-tight md:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-[28rem] font-sans text-lg leading-8 text-navy/72">
              {copy.intro}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for useful numbers"
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
          {filterOrder.map((filter) => {
            const isActive = activeFilter === filter;
            const Icon = categoryConfig[filter].icon;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5",
                  isActive
                    ? categoryConfig[filter].pillClass
                    : "border border-navy/10 bg-white text-navy hover:bg-beige"
                )}
              >
                <Icon className="size-4" />
                <span>{categoryConfig[filter].label[language]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-navy/10 bg-[#fffdfa] p-5 md:p-8">
          <div className="flex items-center justify-between border-b border-navy/10 pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              {copy.directoryTitle}
            </p>
            <p className="hidden font-sans text-xs uppercase tracking-[0.22em] text-navy/45 md:block">
              Gibraltar (+350)
            </p>
          </div>

          {visibleCategories.length === 0 ? (
            <div className="py-8">
              <p className="font-sans text-base text-navy/70">{copy.nothing}</p>
            </div>
          ) : (
            <div className="mt-6 space-y-10">
              {visibleCategories.map((category) => {
                const categoryEntries = orderedEntries.filter(
                  (entry) => entry.category === category
                );
                const Icon = categoryConfig[category].icon as LucideIcon;

                return (
                  <section key={category}>
                    <div className="flex items-center gap-3 border-b border-navy/10 pb-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                          categoryConfig[category].pillClass
                        )}
                      >
                        <Icon className="size-3.5" />
                        <span>{categoryConfig[category].title[language]}</span>
                      </span>
                    </div>

                    <div className="mt-2 divide-y divide-navy/10">
                      {categoryEntries.map((entry) => (
                        <DirectoryRow
                          key={entry.slug}
                          entry={entry}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function DirectoryRow({
  entry,
}: {
  entry: UsefulNumberItem;
}) {
  return (
    <div className="py-5">
      <div className="hidden items-baseline gap-3 md:flex">
        <p className="shrink-0 text-xl font-bold leading-tight text-navy">
          {entry.service}
        </p>
        <div className="min-w-6 flex-1 border-b border-dotted border-navy/25" />
        <a
          href={entry.telHref}
          className="shrink-0 whitespace-nowrap font-sans text-lg font-medium tracking-[0.04em] text-salmon transition-colors hover:text-navy"
        >
          {entry.number}
        </a>
      </div>

      <div className="md:hidden">
        <a
          href={entry.telHref}
          className="mt-2 inline-flex whitespace-nowrap font-sans text-lg font-medium tracking-[0.04em] text-salmon transition-colors hover:text-navy"
        >
          {entry.number}
        </a>
      </div>

      <div className="mt-2 md:mt-3">
        <p className="md:hidden text-xl font-bold leading-tight text-navy">
          {entry.service}
        </p>
        <p className="mt-2 font-sans text-sm leading-6 text-navy/66">{entry.note}</p>
      </div>
    </div>
  );
}
