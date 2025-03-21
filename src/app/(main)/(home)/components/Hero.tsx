"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    name: "Mc-Allen Residence",
    jpg: "/brics.jpg",
    message:
      "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
  },
  {
    name: "The Brics Homes",
    jpg: "/brics2.jpg",
    message:
      "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
  },
  {
    name: "Cardiff Courts",
    jpg: "/cardiff4.jpg",
    message:
      "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
  },
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if window is available (client-side) and set mobile state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="bg-white text-center py-8 md:py-16 px-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black md:w-[70%] lg:w-6/12 mx-auto font-inter">
        Why Pay Rent? When you can Own a Home in Lagos
      </h1>
      <p className="text-[#122231] mt-6 text-lg font-normal md:w-[43%] mx-auto">
        Stay RENT FREE for 15 years or more. For as low as 5 million naira, own
        your peace of mind.
      </p>
      <Link href={"/contact"}>
        <button className="bg-primary-100 text-white px-8 py-3 rounded-2xl mt-6 w-[182px] text-center">
          Contact Us
        </button>
      </Link>

      {/* Property Listings */}
      <div className="mt-10 w-11/12 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative md:h-[500px] transition-all duration-700 ease-in-out flex overflow-hidden rounded-xl ${
              hoveredIndex === index ? "md:w-[45%]" : "md:w-[30%]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            layout
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={image.jpg}
                alt={image.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-xl object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Overlay with Text & Button */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <h2 className="text-white text-lg font-semibold text-left">
                {image.name}
              </h2>

              <AnimatePresence>
                {hoveredIndex === index || isMobile ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.7 }}
                    className="text-white text-xs text-left md:w-[80%]"
                  >
                    <p>{image.message}</p>
                    <span className="w-1/2 flex items-start">
                      <motion.button
                        className="text-[9px] bg-white text-[#1D4ED8] px-2 py-2 rounded-md mt-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download Brochure
                      </motion.button>
                    </span>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const images = [
//   {
//     name: "Mc-Allen Residence",
//     jpg: "/brics.jpg",
//     message:
//       "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
//   },
//   {
//     name: "The Brics Homes",
//     jpg: "/brics2.jpg",
//     message:
//       "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
//   },
//   {
//     name: "Cardiff Courts",
//     jpg: "/cardiff4.jpg",
//     message:
//       "Serene living in Shomolu, Lagos, with modern amenities and easy access to key infrastructure.",
//   },
// ];

// const Hero = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className='bg-white text-center py-8 md:py-16 px-6'>
//       <h1 className='text-3xl md:text-5xl font-extrabold text-black md:w-[70%] lg:w-6/12 mx-auto font-inter'>
//         Why Pay Rent? When you can Own a Home in Lagos
//       </h1>
//       <p className='text-[#122231] mt-6 text-lg font-normal md:w-[43%] mx-auto'>
//         Stay RENT FREE for 15 years or more. For as low as 5 million naira, own
//         your peace of mind.
//       </p>
//       <Link href={"/contact"}>
//         <button className='bg-primary-100 text-white px-8 py-3 rounded-2xl mt-6 w-[182px] text-center'>
//           Contact Us
//         </button>
//       </Link>

//       {/* Property Listings */}
//       <div className='mt-10 w-11/12 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center'>
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className={`relative md:h-[300px] transition-all duration-700 ease-in-out flex overflow-hidden rounded-xl ${
//               hoveredIndex === index ? "md:w-[45%]" : "md:w-[30%]"
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             layout
//           >
//             {/* Image */}
//             <div className='relative w-full h-full'>
//               <Image
//                 src={image.jpg}
//                 alt={image.name}
//                 fill
//                 sizes=''
//                 className='rounded-xl object-cover'
//               />
//               {/* Dark Overlay */}
//               <div className='absolute inset-0 bg-black/30' />
//             </div>

//             {/* Overlay with Text & Button */}
//             <div className='absolute bottom-4 left-4 flex flex-col gap-2'>
//               <h2 className='text-white text-lg font-semibold text-left'>
//                 {image.name}
//               </h2>

//               <AnimatePresence>
//                 {hoveredIndex === index || window.innerWidth < 768 ? (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.7 }}
//                     className='text-white text-xs text-left md:w-[80%]'
//                   >
//                     <p>{image.message}</p>
//                     <span className='w-1/2 flex items-start'>
//                       <motion.button
//                         className='text-[9px] bg-white text-[#1D4ED8] px-2 py-2 rounded-md mt-2'
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         Download Brochure
//                       </motion.button>
//                     </span>
//                   </motion.div>
//                 ) : null}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;
