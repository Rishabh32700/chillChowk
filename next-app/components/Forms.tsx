"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

// No backend yet: forms validate and show a confirmation on the page only.
// Connect an email tool / form service (or a Next.js route handler) before launch.

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function useForm() {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fields = ev.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]");
    for (const f of Array.from(fields)) {
      const v = f.value.trim();
      const isEmail = f.type === "email";
      if (!v || (isEmail && !EMAIL_RE.test(v))) {
        setError(isEmail ? "Enter a valid email address." : `Fill in ${f.dataset.name} first.`);
        f.focus();
        return;
      }
    }
    setError(null);
    setDone(true);
  };

  return { error, done, onSubmit, clearError: () => setError(null) };
}

export function NewsletterForm() {
  const { error, done, onSubmit, clearError } = useForm();
  if (done)
    return (
      <p className="ok" role="status">
        Shukriya, you&apos;re on the list. (Connect an email tool before launch so this is saved.)
      </p>
    );
  return (
    <form className="inline" noValidate style={{ width: "100%", paddingTop: 8 }} onSubmit={onSubmit} onInput={clearError}>
      <label htmlFor="news-email" className="sr">
        Email address
      </label>
      <input id="news-email" type="email" placeholder="name@example.com" required data-name="your email" />
      <button className="btn" type="submit">
        Subscribe
      </button>
      <p className="err" role="alert" hidden={!error}>
        {error}
      </p>
    </form>
  );
}

const fieldStyle: CSSProperties = { color: "#0F413C", borderColor: "#8FA29E" };
const labelStyle: CSSProperties = { color: "var(--slate)" };

export function ContactForm() {
  const { error, done, onSubmit, clearError } = useForm();
  if (done)
    return (
      <p className="ok" role="status" style={{ color: "var(--copper-ink)" }}>
        Thanks, we&apos;ve got your details. (Connect a form service before launch so messages reach your inbox.)
      </p>
    );
  return (
    <form className="form" noValidate style={{ "--stone": "#0F413C" } as CSSProperties} onSubmit={onSubmit} onInput={clearError}>
      <div className="row2">
        <div className="field">
          <label htmlFor="c-name" style={labelStyle}>Name</label>
          <input id="c-name" required data-name="your name" style={fieldStyle} />
        </div>
        <div className="field">
          <label htmlFor="c-email" style={labelStyle}>Email</label>
          <input id="c-email" type="email" required data-name="your email" style={fieldStyle} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-msg" style={labelStyle}>Message</label>
        <textarea id="c-msg" required data-name="a message" style={fieldStyle} />
      </div>
      <p className="err" role="alert" hidden={!error} style={{ color: "var(--copper-ink)" }}>
        {error}
      </p>
      <button className="btn" type="submit" style={{ alignSelf: "flex-start", background: "#0F413C", color: "#EDECE3" }}>
        Send message
      </button>
    </form>
  );
}
