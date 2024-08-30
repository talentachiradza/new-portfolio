import { FaMap } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                <FaMap className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black"/>
                </div>
                <div>
                    <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white">
                        Address
                    </h1>
                    <p className="text-[10px] w-[90%] text-white opacity-60">
                        499/A HAMA STREET Dzivarasekwa Harare Zim
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                <IoPhonePortrait className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"/>
                </div>
                <div>
                    <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white">
                        Phone
                    </h1>
                    <p className="text-[10px] w-[90%] text-white opacity-60">
                       +263 71 227 2508 <br/>
                       +263 78 005 7634
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                <FaEnvelope className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black"/>
                </div>
                <div>
                    <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white">
                        Send Me Email
                    </h1>
                    <p className="text-[10px] w-[90%] text-white opacity-60">
                        talentachiradza@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
            <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
                Talent Chiradza 2024 | All Rights Reserve
            </div>
            <div className="flex items-center space-x-10">
                <p className="text-[16px] text-white opacity-20">Terms and Condition</p>
                <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
                <p className="text-[16px] text-white opacity-20">Sitemap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
