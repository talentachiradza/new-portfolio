import { FaXmark } from "react-icons/fa6";
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09010a]`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-links-mobile'>Home</div>
        <div className='nav-links-mobile'>About</div>
        <div className='nav-links-mobile'>Services</div>
        <div className='nav-links-mobile'>Projects</div>
        <div className='nav-links-mobile'>Contact</div>
      </div>
      <div onClick={closeNav} className="absolute z-[100000000] cursor-pointer right-[2rem] top-[2rem] w-[2rem] h-[3rem] text-yellow-400">
        <FaXmark />
      </div>
    </div>
  )
}

export default MobileNav;

