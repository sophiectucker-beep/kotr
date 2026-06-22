"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Baby,
  ChevronRight,
  Dumbbell,
  Footprints,
  Heart,
  Languages,
  type LucideIcon,
  Palette,
  Users,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { getClubMonogram, type ClubCategory, type ClubItem } from "@/lib/clubs";

type ClubFilter = "all" | ClubCategory;

type FilterConfigItem = {
  label: { en: string; es: string };
  pillClass: string;
  icon?: LucideIcon;
};

const filterConfig: Record<ClubFilter, FilterConfigItem> = {
  all: {
    label: { en: "All", es: "Todo" },
    pillClass: "bg-navy text-beige",
  },
  "babies-tots": {
    label: { en: "Babies & Tots", es: "Bebés y peques" },
    pillClass: "bg-kotr-pink text-white",
    icon: Baby,
  },
  "for-mums": {
    label: { en: "For Mums", es: "Para mamás" },
    pillClass: "bg-salmon text-white",
    icon: Heart,
  },
  "health-fitness": {
    label: { en: "Sports", es: "Deporte" },
    pillClass: "bg-salmon text-white",
    icon: Dumbbell,
  },
  "education-languages": {
    label: { en: "Learning & Skills", es: "Aprendizaje y habilidades" },
    pillClass: "bg-kotr-blue text-white",
    icon: Languages,
  },
  dance: {
    label: { en: "Dance", es: "Baile" },
    pillClass: "bg-salmon text-white",
    icon: Footprints,
  },
  "arts-creative": {
    label: { en: "Arts", es: "Arte" },
    pillClass: "bg-kotr-orange text-white",
    icon: Palette,
  },
  "youth-groups": {
    label: { en: "Youth Groups", es: "Grupos juveniles" },
    pillClass: "bg-kotr-green text-white",
    icon: Users,
  },
} as const;

export function ClubsContent({
  clubs,
  doodleSrc,
}: {
  clubs: ClubItem[];
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [activeFilter, setActiveFilter] = useState<ClubFilter>("all");

  const copy =
    language === "es"
      ? {
          label: "Things to do",
          title: "Clubes y clases semanales",
          intro:
            "Todo lo regular en un mismo sitio: deporte, arte, teatro, idiomas, actividades extraescolares y unas cuantas opciones decentes para peques y mayores.",
          addBusinessLead: "¿Quieres añadir tu club o clase?",
          addBusinessLink: "Escríbeme.",
          empty: "No hay nada en esa categoría ahora mismo.",
        }
      : {
          label: "Things to do",
          title: "Clubs & Classes",
          intro:
            "All the regular stuff in one place: football, art, drama, languages, after-school bits, and a few decent options for older kids too.",
          addBusinessLead: "Want to add your club/class?",
          addBusinessLink: "Email me.",
          empty: "Nothing showing in this category right now.",
        };

  const orderedClubs = useMemo(
    () => [...clubs].sort((a, b) => a.name.localeCompare(b.name)),
    [clubs]
  );

  const filteredClubs = useMemo(() => {
    if (activeFilter === "all") {
      return orderedClubs;
    }

    return orderedClubs.filter(
      (club) =>
        club.category === activeFilter ||
        club.secondaryCategories?.includes(activeFilter)
    );
  }, [activeFilter, orderedClubs]);

  const filterOrder: ClubFilter[] = [
    "all",
    "health-fitness",
    "education-languages",
    "dance",
    "arts-creative",
    "youth-groups",
    "babies-tots",
    "for-mums",
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
                  Si estás buscando algo concreto, la gente suele venir aquí a por{" "}
                  <Link
                    href="/clubs-classes/gibraltar-shotokan-karate-club"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    kárate
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/stagecoach-gibraltar"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    baile
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/parent-and-child-society-pacs"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    grupos para bebés y peques
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/gibraltar-fa-fundamentals-development-school"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    fútbol
                  </Link>
                  {" "}y{" "}
                  <Link
                    href="/clubs-classes/gibraltar-artists-studio"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    arte
                  </Link>
                  .
                </>
              ) : (
                <>
                  If you’re looking for something specific, people usually land here for{" "}
                  <Link
                    href="/clubs-classes/gibraltar-shotokan-karate-club"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    karate
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/stagecoach-gibraltar"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    dance
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/parent-and-child-society-pacs"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    baby and toddler groups
                  </Link>
                  ,{" "}
                  <Link
                    href="/clubs-classes/gibraltar-fa-fundamentals-development-school"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    football
                  </Link>
                  , and{" "}
                  <Link
                    href="/clubs-classes/gibraltar-artists-studio"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    art classes
                  </Link>
                  , and{" "}
                  <Link
                    href="/clubs-classes/scouts-gibraltar"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Scouts
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="mt-3 font-sans text-sm leading-7 text-navy/60">
              {copy.addBusinessLead}{" "}
              <a
                href="mailto:hellokidsontherock@gmail.com?subject=Add%20club%2Fclass"
                className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
              >
                {copy.addBusinessLink}
              </a>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for clubs and activities"
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
            const Icon = filterConfig[filter].icon;
            const inactiveClass = isActive
              ? ""
              : "border border-navy/10 bg-white text-navy hover:bg-beige";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive ? filterConfig[filter].pillClass : inactiveClass}`}
              >
                {Icon ? <Icon className="size-4" /> : null}
                <span>{filterConfig[filter].label[language]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredClubs.map((club) => (
            <ClubCard key={club.slug} club={club} />
          ))}
        </div>

        {filteredClubs.length === 0 ? (
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

function ClubCard({
  club,
}: {
  club: ClubItem;
}) {
  const fallbackLetters = getClubMonogram(club.name);

  return (
    <Link
      href={`/clubs-classes/${club.slug}`}
      className="group flex h-full rounded-[1.5rem] border border-navy/8 bg-white p-5 shadow-[0_12px_34px_rgba(45,56,77,0.08)] transition-transform hover:-translate-y-1"
    >
      <div className="flex min-h-[72px] w-full items-center gap-4">
        {club.logoUrl ? (
          <div className="relative h-14 w-24 shrink-0">
            <Image
              src={club.logoUrl}
              alt={`${club.name} logo`}
              fill
              className="object-contain object-left"
            />
          </div>
        ) : (
          <div className="inline-flex h-14 min-w-14 shrink-0 items-center justify-center rounded-[1.15rem] border border-navy/10 bg-beige px-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/75">
              {fallbackLetters}
            </span>
          </div>
        )}

        <h2 className="min-w-0 flex-1 font-sans text-base font-semibold leading-snug text-navy transition-colors group-hover:text-salmon">
          {club.name}
        </h2>

        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy/55 transition-colors group-hover:border-salmon/30 group-hover:text-salmon">
          <ChevronRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
