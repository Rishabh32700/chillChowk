"use client";

import { useEffect, useState } from "react";
import { HOURS, formatTime } from "@/lib/site";

export default function HoursTable() {
  // Today is only known in the browser, so it is highlighted after hydration.
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(new Date().getDay()), []);

  return (
    <table className="hours">
      <caption className="sr">Opening hours by day</caption>
      <tbody>
        {HOURS.map(([day, opens, closes], i) => (
          <tr key={day} className={i === today ? "today" : undefined}>
            <td>{day + (i === today ? " (today)" : "")}</td>
            <td>
              {formatTime(opens)} – {formatTime(closes)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
