"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header">
      <div className="wrap hdr">
        <Link className="brand" href="/" aria-label="Chill Chowk home">
          <span className="wm">Chill Chowk</span>
          <span className="dv">चिल चौक</span>
        </Link>
        <nav className="nav label" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </Link>
          ))}
          <Link className="order" href="/brew-rush">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>{" "}
            Order
          </Link>
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mnav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 8h18M3 16h18" />
          </svg>
        </button>
      </div>
      <nav className={`mnav${open ? " open" : ""}`} id="mnav" aria-label="Mobile">
        {[{ href: "/", label: "Home" }, ...NAV].map((n) => (
          <Link key={n.href} href={n.href} aria-current={current(n.href)} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <span className="label" style={{ marginTop: "auto", color: "var(--sage)", fontSize: 11 }}>
          Sector [XX] · Gurgaon
        </span>
      </nav>
    </header>
  );
}
