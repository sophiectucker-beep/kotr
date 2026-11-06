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

export const eventsVerifiedDate = "6 November 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "gibraltar-bonfire-night-2026",
    title: "Gibraltar Bonfire Night",
    summary:
      "A community Bonfire Night with the Best Guy competition, live entertainment and food stalls.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry; £5 to enter the Best Guy competition",
    sortDate: "2026-11-06",
    startLabel: "6 November 2026, 18:30-20:30",
    venue: "Little Bay Car Park",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/events/bonfire-night",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 4 November 2026 from Visit Gibraltar's updated official listing. The event has moved to Friday 6 November and runs at Little Bay Car Park from 6:30pm to 8:30pm, with live entertainment and food stalls. The Best Guy competition costs £5 to enter, with proceeds going to GBC Open Day.",
  },
  {
    slug: "literary-festival-britannica-encyclopaedia-2026",
    title: "Britannica Encyclopaedia with Christopher Lloyd",
    summary:
      "A lively, all-ages Literary Festival journey through natural and human history, brought to life with Christopher Lloyd's signature coat of many pockets.",
    status: "upcoming",
    audience: "family",
    cost: "£9 students; £13 adults",
    sortDate: "2026-11-14",
    startLabel: "14 November 2026, 10:00",
    venue: "Lower Exhibition Room, John Mackintosh Hall",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/gibunco-gibraltar-international-literary-festival-2026-1352",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 16 September 2026 from the live BuyTickets Gibraltar Literary Festival listing. World history author Christopher Lloyd presents an all-ages journey from the beginning of time to the present day at 10am on 14 November, and the published festival prices are £9 for students aged 18 and under and £13 for adults.",
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
  {
    slug: "gibraltar-christmas-festival-of-lights-2026",
    title: "Christmas Festival of Lights",
    summary:
      "Gibraltar's community Christmas lights celebration, opening the festive attractions season.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2026-11-20",
    startLabel: "20 November 2026, 18:30-19:30 or 20:30-21:30",
    venue: "Grand Casemates Square",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/christmas-festival-of-lights-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 30 October 2026 from HM Government's full event announcement. Error 404: Christmas Not Found has two identical 60-minute shows, at 6:30pm and 8:30pm. Entry is via Market Place; gates open at 5:30pm for the first show and 8pm for the second. The show includes strobe lighting, smoke, pyrotechnics, lasers, fire and loud noises; capacity is limited to 4,500 per show.",
  },
  {
    slug: "gibraltar-christmas-attractions-2026",
    title: "Gibraltar Christmas Attractions",
    summary:
      "Seasonal family attractions running from the Festival of Lights through the Christmas and New Year period.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    endDate: "2027-01-05",
    sortDate: "2026-11-20",
    startLabel: "20 November 2026-5 January 2027",
    venue: "Details to be announced",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/autumn-cultural-programme-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 September 2026 from Gibraltar Cultural Services' official Autumn Cultural Programme, which confirms Christmas Attractions from 20 November through 5 January. Locations, opening hours, and individual attraction details are still to be announced.",
  },
  {
    slug: "believe-santa-is-stuck-2026",
    title: "Believe: Santa Is Stuck",
    summary:
      "A festive show with music and dancing as a family, elves and familiar Christmas characters try to free Santa from a chimney.",
    status: "upcoming",
    audience: "family",
    cost: "£15; tickets coming soon",
    eventDates: [
      { sortDate: "2026-11-27", startLabel: "27 November 2026, 19:00" },
      { sortDate: "2026-11-28", startLabel: "28 November 2026, 15:00" },
      { sortDate: "2026-11-28", startLabel: "28 November 2026, 19:00" },
    ],
    endDate: "2026-11-28",
    sortDate: "2026-11-27",
    startLabel: "27-28 November 2026",
    venue: "Inces Hall Theatre",
    ageLabel: "Families; check age suitability with organiser",
    sourceName: "buytickets.gi",
    sourceUrl: "https://www.buytickets.gi/events/believe-santa-is-stuck-1396",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 22 October 2026 from the Musicians Association of Gibraltar's BuyTickets listing. Performances are at 7pm on 27 November and 3pm and 7pm on 28 November. Tickets are £15 and listed as coming soon; no age guidance is published.",
  },
  {
    slug: "no1-school-of-models-production-show-2026",
    title: "No1 School of Models Production Show",
    summary:
      "A stage showcase celebrating young models' style, confidence, creativity and performance.",
    status: "upcoming",
    audience: "teens",
    cost: "£20",
    sortDate: "2026-11-25",
    startLabel: "25 November 2026, 19:00",
    venue: "John Mackintosh Hall Theatre",
    ageLabel: "Young models, teens and their families",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/no1-school-of-models-production-show-1400",
    imageUrl:
      "https://www.buytickets.gi/uploads/events/ZB0ND_Glamorous_End_of_Term_Fashion_Show.png",
    note:
      "Verified on 26 October 2026 from the live BuyTickets listing. No1 School of Models presents its production show at 7pm on 25 November at the John Mackintosh Hall Theatre; tickets are £20. The organiser describes a showcase of its models' talent, confidence, creativity and performance.",
  },
  {
    slug: "ditzyb-scale-model-workshop-2026",
    title: "Scale Model Workshop",
    summary:
      "A hands-on workshop with scale modeller Roy Perez, covering model painting techniques and including a model plus use of paints, materials, and airbrushes.",
    status: "upcoming",
    audience: "teens",
    cost: "£40",
    sortDate: "2026-11-28",
    startLabel: "28 November 2026, 10:00-15:00",
    venue: "DitzyB Arts & Craft Supplies, Main Street",
    ageLabel: "Older teens and adults",
    sourceName: "Ditzy B",
    sourceUrl:
      "https://www.ditzyb.store/products/scale-model-workshop",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1085/5554/files/WhatsAppImage2026-09-16at16.10.31.jpg?v=1789571987",
    note:
      "Verified on 22 September 2026 from Ditzy B's live ticket product. The five-hour workshop runs from 10am to 3pm on Saturday 28 November, costs £40, includes a scale model and use of painting materials and airbrushes, and is designed for older teens and adults. Booking is essential and spaces are limited.",
  },
  {
    slug: "masbro-cancer-relief-community-5k-fun-run-2026",
    title: "Masbro + Cancer Relief Community 5K Fun Run",
    summary:
      "A community 5K fun run, jog or walk supporting Cancer Relief Gibraltar, with refreshments at the finish.",
    status: "upcoming",
    audience: "family",
    cost: "Free for under-10s; £0-£10 otherwise",
    sortDate: "2026-11-29",
    startLabel: "29 November 2026, registration from 09:00; run at 10:00",
    venue: "Wellington Boxing Club, Wellington Front",
    ageLabel: "All ages; children under 10 run free",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/masbro-cancer-relief-community-5k-fun-run-1353",
    imageUrl:
      "https://www.buytickets.gi/uploads/events/wQCwF_BuyTicket_Cancer_Relief_5K_Fun_Run_Poster.jpg",
    note:
      "Verified on 7 October 2026 from the live BuyTickets listing. The community event starts and finishes at Wellington Boxing Club on Sunday 29 November; registration opens at 9am and the 5K starts at 10am. Children under 10 run free, and proceeds support Cancer Relief Gibraltar.",
  },
  {
    slug: "tea-with-santa-sunborn-2026",
    title: "Tea with Santa",
    summary:
      "A festive family afternoon tea with a visit to Santa's grotto and children's entertainment.",
    status: "upcoming",
    audience: "family",
    cost: "£18-£32; under-4s eat free",
    eventDates: [
      { sortDate: "2026-11-28", startLabel: "28 November 2026, 14:30" },
      { sortDate: "2026-12-05", startLabel: "5 December 2026, 14:30" },
      { sortDate: "2026-12-12", startLabel: "12 December 2026, 14:30" },
      { sortDate: "2026-12-19", startLabel: "19 December 2026, 14:30" },
    ],
    endDate: "2026-12-19",
    sortDate: "2026-11-28",
    startLabel: "28 November-19 December 2026, Saturdays at 14:30",
    venue: "Sunborn Gibraltar, Ocean Village",
    ageLabel: "Families; under-4s eat free",
    sourceName: "buytickets.gi",
    sourceUrl: "https://www.buytickets.gi/events/tea-with-santa-1404",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 November 2026 from the live BuyTickets listing. Tea with Santa runs on four Saturdays at 2:30pm, with a grotto visit, children's entertainment and festive afternoon tea served to the table. Booking is mandatory.",
  },
  {
    slug: "sunday-roast-with-santa-sunborn-2026",
    title: "Sunday Roast with Santa",
    summary:
      "A family Sunday roast buffet with a chance to meet Santa at Sunborn Gibraltar.",
    status: "upcoming",
    audience: "family",
    cost: "£20-£48",
    eventDates: [
      { sortDate: "2026-11-29", startLabel: "29 November 2026, 13:00" },
      { sortDate: "2026-12-06", startLabel: "6 December 2026, 13:00" },
      { sortDate: "2026-12-13", startLabel: "13 December 2026, 13:00" },
      { sortDate: "2026-12-20", startLabel: "20 December 2026, 13:00" },
    ],
    endDate: "2026-12-20",
    sortDate: "2026-11-29",
    startLabel: "29 November-20 December 2026, Sundays at 13:00",
    venue: "Sunborn Gibraltar, Ocean Village",
    ageLabel: "Families",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/sunday-roast-with-santa-1405",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 5 November 2026 from the live BuyTickets listing. The family buffet and Santa visit run on four Sundays at 1pm; booking is mandatory.",
  },
  {
    slug: "paul-riley-big-band-christmas-show-2026",
    title: "The Paul Riley Big Band Christmas Show!",
    summary:
      "A festive big-band evening of Christmas classics and brass arrangements for the whole family.",
    status: "upcoming",
    audience: "family",
    cost: "£4-£8",
    sortDate: "2026-11-30",
    startLabel: "30 November 2026, 19:00",
    venue: "Inces Hall Theatre",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/the-paul-riley-big-band-christmas-show-1412",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 3 November 2026 from the live BuyTickets listing. The Musicians Association of Gibraltar presents the show at 7pm on 30 November as part of Golden Week; tickets are £4-£8 and the organiser describes it as perfect for the whole family.",
  },
  {
    slug: "gibraltar-christmas-saturdays-2026",
    title: "Christmas Saturdays",
    summary:
      "Two festive Saturdays of community Christmas entertainment in Gibraltar.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    eventDates: [
      {
        sortDate: "2026-12-05",
        startLabel: "5 December 2026",
      },
      {
        sortDate: "2026-12-12",
        startLabel: "12 December 2026",
      },
    ],
    sortDate: "2026-12-05",
    startLabel: "5 and 12 December 2026",
    venue: "Details to be announced",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/autumn-cultural-programme-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 September 2026 from Gibraltar Cultural Services' official Autumn Cultural Programme, which lists Christmas Saturday events on 5 and 12 December. Times, locations, and activity details are still to be announced.",
  },
  {
    slug: "gibraltar-new-years-celebrations-2026",
    title: "Gibraltar New Year's Celebrations",
    summary:
      "Gibraltar's official community celebrations to welcome the new year.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2026-12-31",
    startLabel: "31 December 2026",
    venue: "Venue to be announced",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/autumn-cultural-programme-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 September 2026 from Gibraltar Cultural Services' official Autumn Cultural Programme. New Year's Celebrations are listed for 31 December; the organiser has not yet published a time, venue, or programme details.",
  },
  {
    slug: "three-kings-cavalcade-2027",
    title: "Three Kings’ Cavalcade",
    summary:
      "Gibraltar’s annual parade welcomes floats and walking groups for a community celebration enjoyed by all ages.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2027-01-05",
    startLabel: "5 January 2027",
    venue: "Gibraltar; route to be announced",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/events/event/three-kings-cavalcade/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from Gibraltar Cultural Services' live calendar feed and announcement. The parade is confirmed for 5 January 2027; a start time and route are not yet published.",
  },
  {
    slug: "young-artist-competition-exhibition-2027",
    title: "Young Artist Competition 2027 Exhibition",
    summary:
      "An exhibition of original work from Gibraltar's annual competition for school-age and young artists.",
    status: "upcoming",
    audience: "teens",
    cost: "Free; see organiser for competition entry details",
    endDate: "2027-03-05",
    sortDate: "2027-02-23",
    startLabel: "23 February-5 March 2027",
    venue: "GEMA Art Gallery",
    ageLabel: "Entrants: Years 9-13 and young artists up to age 24",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/the-young-artist-competition-2027-8602026-12545",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 6 November 2026 from HM Government of Gibraltar's official announcement. The competition is open to Gibraltar residents in school Years 9-13 and young Gibraltarian artists up to 24; submitted work will be exhibited at GEMA Art Gallery from 23 February to 5 March 2027. Entry forms are available from Gibraltar Cultural Services, with works handed in 8-10 February.",
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
