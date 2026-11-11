"use client";

import { useEffect, useState } from "react";
import { MENU } from "@/lib/menu";
import { MenuItemRow, Ornament } from "./ui";

type Filter = "all" | "rush" | "best";
const FILTERS: { f: Filter; label: string }[] = [
  { f: "all", label: "Everything" },
  { f: "rush", label: "Brew Rush · 10 min" },
  { f: "best", label: "Bestsellers" },
];

/** Filter buttons + menu sections. The chosen filter is remembered in localStorage. */
export default function MenuBrowser({ intro }: { intro: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cc-filter") as Filter | null;
      if (saved && FILTERS.some((x) => x.f === saved)) setFilter(saved);
    } catch {}
  }, []);

  const choose = (f: Filter) => {
    setFilter(f);
    try {
      localStorage.setItem("cc-filter", f);
    } catch {}
  };

  return (
    <>
      <section className="page-hero" aria-labelledby="menu-h">
        <div className="narrow">
          {intro}
          <div className="filters" role="group" aria-label="Filter the menu">
            {FILTERS.map(({ f, label }) => (
              <button key={f} type="button" aria-pressed={filter === f} onClick={() => choose(f)}>
                {label}
              </button>
            ))}
          </div>
          <nav className="label" aria-label="Menu sections" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 28px" }}>
            {MENU.map((s) => (
              <a key={s.id} className="tlink" href={`#${s.id}`}>
                {s.title.charAt(0) + s.title.slice(1).toLowerCase()}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="wrap" style={{ maxWidth: 1100 }}>
        {MENU.map((s) => {
          const shown = s.items.map((it) => filter === "all" || it[filter]);
          return (
            <section key={s.id} className="msec" id={s.id} aria-labelledby={`${s.id}-h`}>
              <div className="msec-h">
                <Ornament />
                <h2 id={`${s.id}-h`} style={{ fontSize: 48, lineHeight: "52px" }}>{s.title}</h2>
                <p className="sub">{s.sub}</p>
              </div>
              <ul className="items">
                {s.items.map((it, i) => (
                  <MenuItemRow key={it.name} item={it} hidden={!shown[i]} />
                ))}
              </ul>
              <p className="empty" hidden={shown.some(Boolean)}>
                Nothing in this section matches the filter.
              </p>
            </section>
          );
        })}
        <section className="msec" aria-labelledby="wok-h" style={{ paddingBottom: 120 }}>
          <div className="msec-h">
            <p className="eyebrow">Coming soon</p>
            <h2 id="wok-h" style={{ fontSize: 56, lineHeight: "60px" }}>
              Wok <span className="it">Rush</span>
            </h2>
            <p className="muted" style={{ margin: 0, maxWidth: 440 }}>
              Hakka noodles, momos and desi Chinese, from the same kitchen.
            </p>
            <a className="tlink label" href="#news-h">Get notified ›</a>
          </div>
        </section>
        <p className="muted" style={{ textAlign: "center", fontSize: 13, margin: "0 0 72px" }}>
          Prices include GST. Tell us about any allergies before you order.
        </p>
      </div>
    </>
  );
}
