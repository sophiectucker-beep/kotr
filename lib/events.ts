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

export const eventsVerifiedDate = "7 September 2026";

export const childFriendlyEvents: EventItem[] = [
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
      "Verified on 30 August 2026 from the current Visit Gibraltar event page, which lists Mario Finlayson National Art Gallery at City Hall from 30 May 2026 to 26 September 2026.",
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
    venue: "Across Gibraltar city centre",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/index.php/events/gibraltar-national-day-2026",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 30 August 2026 from the current Visit Gibraltar National Day 2026 page, which describes a full day of celebrations on Thursday 10 September 2026 with entertainment across the city, children's activities, fun day attractions, live performances, and a fireworks and drone display over the Bay of Gibraltar at 10pm.",
  },
  {
    slug: "gibraltar-national-day-childrens-fancy-dress-competition-2026",
    title: "National Day Children's Fancy Dress Competition",
    summary:
      "A themed National Day fancy dress competition for children, with morning judging as part of the wider National Day celebrations.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free to enter",
    endDate: "2026-09-10",
    sortDate: "2026-09-10",
    startLabel: "10 September 2026, 10:00",
    venue: "Casemates Square",
    ageLabel: "Ages 11 and under",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/gibraltar-national-day-2026-childrens-fancy-dress-competition/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 30 August 2026 from Gibraltar Cultural Services, which says the National Day 2026 Children's Fancy Dress Competition will be held at Casemates Square on Thursday 10 September 2026, with participants arriving by 9.30am and judging starting at 10am for ages 6 and under and ages 7 to 11.",
  },
  {
    slug: "national-day-feast-2026",
    title: "National Day Feast",
    summary:
      "A National Day lunch with live music and children's activities at the Sunborn.",
    status: "upcoming",
    audience: "family",
    cost: "Adults £46; ages 4-12 £12; under-4s free",
    sortDate: "2026-09-10",
    startLabel: "10 September 2026, 13:00",
    venue: "Sunborn Gibraltar, Ocean Village",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/index.php/events/national-day-feast",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 September 2026 from the current Visit Gibraltar event page, which lists the National Day Feast at 1pm on 10 September with live music and children's activities. Adults cost £46, children aged 4 to 12 cost £12, and children under 4 eat free. Booking is through Sunborn Gibraltar.",
  },
  {
    slug: "sunrise-of-hope-2026",
    title: "Sunrise of Hope 2026",
    summary:
      "An early-morning community walk for mental wellbeing, with a gentle family route to Europa Point and breakfast afterwards.",
    status: "upcoming",
    audience: "family",
    cost: "Under-5s free; ages 6-12 £5; ages 13+ from £10",
    freeNote: "Free for under-5s",
    sortDate: "2026-09-12",
    startLabel: "12 September 2026, 05:30",
    venue: "Casemates Square to Europa Point",
    ageLabel: "All ages",
    sourceName: "GibSams",
    sourceUrl: "https://gibsams.gi/event/sunrise-of-hope-2026",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 7 September 2026 from the organiser's current event and ticket page. Meet at Casemates at 5.30am for the Sunrise of Hope walk; the family route to Europa Point is suitable for all ages and fitness levels, with breakfast afterwards. Under-5s are free, ages 6 to 12 cost £5, and ages 13+ cost from £10.",
  },
  {
    slug: "literary-festival-wolf-siren-workshop-2026",
    title: "Wolf Siren: Fairy Tale Retelling Workshop",
    summary:
      "An interactive Literary Festival workshop where young readers create inclusive fairy-tale characters, plots, and story openings.",
    status: "upcoming",
    audience: "kids",
    cost: "£9 students; £13 adults",
    sortDate: "2026-11-14",
    startLabel: "14 November 2026, 12:00",
    venue: "Charles Hunt Room, John Mackintosh Hall",
    ageLabel: "Young readers and aspiring writers",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/gibunco-gibraltar-international-literary-festival-2026-1352",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 September 2026 from the live BuyTickets Gibraltar Literary Festival listing and HM Government's ticket announcement. Children's author Beth O'Brien leads this interactive workshop for young readers at noon on 14 November, and the published festival prices are £9 for students aged 18 and under and £13 for adults.",
  },
  {
    slug: "literary-festival-family-quiz-show-2026",
    title: "The What on Earth! Family Quiz Show",
    summary:
      "A team-based Literary Festival quiz with Christopher Lloyd, covering big questions and prizes for every round.",
    status: "upcoming",
    audience: "family",
    cost: "£9 students; £13 adults",
    sortDate: "2026-11-14",
    startLabel: "14 November 2026, 14:00",
    venue: "Lower Exhibition Room, John Mackintosh Hall",
    ageLabel: "Ages 6+",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/gibunco-gibraltar-international-literary-festival-2026-1352",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 September 2026 from the live BuyTickets Gibraltar Literary Festival listing and HM Government's ticket announcement. Christopher Lloyd's family quiz is at 2pm on 14 November, is advertised as suitable for ages 6 to 106, and the published festival prices are £9 for students aged 18 and under and £13 for adults.",
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
