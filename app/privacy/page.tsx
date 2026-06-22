import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageBackgroundLogo } from "@/components/page-background-logo";

export const metadata: Metadata = {
  title: "Privacy | Kids on the Rock",
  description:
    "How Kids on the Rock handles analytics, contact links, and form filler data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy | Kids on the Rock",
    description:
      "How Kids on the Rock handles analytics, contact links, and form filler data.",
    url: "https://kidsontherock.gi/privacy",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kids on the Rock logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Privacy | Kids on the Rock",
    description:
      "How Kids on the Rock handles analytics, contact links, and form filler data.",
    images: ["/icon.png"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-beige text-navy">
      <PageBackgroundLogo />
      <Navbar />

      <main className="mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/92 px-6 py-7 shadow-[0_18px_60px_rgba(205,123,84,0.10)] md:px-10 md:py-10">
          <div className="max-w-[48rem]">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-salmon/80">
              Privacy
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-navy md:text-5xl">
              Privacy Notice
            </h1>
            <p className="mt-5 max-w-[42rem] font-sans text-lg leading-8 text-navy/72">
              Kids on the Rock is a small Gibraltar family guide. This page explains
              what gets collected on the site, what stays on your own device, and
              what happens if you choose to contact me.
            </p>
          </div>

          <div className="mt-8 border-t border-navy/10 pt-8 font-sans text-[15px] leading-8 text-navy/78">
            <section>
              <h2 className="text-xl font-semibold text-navy">Who runs this site</h2>
              <p className="mt-3">
                Kids on the Rock is run as an independent local guide for Gibraltar
                families. If you contact me directly by email or Instagram, I will
                only use the information you send in order to reply to you or help
                with your query.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-navy">Analytics</h2>
              <p className="mt-3">
                This site uses Vercel Analytics to understand overall traffic, such
                as visits, popular pages, and general usage patterns. This helps me
                see what families are actually using and improve the site.
              </p>
              <p className="mt-3">
                Vercel describes its Web Analytics as privacy-friendly and
                cookie-free. I do not use the site to build personal profiles of
                visitors or to identify individual families.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-navy">
                Rocky Form Filler
              </h2>
              <p className="mt-3">
                When you use the form filler, your answers stay in your browser while
                you are there. They are not uploaded or stored by me through the site.
                If you choose to download a PDF, it saves to your own device.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-navy">
                Email links and third-party pages
              </h2>
              <p className="mt-3">
                Some pages include email links, website links, Instagram links,
                Facebook links, and other third-party pages. If you click those or
                send an email, you are choosing to share information directly with
                that service or organiser.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-navy">Local listings</h2>
              <p className="mt-3">
                I try to keep information accurate and up to date, but clubs,
                events, forms, prices, and opening details can change. Please always
                double-check with the official source before relying on a listing.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-navy">Contact</h2>
              <p className="mt-3">
                If you have a privacy question about the site, you can contact me at{" "}
                <a
                  href="mailto:hellokidsontherock@gmail.com?subject=Privacy question"
                  className="font-semibold text-salmon underline-offset-4 hover:underline"
                >
                  hellokidsontherock@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
