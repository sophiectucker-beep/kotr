"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function HomeContent({ doodleSrc }: { doodleSrc: string }) {
  const { language } = useSiteLanguage();

  const copy =
    language === "es"
      ? {
          description: "Una guia practica para familias de Gibraltar.",
          descriptionFollow:
            "Contactos, formularios, clubes, cosas para hacer y otros bits, todo en un mismo sitio, por fin.",
          subtext:
            "Para actualizaciones diarias, pasate por Instagram.",
          cta: "Ven a saludarnos",
        }
      : {
          description: "A handy little hub for Gibraltar families.",
          descriptionFollow:
            "Useful numbers, forms, clubs, things to do, and other bits all in one place—at last!",
          subtext:
            "For daily updates, head over to Instagram.",
          cta: "Come say hi",
        };

  return (
    <section className="grid gap-3 pb-1 pt-0 md:grid-cols-[minmax(0,1fr)_320px] md:items-center md:gap-8 md:pb-2 md:pt-0">
      <div className="relative z-10 max-w-[36rem]">
        <p className="max-w-[32rem] text-3xl font-bold leading-tight text-navy md:text-4xl">
          {copy.description}
        </p>
        <p className="mt-5 max-w-[28rem] font-sans text-lg text-navy/72 md:text-xl">
          {language === "es" ? (
            <>
              Contactos, formularios, clubes, cosas para hacer y otros bits,{" "}
              <span className="font-semibold text-salmon">todo en un mismo sitio</span>, por fin.
            </>
          ) : (
            <>
              Useful numbers, forms, clubs, things to do, and other bits{" "}
              <span className="font-semibold text-salmon">all in one place</span>
              —at last!
            </>
          )}
        </p>
        <p className="mt-3 max-w-[26rem] font-sans text-sm text-navy/52">{copy.subtext}</p>
        <a
          href="https://www.instagram.com/kidsontherock/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex"
        >
          <Button variant="secondary" className="!justify-start px-6">
            <Instagram /> {copy.cta}
          </Button>
        </a>
      </div>

      <div className="relative order-last mx-auto w-full max-w-[300px] pt-1 md:order-none md:pt-3">
        <div className="group relative aspect-square transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src={doodleSrc}
            alt="Open Doodles illustration"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
