import React from "react";
import Hero from "./(components)/Hero";
import Vision from "./(components)/Vision";
import { Metadata } from "next";
import { metadataByPage } from "@/lib/metadata";

export const metadata: Metadata = metadataByPage.aboutUs;


export default function AboutUs() {
  return (
    <div>
      <Hero />
      <Vision />
    </div>
  );
}
