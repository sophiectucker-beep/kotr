"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useMemo, useState } from "react";
import {
  Baby,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Footprints,
  MapPin,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import type { ClubItem } from "@/lib/clubs";
import { forMumsItems, type EventItem, type MumsItem } from "@/lib/events";

type EventFilter = "all" | "free";
type CalendarView = "day" | "week" | "month";
type CalendarItemType =
  | "event"
  | "creative-class"
  | "health-class"
  | "other-class"
  | "mums-class";

type CalendarItem = {
  id: string;
  seriesId?: string;
  title: string;
  dateKey: string;
  startDateKey?: string;
  endDateKey?: string;
  type: CalendarItemType;
  href: string;
  external: boolean;
  location: string;
  timeLabel?: string;
};

const viewOrder: CalendarView[] = ["day", "week", "month"];
const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdayNumbers = [1, 2, 3, 4, 5, 6, 0];

export function EventsContent({
  events,
  clubs,
  verifiedDate,
  doodleSrc,
}: {
  events: EventItem[];
  clubs: ClubItem[];
  verifiedDate: string;
  doodleSrc: string;
}) {
  const { language } = useSiteLanguage();
  const [showClubs, setShowClubs] = useState(false);
  const [showMums, setShowMums] = useState(false);
  const [view, setView] = useState<CalendarView>("week");
  const [currentDate, setCurrentDate] = useState(() => startOfWeek(new Date()));
  const [expandedMonthDays, setExpandedMonthDays] = useState<Set<string>>(
    () => new Set()
  );
  const today = useMemo(() => new Date(), []);

  const copy =
    language === "es"
      ? {
          label: "THINGS TO DO",
          title: "¿Qué hay?",
          intro:
            "Planes del calendario que de verdad merecen salir del sofá, y lo más importante: al día, para no enterarte el lunes de que te perdiste algo bueno.",
          note: `Comprobado con las fuentes nombradas el ${verifiedDate}.`,
          clubs: "Mostrar clubes",
          mums: "Para mamás",
          empty: "Nada en esta vista ahora mismo.",
          oneThing: "1 cosa",
          things: "cosas",
        }
      : {
          label: "THINGS TO DO",
          title: "What's On?",
          intro:
            "Calendar events worth getting off the sofa for, and most importantly up-to-date, so you're not finding out on Monday that you missed something good.",
          note: `Checked against the named sources on ${verifiedDate}.`,
          clubs: "Show Clubs",
          mums: "For Mums",
          empty: "Nothing showing in this view right now.",
          oneThing: "1 thing",
          things: "things",
        };

  const calendarItems = useMemo(
    () => buildCalendarItems(events, clubs, forMumsItems, showClubs, showMums, "all"),
    [events, clubs, showClubs, showMums]
  );

  const headerRange = useMemo(
    () => getHeaderRange(view, currentDate, language),
    [view, currentDate, language]
  );

  const dayItems = useMemo(() => {
    const key = toDateKey(currentDate);
    return calendarItems.filter((item) => item.dateKey === key);
  }, [calendarItems, currentDate]);

  const weekDays = useMemo(() => {
    const start = startOfWeek(currentDate);
    return Array.from({ length: 7 }, (_, index) => addDays(start, index));
  }, [currentDate]);

  const monthDays = useMemo(() => buildMonthGrid(currentDate), [currentDate]);

  function moveRange(direction: -1 | 1) {
    if (view === "day") {
      setCurrentDate((prev) => addDays(prev, direction));
      return;
    }

    if (view === "week") {
      setCurrentDate((prev) => addDays(prev, direction * 7));
      return;
    }

    setCurrentDate((prev) => addMonths(prev, direction));
  }

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
            <p className="mt-5 max-w-[30rem] font-sans text-lg leading-8 text-navy/72">
              {copy.intro}
            </p>
            <p className="mt-4 max-w-[34rem] font-sans text-sm leading-7 text-navy/60">
              {language === "es" ? (
                <>
                  Para actividades semanales como baile, fútbol, arte o grupos para peques, ve a{" "}
                  <Link
                    href="/clubs-classes"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Clubes y clases
                  </Link>
                  . Para planes sin fecha fija, prueba{" "}
                  <Link
                    href="/family-day-out"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Plan en familia
                  </Link>
                  .
                </>
              ) : (
                <>
                  For regular weekly things like dance, football, art classes, or toddler groups, head to{" "}
                  <Link
                    href="/clubs-classes"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Clubs & Classes
                  </Link>
                  . For somewhere decent to go without a fixed event date, try{" "}
                  <Link
                    href="/family-day-out"
                    className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Family Day Out
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
                alt="Open Doodles illustration for What's On"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {viewOrder.map((option) => {
              const isActive = option === view;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setView(option);
                    if (option === "day") {
                      setCurrentDate(new Date(today));
                    } else if (option === "week") {
                      setCurrentDate(startOfWeek(today));
                    } else {
                      setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
                    }
                  }}
                  className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${isActive ? "bg-navy text-beige" : "border border-navy/10 bg-white text-navy hover:bg-beige"}`}
                >
                  {option[0].toUpperCase() + option.slice(1)}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 rounded-full border border-navy/10 bg-beige px-3 py-2 text-navy">
            <button
              type="button"
              onClick={() => moveRange(-1)}
              className="rounded-full p-1 transition-colors hover:bg-white"
              aria-label={language === "es" ? "Periodo anterior" : "Previous period"}
            >
              <ChevronLeft className="size-4" />
            </button>
            <p className="min-w-[10rem] px-1 text-center text-sm font-semibold">
              {headerRange}
            </p>
            <button
              type="button"
              onClick={() => moveRange(1)}
              className="rounded-full p-1 transition-colors hover:bg-white"
              aria-label={language === "es" ? "Periodo siguiente" : "Next period"}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowClubs((prev) => !prev)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${showClubs ? "bg-kotr-blue text-white" : "border border-navy/10 bg-white text-navy hover:bg-beige"}`}
            >
              {copy.clubs}
            </button>
            <button
              type="button"
              onClick={() => setShowMums((prev) => !prev)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${showMums ? "bg-salmon text-white" : "border border-navy/10 bg-white text-navy hover:bg-beige"}`}
            >
              {copy.mums}
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white">
          {view === "day" ? (
            <DayView items={dayItems} date={currentDate} language={language} empty={copy.empty} />
          ) : null}

          {view === "week" ? (
            <div className="overflow-x-auto">
              <WeekView
                days={weekDays}
                items={calendarItems}
                copy={copy}
              />
            </div>
          ) : null}

          {view === "month" ? (
            <div className="overflow-x-auto md:overflow-visible">
              <MonthView
                days={monthDays}
                items={calendarItems}
                language={language}
                copy={copy}
                expandedDays={expandedMonthDays}
                onToggleDay={(dateKey) =>
                  setExpandedMonthDays((prev) => {
                    const next = new Set(prev);
                    if (next.has(dateKey)) {
                      next.delete(dateKey);
                    } else {
                      next.add(dateKey);
                    }
                    return next;
                  })
                }
              />
            </div>
          ) : null}
        </div>

        <p className="mt-5 text-center font-sans text-sm leading-7 text-navy/60">
          Want to add your event?{" "}
          <a
            href="mailto:hellokidsontherock@gmail.com"
            className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
          >
            Email me.
          </a>
        </p>
      </section>
    </>
  );
}

function DayView({
  items,
  date,
  language,
  empty,
}: {
  items: CalendarItem[];
  date: Date;
  language: "en" | "es";
  empty: string;
}) {
  const dayLabel = formatDayHeader(date, language);

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-beige text-salmon">
          <CalendarDays className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
            {language === "es" ? "Vista diaria" : "Day view"}
          </p>
          <h2 className="text-2xl font-bold text-navy">{dayLabel}</h2>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 rounded-[1.5rem] border border-dashed border-navy/10 bg-beige/60 p-5">
          <p className="font-sans text-sm text-navy/55">{empty}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <CalendarItemCard key={item.id} item={item} compact={false} />
          ))}
        </div>
      )}
    </div>
  );
}

function WeekView({
  days,
  items,
  copy,
}: {
  days: Date[];
  items: CalendarItem[];
  copy: {
    oneThing: string;
    things: string;
  };
}) {
  const spans = buildWeekSpans(items, days);
  const spanRowCount = spans.length > 0 ? Math.max(...spans.map((span) => span.row + 1)) : 0;
  const dayItemsByKey = new Map(
    days.map((day) => [
      toDateKey(day),
      itemsForDate(items, day).filter(
        (item) =>
          !(
            item.type === "event" &&
            item.startDateKey &&
            item.endDateKey &&
            item.startDateKey !== item.endDateKey
          )
      ),
    ])
  );
  const spanCountByKey = new Map(
    days.map((day, index) => [
      toDateKey(day),
      spans.filter((span) => span.startIndex <= index && span.endIndex >= index).length,
    ])
  );

  return (
    <div className="min-w-[820px] md:min-w-0">
      <div className="grid grid-cols-7 border-b border-navy/10 bg-beige/80">
        {days.map((day, index) => (
          <div
            key={toDateKey(day)}
            className={`px-3 py-3 text-center ${index === 6 ? "" : "border-r border-navy/10"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">
              {weekdayLabels[index]} {day.getDate()}
            </p>
          </div>
        ))}
      </div>
      <div className="relative">
        {spans.length > 0 ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 grid grid-cols-7 gap-0 px-3 pt-3"
            style={{
              top: "2.45rem",
              height: `${spanRowCount * 54}px`,
            }}
          >
            {spans.map((span) => (
              <a
                key={span.id}
                href={span.href}
                target={span.external ? "_blank" : undefined}
                rel={span.external ? "noopener noreferrer" : undefined}
                className="pointer-events-auto block self-start rounded-2xl border border-salmon/20 bg-salmon/8 px-3 py-2.5 transition-transform hover:-translate-y-0.5 hover:bg-salmon/12"
                style={{
                  gridColumn: `${span.startIndex + 1} / ${span.endIndex + 2}`,
                  gridRow: `${span.row + 1}`,
                  marginLeft: span.startIndex === 0 ? 0 : 6,
                  marginRight: span.endIndex === 6 ? 0 : 6,
                }}
              >
                  <div className="flex min-w-0 items-start gap-2">
                    <CalendarDays className="mt-0.5 size-3.5 shrink-0 text-salmon" />
                    <p className="min-w-0 flex-1 max-w-full overflow-hidden text-ellipsis max-md:truncate font-sans text-[12px] font-medium leading-[1rem] text-navy/85">
                      {span.title}
                    </p>
                  </div>
              </a>
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            const dayItems = dayItemsByKey.get(toDateKey(day)) ?? [];
            const spanCount = spanCountByKey.get(toDateKey(day)) ?? 0;
            const totalCount = dayItems.length + spanCount;
            const countLabel =
            totalCount === 1 ? copy.oneThing : `${totalCount} ${copy.things}`;

            return (
              <div
                key={toDateKey(day)}
                className={`min-h-52 p-3 align-top ${index === 6 ? "" : "border-r border-navy/10"}`}
              >
                <p className="font-sans text-xs text-navy/35">{countLabel}</p>

                <div
                  className="mt-2 space-y-3"
                  style={{ paddingTop: `${spanRowCount * 54 + 10}px` }}
                >
                  {dayItems.length > 0
                    ? (
                    dayItems.map((item) => (
                      <CalendarItemCard key={item.id} item={item} compact />
                    ))
                    )
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MonthView({
  days,
  items,
  language,
  copy,
  expandedDays,
  onToggleDay,
}: {
  days: Date[];
  items: CalendarItem[];
  language: "en" | "es";
  copy: {
    oneThing: string;
    things: string;
  };
  expandedDays: Set<string>;
  onToggleDay: (dateKey: string) => void;
}) {
  const weeks = chunkDays(days, 7);

  return (
    <div className="min-w-[720px] md:min-w-0">
      <div className="grid grid-cols-7 border-b border-navy/10 bg-beige/80">
        {weekdayLabels.map((day) => (
          <div
            key={day}
            className="px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/55"
          >
            {day}
          </div>
        ))}
      </div>

      <div>
        {weeks.map((week, weekIndex) => {
          const spans = buildWeekSpans(items, week);
          const spanRowCount =
            spans.length > 0 ? Math.max(...spans.map((span) => span.row + 1)) : 0;

          return (
            <div
              key={`month-week-${weekIndex}`}
              className={`relative ${weekIndex === weeks.length - 1 ? "" : "border-b border-navy/10"}`}
            >
              {spans.length > 0 ? (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 grid grid-cols-7 gap-0 px-2.5 pt-2.5"
                  style={{
                    top: "1.55rem",
                    height: `${spanRowCount * 40}px`,
                  }}
                >
                  {spans.map((span) => (
                    <a
                      key={`${span.id}-${weekIndex}`}
                      href={span.href}
                      target={span.external ? "_blank" : undefined}
                      rel={span.external ? "noopener noreferrer" : undefined}
                      className="pointer-events-auto block self-start rounded-xl border border-salmon/20 bg-salmon/8 px-2 py-1.5 transition-transform hover:-translate-y-0.5 hover:bg-salmon/12"
                      style={{
                        gridColumn: `${span.startIndex + 1} / ${span.endIndex + 2}`,
                        gridRow: `${span.row + 1}`,
                        marginLeft: span.startIndex === 0 ? 0 : 5,
                        marginRight: span.endIndex === 6 ? 0 : 5,
                      }}
                    >
                      <div className="flex min-w-0 items-start gap-1.5">
                        <CalendarDays className="mt-0.5 size-3 shrink-0 text-salmon" />
                        <p className="min-w-0 flex-1 max-w-full overflow-hidden text-ellipsis max-md:truncate font-sans text-[11px] font-medium leading-[0.9rem] text-navy/85">
                          {span.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : null}

              <div className="grid grid-cols-7">
                {week.map((day, index) => {
                  const isCurrentMonth =
                    day.getMonth() === currentMonthAnchor(days).getMonth();
                  const dateKey = toDateKey(day);
                  const dayItems = itemsForDate(items, day).filter(
                    (item) =>
                      !(
                        item.type === "event" &&
                        item.startDateKey &&
                        item.endDateKey &&
                        item.startDateKey !== item.endDateKey
                      )
                  );
                  const isExpanded = expandedDays.has(dateKey);
                  const visibleItems = isExpanded ? dayItems : dayItems.slice(0, 3);

                  return (
                    <div
                      key={`${dateKey}-${index}`}
                      className={`min-h-32 border-navy/10 p-2 ${index === 6 ? "" : "border-r"} ${isCurrentMonth ? "bg-white" : "bg-beige/35"}`}
                    >
                      <p
                        className={`text-xs font-semibold ${isCurrentMonth ? "text-navy" : "text-navy/35"}`}
                      >
                        {day.getDate()}
                      </p>
                      <div
                        className="mt-1.5 space-y-1.5"
                        style={{ paddingTop: `${spanRowCount * 40 + 4}px` }}
                      >
                        {visibleItems.map((item) => (
                          <CalendarItemCard
                            key={item.id}
                            item={item}
                            compact
                            monthCompact={item.type !== "event"}
                          />
                        ))}
                        {dayItems.length > 3 ? (
                          <button
                            type="button"
                            onClick={() => onToggleDay(dateKey)}
                            className="font-sans text-xs text-navy/45 underline decoration-navy/20 underline-offset-2 transition-colors hover:text-navy"
                          >
                            {isExpanded
                              ? language === "es"
                                ? "Ver menos"
                                : "Show less"
                              : `+${dayItems.length - 3} ${language === "es" ? copy.things : "more"}`}
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CalendarItemCard({
  item,
  compact,
  monthCompact = false,
}: {
  item: CalendarItem;
  compact: boolean;
  monthCompact?: boolean;
}) {
  const Icon =
    item.type === "creative-class"
      ? item.title.toLowerCase().includes("storytelling") ||
        item.title.toLowerCase().includes("library")
        ? BookOpen
        : item.title.toLowerCase().includes("dance") ||
          item.title.toLowerCase().includes("stagecoach") ||
          item.title.toLowerCase().includes("transitions") ||
          item.title.toLowerCase().includes("showdance") ||
          item.title.toLowerCase().includes("yalta") ||
          item.title.toLowerCase().includes("phoenix")
        ? Footprints
        : Palette
      : item.type === "health-class"
        ? Dumbbell
        : item.type === "mums-class"
          ? item.title.toLowerCase().includes("breastfeeding")
            ? Baby
            : Dumbbell
        : item.type === "other-class"
          ? Users
        : CalendarDays;
  const iconClass =
    item.type === "creative-class"
      ? "text-kotr-blue"
      : item.type === "health-class"
        ? "text-kotr-green"
        : item.type === "mums-class"
          ? "text-salmon"
        : "text-salmon";
  const cardClass =
    item.type === "event"
      ? "border-salmon/20 bg-salmon/8 hover:bg-salmon/12"
      : "border-navy/10 bg-white hover:bg-beige/50";
  const compactTextClass = compact
    ? "text-[12px] leading-[1rem]"
    : "text-[12px] leading-[1rem]";
  const titleClampClass = monthCompact
    ? "line-clamp-2 overflow-hidden text-ellipsis"
    : compact
      ? "line-clamp-2 overflow-hidden text-ellipsis"
      : "";

  return (
    <CalendarCardLink
      href={item.href}
      external={item.external}
      title={item.title}
      className={`block rounded-2xl border px-3 py-2.5 transition-transform hover:-translate-y-0.5 ${cardClass}`}
    >
      <div className="flex min-w-0 items-start gap-2">
        <Icon className={`mt-0.5 size-3.5 shrink-0 ${iconClass}`} />
        <p
          className={`min-w-0 flex-1 max-w-full font-sans font-medium text-navy/85 ${compactTextClass} ${titleClampClass}`}
        >
          {item.title}
        </p>
      </div>
      {!compact ? (
        <div className="mt-2 space-y-1 text-navy/55">
          {item.timeLabel ? (
            <div className="flex items-start gap-1.5 font-sans text-xs">
              <Sparkles className="mt-0.5 size-3 shrink-0" />
              <span>{item.timeLabel}</span>
            </div>
          ) : null}
          <div className="flex items-start gap-1.5 font-sans text-xs">
            <MapPin className="mt-0.5 size-3 shrink-0" />
            <span>{item.location}</span>
          </div>
        </div>
      ) : null}
    </CalendarCardLink>
  );
}

function CalendarCardLink({
  href,
  external,
  title,
  className,
  children,
}: {
  href: string;
  external: boolean;
  title: string;
  className: string;
  children: ReactNode;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={className}
    >
      {children}
    </Link>
  );
}

function buildCalendarItems(
  events: EventItem[],
  clubs: ClubItem[],
  mumsItems: MumsItem[],
  showClubs: boolean,
  showMums: boolean,
  filter: EventFilter
) {
  const eventItems = events.flatMap((event) => expandEventDates(event, filter));

  const clubItems = showClubs ? clubs.flatMap((club) => expandClubDates(club, filter)) : [];
  const mumsCalendarItems = showMums
    ? mumsItems.flatMap((item) => expandMumsDates(item, filter))
    : [];

  return [...eventItems, ...clubItems, ...mumsCalendarItems];
}

function expandEventDates(event: EventItem, filter: EventFilter): CalendarItem[] {
  const isFree = Boolean(event.freeNote) || /free/i.test(event.cost);
  if (filter === "free" && !isFree) return [];

  const start = parseISODate(event.sortDate);
  const end = parseISODate(event.endDate ?? event.sortDate);
  const items: CalendarItem[] = [];
  const relatedClubSlug = event.relatedClubSlugs?.[0];
  const href = relatedClubSlug
    ? `/clubs-classes/${relatedClubSlug}`
    : event.sourceUrl;
  const external = !relatedClubSlug;

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    items.push({
      id: `${event.slug}-${toDateKey(cursor)}`,
      seriesId: event.slug,
      title: event.title,
      dateKey: toDateKey(cursor),
      startDateKey: toDateKey(start),
      endDateKey: toDateKey(end),
      type: "event",
      href,
      external,
      location: event.venue,
      timeLabel: event.startLabel,
    });
  }

  return items;
}

function expandClubDates(club: ClubItem, filter: EventFilter): CalendarItem[] {
  if (club.category === "for-mums") return [];

  const isFree = /free/i.test(`${club.summary} ${club.schedule}`);
  if (filter === "free" && !isFree) return [];

  const weekdays = inferWeekdays(club.schedule);
  if (weekdays.length === 0) return [];

  const type = getClubCalendarType(club);
  const href = `/clubs-classes/${club.slug}`;
  const start = startOfWeek(new Date());
  const end = addMonths(start, 2);
  const items: CalendarItem[] = [];

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    if (weekdays.includes(cursor.getDay())) {
      items.push({
        id: `${club.slug}-${toDateKey(cursor)}`,
        title: club.name,
        dateKey: toDateKey(cursor),
        type,
        href,
        external: false,
        location: club.location,
        timeLabel: inferTimeLabel(club.schedule),
      });
    }
  }

  return items;
}

function expandMumsDates(item: MumsItem, filter: EventFilter): CalendarItem[] {
  if (filter === "free") return [];

  const weekdays = inferWeekdays(item.schedule);
  if (weekdays.length === 0) return [];

  const href = item.relatedClubSlug
    ? `/clubs-classes/${item.relatedClubSlug}`
    : item.sourceUrl;
  const external = !item.relatedClubSlug;

  const start = startOfWeek(new Date());
  const end = addMonths(start, 2);
  const items: CalendarItem[] = [];

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    const dateKey = toDateKey(cursor);

    if (
      weekdays.includes(cursor.getDay()) &&
      !item.excludedDates?.includes(dateKey)
    ) {
      items.push({
        id: `${item.slug}-${dateKey}`,
        title: item.title,
        dateKey,
        type: "mums-class",
        href,
        external,
        location: item.venue,
        timeLabel: inferTimeLabel(item.schedule),
      });
    }
  }

  return items;
}

function getClubCalendarType(club: ClubItem): CalendarItemType {
  if (
    club.category === "babies-tots" ||
    club.category === "dance" ||
    club.category === "arts-creative" ||
    club.secondaryCategories?.includes("arts-creative")
  ) {
    return "creative-class";
  }

  if (
    club.category === "health-fitness" ||
    club.secondaryCategories?.includes("health-fitness")
  ) {
    return "health-class";
  }

  return "other-class";
}

function inferWeekdays(schedule: string) {
  const text = schedule.toLowerCase();
  const weekdays = new Set<number>();

  if (text.includes("monday to friday")) {
    [1, 2, 3, 4, 5].forEach((day) => weekdays.add(day));
  }

  const patterns: Array<[RegExp, number]> = [
    [/mondays?|monday/g, 1],
    [/tuesdays?|tuesday/g, 2],
    [/wednesdays?|wednesday/g, 3],
    [/thursdays?|thursday/g, 4],
    [/fridays?|friday/g, 5],
    [/saturdays?|saturday/g, 6],
    [/sundays?|sunday/g, 0],
  ];

  patterns.forEach(([pattern, day]) => {
    if (pattern.test(text)) weekdays.add(day);
  });

  return Array.from(weekdays).sort((a, b) => weekdayNumbers.indexOf(a) - weekdayNumbers.indexOf(b));
}

function inferTimeLabel(schedule: string) {
  const match = schedule.match(/\b\d{1,2}(?::\d{2})?\s?(?:am|pm)\b(?:\s*-\s*\d{1,2}(?::\d{2})?\s?(?:am|pm)\b)?/i);
  return match?.[0];
}

function itemsForDate(items: CalendarItem[], date: Date) {
  return items.filter((item) => item.dateKey === toDateKey(date));
}

function startOfWeek(date: Date) {
  const result = new Date(date);
  const day = result.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  result.setHours(0, 0, 0, 0);
  return result;
}

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date: Date, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseISODate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getHeaderRange(view: CalendarView, date: Date, language: "en" | "es") {
  const locale = language === "es" ? "es-ES" : "en-GB";

  if (view === "day") {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  if (view === "week") {
    const start = startOfWeek(date);
    const end = addDays(start, 6);

    return `${new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
    }).format(start)} - ${new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(end)}`;
  }

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatDayHeader(date: Date, language: "en" | "es") {
  const locale = language === "es" ? "es-ES" : "en-GB";

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function buildMonthGrid(date: Date) {
  const anchor = new Date(date.getFullYear(), date.getMonth(), 1);
  const start = startOfWeek(anchor);
  const end = addDays(start, 41);
  const days: Date[] = [];

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    days.push(cursor);
  }

  return days;
}

function currentMonthAnchor(days: Date[]) {
  return days[10] ?? new Date();
}

function chunkDays(days: Date[], size: number) {
  const chunks: Date[][] = [];

  for (let index = 0; index < days.length; index += size) {
    chunks.push(days.slice(index, index + size));
  }

  return chunks;
}

function buildWeekSpans(items: CalendarItem[], days: Date[]) {
  const weekStartKey = toDateKey(days[0]);
  const weekEndKey = toDateKey(days[6]);
  const grouped = new Map<string, CalendarItem>();

  items.forEach((item) => {
    if (
      item.type === "event" &&
      item.seriesId &&
      item.startDateKey &&
      item.endDateKey &&
      item.startDateKey !== item.endDateKey
    ) {
      if (!(item.endDateKey < weekStartKey || item.startDateKey > weekEndKey)) {
        grouped.set(item.seriesId, item);
      }
    }
  });

  const spans = Array.from(grouped.values())
    .map((item) => {
      const startIndex = Math.max(
        0,
        days.findIndex((day) => toDateKey(day) === item.startDateKey)
      );
      const endIndexCandidate = days.findIndex((day) => toDateKey(day) === item.endDateKey);
      const endIndex = endIndexCandidate === -1 ? 6 : endIndexCandidate;

      return {
        id: item.seriesId as string,
        title: item.title,
        href: item.href,
        external: item.external,
        startIndex,
        endIndex,
      };
    })
    .sort((a, b) => a.startIndex - b.startIndex || a.endIndex - b.endIndex);

  const occupied: number[] = [];

  return spans.map((span) => {
    let row = 0;
    while (occupied[row] !== undefined && occupied[row] >= span.startIndex) {
      row += 1;
    }
    occupied[row] = span.endIndex;

    return { ...span, row };
  });
}
