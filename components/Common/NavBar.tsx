import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      <div className="flex item-center justify-start cursor-pointer w-20 md:w-48">
        <Image src={Logo} alt="MCSS logo" onClick={() => router.push('/')} />
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
        <div className="absolute right-0 mr-10">
          {links.map(({ label, href }) => (
            <Link passHref href={href} key={label}>
              <a href={href} className="mt-4 mr-8 text-lg">
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
