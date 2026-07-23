export type ClubCategory =
  | "babies-tots"
  | "for-mums"
  | "health-fitness"
  | "education-languages"
  | "dance"
  | "arts-creative"
  | "youth-groups";

export interface ClubGalleryImage {
  src: string;
  alt: string;
}

export interface ClubItem {
  slug: string;
  name: string;
  category: ClubCategory;
  secondaryCategories?: ClubCategory[];
  logoUrl?: string;
  ageRange: string;
  price?: string;
  summary: string;
  schedule: string;
  location: string;
  sourceName: string;
  sourceUrl: string;
  aboutParagraphs?: string[];
  galleryImages?: ClubGalleryImage[];
}

export const clubsVerifiedDate = "21 July 2026";

export const localClubs: ClubItem[] = [
  {
    slug: "breastfeeding-support-group",
    name: "Breastfeeding Support Group",
    category: "for-mums",
    logoUrl: "/clubs/breastfeeding-support.png",
    ageRange: "For mums",
    summary:
      "A weekly term-time support group for mums looking for infant-feeding support and a regular meet-up with others in the same stage.",
    schedule: "Every Monday 10:00-11:00 during term time",
    location: "Integral Yoga Centre, Town Range",
    sourceName: "Infant Feeding Matters",
    sourceUrl: "https://www.instagram.com/infant_feeding_matters/",
    aboutParagraphs: [
      "This is a weekly term-time support group for mums who want infant-feeding support as well as a regular meet-up with others at the same stage.",
      "It runs on Mondays from 10:00am to 11:00am at the Integral Yoga Centre on Town Range, with details shared through Infant Feeding Matters.",
    ],
    galleryImages: [
      {
        src: "/clubs/breastfeeding-support-1.jpg",
        alt: "Breastfeeding support group session image",
      },
      {
        src: "/clubs/breastfeeding-support-2.jpg",
        alt: "Mums and babies at breastfeeding support group",
      },
      {
        src: "/clubs/breastfeeding-support-3.jpg",
        alt: "Breastfeeding support group activity image",
      },
      {
        src: "/clubs/breastfeeding-support-4.jpg",
        alt: "Infant feeding support group image",
      },
      {
        src: "/clubs/breastfeeding-support-5.jpg",
        alt: "Breastfeeding support meet-up image",
      },
      {
        src: "/clubs/breastfeeding-support-6.jpg",
        alt: "Breastfeeding support group gathering image",
      },
    ],
  },
  {
    slug: "zumbini-with-shy",
    name: "Zumbini with Shy",
    category: "babies-tots",
    logoUrl: "/clubs/zumbini-with-shy-logo.png",
    ageRange: "Babies & toddlers with their grown-ups",
    price: "See organiser page",
    summary:
      "A music and movement class for babies, toddlers, and their grown-ups, built around songs, instruments, and playful activities.",
    schedule: "Wednesdays 16:45-17:30",
    location: "The Boathouse, Victoria Stadium",
    sourceName: "Zumbini with Shy Instagram",
    sourceUrl: "https://www.instagram.com/dont_be_shy_zumbini/",
    aboutParagraphs: [
      "Zumbini with Shy is an early childhood music and movement class for babies, toddlers, and their grown-ups.",
      "The organiser describes it as a fun, supportive session built around original songs, instruments, and playful activities that encourage bonding, creativity, and development.",
      "The current poster shows the classes running on Wednesdays from 4:45pm to 5:30pm at The Boathouse, Victoria Stadium, so this looks like a gentle weekly option for little ones who enjoy music, movement, and doing something alongside their grown-up rather than being dropped off.",
    ],
    galleryImages: [
      {
        src: "/events/zumbini-with-shy-explainer-2026.jpg",
        alt: "Zumbini with Shy class explainer poster",
      },
      {
        src: "/events/zumbini-with-shy.png",
        alt: "Zumbini with Shy class dates poster",
      },
    ],
  },
  {
    slug: "post-natal-pilates",
    name: "Post Natal Pilates",
    category: "for-mums",
    logoUrl: "/clubs/corelife.webp",
    ageRange: "For mums",
    summary:
      "A weekly postnatal Pilates class for mums looking for a gentler, strengthening session midweek.",
    schedule: "Tuesdays 12:00",
    location: "See organiser page",
    sourceName: "Core Life by C",
    sourceUrl: "https://www.corelifebyc.com/",
    aboutParagraphs: [
      "This is a weekly postnatal Pilates class for mums who want a gentler strengthening session with a focus on rebuilding strength after birth.",
      "The current Corelife Baby timetable shows postnatal Pilates on Tuesdays at 12:00pm, with the organiser describing it as core recovery, strength, and mindful movement for mums.",
      "The wider Corelife Baby setup also includes baby sensory, mummy fitness, and baby massage across the week, so this feels more like a small mums-and-babies community timetable than a standalone class.",
    ],
    galleryImages: [
      {
        src: "/clubs/corelife-1.png",
        alt: "Post Natal Pilates session image",
      },
      {
        src: "/clubs/corelife-2.png",
        alt: "Core Life by C Pilates image",
      },
      {
        src: "/clubs/corelife-3.png",
        alt: "Post Natal Pilates class setup",
      },
      {
        src: "/clubs/corelife-4.png",
        alt: "Post Natal Pilates promotional image",
      },
      {
        src: "/clubs/corelife-5.png",
        alt: "Mums Pilates session image",
      },
      {
        src: "/events/corelife-baby-timetable-2026.jpg",
        alt: "Corelife Baby weekly timetable poster",
      },
      {
        src: "/events/corelife-baby-sensory-2026.jpg",
        alt: "Corelife Baby sensory poster",
      },
      {
        src: "/events/corelife-postnatal-pilates-2026.jpg",
        alt: "Corelife Baby postnatal Pilates poster",
      },
      {
        src: "/events/corelife-baby-massage-2026.jpg",
        alt: "Corelife Baby massage poster",
      },
    ],
  },
  {
    slug: "beer-fit",
    name: "Beer Fit",
    category: "for-mums",
    secondaryCategories: ["babies-tots"],
    logoUrl: "/clubs/beerfit-logo.png",
    ageRange: "For mums and babies",
    summary:
      "A mother-and-baby fitness class designed to help new mums stay active, bond with their babies, and meet others in the same stage.",
    schedule: "Weekly sessions; early and late dates shared by organiser",
    location: "See organiser page",
    sourceName: "Beer Fit Instagram",
    sourceUrl: "https://www.instagram.com/beerfit24/",
    aboutParagraphs: [
      "Beer Fit describes Baby Weights as a mother-and-baby group fitness class for new mums who want to stay active while keeping their babies close.",
      "The workouts are designed to include both mum and baby, with baby-wearing exercises and movements where the baby becomes part of the workout.",
      "The aim is both physical and social: getting the heart rate up, rebuilding strength, and connecting with other mums going through a similar stage. The organiser says weekly sessions run on early and late dates, with more information shared on the social pages.",
    ],
    galleryImages: [
      {
        src: "/clubs/beerfit-1.png",
        alt: "Beer Fit Baby Weights post",
      },
      {
        src: "/clubs/beerfit-2.png",
        alt: "Beer Fit Baby Weights details",
      },
    ],
  },
  {
    slug: "mum-dance-by-nicole",
    name: "Mum-Dance by Nicole",
    category: "for-mums",
    secondaryCategories: ["health-fitness", "dance"],
    logoUrl: "/clubs/mum-dance.jpg",
    ageRange: "Adults",
    price: "£8 per class, with class passes available",
    summary:
      "A low-impact, high-sweat 80s dance fitness class in Gibraltar, taught by Nicole and built around feel-good routines rather than serious dance training.",
    schedule:
      "Monday: 09:30-10:30, 18:30-19:30 and 19:30-20:30\nTuesday: 14:00-15:00\nWednesday: 09:30-10:30 and 19:30-20:30\nThursday: 09:30-10:30\nFriday: 09:30-10:30",
    location: "2 Serfaty's Passage, Gibraltar",
    sourceName: "Mum-Dance Gibraltar",
    sourceUrl: "https://mum-dance.co.uk/pages/gibraltar-class",
    aboutParagraphs: [
      "Mum-Dance Gibraltar is taught by Nicole and is part of the wider Mum-Dance setup: a low-impact, high-sweat dance fitness class built around school-disco-style routines and 80s and early-90s tracks.",
      "The Gibraltar class page lists routines including Fame, Flashdance, Vogue, Mamma Mia, Footloose, I Wanna Dance With Somebody, Pump Up The Jam, and more, so the whole thing reads as feel-good fitness rather than formal dance training.",
      "The current booking page shows classes running through the week, with £8 single classes and multi-class passes available, and now gives the Gibraltar venue as 2 Serfaty's Passage. Gibraltar Cultural Services also lists Mum Dance by Nicole with Nicole Victor as the contact, which gives the listing a second local reference point.",
    ],
  },
  {
    slug: "klay-and-krafts",
    name: "Klay & Krafts",
    category: "arts-creative",
    logoUrl: "/clubs/klay-and-krafts.png",
    ageRange: "Kids and adults, depending on workshop",
    price: "Kids workshops from £20",
    summary:
      "A pottery and crafts studio running kids workshops, themed holiday sessions, and creative classes in Gibraltar.",
    schedule: "Kids Klay Klub on Sundays 10:30-12:00, plus one-off themed sessions",
    location: "11 Horse Barrack Lane, Gibraltar",
    sourceName: "Klay & Krafts",
    sourceUrl: "https://www.klayandkrafts.com/collections/pottery-workshops",
    aboutParagraphs: [
      "Klay & Krafts is a Gibraltar pottery and crafts studio running creative workshops for children, plus themed one-off sessions during school holidays.",
      "The current pottery workshops collection lists a regular Kids Klay Klub on Sundays from 10:30am to 12pm, with materials and tools provided and space for children to create and personalise their own pieces.",
      "Alongside the regular workshops, the organiser also shares seasonal events and special sessions through the website and social pages.",
    ],
  },
  {
    slug: "bright-minds-crafts-and-play",
    name: "Bright Minds Crafts & Play",
    category: "arts-creative",
    secondaryCategories: ["education-languages"],
    logoUrl: "/clubs/bright-minds.jpg",
    ageRange: "Primary-age children",
    summary:
      "A Monday after-school crafts and play session at St Paul's Lower Primary, run under the MBS Wellbeing Kids banner.",
    schedule: "Mondays 15:15-17:00",
    location: "St Paul's Lower Primary",
    sourceName: "Bright Minds Crafts & Play poster",
    sourceUrl: "/clubs/bright-minds.jpg",
    aboutParagraphs: [
      "Bright Minds Crafts & Play is a Monday after-school session at St Paul's Lower Primary, running from 3:15pm to 5pm.",
      "The poster describes it as crafts and play, so this looks like a gentle creative after-school option rather than a formal art course. The MBS Wellbeing Kids logo appears on the poster, and the call to action is to register in advance.",
      "The poster does not show a price or detailed age split, so it is worth checking with the organiser before turning up.",
    ],
    galleryImages: [
      {
        src: "/clubs/bright-minds.jpg",
        alt: "Bright Minds Crafts and Play poster",
      },
    ],
  },
  {
    slug: "parent-and-child-society-pacs",
    name: "Parent and Child Society (PACS)",
    category: "babies-tots",
    logoUrl: "/clubs/pacs.jpg",
    ageRange: "Babies to preschool, depending on session",
    summary:
      "A week of parent-and-child sessions including toddler play, quieter sensory play, baby groups, songs and stories, and cooking sessions for older little ones.",
    schedule: "Weekdays",
    location: "Mid Harbours Family Centre and Methodist Church, Main Street",
    sourceName: "Parent and Child Society (PACS) Facebook",
    sourceUrl: "https://www.facebook.com/parentandchildsociety/",
    aboutParagraphs: [
      "PACS runs a weekday mix of parent-and-child sessions for different ages and energy levels, so there is a steady rhythm to the week rather than one single group.",
      "The sessions are split between Mid Harbours Family Centre and the Methodist Church on Main Street. The baby and toddler groups range from all-ages play sessions to quieter sensory play, a babies group for up to 18 months, stories and songs for 18 months and up, and prebooked cooking sessions for children aged 2 and above.",
      "The current timetable is as follows:",
      "**Mondays**\n*Totally Toddlers*: All ages\n9:45am-11:45am\nMid Harbours Family Centre",
      "**Tuesdays**\n*Play Sense*: All ages - quiet playgroup\n9:45am-11:15am\nMid Harbours Family Centre",
      "**Wednesdays**\n*Bumps and Babies*: Up to 18 months\n9.45am-12pm\n\n*Cooking Club*\\*: 2 years and above\n12.30pm-2.15pm\nBoth at Methodist Church, Main Street",
      "**Thursdays**\n*Songs & Stories*: 18 months+\n12.30pm-2pm\nMethodist Church, Main Street",
      "**Fridays**\n*Diddy Discoverers*: All ages\n9.45am-11.45 am\n\n*Cooking Club*\\*: 2 years and above\n12.30pm to 2.15pm\nBoth at Methodist Church, Main Street",
      "*\\*These activities must be prebooked, see Facebook page for details.*",
    ],
    galleryImages: [
      {
        src: "/clubs/pacs-1.jpg",
        alt: "PACS session setup for little ones",
      },
      {
        src: "/clubs/pacs-2.jpg",
        alt: "Children's activity area at a PACS group",
      },
      {
        src: "/clubs/pacs-3.jpg",
        alt: "PACS play materials and toys",
      },
      {
        src: "/clubs/pacs-4.jpg",
        alt: "PACS group activity space",
      },
    ],
  },
  {
    slug: "gibraltar-fa-fundamentals-development-school",
    name: "GFA Youth Football",
    category: "health-fitness",
    logoUrl: "https://www.gibraltarfa.com/assets/img/logo.png",
    ageRange: "Creche to Year 4",
    summary:
      "Weekly football sessions for little ones through to primary-age children, with separate groups for tots, reception, and development players.",
    schedule:
      "Saturdays, Sundays, and weekday training depending on age group.",
    location: "Victoria Stadium, Pitch 2 and Pitch 2D",
    sourceName: "Gibraltar FA",
    sourceUrl:
      "https://www.gibraltarfa.com/news/fundamentals-and-development-school-are-back-for-the-new-season-791",
    aboutParagraphs: [
      "Gibraltar FA runs this as two linked strands: FUNdamentals for Reception, Tots, and Creche age groups, and Development School for children in Years 1 to 4 who are ready for a more structured football setup.",
      "The younger sessions are split between Saturdays and Sundays at Victoria Stadium, while Development School training runs on Tuesdays and Thursdays with Sunday matchdays. Players are grouped by level so children can develop at the right pace, and the training kit and match shirt are included.",
    ],
    galleryImages: [
      {
        src: "https://www.gibraltarfa.com/uploads/news/2025/DSC01499.jpg",
        alt: "GFA youth football session at Victoria Stadium",
      },
      {
        src: "https://www.gibraltarfa.com/uploads/news/2025/_DSC6110.jpg",
        alt: "Children taking part in Gibraltar FA youth football training",
      },
    ],
  },
  {
    slug: "gibraltar-shotokan-karate-club",
    name: "Shotokan Karate Club",
    category: "health-fitness",
    logoUrl: "https://gibshot.com/wp-content/uploads/2017/02/Gibshot-Homeresizedbw.jpg",
    ageRange: "Kids and adults",
    summary:
      "Traditional karate classes with dedicated kids sessions twice a week.",
    schedule:
      "Kids classes are currently published on Tuesdays and Thursdays; check with the club for the latest time block.",
    location: "Check with organiser",
    sourceName: "Gibraltar Shotokan Karate Club",
    sourceUrl: "https://gibshot.com/",
    aboutParagraphs: [
      "Shotokan Karate Club gives separate space to Kihon and Kumite, which are the basics of karate and the different forms of sparring students move through as they progress. That gives this one a more traditional, structured feel than a club that just says \"karate\" and leaves it there.",
      "The club also gives kata its own section and explains that students are expected to learn the required forms as they move through their gradings. It breaks those down into beginner Heian and Tekki kata before moving into the more advanced syllabus, which is useful if you want something that feels methodical rather than random.",
      "The official site no longer supports the older Tuesday-and-Friday kids timetable used here before. The latest club posts point to children training on Tuesdays and Thursdays instead, with time changes depending on the season, so it is worth checking directly before turning up.",
      "For families, another helpful thing is that the club publishes the SEKU child protection policy it works under. That policy says children and young people make up the majority of membership across affiliated dojos and sets out the safeguarding expectations around coaching and training.",
    ],
    galleryImages: [
      {
        src: "https://gibshot.com/wp-content/uploads/2017/02/IMG_2504-2000x1200.jpg",
        alt: "Shotokan karate students training at Gibraltar Shotokan Karate Club",
      },
      {
        src: "https://gibshot.com/wp-content/uploads/2017/02/kumitemontage.png",
        alt: "Kumite training montage from Gibraltar Shotokan Karate Club",
      },
      {
        src: "https://gibshot.com/wp-content/uploads/2018/01/IMG_4130-2000x1200.jpg",
        alt: "Karate class image from Gibraltar Shotokan Karate Club",
      },
    ],
  },
  {
    slug: "titan-academy-gibraltar",
    name: "Titan Academy Kids BJJ",
    category: "health-fitness",
    logoUrl:
      "https://titanacademy.eu/wp-content/uploads/2024/01/Logo-Titan-no-BG.png",
    ageRange: "Kids 4+",
    summary:
      "Kids Brazilian Jiu-Jitsu with the Bullyproof programme for younger children, plus wider martial arts coaching.",
    schedule:
      "Kids BJJ in Gibraltar on Tuesdays and Thursdays at 6:30pm, with extra kids programmes available too.",
    location: "Titan Training, Gibraltar",
    sourceName: "Titan Academy",
    sourceUrl: "https://titanacademy.eu/classes/",
    aboutParagraphs: [
      "The Gibraltar kids BJJ classes run on Tuesdays and Thursdays at 6:30pm, with the children's side of the programme built around Titan's Kids Bullyproof system for ages 4 to 12.",
      "The academy describes that Bullyproof programme as BJJ-based anti-bullying training designed to build confidence, coordination, and resilience in a fun, safe environment. It also says the instructors are certified, safeguarding-trained, vetted, and first-aid qualified, which is exactly the sort of practical detail parents usually want first.",
      "Titan leans into the life-skills side as much as the sport itself: discipline, focus, respect, problem-solving, and confidence. Classes are structured to stay engaging and age-appropriate, with children building up from fundamental movements and escapes before moving on to more advanced techniques.",
    ],
    galleryImages: [
      {
        src: "https://titanacademy.eu/wp-content/uploads/2024/01/01ce4dd6-0b7c-4eca-8d45-2ed4a6501461-scaled.jpg",
        alt: "Children training in Titan Academy kids BJJ",
      },
      {
        src: "https://titanacademy.eu/wp-content/uploads/2024/02/criancas-2-1024x768.jpg",
        alt: "Titan Academy children taking part in BJJ class",
      },
    ],
  },
  {
    slug: "mbs-wellbeing-kids-programme",
    name: "MBS Wellbeing Kids Programme",
    category: "health-fitness",
    logoUrl: "https://www.mbsgib.com/favicon.ico",
    ageRange: "Ages 5-15",
    summary:
      "After-school wellbeing sessions for children, focused on emotional resilience, confidence, self-regulation, and positive wellbeing habits.",
    schedule:
      "Regular after-school sessions and wellbeing programmes across Gibraltar schools and community settings.",
    location: "Across Gibraltar",
    sourceName: "MBS Wellbeing / Kusuma Trust",
    sourceUrl: "https://www.mbsgib.com/what-we-do",
    aboutParagraphs: [
      "MBS describes its work as holistic wellbeing support for children, families, and the wider community, and says the charity was founded in Gibraltar in 2021 after seeing the scale of anxiety, stress, and mental-health challenges affecting students.",
      "For children specifically, its after-school programme is described as a safe and nurturing space where they can grow physically, mentally, and emotionally through engaging activities, skill-building workshops, and supportive mentorship.",
      "Families are also pointed towards one-to-one wellbeing sessions and support groups, so this feels broader than a single club once a week. It is more of a wellbeing programme with different routes in, depending on what a child needs.",
    ],
    galleryImages: [
      {
        src: "https://static.wixstatic.com/media/11062b_16dafd0b982d4b07992a9946cd5b770b~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_890,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_16dafd0b982d4b07992a9946cd5b770b~mv2_d_5760_3840_s_4_2.jpg",
        alt: "Children taking part in an MBS Wellbeing school activity",
      },
      {
        src: "https://static.wixstatic.com/media/11062b_cc4f2a12b84441699ad53511a3ced74a~mv2.jpg/v1/fill/w_393,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cc4f2a12b84441699ad53511a3ced74a~mv2.jpg",
        alt: "Child smiling during an MBS Wellbeing programme",
      },
      {
        src: "https://static.wixstatic.com/media/11062b_255a6a1abfba4f2fbbb2fcb8a6996381~mv2.jpg/v1/fill/w_810,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_255a6a1abfba4f2fbbb2fcb8a6996381~mv2.jpg",
        alt: "Children together during an MBS Wellbeing activity",
      },
    ],
  },
  {
    slug: "little-english-language-school",
    name: "Little English Language School",
    category: "education-languages",
    logoUrl:
      "https://static.wixstatic.com/media/4c2a48_2871017ea05140aebaa56eed9ef0014e~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LE%20Logo%20(1).png",
    ageRange: "All ages",
    summary:
      "English, Spanish, and French lessons in town and online, with options suitable for children as well as adults.",
    schedule: "Course times vary by language and level.",
    location: "29 City Mill Lane, Gibraltar",
    price: "From £12 / hour",
    sourceName: "Little English",
    sourceUrl: "https://www.littleenglish.gi/",
    aboutParagraphs: [
      "Little English is Gibraltar's independent language school, offering English, Spanish, and French classes in town and online for all ages and abilities. For parents, the practical draw is pretty clear: qualified tutors, a central town location, and different formats depending on what kind of timetable you are trying to juggle.",
      "For children specifically, the Young Learners lessons run once a week from 4:30pm to 6:00pm at the classrooms on the top floor of 29 City Mill Lane. They mix lively activities, listening, speaking, and play, aimed at building confidence in a second language while still feeling fun.",
      "The wider courses section also shows more flexible routes in for older children and teens, including exam-preparation support for GCSEs and A-Levels, as well as private lessons if a child needs something more tailored than a standard group class.",
    ],
    galleryImages: [
      {
        src: "/clubs/little-english-summer-spanish-2026.png",
        alt: "Little English Summer Spanish classes poster",
      },
      {
        src: "/clubs/little-english-1.jpg",
        alt: "Little English young learners classroom image",
      },
      {
        src: "/clubs/little-english-2.jpg",
        alt: "Little English team photo",
      },
      {
        src: "/clubs/little-english-3.jpg",
        alt: "Little English tutor image",
      },
    ],
  },
  {
    slug: "gibraltar-digital-skills-academy",
    name: "Digital Skills Academy",
    category: "education-languages",
    logoUrl: "https://www.digitalacademy.gi/favicon.ico",
    ageRange: "School-age children and teens",
    summary:
      "Digital courses including coding, cyber security, and Digital Athletes programmes for children and young people in Gibraltar.",
    schedule:
      "Course dates and availability vary by programme.",
    location: "Suite 745, 4th Floor, Europort, Gibraltar",
    sourceName: "Digital Skills Academy",
    sourceUrl: "https://www.digitalacademy.gi/courses",
    aboutParagraphs: [
      "Digital Skills Academy is part of the Gibraltar Digital Skills Foundation and is designed to help bridge the gap between education and industry. The wider goal is to close the gender, skills, and technology gap through community-led digital education.",
      "For school-age children and teens, the clearest route in is the Youth Development offer. That includes Codeclub for years 3 to 6, CodeLab for years 7 to 9, Python Essentials for years 10 to 13, plus CyberCenturion, Google's IT Security course, and the iDEA Award.",
      "So this one feels more like a structured digital-skills pathway than a single casual tech class. It is a useful option if your child is interested in coding, cyber, or practical technology skills and would get more from a focused programme than a generic after-school activity.",
    ],
    galleryImages: [
      {
        src: "https://static.wixstatic.com/media/85ee03_0963fb9c6923414f9099209eca64e4bf~mv2.png/v1/fill/w_164,h_302,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/85ee03_0963fb9c6923414f9099209eca64e4bf~mv2.png",
        alt: "Digital Skills Academy course image",
      },
      {
        src: "https://static.wixstatic.com/media/85ee03_6439938594ab473187dae5b4c8315bf7~mv2.png/v1/fill/w_517,h_308,al_c,q_85,enc_auto/85ee03_6439938594ab473187dae5b4c8315bf7~mv2.png",
        alt: "Youth Development course graphic from Digital Skills Academy",
      },
    ],
  },
  {
    slug: "gibraltar-cricket",
    name: "Cricket",
    category: "health-fitness",
    logoUrl: "/clubs/gibraltar-cricket.webp",
    ageRange: "Children and teens",
    price: "Youth annual membership £30, with 3 free taster sessions",
    summary:
      "Youth cricket sessions and club cricket pathways for children who want regular training, matches, and a proper team setup.",
    schedule:
      "Training and fixtures run through the season, with youth cricket available across school-age groups.",
    location: "Europa Sports Complex, Harding's Road, Gibraltar",
    sourceName: "Gibraltar Cricket",
    sourceUrl: "https://gibraltarcricket.com/membership",
    aboutParagraphs: [
      "Gibraltar Cricket runs a proper youth pathway rather than just one mixed children’s session. The club splits young players across different stages, from foundation cricket for the very youngest children right through to junior boys and girls cricket for older age groups.",
      "The clearest structure on the youth page starts with U3 to U5 foundation cricket, then moves into All Stars for ages 5 to 8 and Dynamos for ages 8 to 12. After that, the club branches into junior women’s cricket and U19 boys’ and girls’ cricket, which makes this one feel more like a full progression than a one-term taster.",
      "If your child wants more than a casual knock-around, this is one of the stronger team-sport setups on the site. The current membership page lists youth annual membership at £30 and says children can try three sessions free before signing up.",
    ],
    galleryImages: [
      {
        src: "https://img1.wsimg.com/isteam/ip/257827bb-d8b5-4096-a3d1-9ebf00dc955e/fb_1386380149615742_1640x924.jpg",
        alt: "Youth cricket image from Gibraltar Cricket",
      },
    ],
  },
  {
    slug: "gibraltar-rhythmic-gymnastics",
    name: "Rhythmic Gymnastics",
    category: "health-fitness",
    secondaryCategories: ["dance"],
    logoUrl: "/clubs/rhythmic-gymnastics.jpeg",
    ageRange: "Ages 4-16",
    price: "From £30 / month",
    summary:
      "Rhythmic gymnastics training focused on flexibility, coordination, performance, and competition pathways for young gymnasts.",
    schedule:
      "Regular weekly classes and training sessions through the year.",
    location: "Gibraltar",
    sourceName: "Gibraltar Gymnastics Group Association",
    sourceUrl: "https://www.facebook.com/GibraltarGGA/",
    aboutParagraphs: [
      "The GRGA has grown steadily over the years and is now one of the most established and successful sports in Gibraltar, having had a Rhythmic Gymnast represent Gibraltar under the Great Britain Flag at the 2012 Olympics and 5 gymnasts at the Commonwealth Games.",
      "The GRGA have also had many Elite Gymnasts win at the prestigious British Championships, plus an overwhelming amount of medals won in the Andalucian Spanish Circuit.",
    ],
    galleryImages: [
      {
        src: "/clubs/rhythmic-gymnastics-1.jpg",
        alt: "Rhythmic Gymnastics training session in Gibraltar.",
      },
      {
        src: "/clubs/rhythmic-gymnastics-2.jpg",
        alt: "Young Rhythmic Gymnastics performers in Gibraltar.",
      },
      {
        src: "/clubs/rhythmic-gymnastics-3.jpg",
        alt: "Rhythmic Gymnastics group training in Gibraltar.",
      },
      {
        src: "/clubs/rhythmic-gymnastics-4.webp",
        alt: "Rhythmic Gymnastics competition or display image from Gibraltar.",
      },
    ],
  },
  {
    slug: "girls-indoor-football",
    name: "GFA Girls Football (Fun Fridays)",
    category: "health-fitness",
    logoUrl: "https://www.gibraltarfa.com/assets/img/logo.png",
    ageRange: "Ages 3-7, with girls teams up to under-16s",
    price: "Free",
    summary:
      "Free girls-only grassroots football on Fridays during school term, aimed at younger players who want to try football, build confidence, and join in without needing league experience.",
    schedule:
      "Fridays during school term 17:00-18:00",
    location: "Pitch 2D, Victoria Stadium, Gibraltar",
    sourceName: "Gibraltar FA",
    sourceUrl: "https://www.gibraltarfa.com/women/for-girls",
    aboutParagraphs: [
      "The Gibraltar FA's current girls-only entry point is Fun Fridays, a free weekly session for girls aged 3 to 7 who want to play football in a friendly setting.",
      "The FA says the sessions run every Friday during school term from 5pm to 6pm on pitch 2D at Victoria Stadium and are open to girls of all abilities, with the focus on having fun, making friends, and learning football skills.",
      "For older girls or anyone who wants a more regular team pathway, the same page also points families to Gibraltar FA girls teams running from under-6s up to under-16s, so this now reads as the front door into the wider girls football setup rather than a standalone indoor session.",
    ],
    galleryImages: [
      {
        src: "https://www.gibraltarfa.com/uploads/Womens%20Football/2023/Indoor%20Football%20Sessions/GIRLS-INDOOR_FOOTBALL%20(FB).jpg",
        alt: "Girls football image from Gibraltar FA",
      },
    ],
  },
  {
    slug: "stagecoach-gibraltar",
    name: "Stagecoach Gibraltar",
    category: "dance",
    secondaryCategories: ["arts-creative"],
    logoUrl:
      "https://www.stagecoach.gi/SiteImages/Stagecoach2/Global/header_logo_tm.png",
    ageRange: "Ages 4-18",
    summary:
      "Weekly singing, dancing, and acting classes, plus holiday workshops.",
    schedule:
      "Weekly term-time classes for Early Stages (4-6) and Main Stages (6-16), with holiday workshops too.",
    location: "Gibraltar",
    price: "From £162 / term",
    sourceName: "Stagecoach Gibraltar",
    sourceUrl: "https://www.stagecoach.gi/gibraltar",
    aboutParagraphs: [
      "Stagecoach is a proper all-round performing-arts school rather than a single dance or drama class. Children work across singing, dancing, and acting together, which makes it a good fit for kids who enjoy performing but have not yet settled on one lane.",
      "The Gibraltar school runs Early Stages for ages 4 to 6 and Main Stages for ages 6 to 16, with holiday workshops available too. The official class structure is built around weekly term-time sessions, with Early Stages running for 90 minutes and Main Stages for 3 hours a week.",
      "It also feels parent-friendly in a practical way. The school offers a two-week trial, welcomes children of all abilities, and publishes its term pricing clearly, starting from £162 per term for Early Stages and £324 per term for Main Stages.",
    ],
  },
  {
    slug: "gibraltar-taekwondo",
    name: "Taekwondo",
    category: "health-fitness",
    logoUrl: "https://www.gibraltartaekwondo.com/favicon.ico",
    ageRange: "Children and adults",
    price:
      "£20 monthly for 1 session per week or £40 monthly for 2 sessions per week; first taster session free",
    summary:
      "Children's taekwondo classes with a strong focus on confidence, discipline, safeguarding, and proper coaching.",
    schedule:
      "Kids 6-10 Thursdays 17:30-18:30; youth 11-14 Tuesdays 17:30-18:30 and Wednesdays 18:00-19:00",
    location: "20/1 North Jumpers Bastion, Gibraltar",
    sourceName: "Gibraltar Taekwondo",
    sourceUrl: "https://www.gibraltartaekwondo.com/",
    aboutParagraphs: [
      "Gibraltar Taekwondo runs separate children’s and youth sessions rather than one mixed martial-arts class for everyone. The current schedule splits kids aged 6 to 10 into a Thursday session from 5:30pm to 6:30pm, while youth aged 11 to 14 train on Tuesdays from 5:30pm to 6:30pm and Wednesdays from 6pm to 7pm.",
      "The club now publishes its joining costs clearly too: £20 a month for one weekly session or £40 a month for two weekly sessions, with a first taster session free.",
      "For parents, one of the strongest things here is how clearly the coaching standards are set out. The club says all coaches are fully qualified, first-aid trained, safeguarding trained, and police vetted, and the coaches page lists British Taekwondo registration and coaching credentials in detail.",
      "The club has been running since 1999 and describes itself as a non-profit organisation with regular weekly training from its base at 20/1 North Jumpers Bastion. It feels like a proper long-running club for children who want structure, discipline, and a sport they can keep progressing in over time.",
    ],
  },
  {
    slug: "gibraltar-volleyball-association",
    name: "Volleyball Association",
    category: "health-fitness",
    logoUrl: "/clubs/volleyball.jpg",
    ageRange: "Children and teens",
    summary:
      "Indoor and beach volleyball pathways for children and teens, with girls' training, junior events, summer camps, and a proper route into squad-level play.",
    schedule:
      "Regular sessions through the week depending on age, plus beach camps and junior events through the year.",
    location: "Westside School and other Gibraltar venues, depending on programme",
    sourceName: "Gibraltar Volleyball Association",
    sourceUrl:
      "mailto:volleyballgibraltar@gmail.com?subject=Inquiry%20via%20Kids%20on%20the%20Rock",
    aboutParagraphs: [
      "The Gibraltar Volleyball Association runs junior volleyball in a way that feels like more than one weekly training slot. Alongside regular indoor sessions, including girls' training at Westside School, they also run beach volleyball camps in summer and junior events across the year, so there is a clearer sense of progression than just turning up for an occasional class.",
      "For older teens, there is a genuine competitive pathway too. The association has an under-20 team, and the under-20 boys have been selected to represent Gibraltar at the European Qualifiers in Cardiff. The GVA is also a full member of both the FIVB and CEV, which helps place the local junior setup inside a wider international volleyball structure.",
      "What stands out most, though, is that the club seems to care about development and enjoyment as much as results. Their junior Christmas Scramble is built around mixed teams, lots of matches, and competitive-but-fun volleyball, and the coaching side reflects that same tone. GVA coaches have attended international coaching conventions, including one in Sofia with attendees from 37 countries, bringing back ideas around sports neuroscience, player development, and fun-filled learning rather than a win-at-all-costs approach.",
    ],
    galleryImages: [
      {
        src: "/clubs/volleyball-1.jpg",
        alt: "Gibraltar Volleyball Association junior training session",
      },
      {
        src: "/clubs/volleyball-2.jpg",
        alt: "Junior Gibraltar volleyball players during a match or training session",
      },
      {
        src: "/clubs/volleyball-3.jpg",
        alt: "Gibraltar Volleyball Association youth volleyball activity",
      },
    ],
  },
  {
    slug: "gibraltar-netball",
    name: "Netball",
    category: "health-fitness",
    logoUrl: "/clubs/netball.png",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Junior netball training and league pathways for girls who want a proper team sport setup with regular sessions and matches.",
    schedule:
      "Regular weekly sessions and junior-league activity through the season.",
    location: "Gibraltar",
    sourceName: "Gibraltar Sports and Leisure Authority",
    sourceUrl: "https://www.gsla.gi/sports-leisure-directory/",
    aboutParagraphs: [
      "Gibraltar Netball is a proper local sport pathway rather than just an occasional training session. Public coverage around the association describes it as the leading women’s and girls’ team sport on the Rock, with both senior and junior league structures in place.",
      "The junior side is clearly established too. Sponsorship coverage for the Junior League talks about increasing participation, developing members at all levels, and supporting the future of upcoming netball players in Gibraltar, which makes this feel like a real progression sport for girls rather than a one-off school activity.",
      "The appeal is the mix of teamwork, speed, and structure. Netball can suit children who enjoy a proper team sport but want something different from football, with strong movement, game awareness, and plenty of room to grow through league and development pathways over time.",
    ],
  },
  {
    slug: "gibraltar-badminton",
    name: "Badminton",
    category: "health-fitness",
    logoUrl: "/clubs/badminton.png",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Badminton sessions for school-age children who want a fast, skill-based sport without the full commitment of a big team setup.",
    schedule:
      "Regular weekly sessions across the season.",
    location: "Gibraltar",
    sourceName: "Gibraltar Sports and Leisure Authority",
    sourceUrl: "https://www.gsla.gi/sports-leisure-directory/",
    aboutParagraphs: [
      "This listing sits under the Gibraltar Badminton Association in the official GSLA Sports and Leisure Directory, so it reads as an established local association rather than an occasional social hit-about. The directory includes named committee contacts and a welfare contact, which gives parents a more solid starting point than a vague poster or one-off advert.",
      "As a sport, badminton suits children who like quick reactions, coordination, and skill-building without needing the full noise and scale of a big team setup. It can work well for children who enjoy improving steadily through practice and for those who prefer singles or doubles play over larger pitch sports.",
      "The main SEO weakness on this page was that it felt a bit broad. The stronger practical takeaway is that this is a Gibraltar junior badminton route listed in the official sports directory, with regular weekly sessions through the season and an association structure behind it rather than an informal casual class.",
    ],
  },
  {
    slug: "gibraltar-dance-sport-federation",
    name: "Dance Sport Federation",
    category: "dance",
    logoUrl:
      "https://gibraltardance.com/wp-content/uploads/2016/08/GIBRALTAR-DANCE-SPORT-FEDERATION-GDSF-280X280-e1471798628207.png",
    ageRange: "Children and teens",
    summary:
      "Children's dance classes focused on ballroom and latin basics through play, games, and regular training.",
    schedule: "Ongoing classes through the year.",
    location: "Gibraltar",
    sourceName: "Gibraltar Dance Sport Federation",
    sourceUrl: "https://gibraltardance.com/children-6/",
    aboutParagraphs: [
      "These children’s classes are built around ballroom and Latin dance, using what the federation describes as a dance-through-play approach. That gives the page a much clearer identity than a generic dance listing: this is specifically a Gibraltar children’s ballroom-and-Latin route rather than a mixed commercial dance school.",
      "The programme is presented as ongoing rather than a one-off workshop. The federation says regular attendance helps children build coordination, posture, teamwork, and confidence, while also preparing them for dance shows and competitions if they want to keep going. That long-term progression angle is one of the strongest practical details on the page.",
      "The teaching is led by Cezar and Katerina, who are presented as professional dancers, teachers, and pedagogues. For parents, the practical takeaway is that this is a more formal, structured dance option for children who would enjoy ballroom and Latin basics in a friendly but disciplined setting.",
    ],
  },
  {
    slug: "the-showdance-company",
    name: "The Showdance Company",
    category: "dance",
    logoUrl: "https://www.culture.gi/favicon.ico",
    ageRange: "Children and teens",
    summary:
      "A local dance school focused on performance training, competitions, and showdance work for young dancers.",
    schedule:
      "Regular weekly training, rehearsals, and performance preparation across the year.",
    location: "Vault 17-18, Wellington Front, Gibraltar",
    sourceName: "Gibraltar Cultural Services",
    sourceUrl: "https://www.culture.gi/organisations/",
    aboutParagraphs: [
      "The Showdance Company is one of the established local dance schools listed by Gibraltar Cultural Services, based at Vault 17-18, Wellington Front under principal Sabrina Abudarham. That gives parents a clear local base and contact point rather than just a social-media-only presence.",
      "Recent public coverage places the school firmly in Gibraltar's competition and performance scene. Government and YGTV reports show the school representing Gibraltar at the Global Dance Open and the Barcelona Dance Awards, with dancers placing in acro, lyrical, and showdance categories and contributing to Gibraltar's overall dance results abroad.",
      "For families, the main takeaway is that this looks like regular dance training with a strong performance edge, not just a once-a-year show school. The public results suggest a year-round mix of rehearsals, choreography, and competition preparation that will suit children who genuinely enjoy performing and working towards polished routines.",
    ],
  },
  {
    slug: "gibraltar-academy-of-dance",
    name: "Academy of Dance",
    category: "dance",
    logoUrl: "/clubs/academy-of-dance.jpg",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Dance training for young performers across school-age groups, with regular classes and a strong studio-school feel.",
    schedule:
      "Weekly classes through term time, with training days varying by age and level.",
    location: "Gibraltar",
    sourceName: "Gibraltar Academy of Dance",
    sourceUrl: "https://www.facebook.com/profile.php?id=100027975175150",
    aboutParagraphs: [
      "Academy of Dance is one of Gibraltar’s long-running dance schools, with official local coverage describing its work across four decades under director Paulette Finlayson. That gives it a more established studio-school feel than a newer drop-in class.",
      "The academy’s public awards and performance coverage shows children moving through the Royal Academy of Dance pathway from Pre-Primary and Primary upwards, with students recognised across multiple grades and age groups. So this reads as a structured classical training route rather than a casual one-style class.",
      "The tone around the academy is very much about discipline, respect, and personal development alongside performance. If you are looking for something that feels formal, traditional, and built around steady dance progression, this is one of the clearest fits on the site.",
    ],
    galleryImages: [
      {
        src: "/clubs/academy-dance-photo-1.jpg",
        alt: "Academy of Dance class image",
      },
      {
        src: "/clubs/academy-dance-photo-2.jpg",
        alt: "Academy of Dance students performing",
      },
      {
        src: "/clubs/academy-dance-photo-3.jpg",
        alt: "Academy of Dance rehearsal or stage image",
      },
      {
        src: "/clubs/academy-dance-photo-4.jpg",
        alt: "Academy of Dance students on stage",
      },
      {
        src: "/clubs/academy-dance-photo-5.jpg",
        alt: "Academy of Dance performance image",
      },
    ],
  },
  {
    slug: "the-dance-collective-gib",
    name: "The Dance Collective Gib",
    category: "dance",
    logoUrl: "https://www.thedancecollectivegib.com/favicon.ico",
    ageRange: "Children and teens",
    summary:
      "Dance training across multiple styles with a strong performance and competitive-company focus.",
    schedule:
      "Weekly classes and training sessions, with additional company commitment for competitive dancers.",
    location: "Sandpits Lawn Tennis Club, Gibraltar",
    sourceName: "The Dance Collective Gib",
    sourceUrl: "https://www.thedancecollectivegib.com/",
    aboutParagraphs: [
      "The Dance Collective Gib positions itself as a training-heavy dance school rather than a casual once-a-week class. Its own site leans into versatility, technique, artistry, and performance, with the goal of helping dancers grow across multiple styles rather than staying in one lane.",
      "There is also a clear split between the wider school and the Competitive Company route. The competitive side expects dancers to commit to the full training curriculum, regular rehearsals, and a broader workload across styles, so this one makes sense for children who are serious about progressing rather than only trying dance casually.",
      "The studio still shows younger dancers coming through too, including its Baby Steps classes and general flexibility and strength work. So it feels like a place where children can start young and, if they love it, move into a more committed performance pathway over time.",
    ],
    galleryImages: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/67d1a5135d47ce2e5e9bd3d0/80bc0656-0cc9-4aec-9299-545305175f96/Your+paragraph+text-2.png",
        alt: "The Dance Collective Gib class image",
      },
    ],
  },
  {
    slug: "transitions-dance-academy",
    name: "Transitions Dance Academy",
    category: "dance",
    logoUrl: "https://www.culture.gi/favicon.ico",
    ageRange: "Primary age through teens",
    price: "From £4 / session",
    summary:
      "Modern jazz, lyrical, contemporary, ballet, acro, technique, and commercial classes in a family-friendly dance-school setting.",
    schedule:
      "Classes run across the week from Monday to Friday, with times varying by style and age.",
    location: "68/1 Prince Edward's Road, Gibraltar",
    sourceName: "Transitions Dance Academy",
    sourceUrl: "https://siandayle.setmore.com/",
    aboutParagraphs: [
      "Transitions Dance Academy runs from Prince Edward's Road in the Upper Town and presents itself as a multi-style dance school rather than a single-genre class. The public booking page lists training in acro, flexibility, strength, jumps, leaps, turns, and choreography alongside the main studio work, which gives it a more all-round performance-training feel.",
      "Public competition coverage also shows that the school takes performance work seriously. Gibraltar news reports place Transitions at the New Prague Dance Festival in both 2016 and 2023, with dancers bringing back awards in junior, dance theatre, and choreography categories under the direction of Gillaine Alman and the teaching team.",
      "So this reads as a dance school for children and teens who enjoy variety but also want structure. It is not just a once-a-week recreational class. The public profile suggests regular technique work, rehearsal time, and opportunities to work towards performances and competition pieces through the year.",
    ],
  },
  {
    slug: "art-in-movement-aim",
    name: "Art In Movement (A.I.M)",
    category: "dance",
    secondaryCategories: ["health-fitness", "babies-tots", "for-mums"],
    logoUrl: "/clubs/aim.jpg",
    ageRange: "Babies, mums, tweens, teens, and mixed ages depending on workshop",
    price: "From £10 / session",
    summary:
      "Street dance, contemporary, zumbini, capoeira, modern dance, mummy & me class.",
    schedule:
      "Regular sessions and workshops, with school-age classes running through the year.",
    location: "Gibraltar",
    sourceName: "Local listings",
    sourceUrl: "https://www.culture.gi/organisations/",
    aboutParagraphs: [
      "Art In Movement is broader than a single dance class. Public Gibraltar listings present it as a creative base where different movement styles and performing-arts strands can be explored, which fits the current mix on this page: street dance, contemporary, capoeira, modern dance, zumbini, and a mummy-and-me offer.",
      "Nathan Conroy is publicly described in Gibraltar coverage as a returning professional performer with large-scale stage experience and a clear interest in building up the local dance scene. That gives A.I.M a stronger dance-led identity than the old summary did, which was really just a list of styles.",
      "For parents, the practical appeal is the spread across age groups and formats. This is one of the few listings that can catch babies and mums through zumbini or mummy-and-me sessions while also suiting older children who want dance styles that feel less traditional than a straight ballet-school route.",
    ],
  },
  {
    slug: "gibraltar-artists-studio",
    name: "Gibraltar Artists Studio",
    category: "arts-creative",
    logoUrl:
      "https://gibraltarartiststudio.com/wp-content/uploads/2025/07/cropped-gibraltar-artists-studio-logo2-1.png",
    ageRange: "Children 6+ and parent-child sessions",
    summary:
      "Regular children's art classes during the school year, plus monthly parent-and-child sessions.",
    schedule:
      "Children's classes run across the academic year; parent-and-child classes are held monthly on Saturdays.",
    location: "21 Horse Barrack Lane, Gibraltar",
    sourceName: "Gibraltar Artists Studio",
    sourceUrl: "https://gibraltarartiststudio.com/",
    aboutParagraphs: [
      "Gibraltar Artists Studio describes its classes as inclusive and open to all skill levels, with a strong focus on giving children a supportive place to make things, try ideas out, and build confidence through art.",
      "On the studio's kids classes page, children's sessions are held weekly with Geraldine Martinez and are split into 6-8, 8-11, and 11+ groups, so the activities can stay age-appropriate rather than feeling like one mixed class for everyone.",
    ],
    galleryImages: [
      {
        src: "https://gibraltarartiststudio.com/wp-content/uploads/2026/02/kids-classes-6-8.jpg",
        alt: "Gibraltar Artists Studio kids classes for ages 6 to 8",
      },
      {
        src: "https://gibraltarartiststudio.com/wp-content/uploads/2026/02/kids-classes-8-11.jpg",
        alt: "Gibraltar Artists Studio kids classes for ages 8 to 11",
      },
      {
        src: "https://gibraltarartiststudio.com/wp-content/uploads/2026/02/kids-classes-11.jpg",
        alt: "Gibraltar Artists Studio kids classes for ages 11 and up",
      },
    ],
  },
  {
    slug: "gampa-acting",
    name: "GAMPA Acting",
    category: "arts-creative",
    logoUrl: "/clubs/gampa.png",
    ageRange: "Ages 4-21",
    price: "From £15 / session",
    summary:
      "Drama and performing-arts training for children and teens who want proper acting classes in a structured creative setting.",
    schedule:
      "Acting and performing-arts programmes run through the academic year.",
    location: "7 Hospital Hill, Gibraltar",
    sourceName: "GAMPA",
    sourceUrl: "https://www.gampa.gi/academy-programme",
    aboutParagraphs: [
      "GAMPA is a full academy rather than a standalone drama school, so the acting side sits inside a wider music and performing-arts structure. That can work really well for children who are interested in stage performance generally, not just spoken drama on its own.",
      "The academy programme runs for ages 4 to 21, with group classes timetabled across the week and acting split by school year rather than one mixed session for everybody. The published timetable shows younger children, older primary pupils, teenagers, and senior students all being taught separately, which makes the training feel much more age-appropriate.",
      "There is also a clear performance route built into the academy. GAMPA says it encourages students to take part in drama productions and wider performances, and its musical theatre programme combines acting, singing, and dance for children who want a fuller stage-school experience rather than drama in isolation.",
    ],
    galleryImages: [
      {
        src: "https://www.gampa.gi/uploads/1/3/1/1/131115723/published/drama-1.jpeg?1721248629",
        alt: "GAMPA acting or drama rehearsal image",
      },
      {
        src: "https://www.gampa.gi/uploads/1/3/1/1/131115723/published/mt-3.jpeg?1721248629",
        alt: "GAMPA musical theatre class image",
      },
      {
        src: "https://www.gampa.gi/uploads/1/3/1/1/131115723/published/drama-2.jpeg?1721248629",
        alt: "GAMPA performing arts image",
      },
    ],
  },
  {
    slug: "john-mackintosh-hall-library-storytelling",
    name: "JMH Library Storytelling",
    category: "youth-groups",
    logoUrl: "/clubs/jmh-library.jpeg",
    ageRange: "Best for ages 2-4",
    price: "Free",
    summary:
      "Weekly storytelling in the children's section of the library, ideal for little ones who like books but still need the whole thing to feel low-pressure.",
    schedule:
      "Usually Tuesdays at 4:30pm during term, with the library confirming exact sessions.",
    location: "John Mackintosh Hall Library, 308 Main Street",
    sourceName: "Gibraltar Cultural Services",
    sourceUrl: "https://www.culture.gi/library/",
    aboutParagraphs: [
      "JMH Library Storytelling is one of the gentlest entries on the site for little ones. It is a weekly library session aimed at younger children, with Gibraltar Cultural Services describing it as ideal for ages 2 to 4. That gives this page a much clearer search identity than a generic youth-group label: it is really a toddler storytelling session in Gibraltar.",
      "The storytelling takes place in the library’s children’s section, with volunteer readers leading the sessions while children sit on bean bags and mats. That makes it feel calm and low-pressure, which is often exactly what you want at this age rather than a loud, highly structured class.",
      "The appeal is simple: books, routine, and a soft introduction to group activities. It is a good fit for toddlers and preschoolers who love stories, and for parents who want something free and easy in town that still feels properly child-focused.",
    ],
  },
  {
    slug: "growing-artists-programme",
    name: "Growing Artists Programme",
    category: "arts-creative",
    logoUrl:
      "https://growingartists.com/wp-content/uploads/2025/09/Growing-Artist-Programme-2-options.png",
    ageRange: "Ages 1+ through teens",
    summary:
      "Weekly art groups including Mini Makers, Art Squad, Arteam, and a youth group, all built around hands-on creative work.",
    schedule:
      "Weekly events and classes, with specific groups listed on the programme timetable and events page.",
    location: "The Old Police Station, 120a Irish Town, Gibraltar",
    sourceName: "Growing Artists Programme",
    sourceUrl: "https://growingartists.com/index.php/our-events/",
    aboutParagraphs: [
      "Growing Artists is one of the strongest creative routes on the site for children who like art but do not want a one-size-fits-all class. The programme is split clearly by age and stage, which makes the groups feel much more purposeful than one mixed art session for everyone.",
      "The current weekly setup includes Mini Makers for ages 1 to 5, Art Squad for ages 6 to 10, ARTeam for ages 9 to 12, and a Youth Group that takes part in community projects and artist-led workshops. Across the programme, children are introduced to different artists, materials, and techniques rather than repeating the same kind of craft each week.",
      "The wider programme also says it is designed to keep workshops low-cost or free where possible and to support young people from different backgrounds. So this one reads as a proper community arts hub as much as an ordinary after-school class, with a good mix of creative freedom, artist-led structure, and longer-term opportunities.",
    ],
    galleryImages: [
      {
        src: "https://growingartists.com/wp-content/uploads/2025/10/MINI-MAKERS-1-scaled.jpeg",
        alt: "Growing Artists Mini Makers session",
      },
      {
        src: "https://growingartists.com/wp-content/uploads/2025/10/ART-SQUAD-2-scaled.jpeg",
        alt: "Growing Artists Art Squad session",
      },
      {
        src: "https://growingartists.com/wp-content/uploads/2025/10/ARTEAM-3-scaled.jpeg",
        alt: "Growing Artists ARTeam class",
      },
    ],
  },
  {
    slug: "ermelindas-contemporary-ceramics",
    name: "Ermelinda's Contemporary Ceramics",
    category: "arts-creative",
    logoUrl: "/clubs/ermelinda-ceramics.png",
    ageRange: "Ages 7-12",
    price: "From £10 / session",
    summary:
      "Weekly clay classes for children who want proper hands-on ceramics, making projects over a run of lessons rather than a one-off crafty session.",
    schedule:
      "Weekly lessons, typically on Wednesdays or Thursdays, with a minimum run of lessons needed to complete each project.",
    location: "3 South Dockyard Approach, Gibraltar",
    sourceName: "Ermelinda's Contemporary Ceramics",
    sourceUrl: "https://www.instagram.com/duarte.ermelinda/",
    aboutParagraphs: [
      "Ermelinda’s ceramics classes are built around proper clay-making rather than quick craft-table projects. The children’s programme is described as creating with clay across a run of weekly lessons, which means children stay with a project long enough to actually learn the process rather than taking something home after one session.",
      "The published children’s setup is for ages 7 to 12 and runs from Ermelinda’s studio at 3 South Dockyard Approach. Weekly Wednesday or Thursday lessons are structured as a minimum block of six sessions so that each project has time to be built, finished, and taken through the firing stage properly.",
      "The appeal here is the hands-on, material side of it. Children are learning genuine clay techniques like pinch pots, slab work, coil building, modelling, and painting fired pieces, so this feels much closer to real studio ceramics than a generic art class.",
    ],
  },
  {
    slug: "lets-create-with-doni",
    name: "Let's Create with Doni",
    category: "arts-creative",
    logoUrl: "/clubs/doni-logo.png",
    ageRange: "Ages 4-10, plus Mum/Dad & Me sessions",
    price: "£10 per child; £20 for Mum/Dad & Me sessions",
    summary:
      "After-school art classes split by age, plus occasional Mum/Dad & Me sessions with themed craft projects.",
    schedule:
      "Wednesdays 4pm-5pm for ages 4-6, Thursdays 4:15pm-5:15pm for ages 7-10, plus selected Saturday Mum/Dad & Me sessions.",
    location: "King's Bastion, Room 2",
    sourceName: "Let's Create with Doni Instagram",
    sourceUrl: "https://www.instagram.com/letscreate_with_doni/",
    aboutParagraphs: [
      "Let's Create with Doni is currently running after-school art classes in April at King's Bastion, Room 2, with the week split into two age bands rather than one mixed class.",
      "The screenshots show Wednesdays from 4pm to 5pm for ages 4 to 6, and Thursdays from 4:15pm to 5:15pm for ages 7 to 10. The price shown is £10 per child.",
      "The classes are set up as themed project sessions across the month, with different artwork planned for each date. The same posts also show Mum/Dad & Me Saturday sessions at King's Bastion, including Easter and April craft sessions priced at £20.",
    ],
    galleryImages: [
      {
        src: "/clubs/doni-1.png",
        alt: "Let's Create with Doni class project example",
      },
      {
        src: "/clubs/doni-2.png",
        alt: "Children's artwork example from Let's Create with Doni",
      },
      {
        src: "/clubs/doni-3.png",
        alt: "Let's Create with Doni painted craft example",
      },
    ],
  },
  {
    slug: "babynastics-gibraltar",
    name: "Babynastics",
    category: "babies-tots",
    ageRange: "From crawling to reception",
    price: "First class free",
    summary:
      "Play-based movement sessions for little ones, designed to build strength, motor skills, and confidence through guided physical play.",
    schedule:
      "Postponed for the foreseeable future.",
    location: "King's Bastion Leisure Centre",
    sourceName: "Babynastics Gibraltar Instagram",
    sourceUrl: "https://www.instagram.com/babynastics_gibraltar/",
    aboutParagraphs: [
      "Babynastics is set up for little ones from crawling through to reception age, but sessions have been postponed for the foreseeable future.",
      "The poster describes the programme as building motor skills and strength through guided, interactive play. So this one feels less like formal gymnastics training and more like early-years movement designed to help children explore, climb, roll, and build confidence in a playful setting.",
      "The launch post also leans into the parent-and-child side of the experience, with classes described as nurturing and designed to help you bond and grow together through fun physical activities for early development.",
    ],
  },
  {
    slug: "ditzy-b-art-classes",
    name: "Ditzy B Art Classes",
    category: "arts-creative",
    logoUrl: "/clubs/ditzyb.avif",
    ageRange: "Primary and middle-school ages",
    price: "From £15 / session",
    summary:
      "Junior art classes covering drawing, sketching, painting, pastels, and a good mix of hands-on art techniques.",
    schedule:
      "Regular weekly junior classes during term time.",
    location: "Gibraltar",
    sourceName: "Ditzy B",
    sourceUrl: "https://www.ditzyb.store/",
    aboutParagraphs: [
      "Ditzy B is more than just a shop add-on. The business describes itself as a family-run craft and workshop space in Gibraltar, with experience running both adult and children’s workshops as well as art lessons with a qualified art teacher.",
      "For children specifically, the site lists Art Classes for ages 7 to 10 and 11 to 15, both starting from £15. The wider workshop offer also shows a lot of hands-on making around ceramics, slime, pottery, and other craft sessions, so it feels like a good fit for children who prefer practical, messy, creative work over a more formal studio-art setup.",
      "The useful parent angle here is that it sits inside a broader craft business with supplies, workshops, and party options all in one place. That makes it feel flexible: a child can come for regular art classes, try one-off workshop formats, or lean into ceramics and making rather than just drawing and painting.",
    ],
  },
  {
    slug: "mediterranean-dance-school",
    name: "Mediterranean Dance School",
    category: "dance",
    logoUrl: "https://www.culture.gi/favicon.ico",
    ageRange: "Children and teens",
    summary:
      "A long-running local dance school with regular classes, choreography, and competition work across different age groups.",
    schedule:
      "Ongoing dance training through the year, with regular rehearsals and performance preparation.",
    location: "Gibraltar",
    sourceName: "Visit Gibraltar / festival listings",
    sourceUrl: "https://www.visitgibraltar.gi/events/may-day-celebrations",
    aboutParagraphs: [
      "Mediterranean Dance School is one of Gibraltar’s long-standing local dance schools, with public listings placing it at Prince Edward’s Road in the Upper Town. It reads as an established school rather than a short course or pop-up workshop.",
      "The school shows up regularly in official local dance and performance coverage, including Gibraltar’s international dance festival results and other major public performances. That makes it feel like a proper performance school with dancers progressing into competitions, showcases, and bigger stage work over time.",
      "The appeal is the sense of continuity and commitment. This looks like the sort of dance school families join because a child wants to keep training, rehearsing, and building up experience year after year, not just try a one-term class.",
    ],
  },
  {
    slug: "yalta-dance-studio",
    name: "YALTA Dance Studio",
    category: "dance",
    logoUrl: "/clubs/yalta.jpg",
    ageRange: "Children, teens, and adults",
    summary:
      "A major local dance studio covering urban, commercial, lyrical, contemporary, theatre, and performance work.",
    schedule:
      "Busy year-round schedule with regular classes, rehearsals, workshops, and performances.",
    location: "Unit 2, Jumper's Bastion, Gibraltar",
    sourceName: "YALTA Dance Studio",
    sourceUrl: "https://www.facebook.com/yaltadancestudio/",
    aboutParagraphs: [
      "YALTA Dance Studio is one of Gibraltar's best-known performance-focused dance groups, based at Jumper's Bastion under director Yalta Pons. Public anniversary coverage traces the wider YDS story back to 1995 and describes the studio as a long-running part of Gibraltar's dance and performing-arts scene rather than a newer drop-in school.",
      "One of the clearest things in the public profile is that YDS does not follow an exam-syllabus model. Instead, the school describes itself as a group that trains to be performers, with work that has included theatre shows, community events, workshops, overseas trips, and regular appearances in Gibraltar and Spain.",
      "Recent coverage backs up that active performance calendar. YDS has been reported competing in Marbella, qualifying dancers for the Dance World Cup Finals in Prague, and taking part in major local events through the year. That will suit children and teens who enjoy commercial, urban, theatre, and show-based dance and who like the idea of learning routines for the stage rather than working mainly towards graded exams.",
    ],
  },
  {
    slug: "phoenix-dance-company",
    name: "Phoenix Dance Company",
    category: "dance",
    logoUrl: "https://www.culture.gi/favicon.ico",
    ageRange: "Children and teens",
    summary:
      "A local dance company offering regular performance-focused training for young dancers.",
    schedule:
      "Weekly dance sessions and rehearsals through the year.",
    location: "Gibraltar",
    sourceName: "Gibraltar Cultural Services",
    sourceUrl: "https://www.culture.gi/organisations/",
    aboutParagraphs: [
      "Phoenix Dance Company is listed by Gibraltar Cultural Services as one of the local dance organisations working in Gibraltar's performance scene. That at least gives it a firmer public footing than a dance page that only exists through fleeting social posts or old event flyers.",
      "Public local coverage also links the company with Amy Avellano, whose dance background appears in Gibraltar competition and national dance-team reporting. That does not tell us every style taught week to week, but it does support the sense that the company sits within Gibraltar's more performance-led dance world rather than as a casual after-school drop-in.",
    ],
  },
  {
    slug: "girl-guides-gibraltar",
    name: "Girl Guides Gibraltar",
    category: "youth-groups",
    logoUrl: "/clubs/girl-guides.jpg",
    ageRange: "School-age children and teens",
    price: "From £10 / month",
    summary:
      "Guiding groups for girls who want friendship, confidence-building, outdoor activities, badges, and regular group sessions.",
    schedule:
      "Weekly meetings through local units across different age sections.",
    location: "Gibraltar",
    sourceName: "Girlguiding Gibraltar",
    sourceUrl:
      "https://www.facebook.com/p/Girlguiding-Gibraltar-100064927710384/",
    aboutParagraphs: [
      "Girlguiding in Gibraltar has a long history locally. The Girlguiding North West England overseas territories page says Guiding here began in 1914, was officially registered in 1925, and has been in continuous operation since then.",
      "It also describes Girlguiding Gibraltar as a well-established youth organisation with more than 200 members across Rainbows, Brownies, Guides, and Rangers, alongside leaders and unit helpers. That makes this feel like a proper local network rather than a single small unit.",
      "A nice practical detail for parents is that Guiding in Gibraltar also has access to Rock Lodge on the Upper Rock. Public information from the Kusuma Trust says the lodge was refurbished to accommodate larger groups, is fully accessible, and is used for overnight stays and outdoor adventure activities, giving girls a chance to try trips away as part of the wider programme.",
    ],
  },
  {
    slug: "brownies-gibraltar",
    name: "Brownies Gibraltar",
    category: "youth-groups",
    logoUrl: "/clubs/girl-guides.jpg",
    ageRange: "Primary age",
    price: "From £10 / month",
    summary:
      "Brownies groups for younger girls who want the usual mix of games, badges, confidence, and after-school adventure.",
    schedule:
      "Weekly meetings through local Brownie units.",
    location: "Gibraltar",
    sourceName: "Girlguiding Gibraltar",
    sourceUrl:
      "https://www.facebook.com/p/Girlguiding-Gibraltar-100064927710384/",
    aboutParagraphs: [
      "Brownies is the Girlguiding section for primary-age girls, generally covering ages 7 to 10. It is a good fit for children who like the idea of regular group meetings, badges, games, crafts, and trips, but still want it to feel fun rather than too formal.",
      "In Gibraltar, Brownies sits inside the wider Girlguiding Gibraltar setup, which has long-standing local roots and its own Rock Lodge facility for sleepovers, camps, and residential guiding activity. That gives it a stronger community feel than a standalone after-school class.",
      "For parents, Brownies usually makes sense as a confidence-and-friendship choice as much as an activity one. The guiding structure is built around teamwork, practical skills, outdoor experiences, and girls learning to try new things in a supportive group.",
    ],
  },
  {
    slug: "rainbows-gibraltar",
    name: "Rainbows Gibraltar",
    category: "youth-groups",
    logoUrl: "/clubs/girl-guides.jpg",
    ageRange: "Younger primary age",
    price: "From £10 / month",
    summary:
      "Rainbows sessions for little ones who want a gentle start to the Girlguiding world with games, crafts, and fun group activities.",
    schedule:
      "Weekly meetings through local Rainbow units.",
    location: "Gibraltar",
    sourceName: "Girlguiding Gibraltar",
    sourceUrl:
      "mailto:girlguidinggibraltar@gmail.com?subject=Inquiry%20via%20Kids%20on%20the%20Rock",
    aboutParagraphs: [
      "Rainbows is the youngest section in Girlguiding and welcomes girls aged 4 to 7 for play, learning, and fun in a colourful, safe space. That makes it a gentler starting point than some clubs that expect children to arrive ready for drills, performance, or competition.",
      "Rainbows is built around games, creative activities, friendship, group skills, local trips, and simple badges, with girls choosing their way through the programme as they learn new things together. For parents, that usually translates into a regular weekly group that feels social, playful, and age-appropriate rather than overly structured.",
      "In Gibraltar, Rainbows sits inside the wider Girlguiding Gibraltar network, which the overseas territories page describes as a long-running organisation with more than 200 members across Rainbows, Brownies, Guides, and Rangers. That gives it a more established community feel than a standalone little-ones activity, with a clearer path into the older guiding sections later on.",
    ],
  },
  {
    slug: "gibraltar-youth-service-clubs",
    name: "Youth Service Clubs",
    category: "youth-groups",
    logoUrl:
      "https://static.wixstatic.com/media/8db90e_f803667e046d49cd8d4d3e587470f796~mv2.png/v1/crop/x_0,y_41,w_1058,h_298/fill/w_162,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/youth_yellow_edited.png",
    ageRange: "Ages 7-25 depending on club",
    summary:
      "Youth clubs around Gibraltar with regular sessions, trips, games, cooking, creative work, and support from youth workers.",
    schedule:
      "Sessions run across the week through clubs including Laguna, Dolphins, Plater, and the Youth Centre.",
    location: "Across Gibraltar",
    sourceName: "Gibraltar Youth Service",
    sourceUrl: "https://www.youth.gi/",
    aboutParagraphs: [
      "The Gibraltar Youth Service runs four youth clubs across the community: Plater, Dolphins, Laguna, and the Youth Centre. The service’s own site describes it as a statutory Government of Gibraltar provision supporting young people aged 7 to 25, so this page is really the main umbrella route for youth clubs in Gibraltar rather than one single venue.",
      "What stands out is that these are not all the same club repeated in different buildings. The club pages show different age-group evenings, different session styles, and a mix of group work, games, cooking, creative activities, sports, issue-based sessions, trips, and social time depending on the club and the night. That is the kind of specific local detail that helps this page stand apart in search.",
      "For parents, that makes Youth Service Clubs feel broader and more flexible than a standard after-school activity. Young people are supported by qualified youth workers, can join as members, and have access to a wider range of projects and programmes through the service, so it works well for children and teens who want community, support, and varied activities rather than one narrow hobby.",
    ],
  },
  {
    slug: "scouts-gibraltar",
    name: "Scouts Gibraltar",
    category: "youth-groups",
    logoUrl: "/clubs/scouts.png",
    ageRange: "Ages 6-18",
    price: "Check with organiser",
    summary:
      "Beavers, Cubs, Scouts, Explorers, and Sea Scouts for children and teens who want badges, camps, outdoor skills, teamwork, and the full scouting setup.",
    schedule:
      "Weekly meetings across the 1st/4th, 3rd Europa, and 5th Sea Scouts groups, with different nights depending on section and age.",
    location: "Wellington Front, Line Wall Road, and Waterport, Gibraltar",
    sourceName: "Scouts Gibraltar",
    sourceUrl: "https://scouts.org.gi/find-scout-group/",
    aboutParagraphs: [
      "Scouts Gibraltar includes several groups, sections, and meeting nights across Gibraltar. The Find Scout Group page shows regular Beavers, Cubs, Scouts, and Explorers meetings running across the 1st/4th Marquis of Milfords' Haven Own Scout Group, 3rd Europa Scout Group, and 5th Sea Scouts Group, with different nights and locations depending on section.",
      "The programme itself is built around the wider Scouts 'skills for life' model. Scouts Gibraltar describes Scouting as a youth movement centred on fun, challenge, and adventure, with young people developing practical skills, learning about their community and the wider world, building confidence, and taking part in outdoor activities, camps, and awards.",
      "There is also a strong local history behind it. Scouts Gibraltar says the first recognised overseas unit under UK control was chartered in Gibraltar in 1908, and Scouting has continued locally for more than a century. For parents, that gives this a much more established feel than a casual after-school activity, especially if your child likes structure, badges, teamwork, and the idea of progressing through the different sections over time.",
    ],
  },
  {
    slug: "bushido-jiu-jitsu",
    name: "Bushido Jiu-Jitsu",
    category: "health-fitness",
    logoUrl: "/clubs/bushido.jpg",
    ageRange: "Children and teens",
    price: "From £5 / session",
    summary:
      "Jiu-jitsu classes built around confidence, discipline, self-defence, and a structured martial-arts environment for younger students.",
    schedule:
      "Regular weekly sessions during term time and through the year.",
    location: "Gibraltar",
    sourceName: "Gibraltar Bushido Ju-jitsu Academy",
    sourceUrl:
      "https://www.facebook.com/people/Gibraltar-Bushido-Ju-jitsu-Academy/61569115322172/",
    aboutParagraphs: [
      "Bushido is one of the more traditional martial-arts setups on the site, with public coverage around the academy leaning into discipline, self-defence, gradings, and long-term progression rather than a casual fitness-class feel. That gives this page a clearer martial-arts identity than a broad 'confidence and discipline' description on its own.",
      "Recent Gibraltar reporting on the academy shows regular junior grading activity, with children moving through belt levels and younger students being recognised alongside adult members. That is useful practical evidence that the junior side is active, and it helps the page read as a real children’s pathway rather than an adult club with a token kids session.",
      "The wider Bushido programme also brings an international link through exchanges, courses, and visits abroad. For parents, the useful local message is that this is a structured Gibraltar junior Jiu-Jitsu route with proper gradings, club identity, and a more traditional martial-arts atmosphere.",
    ],
  },
  {
    slug: "possabilities",
    name: "PossAbilities",
    category: "youth-groups",
    logoUrl: "/clubs/possabilities.png",
    ageRange: "Primary age through teens",
    price: "From £10 / session",
    summary:
      "Inclusive after-school activities including cooking, music, and creative sessions in a supportive setting for children who need a gentler pace or extra support.",
    schedule:
      "Weekly after-school sessions, with activities varying by age group and term.",
    location: "Gibraltar",
    sourceName: "PossAbilities",
    sourceUrl: "https://possabilities-gib.com/",
    aboutParagraphs: [
      "PossAbilities describes itself as a Gibraltar charity supporting children, young people, and families around Special Educational Needs and Disabilities. On its website, it says its services include early intervention support, pre and post diagnostic family support, seminars, workshops, after-school clubs, training, and recreational provision. That gives this page a much clearer SEND-support identity than a generic youth-group page.",
      "That is what makes it feel different from a standard after-school class. The public site points not just to children’s activities, but also to broader family support, including the Morning Brew breakfast club for families and bespoke childcare training for children with SEND. So the local value here is not just activities, but a more supportive setup around the family too.",
      "For parents, the practical appeal is the more inclusive and flexible environment. The site also highlights children’s activities such as after-school provision and kids' summer camp, so this looks like a gentler, more supportive option for families who need something beyond the usual one-size-fits-all club model.",
    ],
    galleryImages: [
      {
        src: "/clubs/possabilities-1.jpg",
        alt: "PossAbilities Gibraltar activity session",
      },
      {
        src: "/clubs/possabilities-2.jpg",
        alt: "Children taking part in a PossAbilities Gibraltar activity",
      },
      {
        src: "/clubs/possabilities-3.jpg",
        alt: "PossAbilities Gibraltar children's group activity",
      },
      {
        src: "/events/possabilities-summer-camp-2026.png",
        alt: "PossAbilities Summer Camp poster",
      },
    ],
  },
  {
    slug: "gibraltar-hockey",
    name: "Hockey",
    category: "health-fitness",
    logoUrl: "/clubs/gibraltar-hockey.avif",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Hockey coaching for young players who want a proper team sport with stick skills, match play, and regular training.",
    schedule:
      "Weekly training and age-grade sessions through the season.",
    location: "Bayside Sports Complex, Gibraltar",
    sourceName: "Gibraltar Hockey Association",
    sourceUrl: "http://www.gibraltarhockey.gi",
    aboutParagraphs: [
      "Gibraltar Hockey sits under a proper long-running association rather than a loose social club, with the sport’s local structure based around the national association and its member clubs. That gives it a more established feel than some of the smaller sports listings.",
      "The association’s own site points to a strong junior base, and one of its club pages, Eagles HC, describes a youth hockey academy for boys and girls aged 6 to 14. So this reads as a genuine pathway into the sport for school-age children rather than something aimed mainly at adults.",
      "The appeal is the mix of teamwork, technical skill, and fast game play. Hockey can suit children who want a proper team sport but fancy something outside the usual football orbit, with stick skills and movement patterns that feel different from the more common options on the Rock.",
    ],
  },
  {
    slug: "gibraltar-army-cadets",
    name: "Army Cadets",
    category: "youth-groups",
    logoUrl: "/clubs/army-cadets.jpg",
    ageRange: "Ages 12-17",
    price: "Free",
    summary:
      "Cadet training with adventure, teamwork, fieldcraft, first aid, and leadership for teens who want structure and challenge.",
    schedule:
      "Regular evening sessions, parades, camps, and training events through the year.",
    location: "Devil's Tower Camp, Gibraltar",
    sourceName: "Gibraltar Army Cadets",
    sourceUrl: "https://www.facebook.com/RGACF2009/",
    aboutParagraphs: [
      "Army Cadets is a structured youth organisation for secondary-school-age young people who want something more disciplined and team-based than a standard after-school club. That makes this page much more specific than a broad youth-group listing: it sits between youth club and training programme, with a clear emphasis on routine, responsibility, and challenge.",
      "Public coverage of Gibraltar Army Cadets shows the sort of activity you would expect from a cadet setup: drill, fieldcraft, navigation, camps, exercises, and wider leadership development. Material around the Gibraltar contingent also shows cadets taking part in joint exercises and adventure-style activities rather than simply meeting indoors once a week.",
      "For parents, this makes most sense for a teen who likes structure, teamwork, and practical challenge. It is less about one hobby skill and more about confidence, resilience, and learning to operate as part of a unit, which is what gives the page its strongest local identity.",
    ],
  },
  {
    slug: "tai-chi-chen-style-gibraltar",
    name: "Tai Chi Chen Style Gibraltar",
    category: "health-fitness",
    logoUrl: "/clubs/taijichen.jpg",
    ageRange: "Mixed ages",
    summary:
      "Chen-style Tai Chi classes focused on balance, posture, strength, breathing, and calmer movement.",
    schedule:
      "Classes run across the week, with beginner-friendly sessions and daytime and evening options.",
    location: "CC Centre, Line Wall Road, Gibraltar",
    sourceName: "Tai Chi Gibraltar",
    sourceUrl: "https://www.facebook.com/TaiChi.Gibraltar/",
    aboutParagraphs: [
      "Tai Chi Chen Style Gibraltar centres on traditional Chen-style Tai Chi, with classes at the CC Centre on Line Wall Road. Public listings describe it as suitable for beginners through to more experienced students, with a focus on balance, posture, controlled movement, breathing, and calm.",
      "What makes this one different from a typical fitness class is the slower, more deliberate style of movement. Local listings describe Tai Chi here as a way to improve mobility, body awareness, and wellbeing at a pace that feels accessible rather than high-pressure, which may suit children or teens who prefer something calmer than competitive sport.",
      "There also seems to be a genuine local rhythm to it rather than one occasional class. Public listings show daytime and evening sessions through the week, beginner groups, and community involvement in wider wellbeing activities in Gibraltar, which gives it a more established feel than a one-off wellness trend.",
    ],
  },
  {
    slug: "st-john-ambulance-cadets",
    name: "St John Ambulance Cadets",
    category: "youth-groups",
    logoUrl: "/clubs/st-john.jpg",
    ageRange: "Ages 8-17",
    price: "Free",
    summary:
      "Cadet sessions built around first aid, life skills, volunteering, teamwork, and confidence for children and teens who like purpose-led activities.",
    schedule:
      "Weekly cadet meetings and training, plus public-event volunteering opportunities.",
    location: "St John House, Queensway, Gibraltar",
    sourceName: "St John Gibraltar",
    sourceUrl: "https://stjohn.gi/get-involved/",
    aboutParagraphs: [
      "St John Ambulance Cadets is the youth section of St John Gibraltar for older children and teens, and St John's own Get Involved page says cadets get first aid training alongside a wide choice of other activities. That gives this page a clearer identity than a generic youth-group listing: it is specifically about cadets, practical skills, and first-aid learning in Gibraltar.",
      "What makes it stand out is that it sits inside a real working first-aid organisation rather than a themed club. St John Gibraltar provides event first aid, training courses, ambulances, and community support locally, so the cadet programme has a stronger connection to real-life volunteering and useful life-saving skills than most ordinary after-school activities.",
      "For parents, the practical appeal is the mix of teamwork, confidence-building, and training that can carry on into later volunteering. St John Gibraltar also runs youth sections from Badgers upwards, so there is a clearer pathway here than with a one-off youth club that does not lead anywhere.",
    ],
  },
  {
    slug: "gibraltar-darts",
    name: "Darts",
    category: "health-fitness",
    logoUrl: "/clubs/gibraltar-darts.png",
    ageRange: "Children and teens",
    price: "From £10 / month",
    summary:
      "Junior-friendly darts with league nights, ranking events, and a steady skills-based route into competition.",
    schedule:
      "Regular league, ranking, and youth events through the season.",
    location: "Gibraltar",
    sourceName: "Gibraltar Darts Association",
    sourceUrl: "http://www.gibraltardarts.com/",
    aboutParagraphs: [
      "Gibraltar Darts has a proper junior structure rather than just an adult league with the occasional younger player dropped in. The association site includes dedicated Youth League and Youth Rankings sections, which gives this page a clearer competitive pathway than the old generic sports wording did.",
      "Those youth ranking events matter because the association explains that they feed into Gibraltar youth selection, with top junior players qualifying to represent Gibraltar at major youth darts competitions. So this is not just a casual pub-game listing dressed up as a club page; it is a genuine youth route inside the local darts setup.",
      "For families, the attraction is the calmer side of competition. Darts can suit children who like repetition, precision, matchplay, and a more measured environment than a louder contact team sport, while still giving them league nights, ranking events, and something clear to work towards over time.",
    ],
  },
  {
    slug: "gibraltar-squash",
    name: "Squash",
    category: "health-fitness",
    logoUrl: "/clubs/squash.avif",
    ageRange: "Children and teens",
    price: "From £2.50 / session",
    summary:
      "Squash coaching for kids who want a fast, technical racket sport with regular group training.",
    schedule:
      "Twice-weekly group coaching plus extra sessions by arrangement.",
    location: "Europa Sports Park, Gibraltar",
    sourceName: "Gibraltar Squash Association",
    sourceUrl: "https://www.gibraltarsquash.com/",
    aboutParagraphs: [
      "Gibraltar Squash Association runs from Europa Sports Park, and the association’s own site makes a point of the courts and facilities there. That is useful practical detail for parents because it places the sport in a proper dedicated base rather than a vague 'somewhere in Gibraltar' listing.",
      "The coaching structure is also more specific than many of the generic sports pages. Group coaching runs twice a week, generally through the year, and the association says those sessions are free of charge. There are also one-to-one sessions and occasional clinics with visiting squash professionals for children who want to build on the basics.",
      "For search and for parents, the useful takeaway is that this page is not just 'squash exists'. It is a Gibraltar junior squash route at Europa Sports Park with regular coaching, a club structure behind it, and leagues and tournaments for children who want to progress.",
    ],
  },
  {
    slug: "gibraltar-pistol-association",
    name: "Pistol Association",
    category: "health-fitness",
    logoUrl: "/clubs/pistol.png",
    ageRange: "Older children and teens",
    price: "From £20 / year",
    summary:
      "Target shooting sessions in a structured club environment focused on safety, discipline, and technique.",
    schedule:
      "Regular weekly club sessions and discipline-specific practice.",
    location: "Lathbury Barracks, Gibraltar",
    sourceName: "Gibraltar Pistol Association",
    sourceUrl:
      "mailto:gibraltarpistol@outlook.com?subject=Inquiry%20via%20Kids%20on%20the%20Rock",
    aboutParagraphs: [
      "The Gibraltar Pistol Association runs junior sessions for older school-age children and teens, with current public information listing classes for Years 6 and up on Tuesdays and Thursdays. That gives this page much firmer local detail than a sport page that only talks about adult competition in general terms.",
      "The public description puts the emphasis on safety, discipline, and skill development, which is exactly what most parents will want to know first. Local reporting on the Lathbury Barracks ranges also describes purpose-built indoor and outdoor facilities, so this reads as a dedicated Gibraltar range setup rather than a makeshift arrangement.",
      "There is a proper sporting pathway behind the junior side too. Public coverage shows the association running Opens in Gibraltar and sending teams to European IPSC events, with youth development described as part of the sport's local growth. So the local value here is structured junior target shooting with regular sessions and an established competitive scene behind it.",
    ],
  },
  {
    slug: "cancer-relief-youth-wellbeing",
    name: "Cancer Relief",
    category: "youth-groups",
    logoUrl: "/clubs/cancer-relief.png",
    ageRange: "Teens and families",
    price: "Free",
    summary:
      "Wellbeing and support services for young people and families affected by cancer, with a more supportive and therapeutic focus than a standard club.",
    schedule:
      "Support, counselling, and wellbeing sessions are offered throughout the week.",
    location: "South Barrack Road, Gibraltar",
    sourceName: "Cancer Relief volunteering form",
    sourceUrl: "https://cancerrelief.gi/get-involved/volunteer/",
    aboutParagraphs: [
      "Cancer Relief Gibraltar supports people and families affected by cancer through counselling, wellbeing services, practical help, and community support. It is a long-standing local charity, so for many families this will feel more like a trusted support organisation than a typical activity listing.",
      "Older teens who want to help out are welcome to become volunteers. The charity asks anyone interested in giving their time to fill in the volunteer form on its website, and the team then gets back in touch about getting involved.",
      "Families can also support Cancer Relief by becoming a member for £20 a year, which gives another simple way to stay connected to the charity and back its work locally.",
    ],
  },
  {
    slug: "theatre-makers",
    name: "Theatre Makers",
    category: "arts-creative",
    logoUrl: "/clubs/theatre-makers.jpg",
    ageRange: "Teens and young adults",
    price: "From £5 / session",
    summary:
      "A performance-led theatre collective for older young people interested in acting, rehearsal, and making proper staged work.",
    schedule:
      "Project-based rehearsals and performance periods across the year.",
    location: "Ince's Hall and other Gibraltar venues",
    sourceName: "Theatre Makers Gib",
    sourceUrl: "https://www.facebook.com/TheatreMakersGib/",
    aboutParagraphs: [
      "Theatre Makers is a Gibraltar drama group for older young people and young adults, with public listings from Gibraltar Cultural Services placing it in the Drama & Performing Arts section and giving Jackie Villa as the contact. That helps confirm this is an active local theatre organisation rather than just a one-off production name.",
      "Recent Gibraltar International Drama Festival programmes show Theatre Makers putting on full staged pieces at Ince's Hall, including 'BULL', 'Zero For The Young Dudes!', and 'Goodbye, Charles'. So this looks like a proper rehearsal-and-performance setup for young people who want to work towards real productions rather than do only games or weekly drama exercises.",
      "It also has some serious local momentum behind it. Gibraltar Cultural Services announced that Theatre Makers' production of 'BULL' was pre-selected for the UK National Drama Festival after scoring highly at the Gibraltar festival and winning several awards. For parents, that makes this feel like a strong fit for teens who are genuinely interested in acting, theatre-making, and the process of building work for the stage.",
    ],
    galleryImages: [
      {
        src: "/clubs/theatre-makers-1.png",
        alt: "Theatre Makers production image from Gibraltar Cultural Services coverage",
      },
      {
        src: "/clubs/theatre-makers-2.png",
        alt: "Theatre Makers and local artists image from Gibraltar Cultural Services coverage",
      },
      {
        src: "/clubs/theatre-makers-3.jpg",
        alt: "Gibraltar International Drama Festival image featuring Theatre Makers coverage",
      },
    ],
  },
  {
    slug: "gibraltar-rugby",
    name: "Rugby",
    category: "health-fitness",
    logoUrl: "/clubs/rugby.png",
    ageRange: "Children and teens",
    price: "From £125 / year",
    summary:
      "Age-grade rugby with club pathways, training, and team play for children who like a physical team sport.",
    schedule:
      "Regular training through the week, with match play and club sessions across the season.",
    location: "Europa Sports Park, Gibraltar",
    sourceName: "Gibraltar Rugby Football Union",
    sourceUrl: "https://www.gibraltarrugby.gi/",
    aboutParagraphs: [
      "Gibraltar Rugby sits inside a proper union structure rather than a loose kids' sports programme. The Gibraltar Rugby Football Union is the governing body for the sport locally, and its official site says there are four federated rugby clubs in Gibraltar: Ibex Buccaneers, Rock Scorpions, Europa Stormers, and Straits Sharks.",
      "For younger players, the strongest thing is that there is a visible pathway through the game. GRFU’s own updates say the age-grade section has more than 200 players attending regularly, and the union talks openly about developing rugby from age 6 through to adulthood under its 'Gibraltar Way' coaching approach.",
      "Training and match play are centred around Europa Sports Park, and the wider GRFU setup links youth rugby to clubs, representative pathways, and the sport’s ongoing development on the Rock. It comes across as a genuinely established team-sport environment, with a stronger sense of club identity and progression than a one-off weekly activity.",
    ],
    galleryImages: [
      {
        src: "/clubs/rugby-1.jpg",
        alt: "Gibraltar age-grade rugby tournament action",
      },
      {
        src: "/clubs/rugby-2.jpg",
        alt: "Junior rugby players at a Gibraltar Rugby Football Union event",
      },
      {
        src: "/clubs/rugby-3.jpg",
        alt: "Youth rugby match image from Gibraltar Rugby Football Union coverage",
      },
    ],
  },
  {
    slug: "angry-chill-brazilian-jiu-jitsu",
    name: "Angry Chill Brazilian Jiu-Jitsu",
    category: "health-fitness",
    logoUrl: "/clubs/angry-chill.webp",
    ageRange: "Ages 5+",
    price: "From £8 / class",
    summary:
      "Brazilian Jiu-Jitsu classes for young grapplers who want technique, discipline, confidence, and regular competition-style training.",
    schedule:
      "Regular weekly sessions for children and teens.",
    location: "Jumper's Building, Witham's Road, Gibraltar",
    sourceName: "Angry Chill Brazilian Jiu-Jitsu",
    sourceUrl: "https://angrychillbjj.com/",
    aboutParagraphs: [
      "Angry Chill is set up as a family-friendly BJJ club with a modern dojo, offering both kids Gi and No Gi training rather than treating children’s classes as an afterthought on an adult timetable.",
      "The club says its age-appropriate children’s classes start from age 5 and are designed for all levels, from complete beginners to young competitors who want to sharpen up over time. The coaching side leans into fundamentals, confidence, and steady progression rather than just random hard sessions.",
      "For families, the practical bits are helpful too: the club offers a free first class, lists kids pricing clearly at £8 per class or £45 per month, and is based at Jumper’s Building on Witham’s Road. It feels like a proper year-round martial-arts home rather than a short course.",
    ],
  },
  {
    slug: "the-nautilus-project",
    name: "The Nautilus Project",
    category: "education-languages",
    logoUrl: "/clubs/nautilus-project.jpg",
    ageRange: "School-age children and teens",
    price: "Free",
    summary:
      "Marine science and environmental learning through hands-on workshops, beach cleans, citizen science, and sea-life education.",
    schedule:
      "School projects, group sessions, and learning activities run across the year.",
    location: "The Boathouse, Bayside Sports Complex, Gibraltar",
    sourceName: "The Nautilus Project",
    sourceUrl: "https://thenautilusproject.co/",
    aboutParagraphs: [
      "The Nautilus Project is one of the most distinctive learning-based entries on the site, built around Gibraltar’s marine environment rather than a classroom subject or a standard club format. The project says its aim is to raise awareness of marine environmental issues through school learning, private groups, and hands-on experiences in and around local waters.",
      "The school programme is especially strong. Nautilus offers classroom sessions, field trips, and survey sessions for academic years 2 to 13, with topics including marine invertebrates, marine vertebrates, turtles of the Mediterranean, plastic pollution, climate change, and sharks versus dolphins. The Coast Crawler field trip is one of the clearest examples of what they do: children explore the coastline and learn interactively about local marine life and habitats.",
      "There are also more adventurous routes in, including snorkelling trips and the project’s Catch Learn Release approach led by marine biologist Lewis Stagnetto. The appeal is the hands-on side of it all. This is a good fit for children who are curious about nature, animals, and the sea, and who learn best when they can actually get outside and experience something rather than just hear about it.",
    ],
  },
  {
    slug: "mediterranean-rowing-club",
    name: "The Mediterranean Rowing Club",
    category: "health-fitness",
    logoUrl: "/clubs/medrowing.jpg",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Structured rowing for young athletes who want competitive and recreational training on the water.",
    schedule:
      "Regular training sessions and regatta preparation through the season.",
    location: "4 Europort Road, Gibraltar",
    sourceName: "Mediterranean Rowing Club",
    sourceUrl:
      "mailto:mrc@medrowing.com?cc=damian.muscat71@gmail.com&subject=Inquiry%20via%20Kids%20on%20the%20Rock",
    aboutParagraphs: [
      "Mediterranean Rowing Club is one of Gibraltar's long-established rowing clubs, based at 4 Europort Road and regularly linked with junior rowing locally. Public references place the club's founding in 1899, and British Rowing coverage continues to include Mediterranean among the Gibraltar clubs travelling to race in UK competition.",
      "The public listings describe a mix of competitive and recreational rowing, with structured training, youth development, and local or regional regatta racing. Current information lists weekday after-school sessions from Monday to Thursday, plus early weekend water sessions, which makes this page feel more grounded and useful than a vague 'rowing exists' entry.",
      "One of the more distinctive details here is the mention of coastal boating sessions alongside the regular rowing programme. That gives the club a slightly broader water-sport feel while still keeping the main focus on technique, regular training, and preparing crews for competition.",
    ],
  },
  {
    slug: "calpe-chess-club",
    name: "The Calpe Chess Club",
    category: "education-languages",
    logoUrl: "/clubs/calpe-chess-club.png",
    ageRange: "Children and teens",
    price: "From £5 / session",
    summary:
      "Chess for children who enjoy strategy, quiet concentration, and learning through structured club play.",
    schedule:
      "Regular club sessions and local competition opportunities through the year.",
    location: "Gibraltar",
    sourceName: "Calpe Chess Club Gibraltar",
    sourceUrl:
      "https://www.facebook.com/p/Calpe-Chess-Club-Gibraltar-100057263478146/",
    aboutParagraphs: [
      "Calpe Chess Club is the clearest chess route on the site for children who enjoy strategy, puzzles, and longer-burn skill-building rather than a physical sport. The public Gibraltar listings describe Calpe as the governing body of chess locally, which gives this page a more authoritative local feel than a casual hobby meet-up.",
      "That matters for SEO too, because this page is really about Gibraltar children’s chess rather than generic chess benefits. The useful local angle is that Calpe appears in public after-school listings as the main organised chess route for school-age children and teens on the Rock.",
      "For families, the attraction is the challenge-with-calm balance. It suits children who enjoy games, concentration, and competition but do not necessarily want noise, contact sport, or a very performative class environment. That is a clearer parent-facing proposition than the old version, which was a bit abstract.",
    ],
  },
  {
    slug: "math-lessons",
    name: "Math lessons",
    category: "education-languages",
    logoUrl: "/clubs/maths.png",
    ageRange: "Primary age through teens",
    price: "From £60 / month",
    summary:
      "Extra maths support for children who need confidence, homework help, or a steadier run-up to tests and exams.",
    schedule:
      "Usually arranged as weekly private lessons.",
    location: "Gibraltar",
    sourceName: "Local maths tutoring",
    sourceUrl:
      "https://www.findtutors.co.uk/tutors-gibraltar/private-person-tutoring-gibraltar-maths-physics-spanish-research-6666931",
    aboutParagraphs: [
      "This listing is for private maths tutoring in Gibraltar rather than a club in the usual sense, and that distinction matters. It is best read as one-to-one academic support for children who need extra help with homework, confidence, or understanding classwork rather than a group enrichment activity.",
      "The published setup is weekly private lessons for primary-age children through to teens. The tutor listing positions the support around maths help and individual explanation, which makes this page more useful for searches around maths tutoring in Gibraltar than the old copy, which leaned too hard on general feelings and not enough on what is actually being offered.",
      "For parents, the practical benefit is the extra breathing room. If a child freezes in class, needs things broken down more slowly, or just responds better to individual attention, weekly private maths lessons can be a much more realistic fit than expecting them to push through school maths unsupported.",
    ],
  },
  {
    slug: "the-mindspace-project",
    name: "The Mindspace Project",
    category: "education-languages",
    logoUrl: "/clubs/mindspace.avif",
    ageRange: "School-age children",
    price: "From £10 / session",
    summary:
      "A gentler educational programme built around local culture, curiosity, outings, and helping children connect with Gibraltar in a different way.",
    schedule:
      "Programme-based sessions and holiday activities run at different points in the year.",
    location: "Gibraltar",
    sourceName: "The Mindspace Project",
    sourceUrl: "https://www.themindspaceproject.org/",
    aboutParagraphs: [
      "The Mindspace Project is better understood as a children’s wellbeing and confidence programme than a standard after-school class. Its own site talks about lifelong mental wellbeing, and the public material links the project to both the Mindspace Hub and Cafe Mindspace, which gives it a broader community-programme feel than a single weekly club.",
      "For children, one of the clearest strands is `Fitness with a Difference`, combining movement sessions with emotional regulation, resilience, growth mindset, and confidence building. The published age split for 4 to 7 year olds and 8 to 11 year olds is the most concrete practical detail on the page and helps this read as a real ongoing children’s offer rather than a vague wellbeing concept.",
      "There is also a wider progression route around the project for older teens, including youth volunteering, trainee barista roles, and facilitator opportunities. So the local value here is that Mindspace is not just a class; it is a Gibraltar wellbeing hub with children’s sessions, holiday activities, and wider youth involvement around it.",
    ],
  },
  {
    slug: "calpe-rowing",
    name: "Calpe Rowing",
    category: "health-fitness",
    logoUrl: "/clubs/calpe-rowing.jpg",
    ageRange: "Children and teens",
    price: "Free",
    summary:
      "Rowing training with a strong junior tradition, ideal for children who like structured sport and time on the water.",
    schedule:
      "Regular rowing sessions and regatta preparation through the season.",
    location: "6 Europort Road, Gibraltar",
    sourceName: "Calpe Rowing Club",
    sourceUrl:
      "mailto:lesgrech@gibtelecom.net?subject=Inquiry%20via%20Kids%20on%20the%20Rock",
    aboutParagraphs: [
      "Calpe Rowing is one of Gibraltar’s longest-established sports clubs, with a history going back to the nineteenth century and a base at 6 Europort Road. That immediately gives it a different feel from a newer after-school activity: this reads as a proper local rowing club with roots, traditions, and a long competitive history.",
      "The club is also closely tied to junior development. Public coverage highlights strong junior results and describes Calpe as one of the Gibraltar rowing clubs competing regularly at British championships, which makes the page feel more like a serious youth pathway than a simple once-a-week taster sport.",
      "For parents, rowing can be a strong fit for children who like discipline, endurance, teamwork, and being outdoors without wanting a conventional ball sport. The practical local takeaway is that Calpe offers structured junior rowing in Gibraltar with regular training and regatta preparation through the season.",
    ],
  },
  {
    slug: "young-leaders-programme",
    name: "Young Leaders Programme",
    category: "youth-groups",
    logoUrl:
      "https://static.wixstatic.com/media/8db90e_f803667e046d49cd8d4d3e587470f796~mv2.png/v1/crop/x_0,y_41,w_1058,h_298/fill/w_162,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/youth_yellow_edited.png",
    ageRange: "Ages 14-17",
    summary:
      "An 8-week leadership course followed by volunteering in one of Gibraltar's youth clubs.",
    schedule:
      "Programme-based rather than drop-in; applications open through the Youth Service.",
    location: "Via Gibraltar Youth Service",
    sourceName: "Gibraltar Youth Service",
    sourceUrl: "https://www.youth.gi/youngleaders",
    aboutParagraphs: [
      "The Young Leaders Programme is run by the Gibraltar Youth Service for ages 14 to 17, including young people who are completely new to youth clubs. That makes it a useful page for searches around teen leadership and volunteering in Gibraltar, not just for families already inside the youth-club system.",
      "It begins with an 8-week leadership course covering communication, safeguarding, conflict resolution, and related practical skills. After that, participants volunteer in one of Gibraltar’s youth clubs one evening a week for two months, with support from a licensed Youth Worker.",
      "The strongest practical detail is that it leads somewhere concrete: hands-on youth-club experience, recorded volunteer hours, and a certificate of achievement. For teens who want responsibility, confidence, and a first step into volunteering or leadership, this is more specific and useful than an ordinary drop-in youth session.",
    ],
  },
  {
    slug: "alameda-gardening-club",
    name: "Alameda Gardening Club",
    category: "education-languages",
    secondaryCategories: ["arts-creative"],
    ageRange: "School Years 3-4",
    price: "From £30 / term",
    summary:
      "A seasonal gardening club where children learn about plants, nature, and the environment in the Alameda Gardens.",
    schedule:
      "Tuesdays and Thursdays from October to mid-June; nine sessions per term",
    location: "Gibraltar Botanic Gardens (The Alameda)",
    sourceName: "Gibraltar Botanic Gardens",
    sourceUrl: "https://www.gardens.gi/our-work/education",
    aboutParagraphs: [
      "Alameda Gardening Club gives children a practical way to learn about plants, gardening, and Gibraltar’s natural environment in the setting of the Alameda Gardens.",
      "The club is listed for School Years 3 and 4, with sessions on Tuesdays and Thursdays. It runs seasonally from October to mid-June, split into three terms of nine sessions each.",
      "The listed price starts at £30 per term. Families should check the organiser page for current places and the exact session time before attending.",
    ],
  },
  {
    slug: "gibraltar-table-tennis",
    name: "Table Tennis",
    category: "health-fitness",
    ageRange: "School Years 1-13",
    price: "From £45 / year",
    summary:
      "Junior table tennis for beginners and developing players looking for a year-round indoor sport in Gibraltar.",
    schedule: "Tuesdays and Wednesdays",
    location: "Gibraltar",
    sourceName: "Gibraltar Table Tennis Association",
    sourceUrl: "https://gtta.gi/",
    aboutParagraphs: [
      "Gibraltar’s organised table-tennis route is open across the school-age range, making it an accessible indoor option for both beginners and children who want to develop their game.",
      "The current public listing shows sessions on Tuesdays and Wednesdays for School Years 1 through 13, with membership from £45 per year.",
      "The public listing does not give a venue or exact session times, so families should check directly before attending.",
    ],
  },
];

export function getAllClubSlugs() {
  return localClubs.map((club) => club.slug);
}

export function getClubBySlug(slug: string) {
  return localClubs.find((club) => club.slug === slug);
}

export function getClubMonogram(name: string) {
  const cleaned = name
    .replace(/&/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);

  if (words.length === 0) return "CL";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}
