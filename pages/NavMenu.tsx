import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import Link from 'next/link';

import IconButton from '@components/Common/IconButton';

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
        <IconButton
          icon={<CloseIcon className="ml-5" />}
          className="bg-transparent px-5 py-5"
          onClick={() => router.back()}
        >
          <p className="text-xl">CLOSE</p>
        </IconButton>
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
        <p className="my-10 font-bold">UTM MATHEMATICAL COMPUTATIONAL SCIENCES SOCEITY</p>
        <p>mcss@utmsu.ca</p>
      </div>
    </div>
  );
};

export default NavMenu;
