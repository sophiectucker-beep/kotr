import sittingDoodle from "@/app/open-doodles/png/SittingDoodle.png";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { NumbersContent } from "@/components/numbers-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { usefulNumbers, usefulNumbersVerifiedDate } from "@/lib/numbers";

export const metadata: Metadata = {
  title: "Useful Numbers in Gibraltar | Kids on the Rock",
  description:
    "Useful numbers in Gibraltar for parents, including urgent help, GHA contacts, school-related numbers, and family support.",
  alternates: {
    canonical: "/numbers",
  },
  openGraph: {
    title: "Useful Numbers in Gibraltar | Kids on the Rock",
    description:
      "Useful numbers in Gibraltar for parents, including urgent help, GHA contacts, school-related numbers, and family support.",
    images: [
      {
        url: "/og-numbers.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock Useful Numbers page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Useful Numbers in Gibraltar | Kids on the Rock",
    description:
      "Useful numbers in Gibraltar for parents, including urgent help, GHA contacts, school-related numbers, and family support.",
    images: ["/og-numbers.png"],
  },
};

export default function UsefulNumbersPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <NumbersContent
          entries={usefulNumbers}
          verifiedDate={usefulNumbersVerifiedDate}
          doodleSrc={sittingDoodle.src}
        />
      </main>

      <Footer />
    </div>
  );
}
