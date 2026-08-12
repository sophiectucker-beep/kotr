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

export const eventsVerifiedDate = "12 August 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "gibraltar-artists-studio-summer-camp-week-2-2026",
    title: "Gibraltar Artists Studio Summer Art Camp — Week 2",
    summary:
      "Five creative summer mornings where children can paint, make art, try new techniques, and enjoy a relaxed studio camp with all materials included.",
    status: "upcoming",
    audience: "kids",
    relatedClubSlugs: ["gibraltar-artists-studio"],
    cost: "See organiser",
    endDate: "2026-08-21",
    sortDate: "2026-08-17",
    startLabel: "17-21 August 2026, 10:30-12:30",
    venue: "Gibraltar Artists Studio, 1A/21 Horse Barrack Lane",
    ageLabel: "Ages 8-12",
    sourceName: "Gibraltar Artists Studio",
    sourceUrl: "https://gibraltarartiststudio.com/art-classes-kids/",
    imageUrl: "/events/gibraltar-artists-studio-summer-camp-2026.jpg",
    note:
      "Verified on 21 July 2026 from the organiser's official children's art classes page and supplied current poster. Week 2 runs Monday 17 to Friday 21 August from 10:30am to 12:30pm for ages 8 to 12, with all materials included. The poster marks Week 1 as full, so only Week 2 is listed as available. Contact Gerry on 54019105 to check availability and book.",
  },
  {
    slug: "walks-through-history-summer-programme-2026",
    title: "Walks Through History Summer Programme",
    summary:
      "A free Wednesday-morning summer history walk series with remaining sessions for children aged 9 to 12.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, booking essential",
    endDate: "2026-08-26",
    sortDate: "2026-08-12",
    startLabel: "12-26 August 2026",
    venue: "Various Gibraltar locations",
    ageLabel: "Ages 9-12",
    sourceName: "gibmuseum.gi",
    sourceUrl: "https://www.gibmuseum.gi/news/walks-2026",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 August 2026 from the live Gibraltar National Museum summer programme page, which lists free Wednesday 'Walks Through History' sessions for children aged 9 to 12 from 8 July to 26 August 2026; remaining future dates after today are 12 August, 19 August, and 26 August.",
  },
  {
    slug: "summer-book-club-2026",
    title: "Summer Book Club",
    summary:
      "A weekly Wednesday summer reading club at the John Mackintosh Hall Library for children aged 8 to 14.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, places limited",
    endDate: "2026-08-26",
    sortDate: "2026-08-12",
    startLabel: "12-26 August 2026",
    venue: "John Mackintosh Hall Library",
    ageLabel: "Ages 8-14",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 August 2026 from the Government of Gibraltar press release dated 8 June 2026, which states that the Summer Book Club runs every Wednesday from 11am to 12pm at the John Mackintosh Hall Library until 26 August 2026 for children aged 8 to 14, with remaining future sessions after today from 12 August to 26 August and advance registration advised.",
  },
  {
    slug: "ditzy-b-summer-evenings-workshops-2026",
    title: "Ditzy B Summer Evenings Workshops",
    summary:
      "A series of Wednesday-evening craft workshops for adults and teens, with a different summer craft each week and a complimentary drink.",
    status: "upcoming",
    audience: "teens",
    cost: "See organiser",
    endDate: "2026-08-19",
    sortDate: "2026-08-12",
    startLabel: "12 and 19 August 2026, 18:00-20:00",
    venue: "Ditzy B Arts & Craft Supplies, Main Street",
    ageLabel: "Adults and teens",
    sourceName: "Ditzy B Shop Calendar",
    sourceUrl: "https://www.ditzyb.store/pages/event-calendar",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 August 2026 from Ditzy B's live Shop Calendar feed (The Shop Calendar accordion widget endpoint) for August 2026. Remaining future sessions after today are listed for 12 and 19 August 2026 from 6pm to 8pm; booking is essential.",
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
    sortDate: "2026-08-04",
    startLabel: "30 May-26 September 2026",
    venue: "City Hall, John Mackintosh Square",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/events/mario-finlayson-national-art-gallery",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 4 August 2026 from the current Visit Gibraltar event page, which still shows the Mario Finlayson National Art Gallery running from 30 May to 26 September 2026 at City Hall.",
  },
  {
    slug: "young-learners-summer-spanish-2026",
    title: "Young Learners Summer Spanish",
    summary:
      "Weekly summer Spanish classes with Little English for young learners, grouped by age and running from 10am to 12pm.",
    status: "upcoming",
    audience: "kids",
    relatedClubSlugs: ["little-english-language-school"],
    cost: "See organiser",
    endDate: "2026-08-31",
    eventDates: [
      {
        sortDate: "2026-08-13",
        startLabel: "13 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-08-17",
        startLabel: "17 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-08-18",
        startLabel: "18 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
      {
        sortDate: "2026-08-20",
        startLabel: "20 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-08-24",
        startLabel: "24 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-08-25",
        startLabel: "25 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
      {
        sortDate: "2026-08-27",
        startLabel: "27 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-08-31",
        startLabel: "31 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
    ],
    sortDate: "2026-08-13",
    startLabel:
      "13-31 August 2026 on selected Mondays, Tuesdays and Thursdays, 10:00-12:00",
    venue: "Little English Language School, 29 City Mill Lane",
    ageLabel: "Ages 4-9+",
    sourceName: "Little English Summer Spanish poster",
    sourceUrl: "/clubs/little-english-summer-spanish-2026.png",
    imageUrl: "/clubs/little-english-summer-spanish-2026.png",
    note:
      "Added on 22 July 2026 from the Young Learners Summer Spanish poster supplied to Kids on the Rock. Remaining future classes after 12 August 2026 are Thursdays from 13 to 27 August, Mondays from 17 to 31 August, and Tuesdays from 18 to 25 August, all from 10am to 12pm: Mondays for ages 6 to 8, Tuesdays for ages 9+, and Thursdays for ages 4 to 5.",
  },
  {
    slug: "ditzy-b-pottery-workshops-august-2026",
    title: "Ditzy B Pottery Workshops",
    summary:
      "Two evening pottery workshops for adults and teens at the Ditzy B craft studio in August.",
    status: "upcoming",
    audience: "teens",
    cost: "See organiser",
    endDate: "2026-08-21",
    eventDates: [
      {
        sortDate: "2026-08-21",
        startLabel: "21 August 2026, 18:00-20:00",
        title: "Ditzy B Pottery Workshop",
        ageLabel: "Adults and teens",
      },
    ],
    sortDate: "2026-08-21",
    startLabel: "21 August 2026, 18:00-20:00",
    venue: "Ditzy B Arts & Craft Supplies, Main Street",
    ageLabel: "Adults and teens",
    sourceName: "Ditzy B Shop Calendar",
    sourceUrl: "https://www.ditzyb.store/pages/event-calendar",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 10 August 2026 from Ditzy B's live Shop Calendar feed for August 2026, which lists Pottery Workshop (adults & teens) on 8 August 2026 and 21 August 2026 from 6pm to 8pm at Ditzy B Arts & Craft Supplies on Main Street; the only remaining future session after 10 August 2026 is 21 August.",
  },
  {
    slug: "ocean-village-childrens-viking-party-2026",
    title: "Ocean Village Children's Viking Party",
    summary:
      "Two low-cost Saturday-morning Viking-themed party sessions on the marina boat, with games, music, dancing, and family-friendly fundraising fun.",
    status: "upcoming",
    audience: "family",
    cost: "£5 per child",
    endDate: "2026-08-15",
    sortDate: "2026-08-15",
    startLabel: "15 August 2026, 10:00 and 11:15",
    venue: "Ocean Village Marina",
    ageLabel: "Children and families",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/ocean-village-childrens-viking-party-1333",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 4 August 2026 from the live BuyTickets event page, which lists Ocean Village Children's Viking Party on Saturday 15 August 2026 at Ocean Village with two sessions at 10am and 11:15am, priced at £5 per child, with games, music, dancing, and proceeds donated to Childline Gibraltar.",
  },
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
    venue: "See organiser for 2026 venue details",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl: "https://www.visitgibraltar.gi/events",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 4 August 2026 from the current Visit Gibraltar events listing, which lists Gibraltar Fair 2026 from 21 August to 29 August 2026. The linked detail page is not currently available, so families should check the organiser's latest venue and opening-time details before travelling.",
  },
  {
    slug: "mr-kraken-ocean-show-2026",
    title: "Mr Kraken Ocean Show",
    summary:
      "A family-friendly Ocean Village boat show with giant sea bubbles, two Sunday sessions, and free adult entry with a child's ticket.",
    status: "upcoming",
    audience: "family",
    cost: "£5 per child",
    endDate: "2026-08-16",
    sortDate: "2026-08-16",
    startLabel: "16 August 2026, 11:00 and 12:15",
    venue: "Ocean Village Marina, pontoon gate opposite O'Reilly's",
    ageLabel: "Kids aged 4+ and families",
    sourceName: "buytickets.gi",
    sourceUrl: "https://www.buytickets.gi/events/mr-kraken-ocean-show-1339",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 11 August 2026 from the live BuyTickets event page, which lists Mr Kraken Ocean Show at Ocean Village on Sunday 16 August 2026 with sessions at 11:00am and 12:15pm. The organiser describes it as 'for kids from 4-104', says adults go free with a kid's ticket, and gives the meeting point as the marina gate opposite O'Reilly's.",
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
