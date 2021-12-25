import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import Logo from '@public/mcssLogo.svg';
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
  const [value, setValue] = useState<{ value: string; label: string } | null>();
  const router = useRouter();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
  ];
  const options = [
    {
      value: 'chocolatechocolatechocolatechocolatechocolatechocolatechocolatechocolate',
      label: 'chocolatechocolatechocolatechocolatechocolatechocolatechocolatechocolate',
    },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
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
  };

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
        <Select
          className="w-full md:max-w-sm h-full"
          styles={customStyles}
          value={value}
          onChange={(selectedOption) => setValue(selectedOption)}
          options={options}
          components={{ DropdownIndicator }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'rgb(243 232 255)',
              primary: '#7C3AED',
            },
          })}
          maxMenuHeight={130}
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
