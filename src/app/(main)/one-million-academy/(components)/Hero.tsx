// components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import OverlayCard from "./OverlayCard";

export default function Hero({
  joinSectionRef,
}: {
  joinSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToJoinSection = () => {
    joinSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className='bg-[#EFF6FF] py-10 md:py-16'>
      <div className='w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-5 gap-6'>
        {/* LEFT TEXT CONTENT */}
        <div className='w-full md:w-1/2'>
          <h1 className='text-2xl md:text-[45px] leading-[1.2] font-bold md:font-extrabold text-black mb-4 font-inter'>
            Become a Certified Real Estate Expert &amp; Build a Profitable
            Career!
          </h1>
          <p className='text-[#122231] text-base md:text-lg mb-6'>
            Join One Million Landlord and master the real estate industry with
            expert-led courses, hands-on training, and mentorship— perfect for
            beginners and pros alike!
          </p>
          <button
            onClick={scrollToJoinSection}
            className='bg-[#1D4ED8] text-white px-5 py-1 rounded-lg shadow-md hover:bg-blue-600 transition'
          >
            Apply Now
          </button>
        </div>

        {/* RIGHT IMAGE & OVERLAYS */}
        <div className='w-full md:w-1/2 relative hidden md:block'>
          <div className='relative w-full h-64 md:h-[400px]'>
            <Image
              src='/academy-hero.png' // Replace with your own image path
              alt='Office Building'
              fill
              className='object-cover rounded-lg'
            />

            <div className='absolute inset-0 bg-black/30 rounded-lg' />
          </div>

          {/* Overlay Cards (Position them absolutely) */}
          <div className='absolute -top-7 left-[65px] translate-x-1/2'>
            <OverlayCard
              icon='/hero-icon-1.png'
              title='Investment'
              value='₦2,000,000'
              sub='Total construction cost'
              className='w-10 text-[#E5489B]'
            />
          </div>
          <div className='absolute -bottom-6 left-6'>
            <OverlayCard
              icon='/hero-icon-2.png'
              title='Return on Investment (ROI)'
              value='₦ 10,000,000'
              sub='+5.2% decrease since last week'
              className='w-[93px] object-left text-[#35920A]'
            />
          </div>
          <div className='absolute top-1/2 -right-[60px] -translate-y-1/2'>
            <OverlayCard
              icon='/hero-icon-3.png'
              title='Revenue'
              value='₦3,500,000'
              sub='8% interest per month'
              className='w-10 text-blue-600'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
