"use client";
import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import HousingOverview from "./components/HousingOverview";

export default function Main() {
  const faqRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll if there's a hash in the URL
    const hash = window.location.hash;
    if (hash === "#faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#project" && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className='h-full'>
      <Hero />
      <HousingOverview />
      <FAQ sectionRef={faqRef} />
      <Testimonials />
      <Projects sectionRef={projectRef} />
    </div>
  );
}
