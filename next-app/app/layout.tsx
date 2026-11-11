import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Tiro_Devanagari_Hindi } from "next/font/google";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { Footer, Newsletter, OrderBar } from "@/components/SiteChrome";
import { JsonLd } from "@/components/ui";
import { SITE_URL, cafeJsonLd } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });
const deva = Tiro_Devanagari_Hindi({ subsets: ["devanagari", "latin"], weight: "400", variable: "--font-deva", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chill Chowk",
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" }, apple: "/apple-touch-icon.png" },
  other: { "geo.region": "IN-HR", "geo.placename": "Gurugram" },
};

export const viewport: Viewport = { themeColor: "#0F413C" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${deva.variable}`}>
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
