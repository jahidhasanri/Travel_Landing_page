import React, { useState } from 'react';
import '../style.css';
import { BsCaretDownFill } from 'react-icons/bs';
import { FaPlayCircle, FaBars, FaTimes } from 'react-icons/fa';
import Category from './Category';
import TopSelling from './TopSelling';
import TripBook from './TripBook';
import Testimonial from './Testimoniyal';
import Slide from './Slide';
import SubscribeForm from './SubcribeFrom';
import Footer from './Footer';

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=''>
            {/* navbar and banner */}
            <div className='bg-img'>
                {/* navbar */}
                <div className='w-full lg:container lg:mx-auto pt-10'>
                    {/* Mobile Menu Button */}
                    <div className='flex justify-between items-center lg:hidden px-4'>
                        <a className='text-4xl font-extrabold' href="">Jadoo</a>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden lg:flex items-center justify-between'>
                        <div className='w-32'>
                            <a className='text-5xl font-extrabold' href="">Jadoo</a>
                        </div>
                        <div className='flex gap-14'>
                            <li className='list-none'><a href="#" className='text-2xl text-bold text-black'>Home</a></li>
                            <li className='list-none'><a href="#" className='text-2xl text-bold'>Hotels</a></li>
                            <li className='list-none'><a href="#" className='text-2xl text-bold'>Flights</a></li>
                            <li className='list-none'><a href="#" className='text-2xl text-bold'>Booking</a></li>
                        </div>
                        <div className='flex gap-10'>
                            <button className='text-2xl text-bold'>Login</button>
                            <button className='text-2xl text-bold'>SignUp</button>
                            <div className='flex items-center'>
                                <li className='text-2xl text-bold list-none'>EN</li>
                                <li className='list-none'><BsCaretDownFill /></li>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Items */}
                    {menuOpen && (
                        <div className='lg:hidden mt-4 px-4 space-y-4'>
                            <ul className='flex flex-col gap-3 text-xl font-semibold'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Hotels</a></li>
                                <li><a href="#">Flights</a></li>
                                <li><a href="#">Booking</a></li>
                            </ul>
                            <hr className='my-2' />
                            <ul className='flex flex-col gap-3 text-xl font-semibold'>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li className='flex items-center gap-1'>
                                    <span>EN</span>
                                    <BsCaretDownFill />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* navbar */}

                {/* banner */}
                <div className='lg:container mx-auto mt-16 lg:flex'>
                    <div className='lg:mt-[100px]'>
                        <h2 className=' md:font-medium md:text-[16px] lg:font-bold lg:text-[24px] mb-[20px] text-[#DF6951]'>Best Destinations around the world</h2>
                        <h1 className='  lg:font-bold lg:text-[65px] text-[#181E4B] mb-[20px]'>Travel, enjoy <br /> and live a new <br /> and full life</h1>
                        <h5 className='font-normal md:text-[16px] mb-7'>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</h5>

                        <div className='flex items-center'>
                            <button className='w-[170px] h-[60px] rounded-[10px] mr-11'  style={{ backgroundColor: 'rgb(241, 165, 1)' }}>Find out me</button>
                            <button className="w-[52px] h-[52px] bg-[#DF6951]  mr-5 rounded-full flex items-center justify-center">
                                <FaPlayCircle className="text-white w-[28px] h-[28px]" />
                            </button>
                            <h4>play Demo</h4>

                        </div>
                    </div>
                    <div className='lg:ml-[200px] mb-[95px]'>
                        <img className='mt-10 lg:mt-0 lg:w-[765px] lg:h-[765px] object-cover' src="/src/Traveller 1.png" alt="" />
                    </div>
                </div>
                {/* banner */}
            </div>
            {/* navbar and banner */}
            <Category></Category>
            <TopSelling></TopSelling>
            <TripBook></TripBook>
            <Testimonial></Testimonial>
            <Slide></Slide>
            <SubscribeForm></SubscribeForm>
            <Footer></Footer>
        </div>
    );
};

export default Page;
