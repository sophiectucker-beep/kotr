import lovingDoodle from "@/app/open-doodles/png/LovingDoodle.png";
import { BabyChangingContent } from "@/components/baby-changing-content";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { babyChangingSpots } from "@/lib/baby-changing";

export const metadata = {
  title: "Family Map | Kids on the Rock",
  description:
    "A Gibraltar family map with baby-changing spots, lifts, buggy-friendly toilets, cafes, snacks, shade, and useful places for parents.",
};

export default function BabyChangingPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <BabyChangingContent entries={babyChangingSpots} doodleSrc={lovingDoodle.src} />
      </main>

      <Footer />
    </div>
  );
}
