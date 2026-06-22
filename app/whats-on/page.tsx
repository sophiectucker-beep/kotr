import type { Metadata } from "next";

import eventsDoodle from "@/app/open-doodles/png/ZombieingDoodle.png";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { EventsContent } from "@/components/events-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { localClubs } from "@/lib/clubs";
import { childFriendlyEvents, eventsVerifiedDate } from "@/lib/events";

export const metadata: Metadata = {
  title: "Kids Events in Gibraltar | What's On | Kids on the Rock",
  description:
    "Find kids events in Gibraltar, including family events, one-off activities, seasonal outings, and things to do for babies, kids, teens, and mums.",
  openGraph: {
    title: "Kids Events in Gibraltar | What's On | Kids on the Rock",
    description:
      "Find kids events in Gibraltar, including family events, one-off activities, seasonal outings, and things to do for babies, kids, teens, and mums.",
    images: [
      {
        url: "/og-whats-on.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock What's On page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Events in Gibraltar | What's On | Kids on the Rock",
    description:
      "Find kids events in Gibraltar, including family events, one-off activities, seasonal outings, and things to do for babies, kids, teens, and mums.",
    images: ["/og-whats-on.png"],
  },
};

export default function WhatsOnPage() {
  const today = new Date().toISOString().slice(0, 10);
  const visibleEvents = childFriendlyEvents.filter(
    (event) => !event.endDate || event.endDate >= today
  );

  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <EventsContent
          events={visibleEvents}
          clubs={localClubs}
          verifiedDate={eventsVerifiedDate}
          doodleSrc={eventsDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
