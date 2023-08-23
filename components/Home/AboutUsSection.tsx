import { FC } from 'react';

import Image from 'next/image';
import Deerfield from 'public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from 'public/experience.png';

const AboutUsSection: FC = () => (
  <div
    id="about"
    className="about-us-section flex flex-col items-center lg:items-stretch lg:flex-row mt-20 lg:m-20"
  >
    <div className="header-img w-full lg:w-1/3 lg:mx-10 lg:min-h-full">
      <Image src={Deerfield} alt="Deerfield Hall" className="min-h-full" draggable="false" />
    </div>
    <div className="w-4/5 mt-10 lg:mt-0 lg:w-2/3 flex flex-col justify-between xl:justify-center">
      <span>
        <p className="inline-block h-1/3 mr-5 text-2xl">ABOUT US</p>
        <hr className="inline-block h-1 w-56 bg-purple-600" />
      </span>
      <div className="flex items-center my-5 lg:my-0">
        <div className="w-1/2">
          <p className="text-2xl md:text-4xl mt-3 mb-3 lg:text-6xl font-bold">FOR THE STUDENTS</p>
          <p className="lg:hidden text-lg text-purple-700 font-semibold">Academic Society</p>
        </div>
        <div className="w-1/4 md:w-1/6 m-auto">
          <Image src={Experience} alt="Experience" draggable="false" />
        </div>
      </div>
      <p className="hidden lg:inline-block text-lg text-purple-700 font-semibold xl:pb-5">
        Academic Society
      </p>
      <div className="flex">
        <p className="text-med lg:text-justify">
          Hello students and welcome! UTM Mathematical and Computational Sciences Society (MCSS) is
          the official academic society for the Mathematics and Computational Sciences Department.
          The purpose of the club is to officially represent the students, promote and achieve the
          common interests of the students, encourage academic, social, and career related support
          for the students, maintain open lines of communication between the students and the
          department's faculty and staff, as well as maintain communication between the students
          themselves, and encourage faculty and student interaction outside of the formal lecture,
          tutorial, and lab settings.
        </p>
      </div>
    </div>
  </div>
);
export default AboutUsSection;
