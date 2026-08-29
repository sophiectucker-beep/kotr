export interface EventItem {
  slug: string;
  title: string;
  summary: string;
  status: "upcoming" | "watch" | "past";
  audience: "babies" | "kids" | "teens" | "family";
  relatedClubSlugs?: string[];
  cost: string;
  freeNote?: string;
  endDate?: string;
  eventDates?: Array<{
    sortDate: string;
    startLabel: string;
    title?: string;
    ageLabel?: string;
  }>;
  sortDate: string;
  startLabel: string;
  venue: string;
  ageLabel: string;
  sourceName: string;
  sourceUrl: string;
  imageUrl: string;
  note: string;
}

export interface MumsItem {
  slug: string;
  title: string;
  summary: string;
  schedule: string;
  venue: string;
  sourceName: string;
  sourceUrl: string;
  relatedClubSlug?: string;
  excludedDates?: string[];
}

export const eventsVerifiedDate = "29 August 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "gibraltar-fair-2026",
    title: "Gibraltar Fair 2026",
    summary:
      "Nine days of fairground rides, games, food, stalls, and summer entertainment for all ages.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    endDate: "2026-08-29",
    sortDate: "2026-08-21",
    startLabel: "21-29 August 2026",
    venue: "Victoria Stadium and surrounding fairground area",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl: "https://www.culture.gi/news/gibraltar-fair/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 29 August 2026 from Gibraltar Cultural Services, which lists Gibraltar Fair from 21 August 2026 to 29 August 2026 at the fairground by Victoria Stadium.",
  },
  {
    slug: "mario-finlayson-national-art-gallery-2026",
    title: "Mario Finlayson National Art Gallery",
    summary:
      "A long-running city-centre gallery event open across summer dates at City Hall.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    endDate: "2026-09-26",
    sortDate: "2026-08-30",
    startLabel: "30 May-26 September 2026",
    venue: "City Hall, John Mackintosh Square",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/index.php/events/mario-finlayson-national-art-gallery",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 29 August 2026 from the current Visit Gibraltar event page, which lists Mario Finlayson National Art Gallery at City Hall from 30 May 2026 to 26 September 2026.",
  },
  {
    slug: "gibraltar-national-day-2026",
    title: "Gibraltar National Day 2026",
    summary:
      "A full National Day programme with children's attractions, live entertainment, and evening fireworks for all ages.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free public events",
    endDate: "2026-09-10",
    sortDate: "2026-09-10",
    startLabel: "10 September 2026",
    venue:
      "Casemates Square, John Mackintosh Square, Main Street, and Grand Casemates Square",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl: "https://www.culture.gi/news/gibraltar-national-day-events/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 29 August 2026 from Gibraltar Cultural Services' National Day events programme for Thursday 10 September 2026, which lists family attractions from 11am in John Mackintosh Square and Main Street, evening entertainment in Casemates Square and Grand Casemates Square, and a fireworks and drone display at 10pm.",
  },
  {
    slug: "gibraltar-national-day-childrens-fancy-dress-competition-2026",
    title: "National Day Children's Fancy Dress Competition",
    summary:
      "A themed National Day fancy dress competition for children, with judging before the main evening celebrations.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free to enter",
    endDate: "2026-09-10",
    sortDate: "2026-09-10",
    startLabel: "10 September 2026, 18:00",
    venue: "John Mackintosh Square",
    ageLabel: "Children",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/gibraltar-national-day-2026-childrens-fancy-dress-competition/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 29 August 2026 from Gibraltar Cultural Services, which lists the National Day 2026 Children's Fancy Dress Competition at 6pm on Thursday 10 September 2026 in John Mackintosh Square.",
  },
  {
    slug: "walk-the-beat-2026",
    title: "Walk The Beat 2026",
    summary:
      "A 24-hour sponsored walk and community challenge open to families, friends, and individuals.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    endDate: "2026-09-30",
    sortDate: "2026-09-29",
    startLabel: "29 September 2026, 10:30 to 30 September 2026, 10:30",
    venue: "Victoria Stadium",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl: "https://www.visitgibraltar.gi/events/walk-the-beat",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 29 August 2026 from the current Visit Gibraltar event page, which lists Walk The Beat from 10:30am on 29 September 2026 to 10:30am on 30 September 2026 at Victoria Stadium and describes it as a challenge that families, friends, and individuals can register for.",
  },
];

export const forMumsItems: MumsItem[] = [
  {
    slug: "post-natal-pilates",
    title: "Post Natal Pilates",
    summary:
      "A weekly Corelife Baby postnatal Pilates class focused on core recovery, strength, and mindful movement for mums.",
    schedule: "Every Tuesday 12:00pm",
    venue: "See organiser page",
    sourceName: "Corelife Baby",
    sourceUrl: "https://www.corelifebyc.com/",
    relatedClubSlug: "post-natal-pilates",
  },
  {
    slug: "corelife-baby-sensory-coffee-morning",
    title: "Baby Sensory & Coffee Morning",
    summary:
      "A weekly Corelife Baby session with music, sensory play, and a more relaxed morning chat for mums and babies.",
    schedule: "Every Monday 11:15am",
    venue: "See organiser page",
    sourceName: "Corelife Baby",
    sourceUrl: "https://www.corelifebyc.com/",
    relatedClubSlug: "post-natal-pilates",
  },
  {
    slug: "corelife-baby-mummy-fitness",
    title: "Mummy Fitness",
    summary:
      "A weekly low-impact postnatal fitness and community training session through Corelife Baby.",
    schedule: "Every Thursday 11:45am",
    venue: "See organiser page",
    sourceName: "Corelife Baby",
    sourceUrl: "https://www.corelifebyc.com/",
    relatedClubSlug: "post-natal-pilates",
  },
  {
    slug: "corelife-baby-massage-workshop",
    title: "Baby Massage Workshop",
    summary:
      "A weekly specialist-led baby bonding workshop through Corelife Baby.",
    schedule: "Every Friday 11:00am",
    venue: "See organiser page",
    sourceName: "Corelife Baby",
    sourceUrl: "https://www.corelifebyc.com/",
    relatedClubSlug: "post-natal-pilates",
  },
  {
    slug: "breastfeeding-support-group",
    title: "Breastfeeding Support Group",
    summary:
      "A weekly term-time support group for mums looking for infant-feeding support and a regular meet-up with others in the same stage.",
    schedule: "Every Monday 10:00-11:00 during term time",
    venue: "Integral Yoga Centre, Town Range",
    sourceName: "Infant Feeding Matters",
    sourceUrl: "https://www.instagram.com/infant_feeding_matters/",
    relatedClubSlug: "breastfeeding-support-group",
    excludedDates: ["2026-04-06"],
  },
];

export interface ClubUpcomingItem {
  slug: string;
  title: string;
  sortDate: string;
  startLabel: string;
  venue: string;
  sourceUrl: string;
}

export function getUpcomingEventsForClub(clubSlug: string): ClubUpcomingItem[] {
  const today = getTodayDateKey();
  const eventMatches: ClubUpcomingItem[] = childFriendlyEvents
    .filter(
      (event) =>
        event.status === "upcoming" &&
        event.relatedClubSlugs?.includes(clubSlug) &&
        (event.endDate ?? event.sortDate) >= today
    )
    .map((event) => ({
      slug: event.slug,
      title: event.title,
      sortDate: event.sortDate,
      startLabel: event.startLabel,
      venue: event.venue,
      sourceUrl: event.sourceUrl,
    }));

  const mumsMatches = forMumsItems
    .filter((item) => item.relatedClubSlug === clubSlug)
    .flatMap((item) => expandUpcomingMumsInstances(item, 5));

  return [...eventMatches, ...mumsMatches].sort((a, b) =>
    a.sortDate.localeCompare(b.sortDate)
  );
}

function expandUpcomingMumsInstances(
  item: MumsItem,
  limit: number
): ClubUpcomingItem[] {
  const weekdays = inferWeekdays(item.schedule);
  if (weekdays.length === 0) return [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = addMonths(today, 2);
  const items: ClubUpcomingItem[] = [];

  for (
    let cursor = new Date(today);
    cursor <= end && items.length < limit;
    cursor = addDays(cursor, 1)
  ) {
    const dateKey = toDateKey(cursor);

    if (
      weekdays.includes(cursor.getDay()) &&
      !item.excludedDates?.includes(dateKey)
    ) {
      items.push({
        slug: `${item.slug}-${dateKey}`,
        title: item.title,
        sortDate: dateKey,
        startLabel: `${formatDateLabel(cursor)}, ${inferTimeLabel(item.schedule) ?? item.schedule}`,
        venue: item.venue,
        sourceUrl: item.sourceUrl,
      });
    }
  }

  return items;
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

  return Array.from(weekdays).sort((a, b) => a - b);
}

function inferTimeLabel(schedule: string) {
  const match = schedule.match(
    /\b\d{1,2}(?::\d{2})?\s?(?:am|pm)\b(?:\s*-\s*\d{1,2}(?::\d{2})?\s?(?:am|pm)\b)?/i
  );
  return match?.[0];
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

function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Gibraltar",
  }).format(date);
}

function getTodayDateKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Gibraltar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
