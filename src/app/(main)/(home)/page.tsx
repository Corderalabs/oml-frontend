import React from "react";
import { Metadata } from "next";
import { metadataByPage } from "@/lib/metadata";
import Main from "./main";

export const metadata: Metadata = metadataByPage.home;

export default function Home() {
  return (
    <Main />
  );
}
