"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent, IMAGES } from "@/lib/site-content";

export function useSite() {
  const { locale, setLocale } = useLanguage();
  return { c: siteContent[locale], locale, setLocale };
}

/** .reveal sınıflı öğeler görünür alana girince belirir. */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

type FigureProps = {
  name: keyof typeof IMAGES;
  alt: string;
  ratio?: string;
  label: string;
  priority?: boolean;
};

/** Görsel hazırsa gösterir, değilse tasarıma uygun bir yer tutucu çizer. */
export function Figure({ name, alt, ratio = "3 / 2", label, priority }: FigureProps) {
  const src = IMAGES[name];
  return (
    <figure className="figure" style={{ aspectRatio: ratio }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
      ) : (
        <div className="figure-ph" role="img" aria-label={alt}>
          <span>{label}</span>
          <div className="ph-dot" />
          <span>Victory Digital</span>
        </div>
      )}
    </figure>
  );
}
