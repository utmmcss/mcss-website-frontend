import { FC } from 'react';
import Image from 'next/image';
import Deerfield from '../public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from '../public/experience.png';
import ProfilePlaceholder from '../public/profileplaceholder.png'; // image from https://www.pngfind.com/mpng/hJmwxix_image-placeholder-png-user-profile-placeholder-image-png/

const AboutUs: FC = () => (
  <div className="flex justify-evenly">
    <div className="w-1/3 mx-10">
      <Image src={Deerfield} alt="Deerfield Hall" />
    </div>
    <div className="flex flex-col justify-between">
      <p className="text-lg font-semibold">ABOUT US</p>
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">FOR THE STUDENTS</p>
        <div className="w-1/6 m-auto">
          <Image src={Experience} alt="Experience" />
        </div>
      </div>
      <p className="text-lg text-purple-700 font-semibold">Academic Society</p>
      <p className="text-med">This is some information about the MCSS</p>
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
