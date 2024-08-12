import React from 'react';
import banner from '../../assets/classroom.jpg'

const Banner = () => {
    return (
        <div className='w-full'>
            <div className='h-40 text-center p-6'>
               <p className='text-5xl italic'>Your Digital Classroom, Reimagined</p>
               <h2 className='text-xl p-4'>Engage students with interactive lessons, resources, and tools that make learning fun and effective.</h2>
            </div>
            <img className='w-full h-98' src={banner} alt="" />

            <div className='flex justify-center items-center p-2'>
            <button className='bg-purple-900 p-4 rounded-xl text-white'>Create ClassRoom</button>
            </div>
        </div>
    );
};

export default Banner;