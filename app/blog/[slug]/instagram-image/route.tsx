import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";

function getMimeType(filePath: string) {
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  if (filePath.endsWith(".avif")) return "image/avif";
  return "application/octet-stream";
}

async function toDataUrl(publicPath: string) {
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  const file = await fs.readFile(filePath);
  return `data:${getMimeType(filePath)};base64,${file.toString("base64")}`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const previewImage = post.inlineImage ?? post.coverImage;

  const [goldplayAltBold, inlineImageDataUrl] = await Promise.all([
    fs.readFile(path.join(process.cwd(), "public", "fonts", "GoldplayAlt-Black.ttf")),
    previewImage ? toDataUrl(previewImage) : Promise.resolve(null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#2d384d",
          padding: "120px 90px 100px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              display: "flex",
              textAlign: "center",
              fontSize: 86,
              lineHeight: 1.06,
              fontWeight: 700,
              fontFamily: '"Goldplay Alt", ui-sans-serif, system-ui, sans-serif',
              letterSpacing: "-0.04em",
            }}
          >
            {post.title}
          </div>
        </div>

        {inlineImageDataUrl ? (
          <div
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={inlineImageDataUrl}
              alt=""
              width={820}
              height={820}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    ),
    {
      width: 1080,
      height: 1350,
      fonts: [
        {
          name: "Goldplay Alt",
          data: goldplayAltBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
