import unboxingDoodle from "@/app/open-doodles/png/UnboxingDoodle.png";
import { BuySellContent } from "@/components/buy-sell-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { approvedBuySellItems, getActiveBuySellItems } from "@/lib/buy-sell";

export const dynamic = "force-dynamic";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function BuySellSharePreviewPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <BuySellContent
          items={getActiveBuySellItems(approvedBuySellItems)}
          doodleSrc={unboxingDoodle.src}
        />
      </main>
    </div>
  );
}
