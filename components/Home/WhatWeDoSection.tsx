import { FC } from 'react';
import SectionWrapper from '@components/Common/SectionWrapper';
import MaterialCard from '@components/Common/MaterialCard';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const WhatWeDoSection: FC = () => {
  const cardInfo = [
    {
      title: 'CODING WORKSHOPS',
      description:
        'We offer coding workshops for students to learn how to use different technologes to build their own projects.',
      icon: <ComputerIcon fontSize="large" />,
    },
    {
      title: 'GAMING NIGHTS',
      description:
        'We offer gaming nights for students to socialize and play games with friends and other students.',
      icon: <SportsEsportsIcon fontSize="large" />,
    },
    {
      title: 'INFO SESSIONS',
      description:
        'We offer info sessions for students to learn more about the MCS department as well as work opportunities.',
      icon: <InfoOutlinedIcon fontSize="large" />,
    },
  ];

  return (
    <SectionWrapper
      title="WHAT WE DO"
      subtitle="SYSTEM"
      className="py-10 md:py-32 bg-gray-100 what-we-do-section"
    >
      <div className="flex flex-col md:flex-row justify-center m-10 md:mt-20">
        {cardInfo.map(({ icon, title, description }) => (
          <MaterialCard
            className="flex flex-col w-full md:w-1/4 my-5 md:mx-10 px-10 justify-center h-60 md:h-72"
            key={title}
          >
            <div className="flex items-center h-1/2">
              <div className=" border-2 rounded-xl p-4">{icon}</div>
              <h2 className="text-lg font-bold ml-10 w-20">{title}</h2>
            </div>
            <div className="flex h-1/2">{description}</div>
          </MaterialCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDoSection;
