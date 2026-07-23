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

export const eventsVerifiedDate = "21 July 2026";

export const childFriendlyEvents: EventItem[] = [
  {
    slug: "walks-through-history-summer-programme-2026",
    title: "Walks Through History Summer Programme",
    summary:
      "A free Wednesday-morning summer history walk series with remaining sessions for children aged 9 to 12, with parent accompaniment welcome and required for the 5 August boat tour.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, booking essential",
    endDate: "2026-08-26",
    sortDate: "2026-07-22",
    startLabel: "22 July-26 August 2026",
    venue: "Various Gibraltar locations",
    ageLabel: "Ages 9-12",
    sourceName: "gibmuseum.gi",
    sourceUrl: "https://www.gibmuseum.gi/news/walks-2026",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 16 July 2026 from the live Gibraltar National Museum summer programme page, which lists free Wednesday 'Walks Through History' sessions for children aged 9 to 12 from 8 July to 26 August 2026; remaining future dates from today are 22 July, 29 July, 5 August, 12 August, 19 August, and 26 August, and booking is required.",
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
    sortDate: "2026-07-22",
    startLabel: "22 July-26 August 2026",
    venue: "John Mackintosh Hall Library",
    ageLabel: "Ages 8-14",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which states that the Summer Book Club runs every Wednesday from 11am to 12pm at the John Mackintosh Hall Library until 26 August 2026 for children aged 8 to 14, with advance registration advised.",
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
    sortDate: "2026-07-22",
    startLabel: "22 July-19 August 2026, selected evenings",
    venue: "Ditzy B Arts & Craft Supplies, Main Street",
    ageLabel: "Adults and teens",
    sourceName: "Ditzy B Shop Calendar",
    sourceUrl: "https://www.ditzyb.store/pages/event-calendar",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 21 July 2026 from Ditzy B's live Shop Calendar feed (The Shop Calendar accordion widget), including its August 2026 next-month endpoint. Future sessions are listed for 22 and 29 July and 2, 5, 12, and 19 August 2026 from 6pm to 8pm; booking is essential.",
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
    sortDate: "2026-07-17",
    startLabel: "30 May-26 September 2026",
    venue: "City Hall, John Mackintosh Square",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl:
      "https://www.visitgibraltar.gi/events/mario-finlayson-national-art-gallery",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 July 2026 from the Visit Gibraltar Mario Finlayson National Art Gallery listing, which shows the gallery running from 30 May to 26 September 2026 at City Hall with summer opening hours.",
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
    startLabel: "23 July 2026",
    venue: "Catalan Bay",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 July 2026 from the Government of Gibraltar press release dated 7 May 2026, which lists Catalan Bay on 23 July 2026 as one of this year's Summer Slops dates and describes the series as intended for all ages.",
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
        sortDate: "2026-07-20",
        startLabel: "20 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-07-21",
        startLabel: "21 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
      {
        sortDate: "2026-07-23",
        startLabel: "23 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-07-27",
        startLabel: "27 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-07-28",
        startLabel: "28 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
      {
        sortDate: "2026-07-30",
        startLabel: "30 July 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-08-03",
        startLabel: "3 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-08-04",
        startLabel: "4 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
      {
        sortDate: "2026-08-06",
        startLabel: "6 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 4-5",
        ageLabel: "Ages 4-5",
      },
      {
        sortDate: "2026-08-10",
        startLabel: "10 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 6-8",
        ageLabel: "Ages 6-8",
      },
      {
        sortDate: "2026-08-11",
        startLabel: "11 August 2026, 10:00-12:00",
        title: "Young Learners Summer Spanish: Ages 9+",
        ageLabel: "Ages 9+",
      },
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
    sortDate: "2026-07-20",
    startLabel:
      "Mondays, Tuesdays and Thursdays in July & August 2026, 10:00-12:00",
    venue: "Little English Language School, 29 City Mill Lane",
    ageLabel: "Ages 4-9+",
    sourceName: "Little English Summer Spanish poster",
    sourceUrl: "/clubs/little-english-summer-spanish-2026.png",
    imageUrl: "/clubs/little-english-summer-spanish-2026.png",
    note:
      "Added on 22 July 2026 from the Young Learners Summer Spanish poster supplied to Kids on the Rock. The poster lists weekly July and August classes from 10am to 12pm: Mondays for ages 6 to 8, Tuesdays for ages 9+, and Thursdays for ages 4 to 5.",
  },
  {
    slug: "decorate-your-own-treasure-box-2026",
    title: "Decorate Your Own Treasure Box",
    summary:
      "A creative craft-maker session where children decorate and personalise their own treasure box to take home, with snack, drink, certificate, and age-category prize included.",
    status: "upcoming",
    audience: "kids",
    cost: "£10 per child",
    endDate: "2026-07-23",
    sortDate: "2026-07-23",
    startLabel: "23 July 2026, 15:00-16:00 and 17:30-19:00",
    venue: "Seawave Restaurant, Catalan Bay",
    ageLabel: "Ages 4-12",
    sourceName: "View poster",
    sourceUrl: "/events/decorate-your-own-treasure-box-2026.jpg",
    imageUrl: "/events/decorate-your-own-treasure-box-2026.jpg",
    note:
      "Added on 21 July 2026 from the updated event poster supplied to Kids on the Rock. The poster lists Thursday 23 July at Seawave Restaurant, Catalan Bay, with sessions for ages 4 to 8 from 3pm to 4pm and ages 8 to 12 from 5:30pm to 7pm; booking is by contacting Jayne on 54012932.",
  },
  {
    slug: "pop-up-postcard-workshop-2026",
    title: "Pop-up Postcard Workshop",
    summary:
      "A GCS summer-programme craft workshop for children and young people at the Fine Arts Gallery.",
    status: "upcoming",
    audience: "kids",
    cost: "See organiser",
    endDate: "2026-07-23",
    sortDate: "2026-07-23",
    startLabel: "23 July 2026",
    venue: "Fine Arts Gallery",
    ageLabel: "Children and young people",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which confirms the 2026 GCS 'Books Without Borders' summer workshops and directs readers to Culture.gi and Buytickets.gi for the full schedule; the current live event listings show Pop-up Postcard Workshop at the Fine Arts Gallery on 23 July 2026 from 10:30am to 12:00pm.",
  },
  {
    slug: "ditzy-b-pottery-workshop-july-2026",
    title: "Ditzy B Pottery Workshop",
    summary:
      "A two-hour pottery workshop for adults and teens at the Ditzy B craft studio.",
    status: "upcoming",
    audience: "teens",
    cost: "See organiser",
    endDate: "2026-07-24",
    sortDate: "2026-07-24",
    startLabel: "24 July 2026, 18:00-20:00",
    venue: "Ditzy B Arts & Craft Supplies, Main Street",
    ageLabel: "Adults and teens",
    sourceName: "Ditzy B Shop Calendar",
    sourceUrl: "https://www.ditzyb.store/pages/event-calendar",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 21 July 2026 from the live Ditzy B Shop Calendar feed, which lists Pottery Workshop (adults & teens) on 24 July 2026 from 6pm to 8pm at Ditzy B Arts & Craft Supplies on Main Street.",
  },
  {
    slug: "summer-storytelling-pirates-and-explorers-2026",
    title: "Summer Storytelling: Pirates & Explorers",
    summary:
      "A free themed storytelling morning for younger children as part of the GCS summer programme.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, booking advised",
    endDate: "2026-07-28",
    sortDate: "2026-07-28",
    startLabel: "28 July 2026",
    venue: "John Mackintosh Hall Library",
    ageLabel: "Ages 3+",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which confirms interactive GCS storytelling sessions for children aged 3 and above with the full schedule on Culture.gi; the current live event listings show Summer Storytelling 2026: Pirates & Explorers at John Mackintosh Hall Library on 28 July 2026 at 10:30am.",
  },
  {
    slug: "zine-making-workshop-2026",
    title: "Zine Making Workshop",
    summary:
      "A GCS summer-programme creative workshop exploring storytelling through zine-making at GEMA.",
    status: "upcoming",
    audience: "kids",
    cost: "See organiser",
    endDate: "2026-07-30",
    sortDate: "2026-07-30",
    startLabel: "30 July 2026",
    venue: "GEMA Art Gallery",
    ageLabel: "Children and young people",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which names zine-making among the 2026 GCS summer workshops and points to Culture.gi and Buytickets.gi for the dated schedule; the current live event listings show Zine Making Workshop at GEMA Art Gallery on 30 July 2026 from 10:30am to 12:00pm.",
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
    startLabel: "30 July 2026",
    venue: "Casemates Square",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 July 2026 from the Government of Gibraltar press release dated 7 May 2026, which lists Casemates Square on 30 July 2026 as one of this year's Summer Slops dates and describes the series as intended for all ages.",
  },
  {
    slug: "the-big-slop-2026",
    title: "The Big SLOP",
    summary:
      "A free family foam-party finale at Eastern Beach with music, entertainment, mascots, and food stalls.",
    status: "upcoming",
    audience: "family",
    cost: "Free entry",
    freeNote: "Free family event",
    endDate: "2026-08-01",
    sortDate: "2026-08-01",
    startLabel: "1 August 2026",
    venue: "Eastern Beach",
    ageLabel: "All ages",
    sourceName: "visitgibraltar.gi",
    sourceUrl: "https://www.visitgibraltar.gi/events/big-slop",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 19 July 2026 from the Visit Gibraltar Big SLOP listing, which gives the event date as 1 August 2026 from 6pm at Eastern Beach and describes it as a free event for the whole family with music, entertainment, mascots, and food stalls.",
  },
  {
    slug: "summer-storytelling-tales-and-traditions-2026",
    title: "Summer Storytelling: Tales & Traditions",
    summary:
      "A free gallery-based storytelling session for young children and families in the GCS summer programme.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, booking advised",
    endDate: "2026-08-04",
    sortDate: "2026-08-04",
    startLabel: "4 August 2026",
    venue: "Mario Finlayson National Gallery",
    ageLabel: "Ages 3-7",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which confirms the 2026 storytelling series for younger children and directs families to the full Culture.gi schedule; the current live event listings show Summer Storytelling 2026: Tales & Traditions at the Mario Finlayson National Gallery on 4 August 2026 at 10:30am for ages 3 to 7.",
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
    startLabel: "6 August 2026",
    venue: "Camp Bay",
    ageLabel: "Children and families",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/summer-slops-in-2026-3272026-11959",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 17 July 2026 from the Government of Gibraltar press release dated 7 May 2026, which lists Camp Bay on 6 August 2026 as one of this year's Summer Slops dates and describes the series as intended for all ages.",
  },
  {
    slug: "paper-craft-workshop-2026",
    title: "Paper Craft Workshop",
    summary:
      "A GCS summer-programme art session at GEMA focused on hands-on paper craft for children and young people.",
    status: "upcoming",
    audience: "kids",
    cost: "See organiser",
    endDate: "2026-08-06",
    sortDate: "2026-08-06",
    startLabel: "6 August 2026",
    venue: "GEMA Art Gallery",
    ageLabel: "Children and young people",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which names papercraft among the 2026 GCS workshops and points to Culture.gi and Buytickets.gi for the full timetable; the current live event listings show Paper Craft Workshop at GEMA Art Gallery on 6 August 2026 from 10:30am to 12:00pm.",
  },
  {
    slug: "summer-storytelling-the-world-around-us-2026",
    title: "Summer Storytelling: The World Around Us",
    summary:
      "A free themed storytelling session for younger children in the later part of the GCS summer reading programme.",
    status: "upcoming",
    audience: "kids",
    cost: "Free entry",
    freeNote: "Free, booking advised",
    endDate: "2026-08-11",
    sortDate: "2026-08-11",
    startLabel: "11 August 2026",
    venue: "See organiser for venue",
    ageLabel: "Ages 3-7",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/gcs-summer-workshops-and-activities-for-young-people-4412026-12077",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 20 July 2026 from the Government of Gibraltar press release dated 8 June 2026, which confirms the 2026 storytelling series for younger children and directs families to the full schedule on Culture.gi; current live event listings show Summer Storytelling 2026: The World Around Us on 11 August 2026 at 10:30am, but they surface conflicting venue text, so families should confirm the final venue with the organiser when booking.",
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
    sourceName: "culture.gi",
    sourceUrl:
      "https://www.culture.gi/news/gibraltar-fair-2026-stall-application-process/",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 21 July 2026 from the live Culture.gi Gibraltar Fair 2026 announcement and the current Visit Gibraltar events calendar, both of which list the fair from Friday 21 to Saturday 29 August 2026. The 2026 venue and opening times were not yet stated on those official pages, so families should check the organiser's latest details before travelling.",
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
