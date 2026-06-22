import eventsDoodle from "@/app/open-doodles/png/ZombieingDoodle.png";
import { EventsContent } from "@/components/events-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { localClubs } from "@/lib/clubs";
import { childFriendlyEvents, eventsVerifiedDate } from "@/lib/events";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function WhatsOnSharePreviewPage() {
  const today = new Date().toISOString().slice(0, 10);
  const visibleEvents = childFriendlyEvents.filter(
    (event) => !event.endDate || event.endDate >= today
  );

  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <EventsContent
          events={visibleEvents}
          clubs={localClubs}
          verifiedDate={eventsVerifiedDate}
          doodleSrc={eventsDoodle.src}
        />
      </main>
    </div>
  );
}
