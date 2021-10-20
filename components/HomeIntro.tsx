import React, { FC } from 'react';
import Image from 'next/image';
import HomeImage from 'public/homeImage.png';

const HomeIntro: FC = () => (
  <>
    <div className="flex justify-evenly m-20">
      <div className="w-2/3">
        <span className="h-1/3 relative top-14">
          <hr className="inline-block h-1 w-56 bg-purple-700" />
          <p className="inline-block h-1/3 ml-5 text-2xl">Academic Society</p>
        </span>
        <p className="text-7xl font-sans">Mathematical & Computational Sciences</p>
        <p className="relative top-20">Learn more →</p>
      </div>
      <div className="w-1/3">
        <Image src={HomeImage} alt="Home Image" />
      </div>
    </div>
  </>
);

export default HomeIntro;
