// components/CourseBenefitsSection.tsx
import React from "react";
import CourseBenefitCard from "./CourseBenefitCard";

// courseBenefitsData.ts
const courseBenefitsData = [
  {
    id: 1,
    title: "Analyze Rental Properties for Maximum ROI",
    description:
      "Confidently evaluate deals that align with your buy box. Know which ones to hold, which ones to walk away from, without second-guessing yourself.",
  },
  {
    id: 2,
    title: "Hire the Right Property Managers, Anywhere in the Country",
    description:
      "Learn our step-by-step process for finding and vetting reliable property managers, so you can confidently manage rentals from a distance, without the stress.",
  },
  {
    id: 3,
    title: "Manage Your Rentals with the Right Systems",
    description:
      "Download the exact spreadsheets, templates, and tools we use to run our portfolio in just 20 minutes a day. Skip the guesswork and start with what already works.",
  },
  {
    id: 4,
    title: "Scale Your Portfolio with Proven Investment Strategies",
    description:
      "Discover proven strategies to expand your real estate investments, boost cash flow, and minimize risk while maintaining financial stability.",
  },
];

const CourseBenefitsSection: React.FC = () => {
  return (
    <section
      className='
        bg-no-repeat bg-cover bg-center 
        py-10 md:py-16
        relative
      '
      style={{
        backgroundImage: "url('/images/course-bg.png')", // Replace with your background image
      }}
    >
      {/* Optional overlay if you need to darken/lighten the background */}
      <div className='absolute inset-0 bg-[#3F4096]'></div>

      {/* CONTENT WRAPPER */}
      <div className='relative container mx-auto px-4 md:px-8'>
        {/* Heading */}
        <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-7 font-inter'>
          After Taking This Course, You&apos;ll Be Able To:
        </h2>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[680px] mx-auto'>
          {courseBenefitsData.map((benefit, index) => (
            <CourseBenefitCard
              index={index}
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsSection;
