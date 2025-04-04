"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="py-16 px-6 text-center bg-white" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Testimonials
      </h2>
      <p className="text-gray-600 mt-2">
        Hear what other investors have to say
      </p>
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
            <div className="absolute inset-0 flex items-center justify-center bg-gray-400 rounded-lg shadow-md">
              <div className="animate-pulse">
                <svg
                  className="w-[50px] h-[50px] text-gray-100"
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
    </section>
  );
};

export default Testimonials;

// import Image from "next/image";

// const Testimonials = () => {
//   return (
//     <section className='py-16 px-6 text-center bg-white' id="testimonials">
//       <h2 className='text-3xl md:text-4xl font-bold text-black'>
//         Testimonials
//       </h2>
//       <p className='text-gray-600 mt-2'>
//         Hear what other investors have to say
//       </p>
//       <div className='mt-6 flex justify-center'>
//               <div className='relative w-full max-w-2xl'>
//                 {/* Video Placeholder */}
//                 <div className='w-full aspect-video bg-gray-200 rounded-lg overflow-hidden'>
//                   <Image
//                     src='/your-video-thumbnail.jpg'
//                     alt='Video Thumbnail'
//                     className='w-full h-full object-cover'
//                     width={500}
//                     height={400}
//                   />
//                 </div>

//                 {/* Play Button Overlay */}
//                 <button className='absolute inset-0 flex items-center justify-center'>
//                   <div className='bg-black/60 rounded-full p-4'>
//                     <svg
//                       className='w-10 h-10 text-white'
//                       fill='currentColor'
//                       viewBox='0 0 24 24'
//                     >
//                       <path d='M8 5v14l11-7z' />
//                     </svg>
//                   </div>
//                 </button>
//               </div>
//             </div>
//     </section>
//   );
// };

// export default Testimonials;
