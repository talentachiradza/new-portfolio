import { IoMenu } from "react-icons/io5";
import React from 'react';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-white font-bold text-2xl'>
          TAL
          <span className='text-yellow-600'>ent</span>
        </h1>
        <div className='hidden md:flex space-x-6'>
          <div className='nav-links'>Home</div>
          <div className='nav-links'>About</div>
          <div className='nav-links'>Services</div>
          <div className='nav-links'>Projects</div>
          <div className='nav-links'>Contact</div>
        </div>
        <div onClick={openNav} className='md:hidden'>
          <IoMenu className="w-[2rem] h-[2rem] cursor-pointer text-yellow-400"/>
        </div>
      </div>
    </div>
  )
}

export default Nav;
