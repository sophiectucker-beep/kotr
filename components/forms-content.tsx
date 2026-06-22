"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BookOpen,
  ExternalLink,
  FileHeart,
  FilePenLine,
  FileSearch,
  FolderClock,
  GraduationCap,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type FormCategory, type FormItem } from "@/lib/forms";
import rockyMascot from "@/Rocky.png";

type FormsFilter = "all" | FormCategory;

const categoryConfig = {
  all: {
    label: { en: "All", es: "Todo" },
    title: { en: "All forms", es: "Todos los formularios" },
    pillClass: "bg-navy text-beige",
    icon: FileSearch,
  },
  school: {
    label: { en: "School", es: "Cole" },
    title: { en: "School", es: "Cole" },
    pillClass: "bg-kotr-blue text-white",
    icon: GraduationCap,
  },
  health: {
    label: { en: "Health", es: "Salud" },
    title: { en: "Health", es: "Salud" },
    pillClass: "bg-salmon text-white",
    icon: HeartPulse,
  },
  benefits: {
    label: { en: "Benefits", es: "Ayudas" },
    title: { en: "Benefits", es: "Ayudas" },
    pillClass: "bg-kotr-green text-white",
    icon: FileHeart,
  },
  "id-records": {
    label: { en: "ID & Records", es: "ID y registros" },
    title: { en: "ID & Records", es: "ID y registros" },
    pillClass: "bg-kotr-orange text-white",
    icon: FolderClock,
  },
  other: {
    label: { en: "Other", es: "Otros" },
    title: { en: "Other", es: "Otros" },
    pillClass: "bg-kotr-pink text-white",
    icon: BookOpen,
  },
} as const;

export function FormsContent({
  forms,
  doodleSrc,
}: {
  forms: FormItem[];
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [activeFilter, setActiveFilter] = useState<FormsFilter>("all");

  const copy =
    language === "es"
      ? {
          label: "USEFUL STUFF",
          title: "Formularios",
          intro:
            "Los papeles que la gente acaba buscando de verdad: cole, salud, ayudas, registros y las cosas de siempre.",
          directoryTitle: "Paperwork pile",
          purpose: "Para qué sirve",
          source: "Fuente",
          openForm: "Abrir formulario",
          downloadBlank: "Descargar formulario en blanco",
          helpFill: "Ayúdame a rellenarlo",
          nothing: "No hay nada en esta sección ahora mismo.",
        }
      : {
          label: "USEFUL STUFF",
          title: "Forms",
          intro:
            "The bits of paperwork people actually end up digging around for: school forms, health admin, benefits, records, and the usual life bits.",
          directoryTitle: "Paperwork pile",
          purpose: "What it’s for",
          source: "Source",
          openForm: "Open form",
          downloadBlank: "Download blank form",
          helpFill: "Help me fill it",
          nothing: "Nothing showing in this section right now.",
        };

  const orderedForms = useMemo(
    () => [...forms].sort((a, b) => a.title.localeCompare(b.title)),
    [forms]
  );

  const visibleEntries = useMemo(() => {
    if (activeFilter === "all") {
      return orderedForms;
    }

    return orderedForms.filter((entry) => entry.category === activeFilter);
  }, [activeFilter, orderedForms]);

  const filterOrder: FormsFilter[] = [
    "all",
    "school",
    "health",
    "benefits",
    "id-records",
    "other",
  ];

  return (
    <>
      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-5 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-7">
        <div className="grid items-center gap-5 md:grid-cols-[112px_minmax(0,1fr)_auto]">
          <div className="relative mx-auto h-24 w-24 md:mx-0 md:h-28 md:w-28">
            <Image
              src={rockyMascot}
              alt="Rocky"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[34rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
              Rocky
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-navy md:text-[2rem]">
              {language === "es"
                ? "¿Quieres ayuda para rellenar un formulario?"
                : "Want help filling out a form?"}
            </h2>
            <p className="mt-3 font-sans text-base leading-7 text-navy/72">
              {language === "es"
                ? "Rocky te lo va preguntando en términos normales, sin encabezados raros ni papeleo hablado como si trabajases en una oficina."
                : "Rocky can talk you through it in normal language, without weird headings or office-speak."}
            </p>
          </div>

          <div className="md:justify-self-end">
            <Button asChild className="min-w-[12.5rem] gap-2 whitespace-nowrap font-sans text-sm font-medium">
              <Link href="/forms/filler?form=maternity-grant">
                <ExternalLink className="size-4" />
                <span>{language === "es" ? "Abrir Rocky" : "Click me"}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
                  Lo más útil aquí suele ser el{" "}
                  <Link
                    href="/forms/filler?form=maternity-grant"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    rellenador del formulario de ayuda por maternidad
                  </Link>
                  , pero también ayuda tener a mano{" "}
                  <Link
                    href="/numbers"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    teléfonos útiles
                  </Link>
                  {" "}y{" "}
                  <Link
                    href="/blog"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    guías prácticas
                  </Link>
                  .
                </>
              ) : (
                <>
                  The handiest thing here for most people is the{" "}
                  <Link
                    href="/forms/filler?form=maternity-grant"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    maternity grant form filler
                  </Link>
                  , but it also helps to keep{" "}
                  <Link
                    href="/numbers"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    useful numbers
                  </Link>
                  {" "}and the{" "}
                  <Link
                    href="/blog"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    practical guides
                  </Link>
                  {" "}nearby.
                </>
              )}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] pt-1 md:pt-3">
            <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={doodleSrc}
                alt="Open Doodles illustration for forms"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-navy/10 pt-8">
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
              Gibraltar forms
            </p>
          </div>

          {visibleEntries.length === 0 ? (
            <div className="py-8">
              <p className="font-sans text-base text-navy/70">{copy.nothing}</p>
            </div>
          ) : (
            <div className="mt-4 divide-y divide-navy/10">
              {visibleEntries.map((entry) => (
                <FormRow
                  key={entry.slug}
                  entry={entry}
                  language={language}
                  sourceLabel={copy.source}
                  purposeLabel={copy.purpose}
                  downloadBlankLabel={copy.downloadBlank}
                  helpFillLabel={copy.helpFill}
                />
              ))}
            </div>
          )}
        </div>
        </div>
      </section>
    </>
  );
}

function FormRow({
  entry,
  language,
  sourceLabel,
  purposeLabel,
  downloadBlankLabel,
  helpFillLabel,
}: {
  entry: FormItem;
  language: "en" | "es";
  sourceLabel: string;
  purposeLabel: string;
  downloadBlankLabel: string;
  helpFillLabel: string;
}) {
  const CategoryIcon = categoryConfig[entry.category].icon as LucideIcon;
  const canHelpFill =
    entry.slug === "maternity-grant" ||
    entry.slug === "gibraltar-passport" ||
    entry.slug === "identity-card-application";

  return (
    <article
      id={entry.slug}
      className="scroll-mt-32 grid gap-5 py-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_auto] lg:items-start lg:gap-6"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-bold leading-tight text-navy">{entry.title}</h2>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
              categoryConfig[entry.category].pillClass
            )}
          >
            <CategoryIcon className="size-3.5" />
            <span>{categoryConfig[entry.category].title[language]}</span>
          </span>
        </div>
        <p className="mt-2 font-sans text-sm leading-6 text-navy/56">
          {sourceLabel}:{" "}
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-navy/20 underline-offset-4 transition-colors hover:text-salmon"
          >
            {entry.sourceName}
          </a>
        </p>
      </div>

      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-salmon">
          {purposeLabel}
        </p>
        <p className="mt-2 font-sans text-sm leading-7 text-navy/72">
          {entry.purpose}
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:justify-self-end">
        <Button asChild variant="outline" className="min-w-[12.5rem] gap-2 whitespace-nowrap font-sans text-sm font-medium">
          <a href={entry.sourceUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            <span>{downloadBlankLabel}</span>
          </a>
        </Button>

        {canHelpFill ? (
          <Button
            asChild
            size="sm"
            className="min-w-[12.5rem] border-salmon bg-salmon font-sans font-medium text-white hover:bg-[#f19b9a] hover:text-white"
          >
            <Link href={`/forms/filler?form=${entry.slug}`}>
              <FilePenLine className="size-4" />
              <span>{helpFillLabel}</span>
            </Link>
          </Button>
        ) : (
          <Button
            type="button"
            disabled
            size="sm"
            className="min-w-[12.5rem] border-navy/8 bg-beige/60 font-sans font-medium text-navy/35 hover:bg-beige/60 hover:text-navy/35"
          >
            <FilePenLine className="size-4" />
            <span>{helpFillLabel}</span>
          </Button>
        )}
      </div>
    </article>
  );
}
