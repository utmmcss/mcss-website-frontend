import { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavMenu: FC = () => {
  const router = useRouter();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/Blogs' },
    { label: 'Partners', href: '/Partners' },
    { label: 'Academics', href: '/Academics' },
  ];

  return (
    <div className="nav-menu bg-black h-screen w-full text-white">
      <div className="flex justify-end">
        <Button
          variant="contained"
          endIcon={<CloseIcon className="ml-5" />}
          className="bg-transparent px-5 py-5"
          onClick={() => router.back()}
        >
          <p className="text-xl">CLOSE</p>
        </Button>
      </div>
      <div className="px-10">
        {links.map(({ label, href }) => (
          <Link passHref href={href} key={label}>
            <a href={href} className="my-14 text-6xl block" key={label}>
              {label}
            </a>
          </Link>
        ))}
        <hr />
        <p className="my-10 font-bold">UTM MATHEMATICAL COMPUTATIONAL SCIENCES SOCIETY</p>
        <p>mcss@utmsu.ca</p>
      </div>
    </div>
  );
};

export default NavMenu;
