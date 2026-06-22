"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  CalendarHeart,
  ChevronDown,
  FileText,
  Home,
  Map,
  Menu,
  Phone,
  ShoppingBag,
  Volleyball,
  X,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { NavUtilities } from "@/components/nav-utilities";
import { cn } from "@/lib/utils";

const primaryLinks = [
  {
    label: "Home",
    labelEs: "Inicio",
    href: "/",
    className:
      "bg-navy text-beige border-navy hover:bg-[#445168] hover:text-beige",
  },
  {
    label: "Blog",
    labelEs: "Blog",
    href: "/blog",
    className:
      "bg-kotr-pink text-white border-kotr-pink hover:bg-[#f091ad] hover:text-white",
  },
  {
    label: "Buy & Sell",
    labelEs: "Compra y venta",
    href: "/buy-sell",
    className:
      "bg-kotr-green text-white border-kotr-green hover:bg-[#8d9d79] hover:text-white",
  },
] as const;

const groupedLinks = [
  {
    key: "things",
    label: "Things to Do",
    labelEs: "Planes",
    className:
      "bg-salmon text-white border-salmon hover:bg-[#f19b9a] hover:text-white",
    items: [
      {
        label: "Clubs & Classes",
        labelEs: "Clubes y clases",
        href: "/clubs-classes",
      },
      {
        label: "What's On",
        labelEs: "Qué hay",
        href: "/whats-on",
      },
      {
        label: "Family Day Out",
        labelEs: "Plan en familia",
        href: "/family-day-out",
      },
    ],
  },
  {
    key: "info",
    label: "Useful Stuff",
    labelEs: "Útiles",
    className:
      "bg-kotr-blue text-white border-kotr-blue hover:bg-[#a9cadc] hover:text-white",
    items: [
      {
        label: "Forms",
        labelEs: "Formularios",
        href: "/forms",
      },
      {
        label: "Phone Numbers",
        labelEs: "Teléfonos útiles",
        href: "/numbers",
      },
      {
        label: "Family Map",
        labelEs: "Mapa familiar",
        href: "/family-map",
      },
    ],
  },
] as const;

const mobileLinks = [
  {
    label: "Home",
    labelEs: "Inicio",
    href: "/",
    icon: Home,
    iconCircleClass: "bg-navy text-beige",
  },
  {
    label: "Blog",
    labelEs: "Blog",
    href: "/blog",
    icon: FileText,
    iconCircleClass: "bg-kotr-pink text-white",
  },
  {
    label: "Clubs & Classes",
    labelEs: "Clubes y clases",
    href: "/clubs-classes",
    icon: Volleyball,
    iconCircleClass: "bg-salmon text-white",
  },
  {
    label: "What's On",
    labelEs: "Qué hay",
    href: "/whats-on",
    icon: CalendarHeart,
    iconCircleClass: "bg-kotr-orange text-white",
  },
  {
    label: "Family Day Out",
    labelEs: "Plan en familia",
    href: "/family-day-out",
    icon: CalendarHeart,
    iconCircleClass: "bg-beige text-navy",
  },
  {
    label: "Forms",
    labelEs: "Formularios",
    href: "/forms",
    icon: FileText,
    iconCircleClass: "bg-kotr-blue text-white",
  },
  {
    label: "Buy & Sell",
    labelEs: "Compra y venta",
    href: "/buy-sell",
    icon: ShoppingBag,
    iconCircleClass: "bg-kotr-green text-white",
  },
  {
    label: "Phone Numbers",
    labelEs: "Teléfonos útiles",
    href: "/numbers",
    icon: Phone,
    iconCircleClass: "bg-navy text-beige",
  },
  {
    label: "Family Map",
    labelEs: "Mapa familiar",
    href: "/family-map",
    icon: Map,
    iconCircleClass: "bg-kotr-blue text-white",
  },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language } = useSiteLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldCollapseDesktop = isHomePage && collapsed;
  const hasMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const activeLanguage = hasMounted ? language : "en";

  useEffect(() => {
    const handleScroll = () => {
      const nextCollapsed = isHomePage && window.scrollY > 36;
      setCollapsed(nextCollapsed);
      setOpenDropdown(null);

      if (!nextCollapsed) {
        setOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-beige/96 backdrop-blur-sm">
        <div className="mx-4 mt-4 md:mx-6">
          <div className="relative mx-auto max-w-[61rem]">
            <div className="relative z-[70] mb-3 hidden justify-end md:flex">
              <NavUtilities />
            </div>

            <div className="flex items-center gap-2 rounded-[1.75rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_32px_rgba(45,56,77,0.08)] backdrop-blur-sm md:gap-3 md:px-5">
              <Link
                href="/"
                className="shrink-0 text-[2.15rem] font-black leading-none tracking-[-0.02em] text-navy transition-opacity hover:opacity-75 md:text-[2.55rem]"
              >
                Kids on the Rock
              </Link>

              <div className="ml-auto flex shrink-0 items-center gap-1.5 md:gap-2">
              <nav
                className={cn(
                  "hidden items-center justify-end gap-1.5 transition-all duration-300 min-[980px]:flex",
                  shouldCollapseDesktop
                    ? "pointer-events-none max-w-0 flex-none overflow-hidden -translate-y-2 opacity-0"
                    : "max-w-none flex-1 overflow-visible translate-y-0 opacity-100"
                )}
              >
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3 py-2 font-sans text-sm font-medium shadow-[0_10px_24px_rgba(45,56,77,0.08)] transition-all hover:-translate-y-0.5",
                    link.className
                  )}
                >
                    {activeLanguage === "es" ? link.labelEs : link.label}
                  </Link>
                ))}

                {groupedLinks.map((group) => {
                  const isOpen = openDropdown === group.key;

                  return (
                    <div
                      key={group.key}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(group.key)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown((current) =>
                            current === group.key ? null : group.key
                          )
                        }
                        className={cn(
                          "flex items-center whitespace-nowrap rounded-full border px-3 py-2 font-sans text-sm font-medium shadow-[0_10px_24px_rgba(45,56,77,0.08)] transition-all hover:-translate-y-0.5",
                          group.className
                        )}
                      >
                        <span>{activeLanguage === "es" ? group.labelEs : group.label}</span>
                        <ChevronDown
                          className={cn(
                            "ml-1.5 size-4 transition-transform",
                            isOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "absolute right-0 top-full z-20 pt-2 transition-all duration-200",
                          isOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        )}
                      >
                        <div className="min-w-60 rounded-[1.25rem] border border-white/80 bg-white/95 p-2 shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                            className="block rounded-[1rem] px-4 py-3 font-sans text-sm font-medium text-navy transition-colors hover:bg-beige"
                            onClick={() => setOpenDropdown(null)}
                          >
                              {activeLanguage === "es" ? item.labelEs : item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </nav>

              {shouldCollapseDesktop ? (
                <Link
                href="/"
                className="hidden whitespace-nowrap rounded-full border border-navy bg-navy px-3 py-2 font-sans text-sm font-medium text-beige shadow-[0_10px_24px_rgba(45,56,77,0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#445168] min-[980px]:inline-flex"
              >
                  {activeLanguage === "es" ? "Inicio" : "Home"}
                </Link>
              ) : null}

              <button
                onClick={() => setOpen(!open)}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-[0_10px_24px_rgba(45,56,77,0.08)] transition-all hover:bg-navy hover:text-beige min-[980px]:hidden",
                  shouldCollapseDesktop ? "min-[980px]:flex" : ""
                )}
                aria-label="Toggle menu"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
              </div>
            </div>

            <div className="mt-2 flex justify-end md:hidden">
              <NavUtilities />
            </div>

            <div className="mt-5 h-px w-full bg-navy/12" aria-hidden="true" />
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close menu"
        className={cn(
          "fixed inset-0 z-40 bg-navy/16 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[60] w-[min(19rem,86vw)] border-l border-white/70 bg-white/96 px-4 pb-6 pt-24 shadow-[-18px_0_40px_rgba(45,56,77,0.14)] backdrop-blur-sm transition-transform duration-300 ease-out md:w-[22rem]",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Navigation drawer"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-salmon">
            Menu
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-[0_10px_24px_rgba(45,56,77,0.08)] transition-all hover:bg-navy hover:text-beige"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2.5">
          {mobileLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl transition-opacity hover:opacity-85"
                onClick={() => setOpen(false)}
              >
                <span
                  className="flex w-full max-w-[16.5rem] items-center justify-start gap-2.5 rounded-[1.1rem] border border-navy/10 bg-white px-3.5 py-2.5 text-[0.95rem] font-medium text-navy shadow-[0_8px_18px_rgba(45,56,77,0.08)] transition-all hover:-translate-y-0.5 hover:border-navy/15 hover:bg-beige/60"
                >
                  <span
                    className={cn(
                      "flex size-8.5 shrink-0 items-center justify-center rounded-full shadow-[0_6px_14px_rgba(45,56,77,0.08)]",
                      link.iconCircleClass
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                  </span>
                  <span>{activeLanguage === "es" ? link.labelEs : link.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="h-[7rem] md:h-[8.75rem]" aria-hidden="true" />
    </>
  );
}
