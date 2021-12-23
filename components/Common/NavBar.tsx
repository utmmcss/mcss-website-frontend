import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';

import Logo from '@public/mcssLogo.svg';
import MediaQueryContainer from './MediaQueryContainer';

const NavBar: FC = () => {
  const router = useRouter();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap mt-8 mx-6 md:mx-14">
      <div className="flex item-center justify-start cursor-pointer w-20 md:mr-5">
        <Image src={Logo} alt="MCSS logo" onClick={() => router.push('/')} />
      </div>
      <div
        className={classNames('m-5 h-12 flex flex-grow items-center', {
          block: router.pathname === '/Events',
          hidden: router.pathname !== '/Events',
        })}
      >
        <div className="bg-gray-200 h-full text-base text-gray-400 pl-3 py-3">
          <SearchIcon className="  " />
        </div>
        <input
          className="bg-gray-200 px-5 rounded-sm text-base text-gray-400 w-full md:max-w-sm h-full focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search Events"
        />
      </div>
      <MediaQueryContainer showOnMobile>
        <button onClick={() => router.push('/NavMenu')} type="button">
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
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="flex justify-around">
          {links.map(({ label, href }) => (
            <Link passHref href={href} key={label}>
              <a href={href} className="mx-5 text-lg">
                {label}
              </a>
            </Link>
          ))}
        </div>
      </MediaQueryContainer>
    </nav>
  );
};

export default NavBar;
