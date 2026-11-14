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

export const eventsVerifiedDate = "14 November 2026";

export const childFriendlyEvents: EventItem[] = [
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
    slug: "gibraltar-careers-fair-2026",
    title: "Careers Fair 2026",
    summary:
      "A public careers fair bringing Gibraltar employers, training providers and young people together, with interactive displays and demonstrations.",
    status: "upcoming",
    audience: "teens",
    cost: "Free",
    sortDate: "2026-11-18",
    startLabel: "18 November 2026, 16:00-20:00",
    venue: "MUGA, Bayside Sports Complex",
    ageLabel: "Young people, parents and job seekers",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/careers-fair-2026-calls-on-gibraltars-industries-to-get-involved-5332026-12173",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 7 November 2026 from HM Government of Gibraltar's official announcement. The fair is open to the public from 4pm to 8pm, and invites young people, parents and job seekers to explore career opportunities through sector stands, interactive displays and demonstrations.",
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
      "Christmas fair rides in John Mackintosh Square, launching alongside the Festival of Lights and running daily through the festive season.",
    status: "upcoming",
    audience: "family",
    cost: "See organiser",
    endDate: "2027-01-05",
    sortDate: "2026-11-20",
    startLabel: "20 November 2026-5 January 2027; daily 13:00-19:00 from 21 November",
    venue: "John Mackintosh Square",
    ageLabel: "All ages",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/christmas-fair-attractions-2026-8792026-12566",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 12 November 2026 from HM Government's official announcement. The fair attractions open at 6:30pm on Friday 20 November with free rides that evening, then run daily in John Mackintosh Square from 1pm to 7pm from 21 November to 5 January; rides cost £3, except on 10 December when they are free for the GBC Open Day fundraiser.",
  },
  {
    slug: "stylos-dance-royale-2026",
    title: "Stylos Dance Royale 2026",
    summary:
      "A dance championship and pageant showcase where young performers compete and take to the stage.",
    status: "upcoming",
    audience: "teens",
    cost: "£15",
    sortDate: "2026-11-21",
    startLabel: "21 November 2026, 14:00",
    venue: "Special Olympics Sports Complex",
    ageLabel: "Young dancers, teens and their families",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/stylos-dance-royale-2026-1421",
    imageUrl:
      "https://www.buytickets.gi/uploads/events/uQf2S_Event_covers__58_.png",
    note:
      "Verified on 14 November 2026 from the live BuyTickets listing. Stylos Dance Studios presents its dance championship and pageant showcase at the Special Olympics Sports Complex at 2pm on Saturday 21 November; tickets are £15. The organiser describes an event for dancers to showcase their talent and for audiences to cheer them on.",
  },
  {
    slug: "ditzyb-drop-in-crafts-weekdays-2026",
    title: "Drop-in Crafts",
    summary:
      "A weekday open craft workshop where teens can choose a project or bring one to work on, with materials and equipment available.",
    status: "upcoming",
    audience: "teens",
    cost: "From £10; standard ticket £15",
    endDate: "2026-12-31",
    sortDate: "2026-12-01",
    startLabel: "Weekdays from 1 December 2026, 10:30-15:30",
    venue: "DitzyB Arts & Craft Supplies, Main Street",
    ageLabel: "Teens and adults",
    sourceName: "Ditzy B",
    sourceUrl:
      "https://www.ditzyb.store/collections/tickets/products/coffee-crafts",
    imageUrl:
      "https://images.theshopcalendar.com/event/300087/Copy_of_Copy_of_pottery_painting_%281%29.jpg?1789640812",
    note:
      "Verified on 12 November 2026 from Ditzy B's live Shop Calendar feed and ticket product. The calendar lists Drop-in Crafts for adults and teens on weekdays from 10:30am to 3:30pm, starting 1 December. The product lists a £15 standard ticket, ceramic painting from £10 plus the ceramic chosen, and alternative rates for project continuation or workshop/equipment use.",
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
    slug: "wonder-of-christmas-2026",
    title: "The Wonder of Christmas",
    summary:
      "A festive choral concert of harmonies and Christmas favourites by Harmonics Choir.",
    status: "upcoming",
    audience: "family",
    cost: "£15",
    eventDates: [
      { sortDate: "2026-12-07", startLabel: "7 December 2026, 19:30" },
      { sortDate: "2026-12-08", startLabel: "8 December 2026, 19:30" },
    ],
    endDate: "2026-12-08",
    sortDate: "2026-12-07",
    startLabel: "7-8 December 2026, 19:30",
    venue: "Holy Trinity Cathedral",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/the-wonder-of-christmas-1394",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 7 November 2026 from the live BuyTickets listing. Harmonics Choir presents this festive concert at 7:30pm on Monday 7 and Tuesday 8 December at Holy Trinity Cathedral; tickets are £15.",
  },
  {
    slug: "danza-academy-choreography-competition-2026",
    title: "Danza Academy's Choreography Competition 2026",
    summary:
      "A stage competition showcasing choreography from Danza Academy performers.",
    status: "upcoming",
    audience: "teens",
    cost: "£15",
    sortDate: "2026-12-10",
    startLabel: "10 December 2026, 19:00",
    venue: "Inces Hall Theatre",
    ageLabel: "Dance students, teens and their families",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/danza-academys-choreography-competition-2026-1416",
    imageUrl:
      "https://www.buytickets.gi/uploads/events/oPE6m_danza_academy_800x450.jpg",
    note:
      "Verified on 9 November 2026 from the live BuyTickets listing. Danza Academy's competition is at Inces Hall Theatre on Thursday 10 December at 7pm; tickets are £15. The organiser has not published a specific age range.",
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
    startLabel: "5 December, 10:30-15:00; 12 December, 10:30-14:30",
    venue: "Main Street, Casemates Square and Cathedral Square",
    ageLabel: "All ages",
    sourceName: "gibraltar.gov.gi",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/christmas-saturdays-in-town-2026-8812026-12568",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 12 November 2026 from HM Government's official programme. Christmas Saturdays bring family-friendly entertainment to Main Street: Renditions Choir, GFA Play Makers, DJs, GBC Open Day and bands on 5 December; and On-X, school choir, bands and a Lindsay Olivero flamenco Zambomba on 12 December.",
  },
  {
    slug: "christmas-on-strings-2026",
    title: "Concerts by Candlelight: Christmas on Strings",
    summary:
      "A candlelit Christmas concert with a string quartet, Nathan Payas and soloists from the Gibraltar Youth Choir.",
    status: "upcoming",
    audience: "family",
    cost: "£15",
    eventDates: [
      { sortDate: "2026-12-14", startLabel: "14 December 2026, 19:00" },
      { sortDate: "2026-12-15", startLabel: "15 December 2026, 19:00" },
    ],
    endDate: "2026-12-15",
    sortDate: "2026-12-14",
    startLabel: "14-15 December 2026, 19:00",
    venue: "Holy Trinity Cathedral",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/concerts-by-candlelight-christmas-on-strings-1385",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 7 November 2026 from the live BuyTickets listing and Gibraltar Cultural Services' official announcement. The two performances begin at 7pm and cost £15, including mulled wine and mince pies.",
  },
  {
    slug: "winter-arts-showcase-2026",
    title: "Winter Arts Showcase",
    summary:
      "A festive evening celebrating Prior Park School Gibraltar students' creativity and achievement across the arts.",
    status: "upcoming",
    audience: "family",
    cost: "£15",
    sortDate: "2026-12-15",
    startLabel: "15 December 2026, 17:45-19:00",
    venue: "Sunborn Gibraltar, Ocean Village",
    ageLabel: "School-age performers, families and supporters",
    sourceName: "buytickets.gi",
    sourceUrl: "https://www.buytickets.gi/events/winter-arts-showcase-1419",
    imageUrl:
      "https://www.buytickets.gi/uploads/events/ChbjU_WAS_2026_-_POSTER_TBC___800_x_450_px_.png",
    note:
      "Verified on 14 November 2026 from the live BuyTickets listing. Prior Park School Gibraltar's Winter Arts Showcase runs from 5:45pm to 7pm on Tuesday 15 December at Sunborn Gibraltar, with £15 tickets. The school describes it as a festive celebration of its students' creativity, talent and achievement across the arts.",
  },
  {
    slug: "baila-a-la-navidad-2026",
    title: "Baila a la Navidad",
    summary:
      "A family-centred flamenco Christmas show combining dance, villancicos and traditional rhythms.",
    status: "upcoming",
    audience: "family",
    cost: "£20",
    sortDate: "2026-12-16",
    startLabel: "16 December 2026, 18:00",
    venue: "John Mackintosh Hall",
    ageLabel: "All ages",
    sourceName: "buytickets.gi",
    sourceUrl: "https://www.buytickets.gi/events/baila-a-la-navidad-1393",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 7 November 2026 from the live BuyTickets listing. David Morales brings flamenco dance, Christmas carols and traditional instruments to the John Mackintosh Hall at 6pm, with the organiser presenting it as a way to share festive traditions with younger generations.",
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
  {
    slug: "med-steps-5-challenge-2027",
    title: "Med Steps 5 Challenge",
    summary:
      "A community fundraising challenge on the Mediterranean Steps for individuals, families, friends and teams, supporting the Gibraltar Society for Cancer Relief.",
    status: "upcoming",
    audience: "family",
    cost: "£25",
    sortDate: "2027-05-08",
    startLabel: "8 May 2027, 09:00",
    venue: "Mediterranean Steps",
    ageLabel: "Families; under-16s must be accompanied by an adult",
    sourceName: "buytickets.gi",
    sourceUrl:
      "https://www.buytickets.gi/events/med-steps-5-challenge-1326",
    imageUrl: "/blog/default-cover.svg",
    note:
      "Verified on 11 November 2026 from the live BuyTickets listing. The community fundraising challenge starts at 9am on Saturday 8 May 2027 on the Mediterranean Steps and welcomes individuals, families, friends and teams. Participants under 16 must be accompanied by an appropriate adult; proceeds support the Gibraltar Society for Cancer Relief.",
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
