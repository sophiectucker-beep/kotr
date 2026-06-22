import { NextResponse } from "next/server";

import {
  buySellCategories,
  getBuySellCategoryLabel,
  type BuySellCategory,
} from "@/lib/buy-sell";

export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 4 * 1024 * 1024;
const MAX_IMAGE_COUNT = 4;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

interface BuySellSubmission {
  marketplaceUrl: string;
  title: string;
  price: string;
  category: BuySellCategory;
  description: string;
  sellerName: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const submission = parseSubmission(formData);
    const images = getImages(formData);

    for (const image of images) {
      validateImage(image);
    }

    await sendSubmissionEmail(submission, images);

    return NextResponse.json({
      message:
        "Thank you. Your item has been sent for checking before it appears on the site.",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to send this item right now.";
    const status =
      message.includes("configured") || message.includes("email") ? 503 : 400;

    return NextResponse.json({ message }, { status });
  }
}

function parseSubmission(formData: FormData): BuySellSubmission {
  const honeypot = formData.get("company");

  if (typeof honeypot === "string" && honeypot.trim()) {
    throw new Error("Unable to send this item right now.");
  }

  const marketplaceUrl = getRequiredString(formData, "marketplaceUrl", 500);
  const title = getRequiredString(formData, "title", 90);
  const price = normalizePrice(getRequiredString(formData, "price", 30));
  const description = getRequiredString(formData, "description", 500);
  const sellerName = getRequiredString(formData, "sellerName", 70);
  const category = getRequiredString(formData, "category", 40);

  if (!isFacebookMarketplaceUrl(marketplaceUrl)) {
    throw new Error("Please paste a Facebook Marketplace listing link.");
  }

  const allowedCategories = new Set(
    buySellCategories.map((option) => option.value)
  );

  if (!allowedCategories.has(category as BuySellCategory)) {
    throw new Error("Please choose a valid category.");
  }

  return {
    marketplaceUrl,
    title,
    price,
    category: category as BuySellCategory,
    description,
    sellerName,
  };
}

function getRequiredString(
  formData: FormData,
  key: string,
  maxLength: number
) {
  const value = formData.get(key);

  if (typeof value !== "string" || !value.trim()) {
    throw new Error("Please fill in all required fields.");
  }

  const trimmed = value.trim();

  if (trimmed.length > maxLength) {
    throw new Error("One of the fields is too long.");
  }

  return trimmed;
}

function normalizePrice(value: string) {
  const trimmed = value.trim();

  if (trimmed.toLowerCase() === "free") {
    return "Free";
  }

  return trimmed.startsWith("£") ? trimmed : `£${trimmed}`;
}

function isFacebookMarketplaceUrl(value: string) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, "");
    const isFacebookHost = ["facebook.com", "m.facebook.com", "fb.com"].includes(
      hostname
    );

    return (
      isFacebookHost &&
      (url.pathname.includes("/marketplace/") ||
        url.pathname.startsWith("/share/"))
    );
  } catch {
    return false;
  }
}

function getImages(formData: FormData) {
  const images = formData
    .getAll("images")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (images.length > MAX_IMAGE_COUNT) {
    throw new Error("Please upload no more than 4 images.");
  }

  return images;
}

function validateImage(image: File) {
  if (!ALLOWED_IMAGE_TYPES.has(image.type)) {
    throw new Error("Please upload a JPG, PNG or WebP image.");
  }

  if (image.size > MAX_IMAGE_SIZE) {
    throw new Error("Please upload an image smaller than 4MB.");
  }
}

async function sendSubmissionEmail(
  submission: BuySellSubmission,
  images: File[]
) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BUY_SELL_SUBMISSIONS_TO;
  const from =
    process.env.BUY_SELL_SUBMISSIONS_FROM ??
    "Kids on the Rock <onboarding@resend.dev>";

  if (!apiKey || !to) {
    throw new Error(
      "Buy/sell submissions are not configured yet. Please try again later."
    );
  }

  const attachments = await Promise.all(images.map(fileToAttachment));

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Buy/sell submission: ${submission.title}`,
      html: renderEmailHtml(submission),
      text: renderEmailText(submission),
      attachments,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to email this submission right now.");
  }
}

async function fileToAttachment(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const content = Buffer.from(arrayBuffer).toString("base64");

  return {
    filename: file.name || "baby-item-image",
    content,
  };
}

function renderEmailHtml(submission: BuySellSubmission) {
  const rows = [
    ["Title", submission.title],
    ["Price", submission.price],
    ["Category", getBuySellCategoryLabel(submission.category)],
    ["Seller", submission.sellerName],
    ["Contact", "Contact via Facebook Marketplace listing"],
    ["Marketplace link", submission.marketplaceUrl],
    ["Uploaded images", "Attached to this email if provided"],
    ["Description", submission.description],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #2d384d;">
      <h1>New baby buy/sell submission</h1>
      <p>This item is pending review. If approved, add it manually to <code>approvedBuySellItems</code>.</p>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #eee; font-weight: bold;">${escapeHtml(label)}</td>
                <td style="border: 1px solid #eee;">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

function renderEmailText(submission: BuySellSubmission) {
  return [
    "New baby buy/sell submission",
    "",
    `Title: ${submission.title}`,
    `Price: ${submission.price}`,
    `Category: ${getBuySellCategoryLabel(submission.category)}`,
    `Seller: ${submission.sellerName}`,
    "Contact: Contact via Facebook Marketplace listing",
    `Marketplace link: ${submission.marketplaceUrl}`,
    "Uploaded images: attached to this email if provided",
    "",
    "Description:",
    submission.description,
    "",
    "If approved, add it manually to approvedBuySellItems.",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
