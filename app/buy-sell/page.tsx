import type { Metadata } from "next";

import unboxingDoodle from "@/app/open-doodles/png/UnboxingDoodle.png";
import { BuySellContent } from "@/components/buy-sell-content";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { approvedBuySellItems, getActiveBuySellItems } from "@/lib/buy-sell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Baby Buy & Sell in Gibraltar | Kids on the Rock",
  description:
    "A moderated Gibraltar baby buy and sell page for prams, cots, clothes, toys, car seats, and other useful baby bits listed through Facebook Marketplace.",
  alternates: {
    canonical: "/buy-sell",
  },
  openGraph: {
    title: "Baby Buy & Sell in Gibraltar | Kids on the Rock",
    description:
      "A moderated Gibraltar baby buy and sell page for prams, cots, clothes, toys, car seats, and other useful baby bits.",
    url: "https://kidsontherock.gi/buy-sell",
    images: [
      {
        url: "/og-buy-sell.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock baby buy and sell preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Buy & Sell in Gibraltar | Kids on the Rock",
    description:
      "A moderated Gibraltar baby buy and sell page for prams, cots, clothes, toys, car seats, and other useful baby bits.",
    images: ["/og-buy-sell.png"],
  },
};

export default function BuySellPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <BuySellContent
          items={getActiveBuySellItems(approvedBuySellItems)}
          doodleSrc={unboxingDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
