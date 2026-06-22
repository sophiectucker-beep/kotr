import rollerSkatingDoodle from "@/app/open-doodles/png/RollerSkatingDoodle.png";
import { ClubsContent } from "@/components/clubs-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { localClubs } from "@/lib/clubs";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClubsClassesSharePreviewPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <ClubsContent
          clubs={localClubs}
          doodleSrc={rollerSkatingDoodle.src}
        />
      </main>
    </div>
  );
}
