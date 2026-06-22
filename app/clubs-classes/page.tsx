import type { Metadata } from "next";

import rollerSkatingDoodle from "@/app/open-doodles/png/RollerSkatingDoodle.png";
import { ClubsContent } from "@/components/clubs-content";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { localClubs } from "@/lib/clubs";

export const metadata: Metadata = {
  title: "Kids Clubs & Classes in Gibraltar | Kids on the Rock",
  description:
    "Find kids clubs and classes in Gibraltar, including dance, football, karate, toddler groups, arts, and after-school activities for local families.",
  alternates: {
    canonical: "/clubs-classes",
  },
  openGraph: {
    title: "Kids Clubs & Classes in Gibraltar | Kids on the Rock",
    description:
      "Find kids clubs and classes in Gibraltar, including dance, football, karate, toddler groups, arts, and after-school activities for local families.",
    images: [
      {
        url: "/og-clubs-classes.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock Clubs & Classes page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Clubs & Classes in Gibraltar | Kids on the Rock",
    description:
      "Find kids clubs and classes in Gibraltar, including dance, football, karate, toddler groups, arts, and after-school activities for local families.",
    images: ["/og-clubs-classes.png"],
  },
};

export default function ClubsClassesPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <ClubsContent
          clubs={localClubs}
          doodleSrc={rollerSkatingDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
