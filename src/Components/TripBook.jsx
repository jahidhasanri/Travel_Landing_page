import React from 'react';
import { FaLocationArrow, FaRegHeart } from 'react-icons/fa';
import { GiLindenLeaf } from 'react-icons/gi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { MdMenuBook } from 'react-icons/md';

const TripBook = () => {
    return (
        <div className='lg:container mx-auto mt-[186px]'>
            <div className='md:flex items-center justify-between'>

           <div>
                <h5 className='text-center lg:text-start font-normal text-[18px]'>Easy and Fast</h5>
                <h1 className='md:font-bold md:text-[50px]'>Book your next trip <br />
                in 3 easy steps</h1>
                <div className='flex items-center gap-3 mb-5'>
                    <div><img src="/src/images/Group 7.png" alt="" /></div>
                    <div>
                        <h4 className='text-[16px] font-bold mb-1'>Choose Destination</h4>
                        <h3 className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus. </h3>
                    </div>
                </div>

                <div className='flex items-center gap-3 mb-5'>
                    <div><img src="/src/images/Group 7.png" alt="" /></div>
                    <div>
                        <h4 className='text-[16px] font-bold mb-1'>Choose Destination</h4>
                        <h3 className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus. </h3>
                    </div>
                </div>

                <div className='flex items-center gap-3 mb-5'>
                    <div><img src="/src/images/Group 7.png" alt="" /></div>
                    <div>
                        <h4 className='text-[16px] font-bold mb-1'>Choose Destination</h4>
                        <h3 className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus. </h3>
                    </div>
                </div>



           </div>
          
           <div className="card bg-base-100 lg:w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                    <img
                        src="/src/images/Rectangle 17.jpeg"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                <div className="card-body items-center text-center">
                    
                    <h4>Trip To Greece</h4>
                    <p>14-29 June | by Robbin joseph</p> 
                    <div className='flex items-center gap-10'>
                    <GiLindenLeaf  />
                    <MdMenuBook />
                    <FaLocationArrow /> 
                    </div>  
                    <div className='flex gap-3 items-center mt-5'>
                    <HiOutlineBuildingOffice2 />
                    <h4>24 people going</h4>
                    <button className='text-end ml-16'><FaRegHeart /></button>

                    </div>                  
            </div>
            </div>
            </div>
           </div>
     
    );
};

export default TripBook;