"use client";

import { useSite, Arrow, Figure } from "./ui";
import { CONTACT_EMAIL } from "@/lib/site-content";

function Title({ a, em, b, className = "h-section" }: { a: string; em: string; b?: string; className?: string }) {
  return (
    <h2 className={`display ${className}`}>
      {a} <em>{em}</em>
      {b ? <> {b}</> : null}
    </h2>
  );
}

export function Hero() {
  const { c } = useSite();
  const h = c.hero;
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow reveal">{h.eyebrow}</p>
            <h1 className="display h-hero reveal">
              {h.titleA} <em>{h.titleEm}</em> {h.titleB}
            </h1>
            <p className="lead reveal">{h.sub}</p>
            <div className="hero-actions reveal">
              <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
                {h.primary} <Arrow />
              </a>
              <a className="btn" href="#services">
                {h.secondary}
              </a>
            </div>
          </div>
          <div className="reveal">
            <Figure name="hero" alt={c.imageAlt.hero} label="01 · Hero" ratio="4 / 5" priority />
          </div>
        </div>

        <div className="ledger reveal">
          <span className="ledger-label">{h.ledgerLabel}</span>
          <div className="ledger-row">
            {h.ledger.map((l, i) => (
              <div className="ledger-item" key={l.label}>
                {i > 0 && (
                  <span className="ledger-sep" aria-hidden="true">
                    →
                  </span>
                )}
                <span className="ledger-value">{l.value}</span>
                <span className="ledger-unit">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceIndex() {
  const { c } = useSite();
  const x = c.index;
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="index-head">
          <div>
            <p className="eyebrow reveal">{x.eyebrow}</p>
            <h2 className="display h-sub reveal">{x.title}</h2>
          </div>
        </div>
        <ul className="index-list reveal">
          {x.items.map((it) => (
            <li key={it.n}>
              <a href={it.href}>
                <span className="n">{it.n}</span>
                <span className="t">{it.title}</span>
                <span className="d">{it.text}</span>
                <span className="a" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CourseCreators() {
  const { c } = useSite();
  const x = c.course;
  return (
    <section className="section" id="course-creators">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <p className="eyebrow reveal">{x.eyebrow}</p>
            <div className="reveal">
              <Title a={x.titleA} em={x.titleEm} />
            </div>
            <p className="lead reveal">{x.lead}</p>
          </div>
          <div className="reveal">
            <Figure name="course" alt={c.imageAlt.course} label="02 · Course creators" />
          </div>
        </div>

        <p className="list-title reveal">{x.pathsTitle}</p>
        <div className="paths reveal">
          {x.paths.map((p, i) => (
            <div className="path" key={p.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="split row-gap">
          <div className="reveal">
            <p className="list-title">{x.doTitle}</p>
            <ul className="check-list">
              {x.do.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="case reveal">
            <p className="list-title">{x.caseTitle}</p>
            {x.caseRows.map((r) => (
              <div className="case-row" key={r.label}>
                <span>{r.label}</span>
                <span className="v">{r.value}</span>
              </div>
            ))}
            <p className="case-note">{x.caseNote}</p>
          </div>
        </div>

        <div className="price price-wide row-gap reveal">
          <div>
            <p className="list-title">{x.priceTitle}</p>
            <p className="price-figure">
              {x.priceMain}
              <em>{x.pricePlus}</em>
            </p>
          </div>
          <div className="price-body">
            <p>{x.priceText}</p>
            <p className="fit">{x.fit}</p>
            <div>
              <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=Course%20growth`}>
                {x.cta} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MetaAds() {
  const { c } = useSite();
  const x = c.meta_ads;
  return (
    <section className="section" id="meta-ads">
      <div className="wrap">
        <div className="svc-head svc-head-flip">
          <div className="reveal">
            <Figure name="meta" alt={c.imageAlt.meta} label="03 · Meta Ads" />
          </div>
          <div>
            <p className="eyebrow reveal">{x.eyebrow}</p>
            <div className="reveal">
              <Title a={x.titleA} em={x.titleEm} />
            </div>
            <p className="lead reveal">{x.lead}</p>
          </div>
        </div>
        <div className="pillars reveal">
          {x.pillars.map((p, i) => (
            <div className="pillar" key={p.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="fit row-gap reveal" style={{ borderTop: 0, paddingTop: 0, marginTop: 40 }}>
          {x.for}
        </p>
      </div>
    </section>
  );
}

export function AISystems() {
  const { c } = useSite();
  const x = c.ai;
  return (
    <section className="section" id="ai-systems">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <p className="eyebrow reveal">{x.eyebrow}</p>
            <div className="reveal">
              <Title a={x.titleA} em={x.titleEm} b={x.titleB} />
            </div>
            <p className="lead reveal">{x.lead}</p>
          </div>
          <div className="reveal">
            <Figure name="ai" alt={c.imageAlt.ai} label="04 · AI systems" />
          </div>
        </div>

        <div className="stats reveal">
          {x.stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="v">{s.value}</span>
              <span className="l">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="guarantee reveal">{x.guarantee}</p>

        <div className="split row-gap">
          <div className="reveal">
            <p className="list-title">{x.examplesTitle}</p>
            <ul className="check-list">
              {x.examples.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}>
              <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=AI%20workflow`}>
                {x.cta} <Arrow />
              </a>
            </div>
          </div>
          <div className="proof reveal">
            <p className="list-title">{x.proofTitle}</p>
            <p>{x.proof}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalSEO() {
  const { c } = useSite();
  const x = c.seo;
  return (
    <section className="section seo" id="local-seo">
      <div className="wrap section-inner">
        <div>
          <p className="eyebrow reveal">{x.eyebrow}</p>
          <div className="reveal">
            <Title a={x.titleA} em={x.titleEm} b={x.titleB} />
          </div>
          <p className="lead reveal" style={{ marginTop: 28 }}>
            {x.lead}
          </p>
        </div>
        <ul className="check-list reveal">
          {x.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  const { c } = useSite();
  const x = c.process;
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="index-head">
          <div>
            <p className="eyebrow reveal">{x.eyebrow}</p>
            <h2 className="display h-sub reveal">{x.title}</h2>
          </div>
        </div>
        <ol className="steps reveal">
          {x.steps.map((s) => (
            <li key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FAQ() {
  const { c } = useSite();
  const x = c.faq;
  return (
    <section className="section" id="faq">
      <div className="wrap split">
        <div>
          <p className="eyebrow reveal">{x.eyebrow}</p>
          <h2 className="display h-sub reveal">{x.title}</h2>
        </div>
        <div className="faq reveal">
          {x.items.map((it) => (
            <details key={it.q}>
              <summary>
                {it.q}
                <span className="pm" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { c } = useSite();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          Victory Digital
        </a>
        <span>{c.footer.tagline}</span>
        <span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · © {new Date().getFullYear()} Victory Digital.{" "}
          {c.footer.rights}
        </span>
      </div>
    </footer>
  );
}
