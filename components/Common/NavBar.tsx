import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '@public/mcssLogo.svg';
import SearchIcon from '@mui/icons-material/Search';

const NavBar: FC = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setActive(!active);
  };

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap mt-8 mx-14">
        <div className="flex item-center flex-shrink-0 cursor-pointer">
          <Image src={Logo} alt="MCSS logo" height={80} onClick={() => router.push('/')} />
        </div>
        <div className={`${
          (router.pathname === '/Events') ? '' : 'invisible'
        }  m-5 w-full h-12 block flex-grow lg:flex lg:items-center lg:w-auto `}
        >
          <div className="bg-gray-200 h-full text-base text-gray-400 pl-3 py-3"><SearchIcon className="  " /></div>
          <input className="bg-gray-200 px-5 pr-16 rounded-sm text-base text-gray-400 w-full h-full focus:outline-none" type="search" name="" id="" placeholder="Search Events" />
        </div>
        <button className="lg:hidden" id="open-menu" onClick={handleClick} type="button">
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            display="block"
            id="TextAlignJustified"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } bg-gray-700 w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="absolute right-0 mr-10">
            {links.map(({ label, href }) => (
              <a href={href} className="block mt-4 lg:inline-block lg:mt-0 mr-8 text-lg">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
