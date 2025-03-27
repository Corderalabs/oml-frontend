"use client"
import React, { useRef } from "react";
import Hero from "./(components)/Hero";
import CoursesSection from "./(components)/CoursesSection";
import CourseBenefitsSection from "./(components)/CourseBenefitSection";
import JoinAcademy from "./(components)/JoinAcademy";
import Instructor from "./(components)/Instructor";

export default function OneMillionAcademy() {
  const joinSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Hero joinSectionRef={joinSectionRef} />
      <CoursesSection />
      <CourseBenefitsSection />
      <Instructor joinSectionRef={joinSectionRef} />
      <JoinAcademy joinSectionRef={joinSectionRef} />
    </div>
  );
}
