import { FC } from 'react';

import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import Button from '@components/Common/Button';
import MaterialCard from '@components/Common/MaterialCard';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import Slider from '@components/Common/Slider';
import Tag from '@components/Common/Tag';
import { useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BlogHighlightSection: FC = () => {
  const { events } = useAppSelector((state) => state.events);
  const router = useRouter();

  const eventCardInfos = Object.entries(events)
    .filter(([, { featured }]) => featured)
    .map(
      ([
        id,
        { title, creator, startDatetime, coverImageUrl, categories, location, registrationUrl },
      ]) => ({
        id,
        title,
        creator,
        startDate: formatDate(startDatetime),
        startDatetime: formatDate(startDatetime, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }),
        coverImageUrl,
        categories,
        location,
        registrationUrl,
      })
    );

  return (
    <div>
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {eventCardInfos.map(({ id, title, creator, startDate, coverImageUrl, categories }) => (
            <div className="w-full pb-4 px-14" key={id}>
              <MaterialCard
                className="mobile-event-card w-full rounded-lg relative h-96"
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
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="event-highlight-section">
          {eventCardInfos.map(
            ({
              id,
              title,
              startDatetime,
              coverImageUrl,
              location,
              categories,
              registrationUrl,
            }) => (
              <MaterialCard
                key={id}
                className="event-card h-96 w-10/12 lg:w-1/2 relative mb-10"
                onClick={() => router.push(`Events/${id}`)}
              >
                <Tag categories={categories} />
                <div className="flex h-full">
                  <div className="w-1/2 h-full image-container">
                    <Image src={coverImageUrl} layout="fill" priority />
                  </div>
                  <div className="w-1/2 h-full px-5 pt-3 pb-5">
                    <div className="h-1/2">
                      <h2 className="text-lg font-bold">Datetime</h2>
                      <p>{startDatetime}</p>
                      <h2 className="text-lg mt-5 font-bold">Location</h2>
                      <p>{location}</p>
                    </div>
                    <div className="h-1/2 flex flex-col justify-end">
                      <div className="h-3/4">
                        <p className="text-2xl font-bold text-justify title w-full">{title}</p>
                      </div>
                      <div className="h-1/4">
                        <Button
                          className="w-full h-full"
                          onClick={() => {
                            window.location.href = registrationUrl;
                          }}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </MaterialCard>
            )
          )}
        </div>
      </MediaQueryContainer>
    </div>
  );
};

export default BlogHighlightSection;
