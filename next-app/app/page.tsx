import Link from "next/link";
import OpenStatus from "@/components/OpenStatus";
import { Ornament, Ph } from "@/components/ui";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Chill Chowk · Café in Sector [XX], Gurgaon",
  description:
    "Chill Chowk is a neighbourhood café in Gurgaon for kadak cold coffee, thick shakes and slow evenings. Dine in, or order on Brew Rush in 10 minutes.",
  path: "/",
});

const col = (gap: number, extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap,
  ...extra,
});

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-h">
        <Ph label="Photo placeholder: the café in warm evening light">[Full-bleed hero photo: café interior, warm low light, people at tables]</Ph>
        <div className="shade" aria-hidden="true" />
        <div className="in">
          <p className="eyebrow">Sector [XX] · Gurgaon</p>
          <h1 id="hero-h" className="display-xl">
            Fursat se <span className="it">baitho.</span>
          </h1>
          <p className="lead" style={{ margin: 0 }}>
            A neighbourhood café for slow evenings and kadak cold coffee. Sit with your people, or have it brought to you in ten minutes.
          </p>
          <div className="links label">
            <Link className="tlink cu" href="/brew-rush">Order on Brew Rush ›</Link>
            <Link className="tlink" href="/menu">See the menu ›</Link>
          </div>
          <OpenStatus />
        </div>
      </section>

      <section className="sec">
        <div className="narrow rv" style={col(24)}>
          <Ornament />
          <h2 className="h2">
            Every city needs a chowk. A corner where the day slows down, the coffee is cold, and nobody is in a hurry to leave.
          </h2>
          <p className="muted" style={{ margin: 0 }}>Cold coffee and shakes now. Desi Chinese soon.</p>
        </div>
      </section>

      <section aria-label="Gallery" style={{ padding: "0 0 120px" }}>
        <div className="wrap">
          <div className="gallery rv">
            <Ph>[Corner table, evening]</Ph>
            <Ph variant="p2">[Cold coffee pour]</Ph>
            <Ph variant="p3">[Friends mid-laugh]</Ph>
            <Ph variant="p2">[Shake close-up]</Ph>
            <Ph variant="p3">[The counter]</Ph>
            <Ph>[Street outside at night]</Ph>
          </div>
        </div>
      </section>

      <section className="sec sec-top" aria-labelledby="drinks-h">
        <div className="wrap split">
          <Ph className="rv" style={{ height: 600 }} label="Photo placeholder: cold coffee on dark stone">
            [Photo: one cold coffee, dark stone, side light]
          </Ph>
          <div className="stack rv">
            <p className="eyebrow">Our drinks</p>
            <h2 id="drinks-h" className="display">
              Kadak, <span className="it">thanda</span>, made slowly.
            </h2>
            <p className="lead" style={{ margin: 0 }}>
              Our cold coffee starts with [your bean / blend], pulled fresh for every glass and shaken over ice. The shakes are thick enough to need a spoon. Nothing sits waiting.
            </p>
            <ul className="mini">
              {["Kadak Cold Coffee", "Chowk Special Shake", "Hazelnut Cold Brew"].map((n) => (
                <li key={n}>
                  <span className="n">{n}</span>
                  <span className="p">₹[ ]</span>
                </li>
              ))}
            </ul>
            <Link className="tlink cu label" style={{ alignSelf: "flex-start" }} href="/menu">See the full menu ›</Link>
          </div>
        </div>
      </section>

      <section className="sec light" aria-label="Our story">
        <div className="narrow rv" style={col(32, { maxWidth: 900 })}>
          <span className="deva" style={{ fontSize: 32, lineHeight: "40px", color: "var(--copper-ink)" }}>चिल चौक</span>
          <blockquote className="quote">
            “I wanted a place where a cold coffee comes with a long conversation, not a bill on the table in ten minutes.”
          </blockquote>
          <p className="eyebrow" style={{ color: "var(--slate)" }}>[Founder name] · Founder</p>
          <Link className="tlink label" href="/story">Read our story ›</Link>
        </div>
      </section>

      <section className="sec" aria-labelledby="family-h">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div className="rv" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 12 }}>
            <p className="eyebrow">The Chowk family</p>
            <h2 id="family-h" className="display">Sit in, or have it brought to you</h2>
          </div>
          <div className="cards rv">
            <article className="card">
              <Ph>[Café interior]</Ph>
              <div className="body">
                <p className="eyebrow" style={{ fontSize: 11 }}>Dine in</p>
                <h3 className="h3">Chill Chowk</h3>
                <p className="muted" style={{ margin: 0 }}>The café. Long evenings, cold coffee, good company.</p>
                <Link className="tlink label" href="/visit">Visit us ›</Link>
              </div>
            </article>
            <article className="card">
              <Ph variant="p2">[Delivery bag + drink]</Ph>
              <div className="body">
                <p className="eyebrow" style={{ fontSize: 11 }}>10-minute delivery</p>
                <h3 className="h3">Brew Rush</h3>
                <p className="muted" style={{ margin: 0 }}>Cold coffee and shakes delivered in about ten minutes, still cold.</p>
                <Link className="tlink label" href="/brew-rush">Order now ›</Link>
              </div>
            </article>
            <article className="card">
              <Ph variant="p3">[Noodles in a wok]</Ph>
              <div className="body">
                <p className="eyebrow" style={{ fontSize: 11 }}>Coming soon</p>
                <h3 className="h3">
                  Wok <span className="it">Rush</span>
                </h3>
                <p className="muted" style={{ margin: 0 }}>Hakka noodles, momos and desi Chinese from the same kitchen.</p>
                <a className="tlink label" href="#news-h">Get notified ›</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
