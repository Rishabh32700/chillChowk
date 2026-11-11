import MenuBrowser from "@/components/MenuBrowser";
import { JsonLd } from "@/components/ui";
import { MENU } from "@/lib/menu";
import { SITE_URL, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Menu · Chill Chowk Gurgaon",
  description: "Cold coffee, shakes and small plates at Chill Chowk, Gurgaon. Filter for Brew Rush 10-minute delivery or bestsellers.",
  path: "/menu",
});

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Chill Chowk menu",
  url: `${SITE_URL}/menu`,
  hasMenuSection: MENU.map((s) => ({
    "@type": "MenuSection",
    name: s.title,
    hasMenuItem: s.items.map((i) => ({ "@type": "MenuItem", name: i.name, description: i.description })),
  })),
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuJsonLd} />
      <MenuBrowser
        intro={
          <>
            <p className="eyebrow">Made to order</p>
            <h1 id="menu-h" className="display-xl">
              The <span className="it">menu</span>
            </h1>
            <p className="lead" style={{ margin: "0 auto" }}>
              Everything is made when you order it. Items marked Brew Rush can also come to you in about ten minutes.
            </p>
          </>
        }
      />
    </>
  );
}
