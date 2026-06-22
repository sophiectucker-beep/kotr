import type { Metadata } from "next";

import swingingDoodle from "@/app/open-doodles/png/SwingingDoodle.png";
import { DayOutContent } from "@/components/day-out-content";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { dayOutVerifiedDate, familyDayOuts } from "@/lib/day-out";

export const metadata: Metadata = {
  title: "Family Days Out in Gibraltar | Kids on the Rock",
  description:
    "Find family days out in Gibraltar, including parks, beaches, caves, museums, and easy local outings for babies, kids, and teens.",
  openGraph: {
    title: "Family Days Out in Gibraltar | Kids on the Rock",
    description:
      "Find family days out in Gibraltar, including parks, beaches, caves, museums, and easy local outings for babies, kids, and teens.",
    images: [
      {
        url: "/og-family-day-out.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock Family Day Out page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Days Out in Gibraltar | Kids on the Rock",
    description:
      "Find family days out in Gibraltar, including parks, beaches, caves, museums, and easy local outings for babies, kids, and teens.",
    images: ["/og-family-day-out.png"],
  },
};

export default function FamilyDayOutPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <DayOutContent
          entries={familyDayOuts}
          verifiedDate={dayOutVerifiedDate}
          doodleSrc={swingingDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
