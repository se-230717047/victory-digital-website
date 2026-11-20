"use client";

import Nav from "@/components/site/Nav";
import Contact from "@/components/site/Contact";
import {
  Hero,
  ServiceIndex,
  CourseCreators,
  MetaAds,
  AISystems,
  LocalSEO,
  Process,
  FAQ,
  Footer,
} from "@/components/site/Sections";
import { useReveal, useSite } from "@/components/site/ui";

export default function Home() {
  const { locale } = useSite();
  useReveal(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServiceIndex />
        <CourseCreators />
        <MetaAds />
        <AISystems />
        <LocalSEO />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
