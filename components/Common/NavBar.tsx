import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import _ from 'underscore';

import { useAppSelector, useAppDispatch } from '@store/hooks';
import Logo from '@public/mcssLogo.svg';
import { useIsMobile } from '@utils/hooks';
import { getAllEvents } from '@store/eventSlice';
import { getAllBlogs } from '@store/blogSlice';
import { getAllPartners } from '@store/partnerSlice';
import { getAllAcademics } from '@store/academicsSlice';
import MediaQueryContainer from './MediaQueryContainer';

const DropdownIndicator: FC<DropdownIndicatorProps<{ value: string; label: string }, false>> = (
  props
) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchIcon />
    </components.DropdownIndicator>
  );
};

const NavBar: FC = () => {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<{ value: string; label: string } | null>();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();
  const { events } = useAppSelector((state) => state.events);
  const { blogs } = useAppSelector((state) => state.blogs);
  const { partners } = useAppSelector((state) => state.partners);
  const { academics } = useAppSelector((state) => state.academics);
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
    { label: 'Partners', href: '/Partners' },
    { label: 'Academics', href: '/Academics' },
  ];
  const searchBarWhiteList = ['/Events', '/Blogs', '/Partners', '/Academics'];
  const partialRouteMatch = searchBarWhiteList.some((route) => router.pathname.includes(route));
  const options = [
    ...Object.entries(events).map(([id, { title }]) => ({ label: `Event: ${title}`, value: id })),
    ...Object.entries(blogs).map(([id, { title }]) => ({ label: `Blog: ${title}`, value: id })),
    ...Object.entries(partners).map(([id, { title }]) => ({
      label: `Partners: ${title}`,
      value: id,
    })),
    ...Object.entries(blogs).map(([id, { title }]) => ({
      label: `Academics: ${title}`,
      value: id,
    })),
  ];

  useEffect(() => {
    if (_.isEmpty(events)) {
      dispatch(getAllEvents());
    }

    if (_.isEmpty(blogs)) {
      dispatch(getAllBlogs());
    }

    if (_.isEmpty(partners)) {
      dispatch(getAllPartners());
    }

    if (_.isEmpty(academics)) {
      dispatch(getAllAcademics());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex items-center flex-wrap mt-8 mx-6 md:mx-14">
      {!showSearchBar && (
        <div className="flex item-center justify-start cursor-pointer w-20 md:mr-5">
          <Image src={Logo} alt="MCSS logo" onClick={() => router.push('/')} />
        </div>
      )}
      <div
        className={classNames('my-5 ml-0 h-12 flex items-center', {
          'w-10/12': isMobile && showSearchBar,
          'flex-grow': !isMobile || (isMobile && !showSearchBar),
        })}
      >
        {partialRouteMatch && (!isMobile || showSearchBar) && (
          <Select
            className="w-full md:max-w-sm h-full md:mx-5"
            isClearable={!isMobile}
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
              if (selectedOption?.label.includes('Event:')) {
                router.push(`/Events/${selectedOption.value}`);
              } else if (selectedOption?.label.includes('Blog:')) {
                router.push(`/Blogs/${selectedOption.value}`);
              } else if (selectedOption?.label.includes('Partners:')) {
                router.push(`/Partners/${selectedOption.value}`);
              } else if (selectedOption?.label.includes('Academic:')) {
                router.push(`/Academics/${selectedOption.value}`);
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
            placeholder="Search for something"
          />
        )}
      </div>
      <MediaQueryContainer showOnMobile className={classNames({ 'flex-grow': showSearchBar })}>
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
              className={classNames('w-full', {
                'inline-block': partialRouteMatch,
                hidden: !partialRouteMatch,
              })}
              type="button"
              onClick={() => {
                setShowSearchBar(false);
                setValue(null);
              }}
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
