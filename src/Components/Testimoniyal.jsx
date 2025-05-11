import React from 'react';

const Testimonial = () => {
  return (
    <div className="container mx-auto mt-28 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h5 className="text-[#5E6282] uppercase font-semibold text-[18px] mb-2">Testimonials</h5>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#14183E] leading-tight mb-[82px]">
          What People Say<br />About Us.
        </h2>

        {/* Slider Dots */}
        <div className="flex gap-3 mt-6">
          <span className="w-3 h-3 rounded-full bg-[#39425D]"></span>
          <span className="w-3 h-3 rounded-full bg-[#E5E5E5]"></span>
          <span className="w-3 h-3 rounded-full bg-[#E5E5E5]"></span>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2">
        {/* Back Card */}
        <div className="absolute top-44 left-[300px] w-full max-w-md  bg-white shadow-md rounded-xl p-6 opacity-70 z-0">
          <h5 className="text-[#14183E] font-bold mb-1">Chris Thomas</h5>
          <p className="text-[#5E6282]">CEO of Red Button</p>
        </div>

        {/* Front Card */}
        <div className="relative w-full max-w-md bg-white shadow-lg rounded-xl left-56 p-6 z-10">
          <div className="flex items-start gap-4">
            {/* Profile Image */}
            <img
              src="/src/images/Image.png"
              alt="User"
              className="w-12 h-12 rounded-full border-4 border-white shadow-md -mt-6 -ml-6"
            />
            <p className="text-[#5E6282] leading-relaxed">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon
              he same as knew next. Of believed or diverted no.”
            </p>
          </div>

          {/* User Info */}
          <div className="mt-4">
            <h5 className="text-[#14183E] font-bold">Mike taylor</h5>
            <p className="text-[#5E6282]">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
