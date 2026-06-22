"use client";

import { useEffect } from "react";

function shouldOpenInNewTab(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href");

  if (!href) return false;
  if (href.startsWith("mailto:")) return true;
  if (href.startsWith("#")) return false;
  if (href.startsWith("tel:")) return false;
  if (href.startsWith("javascript:")) return false;

  try {
    const url = new URL(href, window.location.origin);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function updateLinkTarget(anchor: HTMLAnchorElement) {
  if (!shouldOpenInNewTab(anchor)) {
    anchor.removeAttribute("target");
    anchor.removeAttribute("rel");
    return;
  }

  anchor.target = "_blank";
  anchor.rel = "noreferrer noopener";
}

function updateLinkTargets(root: ParentNode = document) {
  root.querySelectorAll("a[href]").forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
      updateLinkTarget(element);
    }
  });
}

export function LinkTargetManager() {
  useEffect(() => {
    updateLinkTargets();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          const target = mutation.target;

          if (target instanceof HTMLAnchorElement) {
            updateLinkTarget(target);
          }
        }

        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLAnchorElement) {
            updateLinkTarget(node);
          } else if (node instanceof HTMLElement) {
            updateLinkTargets(node);
          }
        });
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["href"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
