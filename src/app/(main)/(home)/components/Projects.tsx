"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { brics, brics2, cardiff } from "@/utils/image";

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const images = [brics, brics2, cardiff, brics2];

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

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='my-10' id="project">
      <div className='w-full'>
        <h2 className='text-[42px] md:text-4xl font-bold text-center text-black'>
          Our Projects
        </h2>
        <p className='w-11/12 text-center text-primary-200 mt-4 md:w-[45%] mx-auto'>
          Our projects showcase innovative designs, prime locations, and
          sustainable development, offering modern living spaces that elevate
          lifestyle and comfort.
        </p>
      </div>

      <div className='curved-edge'>
        <div className='relative max-w-full'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 min-w-0 pl-0 pr-0 h-[500px]'
                  style={{ width: "50%" }}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    className='w-full h-full object-cover'
                    width={400}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-md'
            onClick={scrollPrev}
          >
            <FaArrowLeftLong size={24} color='#ffffff' />
          </button>
          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-md'
            onClick={scrollNext}
          >
            <FaArrowRightLong size={24} color='#ffffff' />
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-3 items-center mt-10 md:w-[60%] mx-auto'>
        <h2 className='w-11/12 text-2xl md:text-[42px] md:w-10/12 mx-auto font-bold text-center text-black'>
          Let&apos;s Make Homeownership in Lagos a Reality Together
        </h2>
        <button className='bg-primary-100 text-white px-6 py-3 rounded-xl mt-6'>
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Project;



// const Projects = () => {
//   return (
//     <section className='py-16 px-6 bg-white'>
//       <div className='w-full'>
//         <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>
//           Our Projects
//         </h2>
//         <p className='text-center text-gray-600 mt-4 md:w-[55%] mx-auto'>
//           Our projects showcase innovative designs, prime locations, and
//           sustainable development, offering modern living spaces that elevate
//           lifestyle and comfort.
//         </p>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8'>
//           <div className='bg-gray-200 h-64 flex items-center justify-center rounded-lg'>
//             Project 1
//           </div>
//           <div className='bg-gray-200 h-64 flex items-center justify-center rounded-lg'>
//             Project 2
//           </div>
//           <div className='bg-gray-200 h-64 flex items-center justify-center rounded-lg'>
//             Project 3
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col gap-3 items-center mt-10 md:w-[60%] mx-auto'>
//         <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>
//           Let&apos;s Make Homeownership in Lagos a Reality Together
//         </h2>
//         <button className='bg-blue-600 text-white px-6 py-3 rounded-md mt-6'>
//           Download Brochure
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Projects;