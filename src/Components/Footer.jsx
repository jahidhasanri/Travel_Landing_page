import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
  return (
   <div className='bg-[#e9dbee]'>

<footer className="lg:container mx-auto  py-16 px-6 md:px-20 text-[#5E6282]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

        {/* Jadoo Logo and Text */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold text-[#181E4B] mb-4">Jadoo.</h1>
          <p className="max-w-xs">Book your trip in minute, get full control for much longer.</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-black mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-black mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affilates</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="font-bold text-black mb-4">More</h4>
          <ul className="space-y-2">
            <li><a href="#">Airlinefees</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low fare tips</a></li>
          </ul>
        </div>

        {/* Socials & App Links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-105 transition">
              <FaFacebook />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#7f53ac] to-[#647dee] rounded-full shadow-md hover:scale-105 transition">
              <AiFillInstagram className="text-white" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-105 transition">
              <FaTwitterSquare />
            </button>
          </div>

          <h4 className="font-bold text-[#5E6282]">Discover our app</h4>

          <div className="flex items-center gap-5">
            <img src="/src/images/google-play 1.png" alt="Google Play" className="h-10" />
            <img src="/src/images/apple (2) 1.png" alt="Apple Store" className="h-10" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm mt-12 text-[#5E6282]">
        All rights reserved@jadoo.co
      </p>
    </footer>

   </div>
  );
};

export default Footer;
