import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page not found · Chill Chowk" },
  description: "This page does not exist. Head back to Chill Chowk.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="page-hero" style={{ padding: "160px 0" }} aria-labelledby="nf-h">
      <div className="narrow">
        <p className="eyebrow">404</p>
        <h1 id="nf-h" className="display-xl">
          Rasta <span className="it">bhatak gaye?</span>
        </h1>
        <p className="lead" style={{ margin: "0 auto" }}>
          This page doesn&apos;t exist. Let&apos;s get you back to the chowk.
        </p>
        <div className="links label">
          <Link className="tlink cu" href="/">Back home ›</Link>
          <Link className="tlink" href="/menu">See the menu ›</Link>
        </div>
      </div>
    </section>
  );
}
