"use client"
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

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const Project = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const images = [
    '/images/brics.png',
    '/images/brics.png',
    '/images/brics.png',
    '/images/brics.png',
  ];

  return (
    <div className="curved-edge">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_60%] mx-4 relative h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                className="object-cover w-full h-full"
                width={400}
                height={700}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
