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

export const eventsVerifiedDate = "21 June 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "danza-academy-showcase-2026",
    title: "Danza Academy Showcase 2026",
    summary:
      "A summer dance showcase from Danza Academy in the Alameda Gardens Open Air Theatre.",
    status: "upcoming",
    audience: "family",
    cost: "£16.50",
    endDate: "2026-06-26",
    sortDate: "2026-06-26",
    startLabel: "26 June 2026, 21:00",
    venue: "Alameda Gardens Open Air Theatre",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/danza-academy-showcase-2026-1291",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 11 June 2026 from the live BuyTickets event page, which lists the Danza Academy Showcase 2026 on Friday 26 June 2026 at 21:00 in the Alameda Gardens Open Air Theatre.",
  },
  {
    slug: "kids-hub-summer-fete-2026",
    title: "Kids Hub Summer Fete",
    summary:
      "A family summer fete with games, arts and crafts, lucky dip, stalls, refreshments, and a chance to meet the Kids Hub team before its after-school club opens in September.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2026-06-28",
    startLabel: "28 June 2026, 10:00-15:00",
    venue: "Kids Hub",
    ageLabel: "Open to all children and families",
    sourceName: "Kids Hub Gibraltar poster",
    sourceUrl: "https://www.instagram.com/kidshub_gib/",
    imageUrl: "/events/kids-hub-summer-fete-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Kids Hub poster, which lists the Summer Fete on Sunday 28 June from 10:00am to 3:00pm, open to all children and families.",
  },
  {
    slug: "bayside-school-summer-showcase-2026",
    title: "Bayside School Summer Showcase",
    summary:
      "A school showcase evening of music, dance, fashion, and charity celebrating student talent and achievements.",
    status: "upcoming",
    audience: "family",
    cost: "£3",
    sortDate: "2026-06-29",
    startLabel: "29 June 2026, 19:30",
    venue: "Bayside School",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/bayside-school-summer-showcase-1297",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 16 June 2026 from the live BuyTickets event page, which lists Bayside School Summer Showcase on Monday 29 June 2026 at 19:30 at Bayside School, with music, dance, fashion, and charity supporting a worthy cause.",
  },
  {
    slug: "simba-the-lion-king-2026",
    title: "Simba: The Lion King",
    summary:
      "A family musical staging inspired by The Lion King, with three summer performances at the John Mackintosh Hall Theatre.",
    status: "upcoming",
    audience: "family",
    cost: "See ticket seller",
    endDate: "2026-07-01",
    sortDate: "2026-06-29",
    startLabel: "29 June-1 July 2026",
    venue: "John Mackintosh Hall Theatre",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl: "https://www.visitgibraltar.gi/events/simba-the-lion-king",
    imageUrl: "https://www.visitgibraltar.gi/uploads/default-event.jpeg",
    note:
      "Verified on 6 June 2026 from the Visit Gibraltar event listing, which currently shows Simba: The Lion King at the John Mackintosh Hall Theatre from 29 June to 1 July 2026.",
  },
  {
    slug: "ocean-village-charity-cardboard-boat-race-2026",
    title: "Ocean Village Charity Cardboard Boat Race",
    summary:
      "A splashy community fundraiser where families and children can build and race cardboard boats for charity at Ocean Village Marina.",
    status: "upcoming",
    audience: "family",
    cost: "From £5",
    endDate: "2026-07-04",
    sortDate: "2026-07-04",
    startLabel: "4 July 2026, 10:00",
    venue: "Casemates Square and Ocean Village Marina",
    ageLabel: "Families and children",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/ocean-village-charity-cardboard-boat-race-entry-2026-1254",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 6 June 2026 from current Gibraltar event listings for the 2026 Ocean Village Cardboard Boat Race, which place registration and judging in Casemates Square at 10:00 on Saturday 4 July 2026 before the race at Ocean Village Marina.",
  },
  {
    slug: "gsla-sports-train-summer-programme-2026",
    title: "Sports Train Summer Sports and Leisure Programme",
    summary:
      "A GSLA summer sports and leisure programme for children, running across the school holidays.",
    status: "upcoming",
    audience: "kids",
    cost: "See organiser",
    sortDate: "2026-07-06",
    startLabel: "6 July-28 August 2026",
    venue: "See organiser",
    ageLabel: "Children",
    sourceName: "Gibraltar Cultural Services poster",
    sourceUrl: "https://www.instagram.com/gibraltarculturalservices/",
    imageUrl: "/events/gsla-sports-train-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Gibraltar Cultural Services poster, which lists the Sports Train Summer Sports and Leisure Programme from Monday 6 July to Friday 28 August 2026.",
  },
  {
    slug: "summer-storytelling-bookgem-2026",
    title: "Summer Storytelling: Bookgem",
    summary:
      "A Books Without Borders storytelling session on literary legends and historical heroes.",
    status: "upcoming",
    audience: "kids",
    cost: "Book your space",
    sortDate: "2026-07-14",
    startLabel: "14 July 2026, 10:30",
    venue: "Bookgem",
    ageLabel: "Ages 3-7",
    sourceName: "John Mackintosh Hall Library poster",
    sourceUrl: "mailto:jmlibrary@culture.gov.gi",
    imageUrl: "/events/summer-storytelling-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Summer Storytelling poster, which lists Bookgem on 14 July at 10:30am with the theme Literary Legends & Historical Heroes.",
  },
  {
    slug: "summer-slops-eastern-beach-2026",
    title: "Summer Slops at Eastern Beach",
    summary:
      "A free foam-party stop on the Summer Slops roadshow for kids and families at Eastern Beach.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free foam party",
    endDate: "2026-07-16",
    sortDate: "2026-07-16",
    startLabel: "16 July 2026, 17:00-20:00",
    venue: "Eastern Beach",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi press release",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 3 June 2026 from the Gibraltar Government Summer Slops in 2026 press release, which lists Eastern Beach on 16 July 2026 from 5pm to 8pm.",
  },
  {
    slug: "summer-storytelling-commonwealth-park-2026",
    title: "Summer Storytelling: Commonwealth Park",
    summary:
      "A Books Without Borders storytelling session on legends, myths, and magical creatures.",
    status: "upcoming",
    audience: "kids",
    cost: "Book your space",
    sortDate: "2026-07-21",
    startLabel: "21 July 2026, 10:30",
    venue: "Commonwealth Park",
    ageLabel: "Ages 3-7",
    sourceName: "John Mackintosh Hall Library poster",
    sourceUrl: "mailto:jmlibrary@culture.gov.gi",
    imageUrl: "/events/summer-storytelling-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Summer Storytelling poster, which lists Commonwealth Park on 21 July at 10:30am with the theme Legends, Myths, Magical Creatures.",
  },
  {
    slug: "summer-slops-catalan-bay-2026",
    title: "Summer Slops at Catalan Bay",
    summary:
      "A free foam-party stop on the Summer Slops roadshow for kids and families at Catalan Bay.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free foam party",
    endDate: "2026-07-23",
    sortDate: "2026-07-23",
    startLabel: "23 July 2026, 17:00-20:00",
    venue: "Catalan Bay",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi press release",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 3 June 2026 from the Gibraltar Government Summer Slops in 2026 press release, which lists Catalan Bay on 23 July 2026 from 5pm to 8pm.",
  },
  {
    slug: "summer-storytelling-john-mackintosh-hall-library-2026",
    title: "Summer Storytelling: John Mackintosh Hall Library",
    summary:
      "A Books Without Borders storytelling session on explorers and sea creatures.",
    status: "upcoming",
    audience: "kids",
    cost: "Book your space",
    sortDate: "2026-07-28",
    startLabel: "28 July 2026, 10:30",
    venue: "John Mackintosh Hall Library",
    ageLabel: "Ages 3-7",
    sourceName: "John Mackintosh Hall Library poster",
    sourceUrl: "mailto:jmlibrary@culture.gov.gi",
    imageUrl: "/events/summer-storytelling-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Summer Storytelling poster, which lists John Mackintosh Hall Library on 28 July at 10:30am with the theme Explorers & Sea Creatures.",
  },
  {
    slug: "summer-slops-casemates-square-2026",
    title: "Summer Slops at Casemates Square",
    summary:
      "A free foam-party stop on the Summer Slops roadshow for kids and families in Casemates Square.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free foam party",
    endDate: "2026-07-30",
    sortDate: "2026-07-30",
    startLabel: "30 July 2026, 17:00-20:00",
    venue: "Casemates Square",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi press release",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 3 June 2026 from the Gibraltar Government Summer Slops in 2026 press release, which lists Casemates Square on 30 July 2026 from 5pm to 8pm.",
  },
  {
    slug: "summer-storytelling-mario-finlayson-gallery-2026",
    title: "Summer Storytelling: Mario Finlayson Gallery",
    summary:
      "A Books Without Borders storytelling session on tales and traditions.",
    status: "upcoming",
    audience: "kids",
    cost: "Book your space",
    sortDate: "2026-08-04",
    startLabel: "4 August 2026, 10:30",
    venue: "Mario Finlayson Gallery",
    ageLabel: "Ages 3-7",
    sourceName: "John Mackintosh Hall Library poster",
    sourceUrl: "mailto:jmlibrary@culture.gov.gi",
    imageUrl: "/events/summer-storytelling-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Summer Storytelling poster, which lists Mario Finlayson Gallery on 4 August at 10:30am with the theme Tales & Traditions.",
  },
  {
    slug: "summer-slam-beach-cricket-sandy-bay-4-august-2026",
    title: "Summer Slam Beach Cricket Day",
    summary:
      "A special beach cricket morning with Gibraltar Cricket as part of its Summer Slam programme.",
    status: "upcoming",
    audience: "kids",
    cost: "Free to join",
    freeNote: "Free to join",
    sortDate: "2026-08-04",
    startLabel: "4 August 2026, 09:00-11:30",
    venue: "Sandy Bay",
    ageLabel: "Ages 5-16",
    sourceName: "Gibraltar Cricket poster",
    sourceUrl: "https://www.gibraltarcricket.com/summer-slam",
    imageUrl: "/events/gibraltar-cricket-summer-slam-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Gibraltar Cricket Summer Slam poster, which lists a special beach cricket day at Sandy Bay on Tuesday 4 August from 9:00am to 11:30am.",
  },
  {
    slug: "summer-slops-camp-bay-2026",
    title: "Summer Slops at Camp Bay",
    summary:
      "A free foam-party stop on the Summer Slops roadshow for kids and families at Camp Bay.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free foam party",
    endDate: "2026-08-06",
    sortDate: "2026-08-06",
    startLabel: "6 August 2026, 17:00-20:00",
    venue: "Camp Bay",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi press release",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 3 June 2026 from the Gibraltar Government Summer Slops in 2026 press release, which lists Camp Bay on 6 August 2026 from 5pm to 8pm.",
  },
  {
    slug: "summer-storytelling-alameda-education-zone-2026",
    title: "Summer Storytelling: Alameda Education Zone",
    summary:
      "A Books Without Borders storytelling session on the world around us.",
    status: "upcoming",
    audience: "kids",
    cost: "Book your space",
    sortDate: "2026-08-11",
    startLabel: "11 August 2026, 10:30",
    venue: "Alameda Education Zone",
    ageLabel: "Ages 3-7",
    sourceName: "John Mackintosh Hall Library poster",
    sourceUrl: "mailto:jmlibrary@culture.gov.gi",
    imageUrl: "/events/summer-storytelling-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Summer Storytelling poster, which lists Alameda Education Zone on 11 August at 10:30am with the theme The World Around Us.",
  },
  {
    slug: "summer-slam-beach-cricket-sandy-bay-18-august-2026",
    title: "Summer Slam Beach Cricket Day",
    summary:
      "A special beach cricket morning with Gibraltar Cricket as part of its Summer Slam programme.",
    status: "upcoming",
    audience: "kids",
    cost: "Free to join",
    freeNote: "Free to join",
    sortDate: "2026-08-18",
    startLabel: "18 August 2026, 09:00-11:30",
    venue: "Sandy Bay",
    ageLabel: "Ages 5-16",
    sourceName: "Gibraltar Cricket poster",
    sourceUrl: "https://www.gibraltarcricket.com/summer-slam",
    imageUrl: "/events/gibraltar-cricket-summer-slam-2026.png",
    note:
      "Added on 11 June 2026 from the user-supplied Gibraltar Cricket Summer Slam poster, which lists a special beach cricket day at Sandy Bay on Tuesday 18 August from 9:00am to 11:30am.",
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

  for (let cursor = new Date(today); cursor <= end && items.length < limit; cursor = addDays(cursor, 1)) {
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
