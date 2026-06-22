export type DayOutCategory =
  | "animals-nature"
  | "adventure-views"
  | "rainy-day"
  | "history-heritage";

export interface DayOutItem {
  slug: string;
  name: string;
  category: DayOutCategory | DayOutCategory[];
  ageFit: string;
  summary: string;
  cost: string;
  freeNote?: string;
  location: string;
  sourceName: string;
  sourceUrl: string;
}

export const dayOutVerifiedDate = "22 June 2026";

export const familyDayOuts: DayOutItem[] = [
  {
    slug: "alameda-wildlife-conservation-park",
    name: "Alameda Wildlife Conservation Park",
    category: "animals-nature",
    ageFit: "Best for toddlers to tweens, but good for all ages",
    summary:
      "A small wildlife park in the Botanic Gardens with rescued animals, lemurs, birds, reptiles, and loads to look at without needing endless walking.",
    cost: "£8 adult / £5 child / under 5s free",
    location: "Red Sands Road, Gibraltar Botanic Gardens",
    sourceName: "awcp.gi / Visit Gibraltar",
    sourceUrl: "https://awcp.gi/",
  },
  {
    slug: "apes-den",
    name: "Apes' Den",
    category: "animals-nature",
    ageFit: "School-age kids, teens, and confident little walkers",
    summary:
      "One of the classic Upper Rock stops if your children mainly care about seeing the monkeys up close.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock Nature Reserve",
    sourceName: "Visit Gibraltar / Nature Reserve",
    sourceUrl:
      "https://www.visitgibraltar.gi/see-and-do/military-history/apes-den-barbary-macaques-8",
  },
  {
    slug: "beaches",
    name: "Beaches",
    category: "animals-nature",
    ageFit: "All ages",
    summary:
      "A simple Gibraltar beach day can be enough: sand, paddling, snacks, and a bit of sea air without needing a massive plan.",
    cost: "Free entry",
    freeNote: "Free",
    location: "Various beaches across Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/beaches",
  },
  {
    slug: "cable-car-gibraltar",
    name: "Cable Car Gibraltar",
    category: "adventure-views",
    ageFit: "All ages",
    summary:
      "The usual easiest way up the Rock for views and macaques, but the operator currently says the cable car is closed for a full refurbishment.",
    cost: "Closed for refurbishment; operator says it is expected to reopen in 2027",
    location: "Grand Parade, Gibraltar",
    sourceName: "Gibraltar Nature Reserve",
    sourceUrl: "https://naturereserve.gi/experiences/cable-car/",
  },
  {
    slug: "campion-park",
    name: "Campion Park",
    category: "animals-nature",
    ageFit: "All ages",
    summary:
      "A central green stop with space for a breather, a wander, or a quick bit of child-burning-energy time in town.",
    cost: "Free entry",
    freeNote: "Free",
    location: "Midtown, Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/campion-park",
  },
  {
    slug: "commonwealth-park",
    name: "Commonwealth Park",
    category: "animals-nature",
    ageFit: "All ages",
    summary:
      "A landscaped park beside King's Bastion that still works well for a low-effort family wander, but Visit Gibraltar currently labels it as open on request rather than a simple always-open stop.",
    cost: "Free, but Visit Gibraltar currently lists it as 'Open on Request'",
    freeNote: "Free",
    location: "Queensway, next to King's Bastion Leisure Centre",
    sourceName: "Visit Gibraltar / Gibraltar For Families",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/commonwealth-park",
  },
  {
    slug: "dolphin-adventure",
    name: "Dolphin Adventure",
    category: "animals-nature",
    ageFit: "All ages",
    summary:
      "The classic Gibraltar dolphin boat trip, with regular sailings and a strong chance of seeing dolphins.",
    cost: "From £28 adult / £14 child",
    location: "Marina Bay, Gibraltar",
    sourceName: "dolphin.gi",
    sourceUrl: "https://www.dolphin.gi/",
  },
  {
    slug: "europa-point",
    name: "Europa Point",
    category: "adventure-views",
    ageFit: "All ages",
    summary:
      "A big open-sky Gibraltar outing with space to run about, sea views, and enough drama to make it feel like a proper family trip.",
    cost: "Free entry",
    freeNote: "Free",
    location: "South District, Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/europa-point-lighthouse",
  },
  {
    slug: "gibraltar-botanic-gardens",
    name: "Gibraltar Botanic Gardens",
    category: "animals-nature",
    ageFit: "All ages",
    summary:
      "A very easy family wander with space to run about a bit, nice shade, and enough going on to feel like you've actually gone somewhere.",
    cost: "Free entry",
    freeNote: "Free",
    location: "Red Sands Road, Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/gibraltar-botanic-gardens",
  },
  {
    slug: "gibraltar-national-museum",
    name: "Gibraltar National Museum",
    category: ["history-heritage", "rainy-day"],
    ageFit: "School-age kids and teens",
    summary:
      "A useful rainy-day history stop if you want something more structured than just wandering outdoors.",
    cost: "£15 adult / £7.50 child under 12 / under 5s and Gibraltar ID holders free",
    location: "Bomb House Lane, Gibraltar",
    sourceName: "Gibraltar National Museum",
    sourceUrl: "https://www.gibmuseum.gi/visit-us",
  },
  {
    slug: "gorhams-cave-sea-trip",
    name: "Gorham's Cave Sea Trip",
    category: "adventure-views",
    ageFit: "School-age kids, teens, and boat-happy families",
    summary:
      "A sea-based family outing for seeing the Gorham's Cave area from the water rather than turning it into a heavy walking day.",
    cost: "Paid boat trip",
    location: "Departures vary by operator, Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl:
      "https://www.visitgibraltar.gi/see-and-do/gorhams-cave-complex-world-heritage-site-and-tours",
  },
  {
    slug: "great-siege-tunnels",
    name: "Great Siege Tunnels",
    category: "history-heritage",
    ageFit: "Older kids and teens",
    summary:
      "One of the big Upper Rock history stops if you want something more memorable than just a quick photo and down again.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock Nature Reserve",
    sourceName: "Visit Gibraltar / Nature Reserve",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/the-great-siege-tunnels",
  },
  {
    slug: "kings-bastion-leisure-centre",
    name: "King's Bastion Leisure Centre",
    category: "rainy-day",
    ageFit: "Mixed ages",
    summary:
      "Bowling, arcade bits, cinema, bouldering, and a solid bad-weather fallback when everyone needs to get out of the house.",
    cost: "Paid activity venue",
    location: "Line Wall Road, Gibraltar",
    sourceName: "Visit Gibraltar",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/kings-bastion",
  },
  {
    slug: "leisure-cinemas",
    name: "Leisure Cinemas",
    category: "rainy-day",
    ageFit: "All ages",
    summary:
      "A straightforward rainy-day fallback when you want an easy outing with snacks, dark room peace, and minimal planning.",
    cost: "Paid tickets",
    location: "King's Bastion Leisure Centre, Line Wall Road, Gibraltar",
    sourceName: "Leisure Cinemas",
    sourceUrl: "https://www.leisurecinemas.com/",
  },
  {
    slug: "parsons-lodge",
    name: "Parsons Lodge",
    category: "history-heritage",
    ageFit: "Older kids and teens",
    summary:
      "A smaller Rosia Bay stop that now works best as a natural-history add-on, mixing outdoor exhibits with the wider story of Parson's Lodge.",
    cost:
      "Included with Gibraltar National Museum ticket (£15 adult / £7.50 child under 12 / under 5s and Gibraltar ID holders free)",
    freeNote: "Free for Gibraltar ID holders",
    location: "Rosia Bay, Gibraltar",
    sourceName: "Gibraltar National Museum",
    sourceUrl: "https://www.gibmuseum.gi/visit-us/natural-history-museum",
  },
  {
    slug: "rock-escape-rooms",
    name: "Rock Escape Rooms",
    category: "rainy-day",
    ageFit: "Older kids, teens, and mixed-age families with adults",
    summary:
      "Escape room games with themed rooms including more family-friendly options like the Magic Room and Mario Room.",
    cost: "£21 per person, booking required",
    location: "7 Cemetery Road, Devil's Tower Road",
    sourceName: "Rock Escape Rooms",
    sourceUrl: "https://www.rockescaperooms.com/our-rooms",
  },
  {
    slug: "skywalk-upper-rock",
    name: "Skywalk & Upper Rock",
    category: "adventure-views",
    ageFit: "School-age kids, teens, and confident little walkers",
    summary:
      "Glass-platform views, macaques, and a proper Rock outing if you want one of those 'we should do this properly' Gibraltar days.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock Nature Reserve",
    sourceName: "Gibraltar Nature Reserve",
    sourceUrl: "https://naturereserve.gi/faq/",
  },
  {
    slug: "st-michaels-cave",
    name: "St Michael's Cave",
    category: "adventure-views",
    ageFit: "All ages",
    summary:
      "The big dramatic cave stop on the Rock, which still manages to impress even children who were not especially excited on the way up.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock Nature Reserve",
    sourceName: "Visit Gibraltar / Nature Reserve",
    sourceUrl:
      "https://www.visitgibraltar.gi/see-and-do/military-history/st-michaels-cave-9/",
  },
  {
    slug: "the-tunnels-gibraltars-wwii-experience",
    name: "The Tunnels: Gibraltar's WWII Experience",
    category: "history-heritage",
    ageFit: "Older kids and teens",
    summary:
      "The newly renovated WWII tunnel experience inside the Rock, with exhibits, footage, and the kind of atmosphere older children tend to remember.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock, Gibraltar",
    sourceName: "HM Government of Gibraltar",
    sourceUrl:
      "https://www.gibraltar.gov.gi/press-releases/fully-renovated-world-war-ii-tunnel-complex-officially-opened-602025-10557",
  },
  {
    slug: "windsor-bridge",
    name: "Windsor Bridge",
    category: "adventure-views",
    ageFit: "Older kids, teens, and confident walkers",
    summary:
      "A more adventurous Rock outing with the suspension bridge as the big wow moment, best when everyone is up for a proper walk.",
    cost: "Included with Nature Reserve ticket (£30 adult / £22 child / under 5s free)",
    freeNote: "Free for Red ID holders",
    location: "Upper Rock Nature Reserve",
    sourceName: "Visit Gibraltar / Nature Reserve",
    sourceUrl: "https://www.visitgibraltar.gi/see-and-do/windsor-suspension-bridge",
  },
];
