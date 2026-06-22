import type { Metadata } from "next";

import messyDoodle from "@/app/open-doodles/png/MessyDoodle.png";
import { Footer } from "@/components/footer";
import { FormsContent } from "@/components/forms-content";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { usefulForms } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Gibraltar Family Forms | Kids on the Rock",
  description:
    "Useful Gibraltar family forms grouped by the actual admin job you're trying to get done, including maternity, school, and practical parent paperwork.",
  openGraph: {
    title: "Gibraltar Family Forms | Kids on the Rock",
    description:
      "Useful Gibraltar family forms grouped by the actual admin job you're trying to get done, including maternity, school, and practical parent paperwork.",
    images: [
      {
        url: "/og-forms.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock Forms page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibraltar Family Forms | Kids on the Rock",
    description:
      "Useful Gibraltar family forms grouped by the actual admin job you're trying to get done, including maternity, school, and practical parent paperwork.",
    images: ["/og-forms.png"],
  },
};

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <FormsContent forms={usefulForms} doodleSrc={messyDoodle.src} />
      </main>

      <Footer />
    </div>
  );
}
