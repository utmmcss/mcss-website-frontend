import { FC } from 'react';
import Image from 'next/image';
import Deerfield from 'public/deerfield.png'; // image from https://www.soundsolutions.ca/projects/featured-exterior-cladding-projects/deerfield-hall-univeristy-of-toronto-mississauga-campus
import Experience from 'public/experience.png';

const AboutUsSection: FC = () => (
  <div className="about-us-section flex flex-col items-center md:items-stretch md:flex-row mt-20 md:m-20">
    <div className="header-img w-full md:w-1/3 md:mx-10 md:min-h-full">
      <Image src={Deerfield} alt="Deerfield Hall" className="min-h-full" />
    </div>
    <div className="w-4/5 mt-10 md:mt-0 md:w-2/3 flex flex-col justify-between">
      <span>
        <p className="inline-block h-1/3 mr-5 text-2xl">ABOUT US</p>
        <hr className="inline-block h-1 w-56 bg-purple-600" />
      </span>
      <div className="flex items-center my-5 md:my-0">
        <div className="w-1/2">
          <p className="text-2xl md:text-6xl font-bold">FOR THE STUDENTS</p>
          <p className="md:hidden text-lg text-purple-700 font-semibold">Academic Society</p>
        </div>
        <div className="w-1/4 md:w-1/6 m-auto">
          <Image src={Experience} alt="Experience" />
        </div>
      </div>
      <p className="hidden md:inline-block text-lg text-purple-700 font-semibold">
        Academic Society
      </p>
      <div className="flex">
        <p className="text-med md:text-justify">
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
