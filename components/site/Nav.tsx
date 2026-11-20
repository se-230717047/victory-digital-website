"use client";

import { useEffect, useState } from "react";
import { useSite, Arrow } from "./ui";

export default function Nav() {
  const { c, locale, setLocale } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          Victory Digital
        </a>

        <nav aria-label="Main">
          <ul className="nav-links">
            {c.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
              EN
            </button>
            <button type="button" aria-pressed={locale === "tr"} onClick={() => setLocale("tr")}>
              TR
            </button>
          </div>
          <a href="#contact" className="btn btn-primary btn-desktop">
            {c.nav.cta} <Arrow />
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? c.nav.close : c.nav.menu}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <div className="wrap">
          <ul>
            {[...c.nav.links, { href: "#contact", label: c.nav.cta }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
