import { NextResponse } from "next/server";

import {
  addBlogLike,
  getBlogLikeStateForDevice,
  removeBlogLike,
} from "@/lib/blog-likes";

export const dynamic = "force-dynamic";

function sanitizeSlug(value: string) {
  return value.replace(/[^a-z0-9-]/gi, "").toLowerCase();
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const safeSlug = sanitizeSlug(slug);

  if (!safeSlug) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  const deviceId = new URL(request.url).searchParams.get("deviceId")?.trim();
  const state = await getBlogLikeStateForDevice(safeSlug, deviceId);
  return NextResponse.json(state);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const safeSlug = sanitizeSlug(slug);

  if (!safeSlug) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  const body = (await request.json().catch(() => null)) as
    | { deviceId?: string }
    | null;
  const deviceId = body?.deviceId?.trim();

  if (!deviceId) {
    return NextResponse.json({ error: "Missing device id" }, { status: 400 });
  }

  const result = await addBlogLike(safeSlug, deviceId);
  return NextResponse.json(result);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const safeSlug = sanitizeSlug(slug);

  if (!safeSlug) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  const body = (await request.json().catch(() => null)) as
    | { deviceId?: string }
    | null;
  const deviceId = body?.deviceId?.trim();

  if (!deviceId) {
    return NextResponse.json({ error: "Missing device id" }, { status: 400 });
  }

  const result = await removeBlogLike(safeSlug, deviceId);
  return NextResponse.json(result);
}
