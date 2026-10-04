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

export const eventsVerifiedDate = "4 October 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "community-active-travel-event-2026",
    title: "Community Walk, Run & Cycle",
    summary:
      "An inclusive community walk, run or cycle supporting Active Travel Month, with ticket proceeds going to GBC Open Day.",
    status: "upcoming",
    audience: "family",
    cost: "£1",
    sortDate: "2026-10-04",
    startLabel: "4 October 2026, 10:00 (registration from 09:00)",
    venue: "Eastern Beach Dog Park",
    ageLabel: "All ages and abilities",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/community-walk-run-cycle-active-travel-event-1338",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from the live BuyTickets listing. OTWO welcomes families and all ages and abilities; registration opens at 9am and the event starts at 10am.",
  },
  {
    slug: "bookmark-competition-deadline-2026",
    title: "Bookmark Competition: Entry Deadline",
    summary:
      "Design an original bookmark on the theme Different Minds, Brilliant Minds, celebrating the different ways people think and learn.",
    status: "upcoming",
    audience: "kids",
    cost: "See organiser",
    sortDate: "2026-10-09",
    startLabel: "9 October 2026: entry deadline",
    venue: "Submit by email or at John Mackintosh Hall",
    ageLabel: "School Year 3 upwards; adult category",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/events/event/deadline-bookmark-competition/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from Gibraltar Cultural Services' live event feed. The deadline is 9 October. Gibraltar residents may submit up to three original designs with entry forms to info@culture.gi or John Mackintosh Hall reception. Forms and rules are available at culture.gi/forms.",
  },
  {
    slug: "main-street-morning-entertainment-2026",
    title: "Autumn Festival Entertainment",
    summary:
      "Music, DJs, GFA Playmakers and historical re-enactment bring Main Street and Casemates to life for an autumn community celebration.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2026-10-24",
    startLabel: "24 October 2026, 10:30-15:00",
    venue: "Main Street and Casemates Square",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/autumn-festival-entertainment/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from Gibraltar Cultural Services' detailed programme. Entertainment runs from 10:30am to 3pm on 24 October, with GFA Playmakers at Casemates from 11am to 2pm and historical re-enactment on Main Street from noon to 12:30pm.",
  },
  {
    slug: "ditzyb-halloween-slime-workshop-2026",
    title: "Glow-in-the-Dark Halloween Slime Workshop",
    summary:
      "A Halloween craft session where children make two glow-in-the-dark slimes with scents, charms, glitter, and other decorations to take home.",
    status: "upcoming",
    audience: "kids",
    cost: "£15",
    eventDates: [
      {
        sortDate: "2026-10-26",
        startLabel: "26 October 2026, 11:30-13:00",
      },
      {
        sortDate: "2026-10-28",
        startLabel: "28 October 2026, 11:30-13:00 (sold out)",
      },
    ],
    endDate: "2026-10-28",
    sortDate: "2026-10-26",
    startLabel: "26 and 28 October 2026, 11:30-13:00",
    venue: "DitzyB Arts & Craft Supplies, Main Street",
    ageLabel: "Ages 6+; under-6s with an adult",
    sourceName: "Ditzy B",
    sourceUrl:
      "https://www.ditzyb.store/products/halloween-slime-workshop",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1085/5554/files/Purple_Green_Playful_Happy_Halloween_Instagram_Post_1.png?v=1789559470",
    note:
      "Verified on 1 October 2026 from Ditzy B's live October Shop Calendar feed and ticket variants. An extra session is available on 26 October; the 28 October session is sold out. Both run from 11:30am to 1pm, cost £15, and welcome ages 6+, with younger children accompanied by an adult.",
  },
  {
    slug: "gsla-community-sports-leadership-2026",
    title: "Community Sports Leadership Award (Level 2)",
    summary:
      "A practical GSLA course for young people to develop coaching, confidence and skills for leading community sports activities.",
    status: "upcoming",
    audience: "teens",
    cost: "See organiser",
    endDate: "2026-10-31",
    sortDate: "2026-10-26",
    startLabel: "26-31 October 2026, 09:00-14:00 daily",
    venue: "Contact GSLA for venue",
    ageLabel: "Ages 16+",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gsla-community-sports-leadership-award-level-2-7232026-12389",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from HM Government’s GSLA announcement. Register interest via sportsdevelopment@gsla.gi. An assessment and ten volunteering sessions are also required; places are limited and the course depends on minimum numbers. Cost and venue are not specified.",
  },
  {
    slug: "ditzyb-halloween-ceramic-painting-2026",
    title: "Halloween Ceramic Painting",
    summary:
      "Drop in for a 30-minute Halloween ceramic painting session, with a ceramic piece, paints and kiln firing included.",
    status: "upcoming",
    audience: "kids",
    cost: "£15",
    sortDate: "2026-10-27",
    startLabel: "27 October 2026, drop in 10:30-16:30",
    venue: "DitzyB Arts & Craft Supplies, Main Street",
    ageLabel: "Check age suitability with organiser",
    sourceName: "Ditzy B",
    sourceUrl:
      "https://www.ditzyb.store/products/halloween-ceramic-painting",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from Ditzy B's live October Shop Calendar feed and ticket product. The organiser confirms drop-in sessions on Tuesday 27 October between 10:30am and 4:30pm, lasting 30 minutes and costing £15 including materials and kiln firing; no minimum age is published.",
  },
  {
    slug: "ditzyb-halloween-craft-parties-2026",
    title: "Ditzy B Halloween Craft Parties",
    summary:
      "Age-grouped Halloween craft parties with separate shorter sessions for under-6s and longer afternoon sessions for children aged 6 and over.",
    status: "upcoming",
    audience: "kids",
    cost: "£15 under-6s; £18 ages 6+",
    eventDates: [
      {
        sortDate: "2026-10-29",
        startLabel: "29 October 2026, 12:00-13:00",
        title: "Under-6s session",
        ageLabel: "Under 6s with an adult",
      },
      {
        sortDate: "2026-10-29",
        startLabel: "29 October 2026, 15:00-16:00",
        title: "Under-6s afternoon session",
        ageLabel: "Under 6s with an adult",
      },
      {
        sortDate: "2026-10-30",
        startLabel: "30 October 2026, 12:00-13:00",
        title: "Under-6s session",
        ageLabel: "Under 6s with an adult",
      },
      {
        sortDate: "2026-10-30",
        startLabel: "30 October 2026, 15:00-16:30",
        title: "Ages 6+ session",
        ageLabel: "Ages 6+",
      },
      {
        sortDate: "2026-10-31",
        startLabel: "31 October 2026, 12:00-13:00",
        title: "Under-6s session",
        ageLabel: "Under 6s with an adult",
      },
      {
        sortDate: "2026-10-31",
        startLabel: "31 October 2026, 15:00-16:30",
        title: "Ages 6+ session",
        ageLabel: "Ages 6+",
      },
    ],
    sortDate: "2026-10-29",
    startLabel: "29-31 October 2026",
    venue: "DitzyB Arts & Craft Supplies, Main Street",
    ageLabel: "Under-6 and ages 6+ sessions",
    sourceName: "Ditzy B",
    sourceUrl:
      "https://www.ditzyb.store/collections/halloween-events",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1085/5554/files/Purple_Illustrative_Halloween_Kids_Party_Poster.png?v=1789480214",
    note:
      "Verified on 1 October 2026 from Ditzy B's live October Shop Calendar feed and ticket variants. Sessions run on 29, 30, and 31 October; under-6 sessions cost £15 and require an accompanying adult, while ages 6+ sessions cost £18. Some sessions are sold out; check live ticket availability. Product variants confirm times where the calendar description differs.",
  },
  {
    slug: "paws-for-a-cause-2026",
    title: "Paws For A Cause",
    summary:
      "A Halloween charity dog walk with optional fancy dress for people and pups, followed by refreshments and music at Casemates.",
    status: "upcoming",
    audience: "family",
    cost: "£2.50-£5",
    sortDate: "2026-10-31",
    startLabel: "31 October 2026, 10:00 or 10:30 (registration from 09:00)",
    venue: "Casemates Square",
    ageLabel: "Families and dog owners",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/paws-for-a-cause-1369",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from the live BuyTickets listing. Walks start and finish at Casemates, supporting Animals in Need Foundation and Cancer Relief Gibraltar. Registration opens at 9am, with separate 10am and 10:30am starts.",
  },
  {
    slug: "gibraltar-bonfire-night-2026",
    title: "Gibraltar Bonfire Night",
    summary:
      "The community Bonfire Night date in Gibraltar's official autumn cultural programme.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    sortDate: "2026-11-05",
    startLabel: "5 November 2026",
    venue: "Venue to be announced",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/autumn-cultural-programme-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 September 2026 from Gibraltar Cultural Services' official Autumn Cultural Programme. Bonfire Night is listed for 5 November; the organiser has not yet published a time, venue, or ticket details.",
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
    startLabel: "20 November 2026",
    venue: "Grand Casemates Square",
    ageLabel: "All ages",
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/christmas-festival-of-lights-2026/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 1 October 2026 from Gibraltar Cultural Services' dedicated Christmas Festival of Lights page and save-the-date announcement. The family celebration takes place at Grand Casemates Square on 20 November; the start time and full programme are still to be announced.",
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
