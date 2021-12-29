import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'underscore';

import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionWrapper from '@components/Common/SectionWrapper';
import Slider from '@components/Common/Slider';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import { useAppSelector } from '@store/hooks';
import HorizontalSkeletonLoader from '@components/Common/HorizontalSkeletonLoader';
import { formatDate } from '@utils/helper';
import Tag from '@components/Common/Tag';

const EventSection: FC = () => {
  const { events } = useAppSelector((state) => state.events);
  const router = useRouter();

  const eventCardInfos = Object.entries(events)
    .filter(([__, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, creator, startDatetime, coverImageUrl, categories }]) => ({
      id,
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
        {_.isEmpty(eventCardInfos) ? (
          <HorizontalSkeletonLoader numSkeletons={1} count={8} className="w-1/2" />
        ) : (
          <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
            {eventCardInfos.map(({ id, title, creator, startDate, coverImageUrl, categories }) => (
              <div className="w-full px-10 py-4" key={id}>
                <MaterialCard
                  className="w-full rounded-lg relative h-96"
                  onClick={() => router.push(`Events/${id}`)}
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
                      <p className="mt-2 mx-1 text-2xl font-bold text-justify title">{title}</p>
                    </div>
                  </div>
                </MaterialCard>
              </div>
            ))}
          </Slider>
        )}
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        {_.isEmpty(eventCardInfos) ? (
          <HorizontalSkeletonLoader />
        ) : (
          <div className="event-section flex justify-center my-10">
            {eventCardInfos.map(({ id, title, creator, startDate, coverImageUrl, categories }) => (
              <MaterialCard
                key={id}
                className="w-full md:w-1/4 mx-10 h-96 relative"
                onClick={() => router.push(`Events/${id}`)}
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
                    <p className="mt-2 mx-1 text-2xl font-bold text-justify title">{title}</p>
                  </div>
                </div>
              </MaterialCard>
            ))}
          </div>
        )}
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
