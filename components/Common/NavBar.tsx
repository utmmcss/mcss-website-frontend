import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import { useAppSelector } from '@store/hooks';
import Logo from '@public/mcssLogo.svg';
import { useIsMobile } from '@utils/hooks';
import MediaQueryContainer from './MediaQueryContainer';

const DropdownIndicator: FC<DropdownIndicatorProps<{ value: string; label: string }, false>> = (
  props,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchIcon />
    </components.DropdownIndicator>
  );
};

const NavBar: FC = () => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState<{ value: string; label: string } | null>();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();
  const { events } = useAppSelector((state) => state.events);
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
  ];
  const options = Object.entries(events).map(([id, { title }]) => ({ label: title, value: id }));
  const searchBarWhiteList = ['/Events', '/Blogs', '/EventDetail'];
  const partialRouteMatch = searchBarWhiteList.some((route) => router.pathname.includes(route));

  return (
    <nav className="flex items-center justify-between flex-wrap mt-8 mx-6 md:mx-14">
      {!showSearchBar && (
        <div className="flex item-center justify-start cursor-pointer w-20 md:mr-5">
          <Image src={Logo} alt="MCSS logo" onClick={() => router.push('/')} />
        </div>
      )}
      <div
        className={classNames('m-5 ml-0 h-12 flex flex-grow items-center', {
          block: partialRouteMatch,
          hidden: !partialRouteMatch,
        })}
      >
        {(!isMobile || showSearchBar) && (
          <Select
            className="w-full md:max-w-sm h-full md:mx-5"
            styles={{
              control: (provided: any) => ({
                ...provided,
                height: '100%',
              }),
              indicatorSeparator: () => ({
                display: 'hidden',
              }),
              option: (provided: any) => ({
                ...provided,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }),
              menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
            }}
            value={value}
            onChange={(selectedOption) => {
              setValue(selectedOption);
              if (selectedOption) {
                router.push(`/EventDetail/${selectedOption.value}`);
              }
            }}
            options={options}
            components={{ DropdownIndicator }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: 'rgb(243 232 255)',
                primary: '#7C3AED',
              },
            })}
            maxMenuHeight={130}
            placeholder="Search events"
          />
        )}
      </div>
      <MediaQueryContainer showOnMobile>
        <div className="flex align-middle">
          {!showSearchBar && (
            <button
              className={classNames('mx-2', {
                block: partialRouteMatch,
                hidden: !partialRouteMatch,
              })}
              type="button"
              onClick={() => setShowSearchBar(true)}
            >
              <SearchIcon />
            </button>
          )}
          {showSearchBar && (
            <button
              className={classNames('', {
                block: router.pathname === '/Events',
                hidden: router.pathname !== '/Events',
              })}
              type="button"
              onClick={() => setShowSearchBar(false)}
            >
              <CloseIcon />
            </button>
          )}
          {!showSearchBar && (
            <button className="ml-2" onClick={() => router.push('/NavMenu')} type="button">
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
          )}
        </div>
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
