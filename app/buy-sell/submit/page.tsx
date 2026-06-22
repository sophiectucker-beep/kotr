import type { Metadata } from "next";

import { BuySellSubmitForm } from "@/components/buy-sell-submit-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";

export const metadata: Metadata = {
  title: "Submit a Baby Item | Kids on the Rock",
  description:
    "Submit a baby item for the Kids on the Rock buy and sell page. Items are checked before they appear publicly.",
  alternates: {
    canonical: "/buy-sell/submit",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BuySellSubmitPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <BuySellSubmitForm />
      </main>

      <Footer />
    </div>
  );
}
