import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  Banknote,
  ChevronRight,
  Clock3,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { ClubGallery } from "@/components/club-gallery";
import { Button } from "@/components/ui/button";
import {
  getAllClubSlugs,
  getClubBySlug,
  getClubMonogram,
  type ClubItem,
} from "@/lib/clubs";
import { getUpcomingEventsForClub } from "@/lib/events";

interface ClubPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllClubSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);

  if (!club) {
    return {
      title: "Club not found | Kids on the Rock",
    };
  }

  return {
    title: `${club.name} | ${getClubSeoTitle(club)} | Kids on the Rock`,
    description: getClubSeoDescription(club),
    alternates: {
      canonical: `/clubs-classes/${club.slug}`,
    },
    openGraph: {
      title: `${club.name} | ${getClubSeoTitle(club)} | Kids on the Rock`,
      description: getClubSeoDescription(club),
      url: `https://kidsontherock.gi/clubs-classes/${club.slug}`,
      type: "article",
      images: club.logoUrl
        ? [
            {
              url: club.logoUrl,
              alt: `${club.name} logo`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ClubDetailPage({ params }: ClubPageProps) {
  const { slug } = await params;
  const club = getClubBySlug(slug);

  if (!club) {
    notFound();
  }

  const sourceIsEmail = club.sourceUrl.startsWith("mailto:");
  const aboutParagraphs = club.aboutParagraphs ?? [club.summary];
  const upcomingEvents = getUpcomingEventsForClub(club.slug).slice(0, 3);
  const relatedClubs = getRelatedClubs(club);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kids on the Rock",
        item: "https://kidsontherock.gi/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Clubs & Classes",
        item: "https://kidsontherock.gi/clubs-classes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: club.name,
        item: `https://kidsontherock.gi/clubs-classes/${club.slug}`,
      },
    ],
  };
  const clubSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: club.name,
    description: club.summary,
    url: `https://kidsontherock.gi/clubs-classes/${club.slug}`,
    image: club.logoUrl ? [club.logoUrl] : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gibraltar",
      streetAddress: club.location,
    },
  };

  return (
    <div className="min-h-screen bg-beige text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clubSchema),
        }}
      />
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <Link
          href="/clubs-classes"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-salmon"
        >
          <ArrowLeft className="size-4" strokeWidth={1.8} />
          Back to clubs & classes
        </Link>

        <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px] md:items-start">
            <div className="max-w-[38rem]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                THINGS TO DO
              </p>
              <h1 className="mt-4 max-w-[34rem] text-3xl font-bold leading-tight md:text-4xl">
                {club.name}
              </h1>
              <p className="mt-5 max-w-[30rem] font-sans text-lg leading-8 text-navy/72">
                {club.summary}
              </p>
              <p className="mt-3 font-sans text-sm leading-7 text-navy/60">
                Want to edit this club/class page?{" "}
                <a
                  href="mailto:hellokidsontherock@gmail.com?subject=Edit%20club%2Fclass%20page"
                  className="font-medium text-salmon underline decoration-salmon/40 underline-offset-4 transition-colors hover:text-navy"
                >
                  Email me.
                </a>
              </p>
            </div>

            <div className="flex h-full flex-col justify-end px-6 pt-1 pb-0">
              <div className="flex flex-col items-center gap-6">
                {club.logoUrl ? (
                  <div className="relative h-28 w-full shrink-0">
                    <Image
                      src={club.logoUrl}
                      alt={`${club.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="inline-flex h-24 min-w-24 shrink-0 items-center justify-center rounded-[1.5rem] border border-navy/10 bg-beige px-4 text-center">
                    <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-navy/75">
                      {getClubMonogram(club.name)}
                    </span>
                  </div>
                )}

                <a
                  href={club.sourceUrl}
                  {...(sourceIsEmail
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex"
                >
                  <Button variant="outline" size="sm">
                    {sourceIsEmail ? "Email organiser" : "Open page"}
                    <ExternalLink className="size-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-navy/10 pt-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
              <div className="rounded-[1.75rem] border border-navy/8 bg-white p-6 shadow-[0_12px_34px_rgba(45,56,77,0.06)] md:p-7">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
                    About
                  </p>
                  <div className="mt-3 space-y-4">
                    {aboutParagraphs.map((paragraph) => (
                      <AboutBlock key={paragraph} content={paragraph} />
                    ))}
                  </div>
                </div>

                {club.galleryImages?.length ? (
                  <ClubGallery images={club.galleryImages} />
                ) : null}

                {upcomingEvents.length ? (
                  <ClubUpcoming events={upcomingEvents} />
                ) : null}
              </div>

              <div className="rounded-[1.75rem] border border-navy/8 bg-white p-6 shadow-[0_12px_34px_rgba(45,56,77,0.06)] md:p-7">
                <div className="space-y-5">
                  <DetailRow
                    icon={<Users className="size-4 text-salmon" />}
                    label="Ages"
                    value={club.ageRange}
                  />
                  <DetailRow
                    icon={<Clock3 className="size-4 text-salmon" />}
                    label="When"
                    value={club.schedule}
                  />
                  <DetailRow
                    icon={<MapPin className="size-4 text-salmon" />}
                    label="Where"
                    value={club.location}
                  />
                  {club.price ? (
                    <DetailRow
                      icon={<Banknote className="size-4 text-salmon" />}
                      label="Price"
                      value={club.price}
                    />
                  ) : null}
                  <DetailRow
                    icon={<ExternalLink className="size-4 text-salmon" />}
                    label="Source"
                    value={club.sourceName}
                  />
                </div>

                <div className="mt-6">
                  <a
                    href={club.sourceUrl}
                    {...(sourceIsEmail
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex"
                  >
                    <Button variant="outline" size="sm">
                      {sourceIsEmail ? "Email organiser" : "Open page"}
                      <ExternalLink className="size-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {relatedClubs.length ? (
              <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
                <ClubRelated club={club} clubs={relatedClubs} />
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function getClubSeoTitle(club: NonNullable<ReturnType<typeof getClubBySlug>>) {
  const customTitles: Record<string, string> = {
    "gibraltar-shotokan-karate-club": "Karate Lessons in Gibraltar",
    "stagecoach-gibraltar": "Dance, Singing and Acting Classes in Gibraltar",
    "gibraltar-fa-fundamentals-development-school":
      "Kids Football in Gibraltar",
    "parent-and-child-society-pacs": "Baby and Toddler Groups in Gibraltar",
    "titan-academy-gibraltar": "Kids Jiu-Jitsu in Gibraltar",
    "gibraltar-artists-studio": "Kids Art Classes in Gibraltar",
    "gibraltar-academy-of-dance": "Dance Classes in Gibraltar",
    "gibraltar-taekwondo": "Taekwondo Classes in Gibraltar",
    "gibraltar-rhythmic-gymnastics": "Rhythmic Gymnastics in Gibraltar",
    "girls-indoor-football": "Girls Football in Gibraltar",
    "gibraltar-badminton": "Badminton for Kids in Gibraltar",
    "gibraltar-darts": "Junior Darts in Gibraltar",
    "gibraltar-squash": "Squash for Kids in Gibraltar",
    "calpe-chess-club": "Kids Chess in Gibraltar",
    "math-lessons": "Maths Tutoring in Gibraltar",
    "the-mindspace-project": "Kids Wellbeing Activities in Gibraltar",
    "young-leaders-programme": "Teen Leadership Programme in Gibraltar",
    "art-in-movement-aim": "Dance Classes for Kids and Mums in Gibraltar",
    "calpe-rowing": "Junior Rowing in Gibraltar",
    "mediterranean-rowing-club": "Rowing for Kids in Gibraltar",
    "gibraltar-dance-sport-federation":
      "Ballroom and Latin Dance for Kids in Gibraltar",
    "bushido-jiu-jitsu": "Kids Jiu-Jitsu in Gibraltar",
    "gibraltar-pistol-association":
      "Junior Target Shooting in Gibraltar",
    "st-john-ambulance-cadets": "First Aid and Cadets in Gibraltar",
    "gibraltar-army-cadets": "Army Cadets in Gibraltar",
    "gibraltar-youth-service-clubs": "Youth Clubs in Gibraltar",
    "john-mackintosh-hall-library-storytelling":
      "Storytelling for Toddlers in Gibraltar",
    "possabilities": "SEND-Friendly Kids Activities in Gibraltar",
  };

  const customTitle = customTitles[club.slug];
  if (customTitle) {
    return customTitle;
  }

  const text = `${club.name} ${club.summary}`.toLowerCase();

  if (text.includes("karate")) return "Karate Lessons in Gibraltar";
  if (text.includes("jiu-jitsu") || text.includes("bjj")) {
    return "Kids Jiu-Jitsu in Gibraltar";
  }
  if (text.includes("football")) return "Kids Football in Gibraltar";
  if (text.includes("dance")) return "Dance Classes in Gibraltar";
  if (
    text.includes("art") ||
    text.includes("acting") ||
    text.includes("ceramic") ||
    text.includes("story")
  ) {
    return "Kids Arts Classes in Gibraltar";
  }
  if (club.category === "babies-tots") return "Baby & Toddler Groups in Gibraltar";
  if (club.category === "youth-groups") return "Youth Groups in Gibraltar";
  if (club.category === "education-languages") {
    return "Kids Classes and Skills in Gibraltar";
  }

  return "Kids Clubs and Classes in Gibraltar";
}

function getClubSeoDescription(
  club: NonNullable<ReturnType<typeof getClubBySlug>>
) {
  const customDescriptions: Record<string, string> = {
    "gibraltar-shotokan-karate-club":
      "Find kids karate lessons in Gibraltar with Shotokan Karate Club, including class times, location, ages, and how to get in touch.",
    "stagecoach-gibraltar":
      "Looking for dance, singing, and acting classes in Gibraltar? Find Stagecoach Gibraltar, including ages, timings, location, and source details.",
    "gibraltar-fa-fundamentals-development-school":
      "Find kids football in Gibraltar with GFA Youth Football, including age groups, training days, location, and how to contact the organiser.",
    "parent-and-child-society-pacs":
      "Find baby and toddler groups in Gibraltar with PACS, including weekday sessions, venues, age guidance, and parent-and-child class details.",
    "titan-academy-gibraltar":
      "Find kids Jiu-Jitsu in Gibraltar with Titan Academy, including class days, ages, location, and practical information for parents.",
    "gibraltar-artists-studio":
      "Looking for kids art classes in Gibraltar? Find Gibraltar Artists Studio, including age groups, class details, location, and source link.",
    "gibraltar-academy-of-dance":
      "Find dance classes in Gibraltar with Academy of Dance, including age guidance, class information, venue, and source details.",
    "gibraltar-taekwondo":
      "Find taekwondo classes in Gibraltar, including ages, schedule, venue, and how to open the organiser page.",
    "gibraltar-rhythmic-gymnastics":
      "Find rhythmic gymnastics in Gibraltar, including ages, venue, club background, and source details for families.",
    "girls-indoor-football":
      "Find girls football in Gibraltar, including age range, session time, venue, and how to get in touch.",
    "gibraltar-badminton":
      "Find kids badminton in Gibraltar, including age guidance, weekly sessions, association details, and practical information for parents.",
    "gibraltar-darts":
      "Find junior darts in Gibraltar, including youth league details, ranking events, competition pathways, and source information.",
    "gibraltar-squash":
      "Find kids squash in Gibraltar at Europa Sports Park, including coaching, age guidance, and club details for families.",
    "calpe-chess-club":
      "Find kids chess in Gibraltar with Calpe Chess Club, including age guidance, club background, and practical details for families.",
    "math-lessons":
      "Looking for maths tutoring in Gibraltar? Find weekly private maths support for children and teens, including ages and source details.",
    "the-mindspace-project":
      "Find kids wellbeing activities in Gibraltar with The Mindspace Project, including age groups, programme details, and family guidance.",
    "young-leaders-programme":
      "Find the Young Leaders Programme in Gibraltar for ages 14 to 17, including the 8-week course, volunteering route, and what teens gain from it.",
    "art-in-movement-aim":
      "Find dance classes in Gibraltar with Art In Movement, including zumbini, mummy-and-me, and school-age movement sessions.",
    "calpe-rowing":
      "Find junior rowing in Gibraltar with Calpe Rowing, including club background, training focus, and practical family details.",
    "mediterranean-rowing-club":
      "Find rowing for kids in Gibraltar with Mediterranean Rowing Club, including youth training, regatta preparation, and source details.",
    "gibraltar-dance-sport-federation":
      "Find ballroom and Latin dance classes for kids in Gibraltar, including teaching style, age guidance, and family-friendly details.",
    "bushido-jiu-jitsu":
      "Find kids Jiu-Jitsu in Gibraltar with Bushido, including junior gradings, class focus, and practical details for families.",
    "gibraltar-pistol-association":
      "Find junior target shooting in Gibraltar, including ages, weekly sessions, range details, and practical family guidance.",
    "st-john-ambulance-cadets":
      "Find St John Ambulance Cadets in Gibraltar, including ages, first aid training, volunteering opportunities, and family details.",
    "gibraltar-army-cadets":
      "Find Army Cadets in Gibraltar, including ages, training style, camps, leadership focus, and practical details for families.",
    "gibraltar-youth-service-clubs":
      "Find youth clubs in Gibraltar through the Youth Service, including ages, locations, session types, and family guidance.",
    "john-mackintosh-hall-library-storytelling":
      "Find toddler storytelling sessions in Gibraltar at John Mackintosh Hall Library, including timings, age guidance, and what to expect.",
    "possabilities":
      "Find SEND-friendly kids activities in Gibraltar with PossAbilities, including after-school sessions, family support, and practical details.",
  };

  const customDescription = customDescriptions[club.slug];
  if (customDescription) {
    return customDescription;
  }

  const parts = [
    club.summary,
    club.ageRange ? `Ages: ${club.ageRange}.` : "",
    club.location ? `Based in ${club.location}.` : "",
    club.schedule ? `Runs ${club.schedule}` : "",
  ].filter(Boolean);

  return parts.join(" ").trim();
}

function getRelatedClubs(club: ClubItem) {
  const relatedBySlug: Record<string, string[]> = {
    "the-showdance-company": [
      "transitions-dance-academy",
      "yalta-dance-studio",
      "stagecoach-gibraltar",
    ],
    "transitions-dance-academy": [
      "the-showdance-company",
      "yalta-dance-studio",
      "stagecoach-gibraltar",
    ],
    "yalta-dance-studio": [
      "the-showdance-company",
      "transitions-dance-academy",
      "stagecoach-gibraltar",
    ],
    "stagecoach-gibraltar": [
      "the-showdance-company",
      "transitions-dance-academy",
      "gibraltar-academy-of-dance",
    ],
    "gibraltar-academy-of-dance": [
      "stagecoach-gibraltar",
      "the-showdance-company",
      "transitions-dance-academy",
    ],
    "mediterranean-dance-school": [
      "phoenix-dance-company",
      "gibraltar-dance-sport-federation",
      "yalta-dance-studio",
    ],
    "phoenix-dance-company": [
      "mediterranean-dance-school",
      "gibraltar-dance-sport-federation",
      "the-showdance-company",
    ],
    "gibraltar-dance-sport-federation": [
      "mediterranean-dance-school",
      "phoenix-dance-company",
      "yalta-dance-studio",
    ],
    "parent-and-child-society-pacs": [
      "breastfeeding-support-group",
      "post-natal-pilates",
      "beer-fit",
    ],
    "breastfeeding-support-group": [
      "parent-and-child-society-pacs",
      "post-natal-pilates",
      "beer-fit",
    ],
    "post-natal-pilates": [
      "breastfeeding-support-group",
      "beer-fit",
      "parent-and-child-society-pacs",
    ],
    "beer-fit": [
      "post-natal-pilates",
      "breastfeeding-support-group",
      "parent-and-child-society-pacs",
    ],
    "scouts-gibraltar": [
      "girl-guides-gibraltar",
      "rainbows-gibraltar",
      "gibraltar-youth-service-clubs",
    ],
    "girl-guides-gibraltar": [
      "rainbows-gibraltar",
      "scouts-gibraltar",
      "gibraltar-youth-service-clubs",
    ],
    "rainbows-gibraltar": [
      "girl-guides-gibraltar",
      "scouts-gibraltar",
      "gibraltar-youth-service-clubs",
    ],
    "gibraltar-youth-service-clubs": [
      "young-leaders-programme",
      "scouts-gibraltar",
      "girl-guides-gibraltar",
    ],
    "young-leaders-programme": [
      "gibraltar-youth-service-clubs",
      "st-john-ambulance-cadets",
      "scouts-gibraltar",
    ],
    "st-john-ambulance-cadets": [
      "young-leaders-programme",
      "scouts-gibraltar",
      "girl-guides-gibraltar",
    ],
    "gibraltar-shotokan-karate-club": [
      "gibraltar-taekwondo",
      "titan-academy-gibraltar",
      "gibraltar-squash",
    ],
    "gibraltar-taekwondo": [
      "gibraltar-shotokan-karate-club",
      "titan-academy-gibraltar",
      "gibraltar-squash",
    ],
    "titan-academy-gibraltar": [
      "gibraltar-shotokan-karate-club",
      "gibraltar-taekwondo",
      "gibraltar-rugby",
    ],
    "bushido-jiu-jitsu": [
      "angry-chill-brazilian-jiu-jitsu",
      "titan-academy-gibraltar",
      "gibraltar-shotokan-karate-club",
    ],
    "angry-chill-brazilian-jiu-jitsu": [
      "bushido-jiu-jitsu",
      "titan-academy-gibraltar",
      "gibraltar-taekwondo",
    ],
    "gibraltar-fa-fundamentals-development-school": [
      "girls-indoor-football",
      "gibraltar-rugby",
      "gibraltar-squash",
    ],
    "girls-indoor-football": [
      "gibraltar-fa-fundamentals-development-school",
      "gibraltar-rugby",
      "gibraltar-squash",
    ],
    "gibraltar-rugby": [
      "gibraltar-fa-fundamentals-development-school",
      "girls-indoor-football",
      "gibraltar-squash",
    ],
    "gibraltar-squash": [
      "gibraltar-rugby",
      "gibraltar-fa-fundamentals-development-school",
      "gibraltar-shotokan-karate-club",
    ],
    "little-english-language-school": [
      "gibraltar-digital-skills-academy",
      "math-lessons",
      "gibraltar-artists-studio",
    ],
    "gibraltar-digital-skills-academy": [
      "little-english-language-school",
      "math-lessons",
      "gibraltar-artists-studio",
    ],
    "math-lessons": [
      "little-english-language-school",
      "gibraltar-digital-skills-academy",
      "gibraltar-artists-studio",
    ],
    "gibraltar-volleyball-association": [
      "gibraltar-netball",
      "gibraltar-badminton",
      "gibraltar-rugby",
    ],
    "gibraltar-netball": [
      "gibraltar-volleyball-association",
      "gibraltar-badminton",
      "gibraltar-rugby",
    ],
    "gibraltar-badminton": [
      "gibraltar-volleyball-association",
      "gibraltar-netball",
      "gibraltar-squash",
    ],
    "gibraltar-artists-studio": [
      "growing-artists-programme",
      "ditzy-b-art-classes",
      "lets-create-with-doni",
    ],
    "growing-artists-programme": [
      "gibraltar-artists-studio",
      "ditzy-b-art-classes",
      "lets-create-with-doni",
    ],
    "ditzy-b-art-classes": [
      "gibraltar-artists-studio",
      "growing-artists-programme",
      "lets-create-with-doni",
    ],
    "lets-create-with-doni": [
      "gibraltar-artists-studio",
      "growing-artists-programme",
      "ditzy-b-art-classes",
    ],
    "klay-and-krafts": [
      "art-in-movement-aim",
      "ermelindas-contemporary-ceramics",
      "gibraltar-artists-studio",
    ],
    "art-in-movement-aim": [
      "klay-and-krafts",
      "ermelindas-contemporary-ceramics",
      "gibraltar-artists-studio",
    ],
    "ermelindas-contemporary-ceramics": [
      "klay-and-krafts",
      "art-in-movement-aim",
      "growing-artists-programme",
    ],
    "brownies-gibraltar": [
      "rainbows-gibraltar",
      "girl-guides-gibraltar",
      "scouts-gibraltar",
    ],
    "mediterranean-rowing-club": [
      "calpe-rowing",
      "the-nautilus-project",
      "gibraltar-rugby",
    ],
    "calpe-rowing": [
      "mediterranean-rowing-club",
      "the-nautilus-project",
      "gibraltar-rugby",
    ],
    "the-nautilus-project": [
      "mediterranean-rowing-club",
      "calpe-rowing",
      "gibraltar-rugby",
    ],
  };

  const slugs = relatedBySlug[club.slug] ?? [];
  return slugs
    .map((slug) => getClubBySlug(slug))
    .filter((relatedClub): relatedClub is ClubItem => Boolean(relatedClub));
}

function ClubRelated({ club, clubs }: { club: ClubItem; clubs: ClubItem[] }) {
  const helperText = getRelatedHelperText(club);

  return (
    <div className="mt-8 rounded-[1.5rem] border border-navy/8 bg-white p-5 shadow-[0_10px_26px_rgba(45,56,77,0.05)] md:p-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
        You might also like
      </p>
      <p className="mb-4 font-sans text-sm leading-7 text-navy/60">
        {helperText}
      </p>

      <div className="space-y-2">
        {clubs.map((club) => (
          <Link
            key={club.slug}
            href={`/clubs-classes/${club.slug}`}
            className="flex items-center gap-3 rounded-2xl border border-navy/8 bg-beige/55 px-3 py-2.5 transition-colors hover:border-salmon/30 hover:bg-white"
          >
            {club.logoUrl ? (
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-navy/8 bg-white">
                <Image
                  src={club.logoUrl}
                  alt={`${club.name} logo`}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            ) : (
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy/8 bg-white text-xs font-semibold uppercase tracking-[0.15em] text-navy/75">
                {getClubMonogram(club.name)}
              </div>
            )}

            <p className="min-w-0 flex-1 truncate font-sans text-sm font-medium leading-5 text-navy/85">
              {club.name}
            </p>

            <ChevronRight className="size-4 shrink-0 text-navy/35" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function getRelatedHelperText(club: ClubItem) {
  const youthGroupSlugs = new Set([
    "scouts-gibraltar",
    "girl-guides-gibraltar",
    "rainbows-gibraltar",
    "gibraltar-youth-service-clubs",
    "young-leaders-programme",
    "st-john-ambulance-cadets",
  ]);

  const babyAndMumSlugs = new Set([
    "parent-and-child-society-pacs",
    "breastfeeding-support-group",
    "post-natal-pilates",
    "beer-fit",
  ]);

  const martialArtsSlugs = new Set([
    "gibraltar-shotokan-karate-club",
    "gibraltar-taekwondo",
    "titan-academy-gibraltar",
    "bushido-jiu-jitsu",
    "angry-chill-brazilian-jiu-jitsu",
  ]);

  const teamSportSlugs = new Set([
    "gibraltar-fa-fundamentals-development-school",
    "girls-indoor-football",
    "gibraltar-rugby",
    "gibraltar-squash",
    "gibraltar-volleyball-association",
    "gibraltar-netball",
    "gibraltar-badminton",
    "mediterranean-rowing-club",
    "calpe-rowing",
  ]);

  const learningSlugs = new Set([
    "little-english-language-school",
    "gibraltar-digital-skills-academy",
    "math-lessons",
  ]);

  const creativeSlugs = new Set([
    "gibraltar-artists-studio",
    "growing-artists-programme",
    "ditzy-b-art-classes",
    "lets-create-with-doni",
    "klay-and-krafts",
    "art-in-movement-aim",
    "ermelindas-contemporary-ceramics",
  ]);

  if (club.category === "dance") {
    return "A few similar dance pages on the site.";
  }

  if (youthGroupSlugs.has(club.slug)) {
    return "A few similar youth-group pages on the site.";
  }

  if (babyAndMumSlugs.has(club.slug)) {
    return "A few similar baby, toddler, and parent pages on the site.";
  }

  if (martialArtsSlugs.has(club.slug)) {
    return "A few similar sport and martial arts pages on the site.";
  }

  if (teamSportSlugs.has(club.slug)) {
    return "A few similar sport pages on the site.";
  }

  if (learningSlugs.has(club.slug)) {
    return "A few similar learning and skills pages on the site.";
  }

  if (creativeSlugs.has(club.slug)) {
    return "A few similar art and creative pages on the site.";
  }

  return "A few similar pages on the site.";
}

function ClubUpcoming({
  events,
}: {
  events: ReturnType<typeof getUpcomingEventsForClub>;
}) {
  return (
    <div className="mt-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
        Upcoming
      </p>

      <div className="space-y-3">
        {events.map((event) => {
          const isDirectContact =
            event.sourceUrl.startsWith("mailto:") || event.sourceUrl.startsWith("tel:");

          return (
            <a
              key={event.slug}
              href={event.sourceUrl}
              target={isDirectContact ? undefined : "_blank"}
              rel={isDirectContact ? undefined : "noopener noreferrer"}
              className="block rounded-2xl border border-salmon/20 bg-salmon/8 px-4 py-3 transition-transform hover:-translate-y-0.5 hover:bg-salmon/12"
            >
              <div className="flex items-start gap-2">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-salmon" />
                <div className="min-w-0">
                  <p className="font-sans text-sm font-medium leading-5 text-navy/85">
                    {event.title}
                  </p>
                  <p className="mt-1 font-sans text-xs text-navy/60">
                    {event.startLabel}
                  </p>
                  <p className="mt-1 font-sans text-xs text-navy/60">
                    {event.venue}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function AboutBlock({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="max-w-[40rem] font-sans text-base leading-8 text-navy/72">
      {lines.map((line, index) => {
        const key = `${content}-${index}`;

        if (line.trim() === "") {
          return <div key={key} className="h-3" aria-hidden="true" />;
        }

        const boldMatch = line.match(/^\*\*(.+)\*\*$/);
        if (boldMatch) {
          return (
            <p key={key} className="font-semibold text-navy">
              {boldMatch[1]}
            </p>
          );
        }

        const wholeItalicMatch = line.match(/^\*((?:\\\*|[^*])*)\*$/);
        if (wholeItalicMatch) {
          return (
            <p key={key} className="italic">
              {wholeItalicMatch[1].replaceAll("\\*", "*")}
            </p>
          );
        }

        return <p key={key}>{renderInlineFormatting(line)}</p>;
      })}
    </div>
  );
}

function renderInlineFormatting(line: string) {
  const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-navy">
          {part.slice(2, -2).replaceAll("\\*", "*")}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="italic">
          {part.slice(1, -1).replaceAll("\\*", "*")}
        </em>
      );
    }

    return <span key={`${part}-${index}`}>{part.replaceAll("\\*", "*")}</span>;
  });
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-navy/8 pb-5 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
          {label}
        </p>
      </div>
      <DetailValue value={value} />
    </div>
  );
}

function DetailValue({ value }: { value: string }) {
  const lines = value.split("\n");

  if (lines.length === 1) {
    return (
      <p className="mt-3 font-sans text-base leading-8 text-navy/72">{value}</p>
    );
  }

  return (
    <div className="mt-3 space-y-2 font-sans text-base leading-8 text-navy/72">
      {lines.map((line) => {
        const [day, ...rest] = line.split(":");
        const time = rest.join(":").trim();

        return (
          <p key={line}>
            {time ? (
              <>
                <strong className="font-semibold text-navy">{day}:</strong>{" "}
                {time}
              </>
            ) : (
              line
            )}
          </p>
        );
      })}
    </div>
  );
}
