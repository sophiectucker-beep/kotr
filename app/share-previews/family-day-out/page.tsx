import swingingDoodle from "@/app/open-doodles/png/SwingingDoodle.png";
import { DayOutContent } from "@/components/day-out-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { dayOutVerifiedDate, familyDayOuts } from "@/lib/day-out";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function FamilyDayOutSharePreviewPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <DayOutContent
          entries={familyDayOuts}
          verifiedDate={dayOutVerifiedDate}
          doodleSrc={swingingDoodle.src}
        />
      </main>
    </div>
  );
}
