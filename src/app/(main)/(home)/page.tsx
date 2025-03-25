import React from "react";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import HousingOverview from "./components/HousingOverview";
import { Metadata } from "next";
import { metadataByPage } from "@/lib/metadata";
import Main from "./main";

export const metadata: Metadata = metadataByPage.home;

export default function Home() {
  return (
    <Main />
  );
}
