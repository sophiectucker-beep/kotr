"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CategoryCard } from "@/components/category-card";
import { HomeContent } from "@/components/home-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { useSiteLanguage } from "@/components/language-provider";
import introDoodle from "@/app/open-doodles/png/IceCreamDoodle.png";
import {
  Volleyball,
  CalendarHeart,
  FileText,
  Phone,
  NotebookPen,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  const { language } = useSiteLanguage();
  const categories =
    language === "es"
      ? [
          {
            title: "Clubes y clases",
            subtitle: "Deporte, clases y más",
            icon: Volleyball,
            color: "bg-salmon",
            href: "/clubs-classes",
          },
          {
            title: "Qué hay",
            subtitle: "Lo que viene ahora",
            icon: CalendarHeart,
            color: "bg-kotr-orange",
            href: "/whats-on",
          },
          {
            title: "Plan en familia",
            subtitle: "Animales, vistas y clásicos",
            icon: CalendarHeart,
            color: "bg-beige",
            textColor: "text-navy",
            href: "/family-day-out",
          },
          {
            title: "Blog",
            subtitle: "Ideas, guías y noticias",
            icon: NotebookPen,
            color: "bg-kotr-pink",
            href: "/blog",
          },
          {
            title: "Formularios",
            subtitle: "Cole y familia",
            icon: FileText,
            color: "bg-kotr-blue",
            href: "/forms",
          },
          {
            title: "Compra y venta",
            subtitle: "Cosas de bebé de segunda mano",
            icon: ShoppingBag,
            color: "bg-kotr-green",
            href: "/buy-sell",
          },
          {
            title: "Teléfonos útiles",
            subtitle: "Contactos importantes",
            icon: Phone,
            color: "bg-navy",
            href: "/numbers",
          },
        ]
      : [
          {
            title: "Clubs & Classes",
            subtitle: "Sports, classes & more",
            icon: Volleyball,
            color: "bg-salmon",
            href: "/clubs-classes",
          },
          {
            title: "What's On",
            subtitle: "What's coming up",
            icon: CalendarHeart,
            color: "bg-kotr-orange",
            href: "/whats-on",
          },
          {
            title: "Family Day Out",
            subtitle: "Animals, views & classics",
            icon: CalendarHeart,
            color: "bg-beige",
            textColor: "text-navy",
            href: "/family-day-out",
          },
          {
            title: "Blog",
            subtitle: "Ideas, guides & updates",
            icon: NotebookPen,
            color: "bg-kotr-pink",
            href: "/blog",
          },
          {
            title: "Forms",
            subtitle: "School & family forms",
            icon: FileText,
            color: "bg-kotr-blue",
            href: "/forms",
          },
          {
            title: "Buy & Sell",
            subtitle: "Pre-loved baby bits",
            icon: ShoppingBag,
            color: "bg-kotr-green",
            href: "/buy-sell",
          },
          {
            title: "Useful Numbers",
            subtitle: "Contacts you'll need",
            icon: Phone,
            color: "bg-navy",
            href: "/numbers",
          },
        ];

  const popularLinks =
    language === "es"
      ? [
          {
            label: "Kárate",
            href: "/clubs-classes/gibraltar-shotokan-karate-club",
          },
          {
            label: "Fútbol",
            href: "/clubs-classes/gibraltar-fa-fundamentals-development-school",
          },
          {
            label: "Grupos para bebés y peques",
            href: "/clubs-classes/parent-and-child-society-pacs",
          },
          {
            label: "Clases de arte",
            href: "/clubs-classes/gibraltar-artists-studio",
          },
          {
            label: "Baile",
            href: "/clubs-classes/stagecoach-gibraltar",
          },
          {
            label: "Scouts",
            href: "/clubs-classes/scouts-gibraltar",
          },
        ]
      : [
          {
            label: "Karate",
            href: "/clubs-classes/gibraltar-shotokan-karate-club",
          },
          {
            label: "Football",
            href: "/clubs-classes/gibraltar-fa-fundamentals-development-school",
          },
          {
            label: "Baby & toddler groups",
            href: "/clubs-classes/parent-and-child-society-pacs",
          },
          {
            label: "Art classes",
            href: "/clubs-classes/gibraltar-artists-studio",
          },
          {
            label: "Dance",
            href: "/clubs-classes/stagecoach-gibraltar",
          },
          {
            label: "Scouts",
            href: "/clubs-classes/scouts-gibraltar",
          },
        ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-beige">
      <PageBackgroundLogo />

      <Navbar />

      <main className="relative z-10 mx-auto mb-14 flex max-w-[61rem] flex-col gap-6 px-4 pt-[30px] min-[980px]:px-0 md:mb-20 md:gap-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-white/88 p-6 pt-4 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10 md:pt-7">
          <HomeContent doodleSrc={introDoodle.src} />
          <WaveEdge className="text-beige" />
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
          <section>
            <h2 className="mb-8 text-2xl font-bold text-navy">
              {language === "es" ? "¿Qué buscas?" : "What are you looking for?"}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.href} {...category} />
              ))}
            </div>
          </section>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
          <section>
            <h2 className="text-2xl font-bold text-navy">
              {language === "es" ? "Clubes y clases populares" : "Popular clubs & classes"}
            </h2>
            <p className="mt-3 font-sans text-sm leading-7 text-navy/60">
              {language === "es"
                ? "Los padres suelen entrar directamente a..."
                : "Parents often click through to..."}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-navy/8 bg-white p-4 shadow-[0_10px_26px_rgba(45,56,77,0.05)] md:p-5">
              <div className="grid gap-2 sm:grid-cols-2">
                {popularLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-navy/8 bg-beige/55 px-4 py-3 transition-colors hover:border-salmon/30 hover:bg-white"
                  >
                    <span className="font-sans text-sm font-medium leading-5 text-navy/85">
                      {item.label}
                    </span>
                    <ChevronRight className="size-4 shrink-0 text-navy/35" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function WaveEdge({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-14 ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M0,20 C170,90 320,100 500,55 C700,-5 870,-5 1045,52 C1190,98 1315,98 1440,62 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
