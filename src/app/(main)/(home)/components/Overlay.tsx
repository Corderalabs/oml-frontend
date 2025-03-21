"use client";
import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { LiaTimesSolid } from "react-icons/lia";

interface OverlayProps {
  images: string[];
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ images, onClose }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    // Handle keydown events
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      emblaApi.off("select", onSelect);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [emblaApi, onSelect, onClose, scrollNext, scrollPrev]);

  // Handle outside click to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed h-screen w-screen inset-0 bg-black/90 flex flex-col justify-center z-50"
      onClick={handleOverlayClick}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
        onClick={onClose}
      >
        <LiaTimesSolid size={28} />
      </button>

      {/* Main slider */}
      <div className="w-full h-4/5 relative">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-0 w-full h-full flex items-center justify-center pl-0 pr-0"
              >
                <div className="relative w-full h-full max-w-screen-lg mx-auto flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    className="max-h-full object-contain"
                    width={1200}
                    height={800}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/50 hover:bg-black/70 transition-all"
          onClick={scrollPrev}
        >
          <FaArrowLeftLong size={24} color="#ffffff" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/50 hover:bg-black/70 transition-all"
          onClick={scrollNext}
        >
          <FaArrowRightLong size={24} color="#ffffff" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4 px-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            className={`transition-all ${
              selectedIndex === index
                ? "border-2 border-white scale-110"
                : "opacity-70"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-16 h-16 object-cover rounded-md"
              width={64}
              height={64}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
