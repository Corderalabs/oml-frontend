const HousingOverview = () => {
  return (
    <section className='bg-white text-center py-8 md:py-16 w-11/12 mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold text-black font-inter'>
        Low Cost Housing at your Finger Tips
      </h2>
      <p className='text-gray-600 mt-4 text-base md:w-[50%] mx-auto'>
        One Million Landlord is a recognized real estate firm registered with
        the Corporate Affairs Commission in Nigeria. We provide low-cost housing
        in high-brow areas to our investors. Our services involve the purchase
        and sales of properties for clients and long lease housing investment,
        with the ultimate goal of providing affordable real estate deals to our
        investors.
      </p>

      {/* Stats Section */}
      <div className='mt-10 border-t border-gray-300 pt-3'>
        <div className='grid grid-cols-3 text-center w-full'>
          <div className='relative flex flex-col items-center'>
            <h3 className='text-3xl md:text-4xl font-extrabold text-black font-inter mt-3'>
              250+
            </h3>
            <p className='text-xs md:text-lg text-gray-600'>
              Verified Investors
            </p>
            <div className='absolute top-[-10px] right-0 h-[calc(100%+30px)] w-[1px] bg-gray-300 '></div>
          </div>
          <div className='relative flex flex-col items-center'>
            <h3 className='text-3xl md:text-4xl font-extrabold text-black font-inter mt-3'>
              20+
            </h3>
            <p className='text-xs md:text-lg text-gray-600'>Awesome Projects</p>
            <div className='absolute top-[-10px] right-0 h-[calc(100%+30px)] w-[1px] bg-gray-300'></div>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-3xl md:text-4xl font-extrabold text-black font-inter mt-3'>
              N1.5b
            </h3>
            <p className='text-xs md:text-lg text-gray-600'>
              Investment Generated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousingOverview;
