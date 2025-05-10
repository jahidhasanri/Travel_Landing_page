import React from 'react';

const Category = () => {
    return (
        <div className='container mx-auto '>
            <h1 className='font-semibold text-[25px] text-center'>CATEGORY</h1>
            <h3 className='text-[40px] font-bold text-center mt-1 mb-[90px]'>We Offer Best Services</h3>

            <div className='flex justify-between'>
                <div className='w-[161px] h-[229px] mt-11 text-center'>
                    <img className='mx-auto mb-7' src="/src/images/Group 48.png" alt="" />
                    <h5 className='font-semibold text-[18px] mb-[15px]'>Calculated Weather </h5>
                    <h6 className='text-[16px] font-normal text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it.</h6>
                </div>

                <div className='w-[267px] h-[314px] rounded-3xl bg-slate-50 text-center z-10'>
                <img className='mx-auto ' src="/src/images/Group 51.png" alt="" />
                    <h5 className='font-semibold text-[18px] mb-[15px]'>Best Flights </h5>
                    <h6 className='text-[16px] font-normal text-[#5E6282]'>Engrossed listening. <br /> Park gate sell they <br /> west hard for the.</h6>
                </div>

                <div className='w-[161px] h-[229px] mt-12 text-center'>
                    <img className='mx-auto mb-7' src="/src/images/Group 50.png " alt=""  />
                    <h5 className='font-semibold text-[18px] mb-[15px]'>Local Events </h5>
                    <h6 className='text-[16px] font-normal text-[#5E6282]'>Barton vanity itself do <br /> in it. Preferd to men it <br /> engrossed listening. </h6>
                </div>
                <div className='w-[161px] h-[229px] mt-12'>
                    <img className='mx-auto mb-7 text-center' src="/src/images/Group 49.png " alt="" />
                    <h5 className='font-semibold text-[18px] mb-[15px]'>Customization </h5>
                    <h6 className='text-[16px] font-normal text-[#5E6282]'>We deliver outsourced
                        aviation services for
                        military customers</h6>
                </div>

            </div>
            <img className='mt-[-68px] ml-[391px] z-0' src="/src/images/Rectangle 157.png" alt="" />
        </div>
    );
};

export default Category;