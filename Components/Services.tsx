import { FaArrowDownUpLock } from "react-icons/fa6";
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>
        My <span className='text-yellow-400'>Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div data-aos='fade-right' >
            <div className='bg-red-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
            <FaArrowDownUpLock className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[2px] mb-[2px]">
                Frontend 
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Vel dolore tenetur eius error quis quo.
            </p>
            </div>
        </div>
        <div data-aos='fade-right' data-aos-delay='300'>
            <div className='bg-orange-800 hover:scale-110 transform transition-all duration-300 uppercase hover:hue-rotate-180 font-semibold text-center p-[2rem]'>
            <FaArrowDownUpLock className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[2px] mb-[2px]">
                Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Vel dolore tenetur eius error quis quo.
            </p>
            </div>
        </div>
        <div data-aos='fade-left' data-aos-delay='500'>
            <div className='bg-blue-800 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
            <FaArrowDownUpLock className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[2px] mb-[2px]">
             Developer 
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Vel dolore tenetur eius error quis quo.
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
