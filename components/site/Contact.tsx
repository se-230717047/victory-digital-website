"use client";

import { useState, type FormEvent } from "react";
import { useSite, Arrow } from "./ui";
import { CONTACT_EMAIL } from "@/lib/site-content";

type Status = "idle" | "loading" | "ok" | "err";

export default function Contact() {
  const { c } = useSite();
  const x = c.contact;
  const [form, setForm] = useState({ name: "", email: "", businessType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ name: "", email: "", businessType: "", message: "" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap split">
        <div>
          <p className="eyebrow reveal">{x.eyebrow}</p>
          <h2 className="display h-section reveal">
            {x.titleA} <em>{x.titleEm}</em>
          </h2>
          <p className="lead reveal">{x.lead}</p>
          <a className="contact-mail reveal" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <div className="contact-meta reveal">
            <span className="mono">{x.locationLabel}</span>
            <span>{x.location}</span>
          </div>
        </div>

        <form className="form reveal" onSubmit={submit}>
          <div className="two">
            <div className="field">
              <label htmlFor="f-name">{x.name}</label>
              <input id="f-name" name="name" required autoComplete="name" value={form.name} onChange={set} />
            </div>
            <div className="field">
              <label htmlFor="f-email">{x.email}</label>
              <input
                id="f-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={set}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-business">{x.business}</label>
            <input
              id="f-business"
              name="businessType"
              placeholder={x.businessPh}
              value={form.businessType}
              onChange={set}
            />
          </div>
          <div className="field">
            <label htmlFor="f-message">{x.message}</label>
            <textarea
              id="f-message"
              name="message"
              required
              placeholder={x.messagePh}
              value={form.message}
              onChange={set}
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
              {status === "loading" ? x.sending : x.submit} {status !== "loading" && <Arrow />}
            </button>
          </div>
          <p className={`form-status ${status === "ok" ? "ok" : status === "err" ? "err" : ""}`} aria-live="polite">
            {status === "ok" ? x.sent : status === "err" ? x.error : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
