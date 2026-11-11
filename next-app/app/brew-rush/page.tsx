import { JsonLd, MenuItemRow, Ornament, Ph } from "@/components/ui";
import { RUSH_ITEMS } from "@/lib/menu";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Brew Rush · 10-minute cold coffee delivery · Chill Chowk",
  description: "Brew Rush delivers Chill Chowk cold coffee and shakes in about 10 minutes across Sector [XX], Gurgaon, via Swiggy and Zomato.",
  path: "/brew-rush",
});

const STEPS = [
  { title: "Open Swiggy or Zomato", text: 'Search "Brew Rush" or "Chill Chowk". On Swiggy, look for the Bolt 10-minute tag.' },
  { title: "Pick your drink", text: "The quick menu below is built for speed: everything is ready in under two minutes." },
  { title: "Still cold at your door", text: "Sealed, insulated and on its way. Usually around ten minutes within our delivery zone." },
];

const FAQ = [
  {
    q: "Is it really ten minutes?",
    a: "Within our delivery zone, most orders arrive in about ten minutes. Busy evenings and rain can add a few minutes; the app always shows a live estimate.",
  },
  {
    q: "Will my drink still be cold?",
    a: "Yes. Drinks are sealed and packed in insulated bags, and with a ten-minute trip there is no time to warm up.",
  },
  {
    q: "Why can't I order everything on Brew Rush?",
    a: "Brew Rush only carries items we can make in under two minutes, so speed never costs quality. The full menu is available for regular delivery and in the café.",
  },
  {
    q: "Can I order directly from you?",
    a: "[Not yet / Yes, on WhatsApp at +91 …]. For now, Swiggy and Zomato are the fastest way.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function BrewRush() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="hero" style={{ minHeight: 560 }} aria-labelledby="rush-h">
        <Ph variant="p2" label="Photo placeholder: a delivery bag with a cold coffee">[Photo: Brew Rush bag + a sweating cold coffee]</Ph>
        <div className="shade" aria-hidden="true" />
        <div className="in">
          <p className="eyebrow">Brew Rush · 10-minute delivery</p>
          <h1 id="rush-h" className="display-xl">
            Thanda, in <span className="it">ten minutes.</span>
          </h1>
          <p className="lead" style={{ margin: 0 }}>
            Can&apos;t make it to the chowk? Brew Rush brings your cold coffee and shakes in about ten minutes within [X km] of Sector [XX], still cold.
          </p>
          <div className="links label">
            <a className="tlink cu" href="https://www.swiggy.com/">Order on Swiggy ›</a>
            <a className="tlink" href="https://www.zomato.com/">Order on Zomato ›</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div className="rv" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 12 }}>
            <p className="eyebrow">How it works</p>
            <h2 className="display">Three steps, ten minutes</h2>
          </div>
          <div className="steps rv">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="num">{i + 1}</span>
                <h3 style={{ fontSize: 28 }}>{s.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-top" aria-labelledby="rq-h">
        <div className="wrap" style={{ maxWidth: 1100, display: "flex", flexDirection: "column", alignItems: "center", gap: 48 }}>
          <div className="msec-h">
            <Ornament />
            <h2 id="rq-h" style={{ fontSize: 48, lineHeight: "52px" }}>The quick menu</h2>
            <p className="sub">everything here travels in ten minutes</p>
          </div>
          <ul className="items">
            {RUSH_ITEMS.map((it) => (
              <MenuItemRow key={it.name} item={it} />
            ))}
          </ul>
        </div>
      </section>

      <section className="sec light" aria-labelledby="zone-h">
        <div className="wrap split">
          <div className="stack rv">
            <p className="eyebrow">Delivery zone</p>
            <h2 id="zone-h" className="display" style={{ color: "var(--teal)" }}>Within [X km] of the chowk</h2>
            <p className="muted" style={{ margin: 0, maxWidth: 440 }}>
              We deliver to [Sector XX, Sector YY, DLF Phase Z, …]. Outside this area, the app will still show us, just with a longer delivery time.
            </p>
            <p className="muted" style={{ margin: 0 }}>Delivery hours: [11 am – 11 pm, daily]</p>
          </div>
          <Ph style={{ minHeight: 380, background: "#DCDAD0", color: "var(--slate)" }} label="Map placeholder of the delivery zone">
            [Map of the delivery radius]
          </Ph>
        </div>
      </section>

      <section className="sec" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h" className="display rv" style={{ textAlign: "center", marginBottom: 48 }}>Questions</h2>
          <div className="faq rv">
            {FAQ.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
