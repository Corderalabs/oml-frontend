// components/MeetYourInstructor.tsx
"use client"
import Image from "next/image";
import React from "react";

export default function Instructor({
  joinSectionRef,
}: {
  joinSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToJoinSection = () => {
    joinSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className='bg-white py-8 md:py-16'>
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        {/* Title */}
        <h2 className='text-center text-3xl md:text-4xl font-bold text-black mb-10'>
          Meet Your Instructor
        </h2>

        <div className='flex flex-col md:flex-row  items-start gap-5'>
          {/* Image Section */}
          <div className='relative w-full md:w-[45%] md:h-[400px]'>
            <Image
              src='/instructor.png' // Replace with your actual image path
              alt='Ibrahim Femi Adetuga (Coach | CEO OML)'
              width={450}
              height={500}
              className='object-cover rounded-md'
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-[55%]'>
            <h3 className='text-xl md:text-2xl font-semibold text-gray-800 mb-2'>
              Ibrahim Femi Adetuga (Coach | CEO OML)
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Ibrahim Femi Adetuga is the Managing Director and Chief Executive
              Officer of One Million Landlord Nigeria, a leading real estate
              consulting firm specializing in affordable and secure long-lease
              property investments in Lagos. He has played a pivotal role in
              shaping the real estate landscape by guiding investors toward
              profitable opportunities. Passionate about knowledge-sharing, he
              has been instrumental in developing and empowering youth through
              various training initiatives, equipping them with the skills and
              expertise needed to thrive in the industry.
            </p>
            <button
              onClick={scrollToJoinSection}
              className='bg-blue-600 text-white py-1 px-6 rounded-md font-medium hover:bg-blue-700 transition'
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
