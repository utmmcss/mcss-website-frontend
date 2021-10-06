import React, { FC, useState } from 'react';
import Image from 'next/image';
import Logo from '../public/mcssLogo.svg';

const NavBar: FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => { setActive(!active); };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 mt-14 ml-14 mr-14">
        <div className="flex item-center flex-shrink-0">
          <Image src={Logo} alt="MCSS logo" />
        </div>
        <button className="lg:hidden text-teal-200 text-blue-400 " id="open-menu" onClick={handleClick} type="button">
          <svg xmlns="<http://www.w3.org/2000/svg>" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="TextAlignJustified"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
        <div className={`${active ? '' : 'hidden'} bg-gray-700 w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="absolute right-0 mr-10">
            <a href="PLACEHOLDER" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-blue-400 mr-8">About</a>
            <a href="PLACEHOLDER" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-blue-400 mr-8">Team</a>
            <a href="PLACEHOLDER" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-blue-400 mr-8">Events</a>
            <a href="PLACEHOLDER" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-blue-400 mr-8">Posts</a>
            <a href="PLACEHOLDER" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-blue-400 mr-8">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
