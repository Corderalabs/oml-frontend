const Testimonials = () => {
  return (
    <section className='py-16 px-6 text-center bg-white'>
      <h2 className='text-3xl md:text-4xl font-bold text-black'>
        Testimonials
      </h2>
      <p className='text-gray-600 mt-2'>
        Hear what other investors have to say
      </p>
      <div className='max-w-3xl mx-auto mt-6 '>
        <video
          controls
          className='w-full rounded-lg shadow-lg bg-gray-400'
          poster='/test.png' // Placeholder image before play
        >
          <source src='/testimonial.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Testimonials;
