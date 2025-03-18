import Image from "next/image";

const Hero = () => {
  return (
    <section className='bg-white text-center py-8 md:py-16 px-6'>
      <h1 className='text-3xl md:text-5xl font-extrabold text-black md:w-[70%] lg:w-6/12 mx-auto font-inter'>
        Why Pay Rent? When you can Own a Home in Lagos
      </h1>
      <p className='text-[#122231] mt-6 text-lg font-normal md:w-[43%] mx-auto'>
        Stay RENT FREE for 15 years or more. For as low as 5 million naira, own your peace of mind
      </p>
      <button className='bg-primary-100 text-white px-8 py-3 rounded-2xl mt-6 w-[182px] text-center'>
        Contact Us
      </button>

      {/* Property Listings */}
      <div className='mt-10 w-11/12 mx-auto flex flex-col md:flex-row gap-6 justify-center'>
        <div className='relative w-full md:w-1/3'>
          <Image
            src='/images/brics.png'
            alt='Mc-Allen Residence'
            width={400}
            height={500}
            className='rounded-xl w-full object-cover'
          />
          <p className='absolute bottom-4 left-4 text-white text-lg font-semibold'>
            Mc-Allen Residence
          </p>
        </div>

        <div className='relative w-full md:w-1/3'>
          <Image
            src='/images/brics2.png'
            alt='The Brics Homes'
            width={400}
            height={500}
            className='rounded-xl w-full object-cover'
          />
          <p className='absolute bottom-4 left-4 text-white text-lg font-semibold'>
            The Brics Homes
          </p>
        </div>

        <div className='relative w-full md:w-1/3'>
          <Image
            src='/images/cardiff4.png'
            alt='Cardiff Courts'
            width={400}
            height={500}
            className='rounded-xl w-full object-cover'
          />
          <p className='absolute bottom-4 left-4 text-white text-lg font-semibold'>
            Cardiff Courts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
