import React from "react";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import HousingOverview from "./components/HousingOverview";

export default function Home() {
  return (
    <div>
      <Hero />
      <HousingOverview />
      <FAQ />
      <Testimonials />
      <Projects /> 
    </div>
  );
}
