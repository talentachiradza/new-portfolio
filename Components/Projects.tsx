import Image from 'next/image'
import tale from '../public/images/p1.jpg'
import tale2 from '../public/images/p2.jpg'
import tale3 from '../public/images/p3.jpg'
import tale4 from '../public/images/p4.jpg'
import tale5 from '../public/images/p5.jpg'
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Pro<span className='text-yellow-400'>jects</span>
      </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div data-aos='fade-up'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='300'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale2} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
        <div  data-aos='fade-up' data-aos-delay='600'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale3} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
        <div  data-aos='fade-up' data-aos-delay='900'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale4} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='1200'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale5} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
        <div  data-aos='fade-up' data-aos-delay='1600'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src={tale} 
                alt='portfolio'
                layout='fill'
                className='object-contain'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
