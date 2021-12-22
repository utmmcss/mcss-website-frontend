import React, { FC } from 'react';
import Image from 'next/image';
import HomeImage from 'public/homeImage.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import IconButton from '@components/Common/IconButton';

const HomeIntroSection: FC = () => (
  <div className="flex flex-col md:flex-row items-center md:items-stretch mt-10 md:m-20 md:mt-10">
    <div className="flex flex-col w-2/3 justify-evenly">
      <div className="flex flex-col items-center mb-4 md:hidden">
        <p className="text-2xl mb-2">Academic Society</p>
        <hr className="w-16 h-1 bg-purple-600" />
      </div>
      <div className="hidden md:flex items-center">
        <hr className="w-56 h-1 bg-purple-600" />
        <p className="ml-4 text-2xl">Academic Society</p>
      </div>
      <p className="text-4xl md:text-7xl text-center md:text-left font-sans">
        Mathematical & Computational Sciences
      </p>
      <IconButton
        className="w-48 h-14 hidden md:inline-block"
        icon={<ArrowForwardIcon className="ml-3" />}
      >
        Learn More
      </IconButton>
    </div>
    <div className="my-7 md:my-0 w-1/2 md:w-1/3">
      <Image src={HomeImage} alt="Home Image" />
    </div>
    <IconButton className="w-48 h-14 md:hidden" icon={<ArrowForwardIcon className="ml-3" />}>
      Learn More
    </IconButton>
  </div>
);

export default HomeIntroSection;
