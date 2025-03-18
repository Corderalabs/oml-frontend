import Image from "next/image";

export default function Vision() {
  return (
    <section className='w-full px-4 py-10 text-center bg-white'>
      {/* Title */}
      <h2 className='text-2xl md:text-3xl font-semibold text-black'>
        Our Vision
      </h2>
      <p className='text-[#122231] max-w-2xl mx-auto mt-2 text-sm md:text-base'>
        To make you a proud landlord for a long period of time, whilst we plan with you through the process of owning your dream and permanent residence.
      </p>

      {/* Video Container */}
      <div className='mt-6 flex justify-center'>
        <div className='relative w-full max-w-2xl'>
          {/* Video Placeholder */}
          <div className='w-full aspect-video bg-gray-200 rounded-lg overflow-hidden'>
            <Image
              src='/your-video-thumbnail.jpg'
              alt='Video Thumbnail'
              className='w-full h-full object-cover'
              width={500}
              height={400}
            />
          </div>

          {/* Play Button Overlay */}
          <button className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-black/60 rounded-full p-4'>
              <svg
                className='w-10 h-10 text-white'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Description */}
      <p className='text-gray-700 max-w-3xl mx-auto mt-6 text-sm md:text-base'>
        ONE MILLION LANDLORD is a consulting firm in real estate offering quality, transparent choices, both in the types of services that you can receive and how those services can be paid for, with a mission to bring service, value and care to our residents.
      </p>
      <p className='text-gray-700 max-w-3xl mx-auto mt-4 text-sm md:text-base'>
        We strive so hard to build integrity, resilience and be the best real estate consulting firm that provides affordable real estate investments to our clients
      </p>
    </section>
  );
}
