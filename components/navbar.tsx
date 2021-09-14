import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../public/mcssLogo.svg';

const NavBar: FC = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 mt-14 ml-24 mr-24">
      <div className="flex item-center flex-shrink-0 mr-6">
        <Image src={Logo} alt="MCSS logo" />
      </div>
      <button className="lg:hidden" id="open-menu">
        <svg xmlns="<http://www.w3.org/2000/svg>" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="TextAlignJustified"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
      </button>
      <button className="hidden" id="close-menu">
        <svg xmlns="<http://www.w3.org/2000/svg>" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" display="block" id="Cross"><path d="M20 20L4 4m16 0L4 20" /></svg>
      </button>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="absolute right-0 mr-24">
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

export default NavBar;
