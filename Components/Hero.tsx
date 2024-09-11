import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import hero from "../public/images/about.jpg"
import { FiArrowDownCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <Particle />
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
           <div>
           <h1 className='text-[20px] md:text-[40px] text-white font-bold'>
                HI, I'M <span className='text-yellow-400'>Talent</span>
            </h1>
             <TextEffect />
             <p className='mt-[2rem] text-[15px] text-[#ffffff92]'>
             a passionate web developer dedicated to creating stunning and functional websites.
              With a keen eye for design and a knack for coding, I transform ideas into digital
               experiences. Explore my work, learn about my journey, and get in touch to discuss
                how we can bring your vision to life.
             </p>
             <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
              <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] 
              text-black flex items-center space-x-2 rounded-[10px]'>
                <p>Download Cv</p>
                <FiArrowDownCircle className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
             </div>
           </div>  
           <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full'>
            <Image 
            src={hero}
            alt="user" 
            className='object-cover rounded-full h-[500px]'/>
        </div>
        </div>
    </div>
  )
}

export default Hero
