import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/language-provider";
import { LinkTargetManager } from "@/components/link-target-manager";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kidsontherock.gi"),
  alternates: {
    types: {
      "application/rss+xml": [
        {
          url: "/feed.xml",
          title: "Kids on the Rock Blog RSS Feed",
        },
      ],
    },
  },
  title: "Kids on the Rock — Gibraltar",
  description:
    "A handy little hub for Gibraltar families. Useful numbers, forms, clubs, things to do, and other bits all in one place—at last!",
  openGraph: {
    title: "Kids on the Rock — Gibraltar",
    description:
      "A handy little hub for Gibraltar families. Useful numbers, forms, clubs, things to do, and other bits all in one place—at last!",
    siteName: "Kids on the Rock",
    type: "website",
    url: "https://kidsontherock.gi",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Kids on the Rock homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids on the Rock — Gibraltar",
    description:
      "A handy little hub for Gibraltar families. Useful numbers, forms, clubs, things to do, and other bits all in one place—at last!",
    images: ["/og-home.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const facebookAppId = process.env.FACEBOOK_APP_ID;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kids on the Rock",
    url: "https://kidsontherock.gi",
    logo: "https://kidsontherock.gi/icon.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hellokidsontherock@gmail.com",
      contactType: "customer support",
      areaServed: "GI",
    },
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kids on the Rock",
    url: "https://kidsontherock.gi",
    description:
      "A handy little hub for Gibraltar families. Useful numbers, forms, clubs, things to do, and other bits all in one place—at last!",
  };

  return (
    <html lang="en">
      <head>
        {facebookAppId ? (
          <meta property="fb:app_id" content={facebookAppId} />
        ) : null}
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <LinkTargetManager />
        <Analytics />
      </body>
    </html>
  );
}
