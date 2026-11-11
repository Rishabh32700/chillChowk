import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { Footer, Newsletter, OrderBar } from "@/components/SiteChrome";
import { JsonLd } from "@/components/ui";
import { SITE_URL, cafeJsonLd } from "@/lib/site";
import "./globals.css";

// Loaded from Google Fonts at runtime (as the original site did). next/font/google was dropped
// because its build-time download crashed on Vercel when Google returned extension-less font URLs.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&family=Tiro+Devanagari+Hindi&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chill Chowk",
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" }, apple: "/apple-touch-icon.png" },
  other: { "geo.region": "IN-HR", "geo.placename": "Gurugram" },
};

export const viewport: Viewport = { themeColor: "#0F413C" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>
        <JsonLd data={cafeJsonLd} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Newsletter />
        <Footer />
        <OrderBar />
        <Reveal />
      </body>
    </html>
  );
}
