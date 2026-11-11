import Link from "next/link";
import OpenStatus from "./OpenStatus";
import { NewsletterForm } from "./Forms";

export function Newsletter() {
  return (
    <section className="sec sec-top" aria-labelledby="news-h">
      <div className="narrow rv" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, maxWidth: 640 }}>
        <h2 id="news-h" className="h2">Stay in the loop</h2>
        <p className="muted" style={{ margin: 0 }}>
          New drinks, the Wok Rush launch and the odd chowk evening. No spam.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="fcols">
          <div className="fcol">
            <p className="eyebrow">Opening hours</p>
            <p><OpenStatus /></p>
            <p>[Mon–Thu · 11 am – 11 pm]<br />[Fri–Sun · 10 am – midnight]</p>
          </div>
          <div className="fcol">
            <p className="eyebrow">Find us</p>
            <p>[Shop no., Market name]<br />Sector [XX], Gurgaon [PIN]</p>
            <Link className="label" href="/visit">Directions ›</Link>
          </div>
          <div className="fcol">
            <p className="eyebrow">Contact</p>
            <p>[+91 phone]<br />[hello@yourdomain.in]</p>
          </div>
          <div className="fcol">
            <p className="eyebrow">Explore</p>
            <Link href="/menu">Menu</Link>
            <Link href="/brew-rush">Brew Rush</Link>
            <Link href="/story">Our story</Link>
            <a href="https://instagram.com/">Instagram [@handle]</a>
          </div>
        </div>
        <div className="fbase">
          <span className="wm">Chill Chowk</span>
          <span className="deva" style={{ color: "var(--copper)", fontSize: 14 }}>चिल चौक</span>
          <small>© 2026 Chill Chowk · FSSAI Lic. No. [__________]</small>
        </div>
      </div>
    </footer>
  );
}

export function OrderBar() {
  return (
    <nav className="obar" aria-label="Quick actions">
      <Link className="o" href="/brew-rush">Order · 10 min</Link>
      <Link href="/visit">Directions ›</Link>
    </nav>
  );
}
