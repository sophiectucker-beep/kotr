"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bookmark,
  Facebook,
  Heart,
  Link2,
  Linkedin,
  MessageCircle,
  Share,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function BlogPostActions({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarkHint, setBookmarkHint] = useState("");
  const [liked, setLiked] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(`kotr-like-${slug}`) === "1";
  });
  const [likeCount, setLikeCount] = useState(0);
  const [likesEnabled, setLikesEnabled] = useState(true);
  const pageUrl = typeof window === "undefined" ? "" : window.location.href;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const deviceStorageKey = "kotr-like-device-id";
  const likeStorageKey = `kotr-like-${slug}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingDeviceId = window.localStorage.getItem(deviceStorageKey);
    const deviceId =
      existingDeviceId ??
      (typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

    if (!existingDeviceId) {
      window.localStorage.setItem(deviceStorageKey, deviceId);
    }

    let cancelled = false;

    async function loadLikes() {
      try {
        const response = await fetch(
          `/api/blog-likes/${slug}?deviceId=${encodeURIComponent(deviceId)}`,
          {
          cache: "no-store",
          }
        );

        if (!response.ok) return;

        const data = (await response.json()) as {
          enabled: boolean;
          count: number;
          liked: boolean;
        };

        if (cancelled) return;
        setLikesEnabled(data.enabled);
        setLikeCount(data.count);
        setLiked(data.liked);
        if (data.liked) {
          window.localStorage.setItem(likeStorageKey, "1");
        } else {
          window.localStorage.removeItem(likeStorageKey);
        }
      } catch {
        if (!cancelled) {
          setLikesEnabled(false);
        }
      }
    }

    void loadLikes();

    return () => {
      cancelled = true;
    };
  }, [likeStorageKey, slug]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  async function handleCopy() {
    if (!pageUrl) return;

    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setIsOpen(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // no-op
    }
  }

  function handleBookmark() {
    if (typeof window === "undefined") return;

    const maybeSidebar = window as Window & {
      sidebar?: { addPanel?: (title: string, url: string, unused?: string) => void };
      external?: { AddFavorite?: (url: string, title: string) => void };
    };

    if (maybeSidebar.sidebar?.addPanel) {
      maybeSidebar.sidebar.addPanel(title, pageUrl, "");
      return;
    }

    if (maybeSidebar.external?.AddFavorite) {
      maybeSidebar.external.AddFavorite(pageUrl, title);
      return;
    }

    const shortcut = navigator.userAgent.includes("Mac") ? "Press Cmd+D to bookmark" : "Press Ctrl+D to bookmark";
    setBookmarkHint(shortcut);
    window.setTimeout(() => setBookmarkHint(""), 2200);
  }

  function handleLike() {
    if (typeof window === "undefined") return;

    const existingDeviceId = window.localStorage.getItem(deviceStorageKey);
    const deviceId =
      existingDeviceId ??
      (typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

    if (!existingDeviceId) {
      window.localStorage.setItem(deviceStorageKey, deviceId);
    }

    if (liked) {
      window.localStorage.removeItem(likeStorageKey);
      setLiked(false);
      setLikeCount((current) => Math.max(0, current - 1));

      void fetch(`/api/blog-likes/${slug}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deviceId }),
      })
        .then(async (response) => {
          if (!response.ok) return null;
          return (await response.json()) as {
            enabled: boolean;
            count: number;
            liked: boolean;
          };
        })
        .then((data) => {
          if (!data) return;
          setLikesEnabled(data.enabled);
          setLikeCount(data.count);
          setLiked(data.liked);
        })
        .catch(() => {
          setLikesEnabled(false);
        });

      return;
    }

    window.localStorage.setItem(likeStorageKey, "1");
    setLiked(true);
    setLikeCount((current) => (likesEnabled ? current + 1 : Math.max(1, current)));

    void fetch(`/api/blog-likes/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ deviceId }),
    })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as {
          enabled: boolean;
          count: number;
          liked: boolean;
        };
      })
      .then((data) => {
        if (!data) return;
        setLikesEnabled(data.enabled);
        setLikeCount(data.count);
        setLiked(data.liked);
        if (!data.enabled) {
          setLikeCount(1);
        }
      })
      .catch(() => {
        setLikesEnabled(false);
        setLikeCount(1);
      });
  }

  const whatsappUrl = pageUrl
    ? `https://wa.me/?text=${encodeURIComponent(`${title} ${pageUrl}`)}`
    : "#";
  const facebookUrl = pageUrl
    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`
    : "#";
  const linkedInUrl = pageUrl
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
    : "#";
  const likeLabel = likeCount === 1 ? "1 like" : `${likeCount} likes`;

  return (
    <div ref={rootRef} className="relative">
      <div className="flex items-start gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsOpen((current) => !current)}
            className="h-9 rounded-full px-3 text-sm"
            aria-label="Share post"
            title="Share post"
          >
            <Share className="size-4" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleBookmark}
            className="h-9 rounded-full px-3 text-sm"
            aria-label="Bookmark post"
            title={bookmarkHint || "Bookmark post"}
          >
            <Bookmark className="size-4" />
          </Button>

          <div className="flex flex-col items-center gap-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleLike}
              className={`h-9 rounded-full px-3 text-sm ${
                liked
                  ? "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground"
                  : ""
              }`}
              aria-label={liked ? "Unlike post" : "Like post"}
              aria-pressed={liked}
              title={liked ? "Unlike post" : "Like post"}
            >
              <Heart
                className={`size-4 ${
                  liked
                    ? "fill-salmon text-salmon"
                    : "text-navy group-hover/button:text-white"
                }`}
              />
            </Button>
            <p className="whitespace-nowrap font-sans text-[11px] leading-none text-navy/55">
              {likeLabel}
            </p>
          </div>
        </div>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+8px)] z-20 w-52 rounded-[1.25rem] border border-white/80 bg-white/95 p-2 shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm">
          <button
            type="button"
            onClick={() => void handleCopy()}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-sans text-sm text-navy transition-colors hover:bg-beige"
          >
            <Link2 className="size-4 text-salmon" />
            <span>{copied ? "Link copied" : "Copy link"}</span>
          </button>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 font-sans text-sm text-navy transition-colors hover:bg-beige"
            onClick={() => setIsOpen(false)}
          >
            <Facebook className="size-4 text-salmon" />
            <span>Facebook</span>
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 font-sans text-sm text-navy transition-colors hover:bg-beige"
            onClick={() => setIsOpen(false)}
          >
            <Linkedin className="size-4 text-salmon" />
            <span>LinkedIn</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 font-sans text-sm text-navy transition-colors hover:bg-beige"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle className="size-4 text-salmon" />
            <span>WhatsApp</span>
          </a>
        </div>
      ) : null}

      {bookmarkHint ? (
        <div className="absolute right-0 top-[calc(100%+8px)] z-20 rounded-xl border border-white/80 bg-white/95 px-3 py-2 font-sans text-xs text-navy shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm">
          {bookmarkHint}
        </div>
      ) : null}
    </div>
  );
}
