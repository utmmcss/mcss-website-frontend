import { FC } from 'react';
import Image from 'next/image';
import TextLoop from 'react-text-loop';
import { useRouter } from 'next/router';

import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionWrapper from '@components/Common/SectionWrapper';
import Slider from '@components/Common/Slider';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import { useAppSelector } from '@store/hooks';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-Us', { month: 'short', day: 'numeric', year: 'numeric' });

const Tag: FC<{ categories: string[] }> = ({ categories }) => (
  <div className="tag">
    {categories.length === 1 ? (
      categories[0]
    ) : (
      <TextLoop>
        {categories.map((category) => (
          <div>{category}</div>
        ))}
      </TextLoop>
    )}
  </div>
);

const EventSection: FC = () => {
  const { events } = useAppSelector((state) => state.events);
  const router = useRouter();

  const eventCardInfos = events
    .filter(({ featured }) => featured)
    .slice(0, 3)
    .map(({ title, creator, startDatetime, coverImageUrl, categories }) => ({
      title,
      creator,
      startDate: formatDate(startDatetime),
      coverImageUrl,
      categories,
    }));

  return (
    <SectionWrapper
      subtitle="CONNECT"
      title="EVENTS"
      className="event-section md:m-0 lg:px-20 2xl:px-40 py-10 bg-gray-100"
    >
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {eventCardInfos.map(({ title, creator, startDate, coverImageUrl, categories }) => (
            <div className="w-full px-10 py-4" key={`${startDate}${creator}${title}`}>
              <MaterialCard className="w-full rounded-lg relative h-96">
                <Tag categories={categories} />
                <div className="w-full h-1/2 image-container">
                  <Image src={coverImageUrl} layout="fill" priority />
                </div>
                <div className="h-1/2 p-1 px-3">
                  <div className="flex h-1/3 items-center">
                    <div className="flex w-1/2">
                      <EventOutlinedIcon className="mr-1" />
                      <p>{startDate}</p>
                    </div>
                    <div className="flex w-1/2">
                      <PersonOutlineOutlinedIcon />
                      <p className="ml-1">{creator}</p>
                    </div>
                  </div>
                  <div className="h-2/3">
                    <p className="mt-2 mx-1 text-2xl font-bold text-justify">{title}</p>
                  </div>
                </div>
              </MaterialCard>
            </div>
          ))}
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="event-section flex justify-center my-10">
          {eventCardInfos.map(({ title, creator, startDate, coverImageUrl, categories }) => (
            <MaterialCard
              className="w-full md:w-1/4 mx-10 h-96 relative"
              key={`${startDate}${creator}${title}`}
            >
              <Tag categories={categories} />
              <div className="w-full h-1/2 image-container">
                <Image src={coverImageUrl} layout="fill" priority />
              </div>
              <div className="h-1/2 p-1 px-3">
                <div className="flex h-1/3 items-center">
                  <div className="flex w-1/2">
                    <EventOutlinedIcon className="mr-1" />
                    <p>{startDate}</p>
                  </div>
                  <div className="flex w-1/2">
                    <PersonOutlineOutlinedIcon />
                    <p className="ml-1">{creator}</p>
                  </div>
                </div>
                <div className="h-2/3">
                  <p className="mt-2 mx-1 text-2xl font-bold text-justify">{title}</p>
                </div>
              </div>
            </MaterialCard>
          ))}
        </div>
      </MediaQueryContainer>
      <div className="flex justify-center mt-10">
        <IconButton
          className="w-48 h-14"
          icon={<ArrowForwardIcon className="ml-3" />}
          onClick={() => router.push('Events')}
        >
          More Events
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default EventSection;
