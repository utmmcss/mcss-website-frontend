import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../public/mcssLogo.svg';

const NavBar: FC = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 mt-14 ml-24 mr-24">
      <div className="flex item-center flex-shrink-0 mr-6">
        <Image src={Logo} alt="MCSS logo" />
      </div>
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
