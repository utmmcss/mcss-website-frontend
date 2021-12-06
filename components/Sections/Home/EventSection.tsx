import { FC } from 'react';
import Image from 'next/image';

import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionWrapper from '@components/Common/SectionWrapper';
import Slider from '@components/Common/Slider';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';

const EventSection: FC = () => {
  const eventCardInfos = [
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 25',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 26',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
    {
      imgSrc: '/chef.jpg',
      date: 'Sept 27',
      author: 'Brian Li',
      description: 'Masterchef Series: TA vs Professors',
    },
  ];

  return (
    <SectionWrapper
      subtitle="CONNECT"
      title="EVENTS"
      className="event-section md:m-0 lg:px-20 2xl:px-40 py-10 bg-gray-100"
    >
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {eventCardInfos.map(({ imgSrc, date, author, description }) => (
            <div className="w-full px-10 py-4" key={`${date}${author}${description}`}>
              <MaterialCard className="w-full rounded-lg relative h-96">
                <div className="tag">Food</div>
                <div className="w-full h-1/2 image-container">
                  <Image src={imgSrc} layout="fill" />
                </div>
                <div className="h-1/2 p-1 px-3">
                  <div className="flex h-1/3 items-center">
                    <div className="flex w-1/2">
                      <EventOutlinedIcon className="mr-1" />
                      <p>{date}</p>
                    </div>
                    <div className="flex w-1/2">
                      <PersonOutlineOutlinedIcon />
                      <p className="ml-1">{author}</p>
                    </div>
                  </div>
                  <div className="h-2/3">
                    <p className="mt-2 mx-1 text-2xl font-bold text-justify">{description}</p>
                  </div>
                </div>
              </MaterialCard>
            </div>
          ))}
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="event-section flex justify-center my-10">
          {eventCardInfos.map(({ imgSrc, date, author, description }) => (
            <MaterialCard
              className="w-full 2xl:w-1/5 mx-10 h-96 relative"
              key={`${date}${author}${description}`}
            >
              <div className="tag">Food</div>
              <div className="w-full h-1/2 image-container">
                <Image src={imgSrc} layout="fill" />
              </div>
              <div className="h-1/2 p-1 px-3">
                <div className="flex h-1/3 items-center">
                  <div className="flex w-1/2">
                    <EventOutlinedIcon className="mr-1" />
                    <p>{date}</p>
                  </div>
                  <div className="flex w-1/2">
                    <PersonOutlineOutlinedIcon />
                    <p className="ml-1">{author}</p>
                  </div>
                </div>
                <div className="h-2/3">
                  <p className="mt-2 mx-1 text-2xl font-bold text-justify">{description}</p>
                </div>
              </div>
            </MaterialCard>
          ))}
        </div>
      </MediaQueryContainer>
      <div className="text-center mt-10">
        <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
          More Events
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default EventSection;
