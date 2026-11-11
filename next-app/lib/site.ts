import type { Metadata } from "next";

// Change this once the real domain is live: canonical links, sitemap and share images all use it.
export const SITE_URL = "https://chillchowk.vercel.app";

export const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/brew-rush", label: "Brew Rush" },
  { href: "/story", label: "Our story" },
  { href: "/visit", label: "Visit" },
];

// [day, opens, closes] in 24h time. "24:00" means midnight. Index matches Date.getDay().
export const HOURS: [string, string, string][] = [
  ["Sunday", "10:00", "24:00"],
  ["Monday", "11:00", "23:00"],
  ["Tuesday", "11:00", "23:00"],
  ["Wednesday", "11:00", "23:00"],
  ["Thursday", "11:00", "23:00"],
  ["Friday", "11:00", "24:00"],
  ["Saturday", "10:00", "24:00"],
];

export function toMinutes(t: string) {
  const [h, m] = t.split(":");
  return Number(h) * 60 + Number(m);
}

export function formatTime(t: string) {
  const [hs, mm] = t.split(":");
  let h = Number(hs);
  if (h === 24) return "midnight";
  const ap = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${h}${mm !== "00" ? ":" + mm : ""} ${ap}`;
}

/** Builds the per-page metadata the static site had in each <head>. */
export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false } : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: "Chill Chowk",
      locale: "en_IN",
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Chill Chowk, a café in Gurgaon" }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${SITE_URL}/#cafe`,
  name: "Chill Chowk",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  telephone: "+91-XXXXXXXXXX",
  email: "hello@yourdomain.in",
  priceRange: "₹₹",
  servesCuisine: ["Coffee", "Cold coffee", "Milkshakes", "Snacks"],
  acceptsReservations: false,
  menu: `${SITE_URL}/menu`,
  hasMenu: `${SITE_URL}/menu`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Shop no., Market name]",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "[PIN]",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.4595, longitude: 77.0266 },
  openingHoursSpecification: HOURS.map(([day, opens, closes]) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens,
    closes: closes === "24:00" ? "23:59" : closes,
  })),
  sameAs: ["https://instagram.com/[handle]"],
};
