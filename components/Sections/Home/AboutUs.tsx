import { FC } from 'react';
import Image from 'next/image';
import Deerfield from 'public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from 'public/experience.png';
import ProfilePlaceholder from 'public/profileplaceholder.png'; // image from https://www.pngfind.com/mpng/hJmwxix_image-placeholder-png-user-profile-placeholder-image-png/

const AboutUs: FC = () => (
  <div className="flex m-20">
    <div className="w-1/3 mx-10">
      <Image src={Deerfield} alt="Deerfield Hall" />
    </div>
    <div className="w-2/3 flex flex-col justify-between">
      <span>
        <p className="inline-block h-1/3 mr-5 text-2xl">ABOUT US</p>
        <hr className="inline-block h-1 w-56 bg-purple-600" />
      </span>
      <div className="flex items-center justify-between">
        <p className="text-6xl font-bold w-1/2">FOR THE STUDENTS</p>
        <div className="w-1/6 m-auto">
          <Image src={Experience} alt="Experience" />
        </div>
      </div>
      <p className="text-lg text-purple-700 font-semibold">Academic Society</p>
      <div className="flex">
        <p className="text-med mr-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis interdum
          sapien. Integer ut nunc eu tortor ullamcorper tristique. Nam pharetra euismod nibh. Cras
          aliquet nisi nunc, fermentum posuere nunc malesuada et.
        </p>
        <p className="text-med ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis interdum
          sapien. Integer ut nunc eu tortor ullamcorper tristique. Nam pharetra euismod nibh. Cras
          aliquet nisi nunc, fermentum posuere nunc malesuada et.
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-1/6 margin-auto">
          <Image src={ProfilePlaceholder} alt="President" />
        </div>
        <div className="m-10">
          <p className="text-med font-bold">BRIAN LI</p>
          <p className="text-med text-purple-700 font-semibold">President</p>
        </div>
      </div>
    </div>
  </div>
);
export default AboutUs;
