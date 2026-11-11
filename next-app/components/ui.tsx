import type { CSSProperties, ReactNode } from "react";
import type { MenuItem } from "@/lib/menu";

export function Ornament() {
  return (
    <svg className="ornament" width="96" height="16" viewBox="0 0 96 16" fill="none" stroke="#DA9165" strokeWidth="1" aria-hidden="true">
      <path d="M0 8h36M60 8h36" />
      <circle cx="48" cy="8" r="4" />
    </svg>
  );
}

/** Photo placeholder. Swap for next/image once real photos exist. */
export function Ph({
  children,
  label = "Photo placeholder",
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  label?: string;
  variant?: "p2" | "p3";
  className?: string;
  style?: CSSProperties;
}) {
  const cls = ["ph", variant, className].filter(Boolean).join(" ");
  return (
    <div className={cls} style={style} role="img" aria-label={label}>
      <span>{children}</span>
    </div>
  );
}

export function MenuItemRow({ item, hidden }: { item: MenuItem; hidden?: boolean }) {
  const tags = [item.best && "Bestseller", item.rush && "Brew Rush · 10 min"].filter(Boolean).join("  ·  ");
  return (
    <li className="item" hidden={hidden}>
      <div className="row">
        <span className="n">{item.name}</span>
        <span className="p">{item.price}</span>
      </div>
      <span className="d">{item.description}</span>
      {tags && <span className="t">{tags}</span>}
    </li>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
