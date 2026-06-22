import { Suspense } from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { FormsFillerContent } from "@/components/forms-filler-content";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";

export const metadata: Metadata = {
  title: "Gibraltar Form Filler | Kids on the Rock",
  description:
    "A friendly browser-only Gibraltar form filler for parent paperwork like the maternity grant, passport application, and identity card application.",
  alternates: {
    canonical: "/forms/filler",
  },
  openGraph: {
    title: "Gibraltar Form Filler | Kids on the Rock",
    description:
      "A friendly browser-only Gibraltar form filler for parent paperwork like the maternity grant, passport application, and identity card application.",
    images: [
      {
        url: "/og-forms.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock form filler preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibraltar Form Filler | Kids on the Rock",
    description:
      "A friendly browser-only Gibraltar form filler for parent paperwork like the maternity grant, passport application, and identity card application.",
    images: ["/og-forms.png"],
  },
};

export default function FormsFillerPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <Suspense fallback={null}>
          <FormsFillerContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
