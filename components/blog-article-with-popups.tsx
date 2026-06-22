"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const dentistDetails = {
  "dentist-earle": {
    name: "Earle Dental Clinic",
    phone: "20079518",
    emergency: "20079848 (Emergency After Hours)",
    address: "252/4 Main Street, GX11 1AA, Gibraltar",
  },
  "dentist-watergardens": {
    name: "Watergardens Dental Care",
    phone: "56002555",
    address:
      "1st Floor Block 5, Watergardens, Suites 12, 13 Waterport Rd, GX11 1AA",
  },
  "dentist-new-smile": {
    name: "New Smile Dental Clinic",
    phone: "200 52882",
    address: "15 Town Range, Gibraltar GX11 1AA",
  },
  "dentist-dental-care-centre": {
    name: "Dental Care Centre",
    phone: "20078844",
    address: "218 Main St, Gibraltar GX11 1AA",
  },
  "dentist-midtown": {
    name: "Ferris y Enezari LTD (Midtown Dental Clinic)",
    phone: "54092653",
    address: "Arlington 1, 01 Midtown St, Gibraltar GX11 1AA",
  },
} as const;

type DentistKey = keyof typeof dentistDetails;
type ActivePopup = {
  dentist: DentistKey;
  x: number;
  y: number;
};

function getDentistKeyFromHref(href: string): DentistKey | null {
  const id = href.replace(/^.*#/, "");
  return id in dentistDetails ? (id as DentistKey) : null;
}

function isDentistLink(target: Element) {
  const link = target.closest("a");
  const href = link?.getAttribute("href");

  return href ? Boolean(getDentistKeyFromHref(href)) : false;
}

export function BlogArticleWithPopups({ html }: { html: string }) {
  const [activePopup, setActivePopup] = useState<ActivePopup | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const details = activePopup ? dentistDetails[activePopup.dentist] : null;

  useEffect(() => {
    if (!activePopup) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;
      if (popupRef.current?.contains(target)) return;
      if (isDentistLink(target)) return;

      setActivePopup(null);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePopup(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePopup]);

  function handleArticleClick(event: MouseEvent<HTMLElement>) {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest("a");
    const href = link?.getAttribute("href");

    if (!link || !href) return;

    const dentistKey = getDentistKeyFromHref(href);

    if (!dentistKey) return;

    event.preventDefault();
    const linkRect = link.getBoundingClientRect();
    setActivePopup({
      dentist: dentistKey,
      ...getPopupPosition(linkRect),
    });
  }

  return (
    <>
      <article
        className="prose-kotr mt-10 max-w-none"
        onClick={handleArticleClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {activePopup && details
        ? createPortal(
            <div
              ref={popupRef}
              className="absolute z-[100] w-[calc(100vw-2rem)] max-w-sm rounded-[1.5rem] border border-navy/10 bg-white p-5 text-navy shadow-[0_18px_48px_rgba(45,56,77,0.18)]"
              style={{ left: activePopup.x, top: activePopup.y }}
              role="dialog"
              aria-label={`${details.name} details`}
            >
              <button
                type="button"
                onClick={() => setActivePopup(null)}
                className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-beige text-navy transition-colors hover:bg-salmon hover:text-white"
                aria-label={`Close ${details.name} details`}
              >
                <X className="size-4" />
              </button>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-salmon">
                Dentist
              </p>
              <h2 className="mt-2 pr-8 text-xl font-bold leading-tight">
                {details.name}
              </h2>

              <div className="mt-5 space-y-3 font-sans text-sm leading-6 text-navy/75">
                <p>
                  <span className="block font-semibold text-navy">Phone</span>
                  <a
                    href={`tel:+350${details.phone.replace(/\D/g, "")}`}
                    className="text-salmon underline decoration-salmon/40 underline-offset-4"
                  >
                    {details.phone}
                  </a>
                </p>

                {"emergency" in details ? (
                  <p>
                    <span className="block font-semibold text-navy">
                      Emergency
                    </span>
                    <a
                      href={`tel:+350${details.emergency.replace(/\D/g, "")}`}
                      className="text-salmon underline decoration-salmon/40 underline-offset-4"
                    >
                      {details.emergency}
                    </a>
                  </p>
                ) : null}

                <p>
                  <span className="block font-semibold text-navy">Address</span>
                  {details.address}
                </p>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

function getPopupPosition(linkRect: DOMRect) {
  const margin = 12;
  const offset = 12;
  const estimatedWidth = Math.min(384, window.innerWidth - margin * 2);
  const estimatedHeight = Math.min(280, window.innerHeight - margin * 2);
  const opensOnRight =
    linkRect.right + offset + estimatedWidth <= window.innerWidth - margin;
  const preferredX = opensOnRight
    ? linkRect.right + offset
    : linkRect.left - offset - estimatedWidth;
  const preferredY = linkRect.top + linkRect.height / 2 - estimatedHeight / 2;

  return {
    x: window.scrollX + Math.min(
      Math.max(preferredX, margin),
      window.innerWidth - margin - estimatedWidth
    ),
    y: window.scrollY + Math.min(
      Math.max(preferredY, margin),
      window.innerHeight - margin - estimatedHeight
    ),
  };
}
