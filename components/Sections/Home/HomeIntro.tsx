import React, { FC } from 'react';
import Image from 'next/image';
import HomeImage from 'public/homeImage.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import IconButton from '@components/Common/IconButton';

const HomeIntro: FC = () => (
  <div className="flex m-20 mt-10">
    <div className="flex flex-col w-2/3 justify-evenly">
      <div className="flex items-center">
        <hr className="w-56 h-1 bg-purple-600" />
        <p className="ml-4 text-2xl">Academic Society</p>
      </div>
      <p className="text-7xl font-sans">Mathematical & Computational Sciences</p>
      <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
        Learn More
      </IconButton>
    </div>
    <div className="w-1/3">
      <Image src={HomeImage} alt="Home Image" />
    </div>
  </div>
);

export default HomeIntro;
