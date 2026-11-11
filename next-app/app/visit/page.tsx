import { ContactForm } from "@/components/Forms";
import HoursTable from "@/components/HoursTable";
import OpenStatus from "@/components/OpenStatus";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Visit · Chill Chowk, Sector [XX] Gurgaon",
  description: "Address, opening hours and directions for Chill Chowk café in Sector [XX], Gurgaon. Contact us for parties and bulk orders.",
  path: "/visit",
});

export default function Visit() {
  return (
    <>
      <section className="page-hero" aria-labelledby="visit-h">
        <div className="narrow">
          <p className="eyebrow">Visit</p>
          <h1 id="visit-h" className="display-xl">
            Find the <span className="it">chowk</span>
          </h1>
          <OpenStatus />
        </div>
      </section>

      <section style={{ padding: "0 0 120px" }}>
        <div className="wrap split" style={{ alignItems: "stretch" }}>
          <div className="stack rv">
            <dl className="info">
              <div><dt>Address</dt><dd>[Shop no., Market name]<br />Sector [XX], Gurgaon, Haryana [PIN]</dd></div>
              <div><dt>Getting here</dt><dd>[Nearest metro: X, 8 min walk] · [Parking: basement / street]</dd></div>
              <div><dt>Call</dt><dd>[+91 phone]</dd></div>
              <div><dt>Email</dt><dd>[hello@yourdomain.in]</dd></div>
            </dl>
            <a className="btn" style={{ alignSelf: "flex-start" }} href="https://maps.google.com/">Get directions</a>
          </div>
          <div className="mapph rv" role="img" aria-label="Map placeholder">
            <div className="r1" />
            <div className="r2" />
            <div className="pin" />
            <span className="cap">[Embed Google Map here]</span>
          </div>
        </div>
      </section>

      <section className="sec sec-top" aria-labelledby="hours-h">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div className="stack rv">
            <p className="eyebrow">Opening hours</p>
            <h2 id="hours-h" className="display">Open late, most days</h2>
            <p className="muted" style={{ margin: 0 }}>
              Kitchen closes 30 minutes before we do. Brew Rush delivery runs [11 am – 11 pm].
            </p>
          </div>
          <div className="rv">
            <HoursTable />
          </div>
        </div>
      </section>

      <section className="sec light" aria-labelledby="contact-h">
        <div className="narrow rv" style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 24 }}>
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-h" className="display" style={{ color: "var(--teal)" }}>Birthdays, team outings, bulk orders</h2>
          <p className="muted" style={{ margin: 0 }}>Tell us what you&apos;re planning and we&apos;ll get back within a day.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
