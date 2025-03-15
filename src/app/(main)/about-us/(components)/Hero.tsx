import React from 'react'

export default function Hero() {
  return (
    <section
      className='relative bg-cover bg-center text-white py-16 px-6'
      style={{
        backgroundImage: "url('/images/about.png')",
      }}
    >
      <div className='absolute inset-0 bg-black/60' />
      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
          We are on a mission to provide{" "}
          <span className='text-yellow-400'>cheap</span> and
          <span className='text-blue-400'> affordable</span> real estate in the
          highbrow areas of Lagos
        </h2>
        <p className='mt-4 text-gray-300 text-sm md:text-base'>
          Our property structures are designed by professional engineers to meet
          with modern standards, strategically located in the commercialized
          areas in Lagos.
        </p>
      </div>
    </section>
  );
}
