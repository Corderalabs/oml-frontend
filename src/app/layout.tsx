import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "ONE MILLION LANDLORD – Real Estate Investment & Property Development",
  description:
    "Discover profitable real estate investment opportunities with ONE MILLION LANDLORD. Transform underutilized properties into high-value assets and connect with top investors.",
  keywords: [
    "real estate investment",
    "property development",
    "real estate consulting",
    "long-lease model",
    "real estate in Lagos",
    "modern residential complexes",
    "investment opportunities",
    "property ownership",
  ],
  openGraph: {
    title: "ONE MILLION LANDLORD – Transforming Real Estate Investments",
    description:
      "ONE MILLION LANDLORD connects investors with high-value real estate opportunities, transforming underutilized properties into thriving communities.",
    type: "website",
    url: "https://onemillionlandlord.netlify.app/",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ONE MILLION LANDLORD - Real Estate Investment",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className='font-plusJakarta'>{children}</body>
    </html>
  );
}
