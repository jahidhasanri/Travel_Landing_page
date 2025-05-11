import React from 'react';
import { BsSend } from 'react-icons/bs';

const SubscribeForm = () => {
  return (
    <div className="container mx-auto relative bg-[#fefcff] py-16 px-6 md:px-20 rounded-3xl mt-20 overflow-hidden">
      {/* Background Circles (SVG or styled divs can be used for real production) */}
      <div className="absolute top-[-40px] left-[-40px] w-72 h-72 border-[1px] border-[#c6c6e7] rounded-full opacity-20"></div>
      <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 border-[1px] border-[#c6c6e7] rounded-full opacity-20"></div>

      {/* Top-right Icon */}
      <div className="absolute top-[-20px] right-[-20px] bg-gradient-to-br from-[#747DEF] to-[#5E3BE1] rounded-full w-16 h-16 flex items-center justify-center z-10">
      
      </div>

      {/* Content */}
      <div className="text-center  mx-auto">
        <h2 className="text-[33px] font-semibold text-[#5E6282]">
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h2>

        {/* Form */}
        <div className="mt-[74px] flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full md:w-[350px]">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-4 px-14 rounded-xl border-none focus:ring-2 ring-[#5E3BE1] outline-none shadow-md"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5E6282]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
          </div>
          <button className="bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
