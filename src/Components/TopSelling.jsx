import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const TopSelling = () => {
    return (
        <div className='lg:container mx-auto mt-[123px]'>
            <h5 className='text-2xl font-medium text-center mb-4'>Top Selling</h5>
           <h1 className='text-[50px] font-semibold text-center mb-16'>Top Destinations</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>

<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px]'
      src="/src/images/view-world-monument-celebrate-world-heritage-day.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Rome, Italty</h2>
    <p className='card-title'>$5,42k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3">
    <FaLocationArrow />
    <p>10 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px]'
      src="/src/images/london_uk.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">London, UK</h2>
    <p className='card-title'>$4.2k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>12 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px] w-full object-cover'
      src="/src/images/fullurpo.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Full Europe</h2>
    <p className='card-title'>$15k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>28 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px] w-full '
      src="/src/images/Switzerland.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Switzerland</h2>
    <p className='card-title'>$8k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>7 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px] w-full object-cover'
      src="/src/images/ICELAND.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Iceland</h2>
    <p className='card-title'>$10k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>10 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px] w-full '
      src="/src/images/IFL TOWER.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Paris</h2>
    <p className='card-title'>$12k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>14 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 md:w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px]'
      src="/src/images/london_uk.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">London, UK</h2>
    <p className='card-title'>$4.2k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>12 Days Tour</p>
    </div>
</div>
<div className="card bg-base-100 w-[350px] shadow-xl">
  <figure>
    <img
    className='h-[300px] w-full object-cover'
      src="/src/images/fullurpo.jpg"
      alt="rome" />
  </figure>
  <div className="mt-4 flex items-center justify-around">
    <h2 className="card-title">Full Europe</h2>
    <p className='card-title'>$15k</p>
  </div>
    <div className="ml-14 flex items-center gap-4 mt-3 pb-10">
    <FaLocationArrow />
    <p>28 Days Tour</p>
    </div>
</div>


            </div>

        </div>
    );
};

export default TopSelling;