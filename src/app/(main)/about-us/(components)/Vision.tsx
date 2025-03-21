"use client";
import Image from "next/image";
import { useState } from "react";

export default function Vision() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <section className="w-full px-4 py-10 text-center bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black">
        Our Vision
      </h2>
      <p className="text-[#122231] max-w-2xl mx-auto mt-2 text-sm md:text-base">
        To make you a proud landlord for a long period of time, whilst we plan
        with you through the process of owning your dream and permanent
        residence.
      </p>

      {/* Video Container */}

      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-2xl">
          {/* YouTube Video Embed */}
          <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NV-ulrQyFuY?si=JRsHiLLc4dZl5Kqn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
              className={`border-0 w-full h-full object-cover ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Loading overlay - shown only until the video loads */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="animate-pulse">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-sm md:text-base">
        ONE MILLION LANDLORD is a consulting firm in real estate offering
        quality, transparent choices, both in the types of services that you can
        receive and how those services can be paid for, with a mission to bring
        service, value and care to our residents.
      </p>
      <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm md:text-base">
        We strive so hard to build integrity, resilience and be the best real
        estate consulting firm that provides affordable real estate investments
        to our clients
      </p>
    </section>
  );
}
