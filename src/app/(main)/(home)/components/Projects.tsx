"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import { brics, brics2, cardiff } from "@/utils/image";
import Overlay from "./Overlay";
import Link from "next/link";
import { projects } from "@/lib/data";

const Project = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  // const projects = [
  //   { thumbnail: brics, images: [brics, brics2, cardiff, brics2] },
  //   { thumbnail: brics2, images: [brics, brics2, cardiff, brics2] },
  //   { thumbnail: cardiff, images: [brics, brics2, cardiff, brics2] },
  // ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Function to open the overlay with selected project images
  function handleSelectImage(images: string[]) {
    setSelectedImages(images);
    setIsOverlayOpen(true);
    // Optional: Add body class to prevent scrolling when overlay is open
    document.body.classList.add("overflow-hidden");
  }

  // Function to close the overlay
  function handleCloseOverlay() {
    setIsOverlayOpen(false);
    setSelectedImages([]);
    // Remove the body class when overlay is closed
    document.body.classList.remove("overflow-hidden");
  }

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

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div ref={sectionRef} className='h-full my-10' id='project'>
      <div className='w-full'>
        <h2 className='text-[42px] md:text-4xl font-bold text-center text-black'>
          Past Projects
        </h2>
        <p className='w-11/12 text-center text-primary-200 mt-4 md:w-[45%] mx-auto'>
          Our past projects reflect innovative designs, prime locations, and
          sustainable development. Each property is crafted to offer modern
          living spaces that elevate lifestyle and comfort.
        </p>
      </div>

      <div className='curved-edge'>
        <div className='relative max-w-full'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 min-w-0 pl-0 pr-0 h-[500px]'
                  style={{ width: "50%" }}
                >
                  <button
                    onClick={() =>
                      handleSelectImage(
                        (project.images as unknown as string[]) || []
                      )
                    }
                    className='w-full h-full overflow-hidden relative group'
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`Slide ${index}`}
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                      width={400}
                      height={500}
                    />
                    <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      <div className="flex flex-col gap-4">
                        <span className='text-white font-medium text-2xl'>
                          {project.label}
                        </span>
                        <span className='text-white font-medium text-lg'>
                          View Gallery
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/30 hover:bg-black/50 transition-all'
            onClick={scrollPrev}
            aria-label='Previous slide'
          >
            <FaArrowLeftLong size={24} color='#ffffff' />
          </button>
          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/30 hover:bg-black/50 transition-all'
            onClick={scrollNext}
            aria-label='Next slide'
          >
            <FaArrowRightLong size={24} color='#ffffff' />
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-3 items-center mt-10 md:w-[60%] mx-auto'>
        <h2 className='w-11/12 text-2xl leading-[48px] md:text-[42px] md:w-10/12 mx-auto font-bold text-center text-black'>
          Let&apos;s Make Home ownership in Lagos a Reality Together
        </h2>
        <Link href={"/contact"}>
          <button className='bg-primary-100 text-white px-6 py-3 rounded-xl mt-6'>
            Contact Us
          </button>
        </Link>
      </div>

      {/* Render overlay only when it's open */}
      {isOverlayOpen && (
        <Overlay images={selectedImages} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default Project;
