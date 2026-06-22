"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bird,
  CircleDollarSign,
  CloudRain,
  ExternalLink,
  Mountain,
  Shield,
  type LucideIcon,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { type DayOutCategory, type DayOutItem } from "@/lib/day-out";

type DayOutFilter = "all" | "free" | DayOutCategory;

type DayOutCategoryConfigItem = {
  label: { en: string; es: string };
  pillClass: string;
  icon?: LucideIcon;
};

const categoryConfig: Record<DayOutFilter, DayOutCategoryConfigItem> = {
  all: {
    label: { en: "All", es: "Todo" },
    pillClass: "bg-navy text-beige",
  },
  free: {
    label: { en: "Free", es: "Gratis" },
    pillClass: "bg-kotr-green text-white",
    icon: CircleDollarSign,
  },
  "animals-nature": {
    label: { en: "Animals & Nature", es: "Animales y naturaleza" },
    pillClass: "bg-kotr-green text-white",
    icon: Bird,
  },
  "adventure-views": {
    label: { en: "Adventure & Views", es: "Aventura y vistas" },
    pillClass: "bg-salmon text-white",
    icon: Mountain,
  },
  "rainy-day": {
    label: { en: "Rainy Day", es: "Día de lluvia" },
    pillClass: "bg-kotr-blue text-white",
    icon: CloudRain,
  },
  "history-heritage": {
    label: { en: "History & Heritage", es: "Historia y patrimonio" },
    pillClass: "bg-kotr-orange text-white",
    icon: Shield,
  },
} as const;

export function DayOutContent({
  entries,
  verifiedDate,
  doodleSrc,
}: {
  entries: DayOutItem[];
  verifiedDate: string;
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [activeFilter, setActiveFilter] = useState<DayOutFilter>("all");

  const copy =
    language === "es"
      ? {
          label: "Things to do",
          title: "Plan en familia",
          intro:
            "Animales, vistas, apaños para la lluvia y los clásicos de Gibraltar. Para cuando apetece hacer algo, pero no montarse un plan enorme.",
          note: `Recogido de páginas oficiales y de organizadores el ${verifiedDate}. Conviene comprobar horarios, entradas y edades antes de ir.`,
          sourceButton: "Ver página",
          ageFit: "Mejor para",
          cost: "Coste",
          location: "Dónde",
          freeBadge: "Gratis",
          empty: "No hay nada en esa categoría ahora mismo.",
        }
      : {
          label: "THINGS TO DO",
          title: "Family Day Out",
          intro:
            "Animals, views, rainy-day damage control, and the Gibraltar classics. For when you want to do something, but not plan something.",
          note: "Worth checking times, tickets, and ages before you go.",
          sourceButton: "Open page",
          ageFit: "Best for",
          cost: "Cost",
          location: "Where",
          freeBadge: "Free",
          empty: "Nothing showing in this category right now.",
        };

  const orderedEntries = useMemo(
    () => [...entries].sort((a, b) => a.name.localeCompare(b.name)),
    [entries]
  );

  const filteredEntries = useMemo(() => {
    if (activeFilter === "all") {
      return orderedEntries;
    }

    if (activeFilter === "free") {
      return orderedEntries.filter((entry) => Boolean(entry.freeNote));
    }

    return orderedEntries.filter((entry) =>
      Array.isArray(entry.category)
        ? entry.category.includes(activeFilter)
        : entry.category === activeFilter
    );
  }, [activeFilter, orderedEntries]);

  const filterOrder: DayOutFilter[] = [
    "all",
    "free",
    "animals-nature",
    "adventure-views",
    "rainy-day",
    "history-heritage",
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
            <p className="mt-4 max-w-[34rem] font-sans text-sm leading-7 text-navy/60">
              {language === "es" ? (
                <>
                  Si buscas algo con fecha concreta, mira{" "}
                  <Link
                    href="/whats-on"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Qué hay
                  </Link>
                  . Y si lo que quieres es algo regular, probablemente te convenga{" "}
                  <Link
                    href="/clubs-classes"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Clubes y clases
                  </Link>
                  .
                </>
              ) : (
                <>
                  If you want something date-specific, head to{" "}
                  <Link
                    href="/whats-on"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    What’s On
                  </Link>
                  . If you want something regular instead, you probably want{" "}
                  <Link
                    href="/clubs-classes"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Clubs & Classes
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="mt-5 max-w-[28rem] font-sans text-sm leading-7 text-navy/60">
              {copy.note}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for family day out"
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
            const inactiveClass = isActive
              ? ""
              : "border border-navy/10 bg-white text-navy hover:bg-beige";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive ? categoryConfig[filter].pillClass : inactiveClass}`}
              >
                {Icon ? <Icon className="size-4" /> : null}
                <span>{categoryConfig[filter].label[language]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredEntries.map((entry) => (
            <DayOutCard
              key={entry.slug}
              entry={entry}
              language={language}
              sourceButtonLabel={copy.sourceButton}
              ageFitLabel={copy.ageFit}
              costLabel={copy.cost}
              locationLabel={copy.location}
            />
          ))}
        </div>

        {filteredEntries.length === 0 ? (
          <div className="mt-8 rounded-[1.5rem] bg-beige p-6">
            <p className="font-sans text-base leading-7 text-navy/70">
              {copy.empty}
            </p>
          </div>
        ) : null}
      </section>
    </>
  );
}

function DayOutCard({
  entry,
  language,
  sourceButtonLabel,
  ageFitLabel,
  costLabel,
  locationLabel,
}: {
  entry: DayOutItem;
  language: "en" | "es";
  sourceButtonLabel: string;
  ageFitLabel: string;
  costLabel: string;
  locationLabel: string;
}) {
  const categories = Array.isArray(entry.category) ? entry.category : [entry.category];
  const showsFreeOnce = Boolean(entry.freeNote) && /free|gratis/i.test(entry.cost);

  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-navy/8 bg-white p-5 shadow-[0_12px_34px_rgba(45,56,77,0.08)] transition-transform hover:-translate-y-1">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const config = categoryConfig[category];
          const Icon = config.icon as LucideIcon;
          return (
            <span
              key={category}
              className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${config.pillClass}`}
            >
              <Icon className="size-3.5" />
              <span>{config.label[language]}</span>
            </span>
          );
        })}
      </div>

      <h2 className="mt-4 text-2xl font-bold leading-tight text-navy">
        {entry.name}
      </h2>

      <p className="mt-3 font-sans text-base leading-7 text-navy/68">
        {entry.summary}
      </p>

      <div className="mt-5 space-y-3 font-sans text-sm text-navy/68">
        <div>
          <p className="font-medium text-navy">{ageFitLabel}</p>
          <p>{entry.ageFit}</p>
        </div>
        <div>
          <p className="font-medium text-navy">{costLabel}</p>
          {showsFreeOnce ? null : <p>{entry.cost}</p>}
          {entry.freeNote ? <p className="mt-1 text-kotr-green">{entry.freeNote}</p> : null}
        </div>
        <div>
          <p className="font-medium text-navy">{locationLabel}</p>
          <p>{entry.location}</p>
        </div>
      </div>

      <div className="mt-6">
        <a
          href={entry.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Button variant="outline" size="sm">
            {sourceButtonLabel} <ExternalLink />
          </Button>
        </a>
      </div>
    </article>
  );
}
