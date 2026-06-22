"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useSiteLanguage } from "@/components/language-provider";
import kotrLogoInvert from "@/KOTRlogoinvert.png";

export function Footer() {
  const { language } = useSiteLanguage();

  return (
    <footer className="relative bg-navy pt-14 text-beige">
      <div className="absolute inset-x-0 top-0 h-16 text-beige">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0,80 C180,20 360,20 540,80 C720,140 900,140 1080,80 C1230,30 1330,30 1440,70 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="mx-auto flex max-w-[61rem] flex-col items-center gap-1 px-6 py-8">
        <Image
          src={kotrLogoInvert}
          alt="Kids on the Rock"
          className="h-16 w-auto object-contain"
          priority
        />
        <a
          href="https://www.instagram.com/kidsontherock/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-beige/70 transition-colors hover:bg-white/10 hover:text-beige"
        >
          <Instagram className="size-5" strokeWidth={1.8} />
          @kidsontherock
        </a>
        <p className="max-w-none text-center font-sans text-xs leading-5 text-beige/70 md:whitespace-nowrap">
          {language === "es"
            ? "Una guía útil para familias de Gibraltar. Comprueba siempre los detalles más recientes directamente con páginas oficiales y negocios."
            : "A useful little guide for Gibraltar families. Always double-check official pages and businesses directly for the latest details."}
        </p>
        <p className="font-sans text-xs text-beige/55">
          &copy; {new Date().getFullYear()} Kids on the Rock. All rights
          reserved.{" "}
          <span aria-hidden="true" className="text-beige/45">
            |
          </span>{" "}
          <Link
            href="/privacy"
            className="text-beige/55 underline-offset-4 transition hover:text-beige hover:underline"
          >
            {language === "es" ? "Privacidad" : "Privacy Notice"}
          </Link>
        </p>
      </div>
    </footer>
  );
}
