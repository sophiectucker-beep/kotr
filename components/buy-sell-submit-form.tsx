"use client";

import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  SendHorizonal,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buySellCategories } from "@/lib/buy-sell";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function BuySellSubmitForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);

    if (!files.length) return;

    const nextImages = [...selectedImages, ...files];

    if (nextImages.length > 4) {
      event.currentTarget.value = "";
      setState("error");
      setMessage("Please choose no more than 4 images.");
      return;
    }

    setSelectedImages(nextImages);
    setMessage("");
    if (state === "error") setState("idle");
    event.currentTarget.value = "";
  }

  function removeSelectedImage(indexToRemove: number) {
    setSelectedImages((images) =>
      images.filter((_, index) => index !== indexToRemove)
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    formData.delete("images");

    for (const image of selectedImages) {
      formData.append("images", image);
    }

    try {
      const response = await fetch("/api/buy-sell/submit", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      formRef.current?.reset();
      setSelectedImages([]);
      setState("success");
      setMessage(
        payload.message ??
          "Thank you. Your item has been sent for checking before it appears on the site."
      );
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-10">
      <Link
        href="/buy-sell"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-salmon"
      >
        <ArrowLeft className="size-4" strokeWidth={1.8} />
        Back to buy & sell
      </Link>

      <div className="mt-7 max-w-[42rem]">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
          Submit a baby item
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
          Add your Marketplace listing
        </h1>
        <p className="mt-5 font-sans text-lg leading-8 text-navy/72">
          Paste the Facebook Marketplace link, add the useful bits, and I’ll
          check it before it appears on the site. Item will appear for 30 days;
          if you sell it sooner,{" "}
          <a
            href="mailto:hellokidsontherock@gmail.com?subject=Buy%20and%20sell%20item%20sold"
            className="font-semibold text-salmon underline decoration-salmon/35 underline-offset-4 transition-colors hover:text-navy"
          >
            please let me know
          </a>
          . If not, you can resubmit it!
        </p>
      </div>

      {state === "success" ? (
        <div className="mt-8 rounded-[1.75rem] border border-kotr-green/25 bg-kotr-green/10 p-6 text-center md:p-8">
          <CheckCircle2 className="mx-auto size-12 text-kotr-green" />
          <h2 className="mt-4 text-2xl font-bold text-navy">
            Thank you, it’s been sent.
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] font-sans text-base leading-7 text-navy/68">
            I’ll check it before it appears on the buy/sell page.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/buy-sell">Back to buy & sell</Link>
            </Button>
          </div>
        </div>
      ) : (
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        <Field label="Facebook Marketplace link" className="md:col-span-2">
          <input
            name="marketplaceUrl"
            type="url"
            required
            placeholder="https://www.facebook.com/marketplace/item/..."
            className={inputClassName}
          />
        </Field>

        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <Field label="Item title">
          <input
            name="title"
            required
            maxLength={90}
            placeholder="Bugaboo pram, cot, bundle of sleepsuits..."
            className={inputClassName}
          />
        </Field>

        <Field label="Price">
          <span className="relative block">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-base font-semibold text-navy/55">
              £
            </span>
            <input
              name="price"
              required
              maxLength={30}
              inputMode="decimal"
              placeholder="40, 120, free..."
              className={`${inputClassName} pl-8`}
            />
          </span>
        </Field>

        <Field label="Category">
          <select
            name="category"
            required
            className={`${inputClassName} appearance-none bg-[linear-gradient(45deg,transparent_50%,#2d384d_50%),linear-gradient(135deg,#2d384d_50%,transparent_50%)] bg-[length:6px_6px,6px_6px] bg-[position:calc(100%-24px)_50%,calc(100%-18px)_50%] bg-no-repeat pr-12`}
          >
            {buySellCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Seller name">
          <input
            name="sellerName"
            required
            maxLength={70}
            placeholder="Name people will recognise from the listing"
            className={inputClassName}
          />
        </Field>

        <Field label="Short description" className="md:col-span-2">
          <textarea
            name="description"
            required
            maxLength={500}
            rows={5}
            placeholder="Condition, size, what’s included, pickup notes..."
            className={`${inputClassName} min-h-32 resize-y`}
          />
        </Field>

        <Field
          label="Upload images"
          helper="Optional. Up to 4 images. JPG, PNG or WebP, up to 4MB each."
          className="md:col-span-2"
        >
          <input
            name="images"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
            className="block w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 font-sans text-sm text-navy file:mr-4 file:rounded-xl file:border-0 file:bg-salmon file:px-4 file:py-2 file:font-sans file:text-sm file:font-semibold file:text-white"
          />
          {selectedImages.length ? (
            <div className="mt-3 rounded-2xl border border-navy/8 bg-beige/55 p-3">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy/45">
                Selected images
              </p>
              <ul className="mt-2 space-y-1">
                {selectedImages.map((image, index) => (
                  <li
                    key={`${image.name}-${image.size}-${image.lastModified}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-3 py-2 font-sans text-sm leading-6 text-navy/70"
                  >
                    <span className="min-w-0 flex-1 truncate">{image.name}</span>
                    <button
                      type="button"
                      onClick={() => removeSelectedImage(index)}
                      className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-navy/45 transition-colors hover:bg-salmon/10 hover:text-salmon"
                      aria-label={`Remove ${image.name}`}
                    >
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Field>

        {message ? (
          <div className="md:col-span-2 rounded-[1.5rem] border border-salmon/25 bg-salmon/10 p-4 font-sans text-sm leading-7 text-navy">
            {message}
          </div>
        ) : null}

        <div className="md:col-span-2">
          <Button type="submit" disabled={state === "submitting"}>
            {state === "submitting" ? (
              <>
                Sending
                <Loader2 className="size-5 animate-spin" />
              </>
            ) : (
              <>
                Submit item
                <SendHorizonal className="size-5" />
              </>
            )}
          </Button>
        </div>
      </form>
      )}
    </section>
  );
}

function Field({
  label,
  helper,
  className,
  children,
}: {
  label: string;
  helper?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="font-sans text-sm font-semibold text-navy">
        {label}
      </span>
      {helper ? (
        <span className="ml-2 font-sans text-xs text-navy/45">
          ({helper})
        </span>
      ) : null}
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 font-sans text-base text-navy outline-none transition-colors placeholder:text-navy/30 focus:border-salmon";
