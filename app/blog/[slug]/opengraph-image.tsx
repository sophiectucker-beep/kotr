import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { getPostBySlug } from "@/lib/blog";

export const alt = "Kids on the Rock blog post preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface BlogImageProps {
  params: Promise<{
    slug: string;
  }>;
}

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

export default async function Image({ params }: BlogImageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }

  const [goldplayAltBlack, lexendRegular, imageSrc] = await Promise.all([
    fs.readFile(path.join(process.cwd(), "public", "fonts", "GoldplayAlt-Black.ttf")),
    fs.readFile(path.join(process.cwd(), "public", "fonts", "Lexend-Regular.woff")),
    toDataUrl(post.inlineImage ?? post.coverImage ?? "/blog/default-cover.svg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#2d384d",
          padding: "52px 64px",
          fontFamily: "Lexend",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "48%",
            gap: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ea8685",
              fontWeight: 700,
            }}
          >
            Blog
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 58,
              lineHeight: 1.05,
              fontWeight: 800,
              fontFamily: "Goldplay Alt",
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              fontWeight: 400,
              color: "rgba(45,56,77,0.75)",
              fontFamily: "Lexend",
            }}
          >
            {post.excerpt ?? "Useful local ideas and practical family tips."}
          </div>
        </div>

        <div
          style={{
            width: "44%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imageSrc}
            alt=""
            width={420}
            height={420}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Goldplay Alt",
          data: goldplayAltBlack,
          style: "normal",
          weight: 800,
        },
        {
          name: "Lexend",
          data: lexendRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
