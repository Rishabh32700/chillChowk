import { Ph } from "@/components/ui";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Our story · Chill Chowk",
  description: "The story behind Chill Chowk, a neighbourhood café in Gurgaon built around fursat, cold coffee and long conversations.",
  path: "/story",
});

const PROMISES = [
  { title: "Made, not mixed", text: "Every coffee is pulled fresh and every shake blended to order. No pre-made batches waiting in a fridge." },
  { title: "Stay as long as you like", text: "No table timers, no rush. A chowk is for sitting, talking and ordering one more round." },
  { title: "Fast when you need it", text: "When you can't come to us, Brew Rush brings it in ten minutes, still cold." },
];

const TEAM: { role: string; variant?: "p2" | "p3" }[] = [
  { role: "Founder" },
  { role: "Head barista", variant: "p2" },
  { role: "Kitchen", variant: "p3" },
];

const heading: React.CSSProperties = { textAlign: "center", display: "flex", flexDirection: "column", gap: 12 };

export default function Story() {
  return (
    <>
      <section className="page-hero" aria-labelledby="story-h">
        <div className="narrow">
          <p className="eyebrow">Our story</p>
          <h1 id="story-h" className="display-xl">
            Why a <span className="it">chowk?</span>
          </h1>
          <p className="lead" style={{ margin: "0 auto" }}>
            Every Indian neighbourhood has one: the crossing where people stop, meet and stay longer than they meant to. We wanted to build that, with better coffee.
          </p>
        </div>
      </section>

      <section aria-label="Photo" style={{ padding: "0 0 120px" }}>
        <div className="wrap">
          <Ph className="rv" style={{ height: 560 }} label="Photo placeholder: founder at the counter">
            [Photo: you behind the counter, evening light]
          </Ph>
        </div>
      </section>

      <section className="sec sec-top">
        <div className="wrap split">
          <div className="stack rv">
            <p className="eyebrow">The beginning</p>
            <h2 className="display">From a cold coffee craving to a corner of our own</h2>
          </div>
          <div className="stack rv">
            <p className="lead" style={{ margin: 0 }}>
              [Two or three sentences in your own words: where the idea came from, the first recipe, the first customers. Keep it honest and specific: a real moment beats a mission statement.]
            </p>
            <p className="lead" style={{ margin: 0 }}>
              [One more paragraph: why Gurgaon, why this sector, and what you want people to feel when they walk in.]
            </p>
          </div>
        </div>
      </section>

      <section className="sec light" aria-label="Founder quote">
        <div className="narrow rv" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, maxWidth: 900 }}>
          <span className="deva" style={{ fontSize: 32, lineHeight: "40px", color: "var(--copper-ink)" }}>फ़ुर्सत</span>
          <blockquote className="quote">
            “Fursat is the rarest thing in this city. We just want to give people a little of it, with a cold coffee on the side.”
          </blockquote>
          <p className="eyebrow" style={{ color: "var(--slate)" }}>[Founder name] · Founder</p>
        </div>
      </section>

      <section className="sec" aria-labelledby="val-h">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div className="rv" style={heading}>
            <p className="eyebrow">What we care about</p>
            <h2 id="val-h" className="display">Three promises</h2>
          </div>
          <div className="steps rv">
            {PROMISES.map((p) => (
              <div className="step" key={p.title}>
                <h3 style={{ fontSize: 30 }}>{p.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-top" aria-labelledby="team-h">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div className="rv" style={heading}>
            <p className="eyebrow">The team</p>
            <h2 id="team-h" className="display">The people behind the counter</h2>
          </div>
          <div className="cards rv">
            {TEAM.map((t) => (
              <article className="card" key={t.role}>
                <Ph variant={t.variant} style={{ height: 340 }}>[Team photo]</Ph>
                <div className="body">
                  <h3 className="h3">[Name]</h3>
                  <p className="muted" style={{ margin: 0 }}>{t.role} · [one line]</p>
                </div>
              </article>
            ))}
          </div>
          <p className="muted rv" style={{ textAlign: "center", margin: 0 }}>
            Want to work with us? Write to [jobs@yourdomain.in].
          </p>
        </div>
      </section>
    </>
  );
}
