const Banner = () => {
    return (
      <div className='relative pt-8 md:pt-16 lg:pt-28 pb-14 md:pb-28 lg:pb-44 mb-5 md:mb-14 lg:mb-20'>
        {/* img with blur effect and this img takeover this banner section content by setting absolute */}
        <div className="bg-bgImg bg-cover absolute inset-0 opacity-10 z-10"></div>
        <h3 className="text-[#0B0B0B] text-center text-lg md:text-3xl lg:text-5xl font-medium md:font-bold mb-6 md:mb-10 z-20">
          I Grow By Helping People In Need
        </h3>
        <div className="flex justify-center">
          <input
            className="bg-[#FFF] border border-[#DEDEDE] rounded-s-lg w-[160px] md:w-[300px] text-sm py-1 md:py-3 pl-2 md:pl-3 z-20"
            type="text"
            placeholder="Search here....."
          />
          <button className="bg-[#FF444A] text-white font-semibold rounded-e-lg px-2 md:px-6 py-1 md:py-3 z-20">
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  