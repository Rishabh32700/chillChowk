"use client";

import { useEffect, useState } from "react";
import { HOURS, formatTime, toMinutes } from "@/lib/site";

/** "Open now · until 11 pm" / "Closed now · opens tomorrow 11 am", computed in the visitor's browser. */
export default function OpenStatus() {
  const [state, setState] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const d = now.getDay();
      const cur = now.getHours() * 60 + now.getMinutes();
      const h = HOURS[d];
      const open = cur >= toMinutes(h[1]) && cur < toMinutes(h[2]);
      const next = cur < toMinutes(h[1]) ? h : HOURS[(d + 1) % 7];
      setState({
        open,
        text: open
          ? `Open now · until ${formatTime(h[2])}`
          : `Closed now · opens ${next === h ? "today " : "tomorrow "}${formatTime(next[1])}`,
      });
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`status${state?.open ? " open" : ""}`}>
      <span className="dot" />
      <span className="txt">{state ? state.text : "See hours"}</span>
    </span>
  );
}
