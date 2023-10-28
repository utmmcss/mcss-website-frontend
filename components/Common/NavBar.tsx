import { FC, useEffect, useState } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import Logo from '@public/MCSSText.svg';
import { getAllBlogs } from '@store/blogSlice';
import { getAllEvents } from '@store/eventSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useIsMobile } from '@utils/hooks';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'underscore';

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
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
  const { events } = useAppSelector((state) => state.events);
  const { blogs } = useAppSelector((state) => state.blogs);
  const links = [
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
  ];
  const searchBarWhiteList = ['/Events', '/Blogs'];
  const partialRouteMatch = searchBarWhiteList.some((route) => router.pathname.includes(route));
  const options = [
    ...Object.entries(events).map(([id, { title }]) => ({ label: `Event: ${title}`, value: id })),
    ...Object.entries(blogs).map(([id, { title }]) => ({ label: `Blog: ${title}`, value: id })),
  ];

  useEffect(() => {
    if (_.isEmpty(events)) {
      dispatch(getAllEvents());
    }

    if (_.isEmpty(blogs)) {
      dispatch(getAllBlogs());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className="flex items-center flex-wrap py-4 px-6 md:px-6 relative"
      style={{ zIndex: 1000 }}
    >
      {!showSearchBar && (
        <div className="flex item-center justify-start cursor-pointer w-20 md:mr-5">
          <Button className="p-0">
            <Image src={Logo} alt="MCSS logo" onClick={() => router.push('/')} draggable="false" />
          </Button>
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
            <>
              <Button onClick={() => setShowDrawer(true)}>
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
              </Button>
              <SwipeableDrawer
                anchor="right"
                open={showDrawer}
                onOpen={() => {}}
                onClose={() => setShowDrawer(false)}
                PaperProps={{
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                  },
                }}
              >
                <Tabs
                  value={value?.label}
                  orientation="vertical"
                  onChange={(e: React.SyntheticEvent, newValue) => {
                    setValue(newValue);
                  }}
                  aria-label="wrapped label tabs example"
                >
                  {links.map(({ label, href }) => (
                    <Tab
                      key={label}
                      label={label}
                      value={{ label, href }}
                      onClick={() => {
                        router.push(href);
                        setShowDrawer(false);
                      }}
                    />
                  ))}
                </Tabs>
                <Typography variant="subtitle1">mcss@utmsu.ca</Typography>
              </SwipeableDrawer>
            </>
          )}
        </div>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <Tabs
          value={value?.label}
          onChange={(e: React.SyntheticEvent, newValue) => {
            setValue(newValue);
          }}
          aria-label="wrapped label tabs example"
        >
          {links.map(({ label, href }) => (
            <Tab
              key={label}
              label={label}
              value={{ label, href }}
              onClick={() => {
                router.push(href);
                setShowDrawer(false);
              }}
            />
          ))}
        </Tabs>
      </MediaQueryContainer>
    </nav>
  );
};

export default NavBar;
