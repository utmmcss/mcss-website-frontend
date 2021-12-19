import { FC } from 'react';
import Image from 'next/image';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useAppSelector } from '@store/hooks';

import Tag from '@components/Common/Tag';
import MaterialCard from '@components/Common/MaterialCard';
import { formatDate } from '@utils/helper';

const EventsListSection: FC = () => {
  const { events } = useAppSelector((state) => state.events);
  const eventCardInfos = events.map(
    ({ title, creator, startDatetime, coverImageUrl, categories }) => ({
      title,
      creator,
      startDate: formatDate(startDatetime),
      coverImageUrl,
      categories,
    }),
  );

  return (
    <div className="event-list-page md:m-0 lg:mx-20 2xl:mx-40">
      <div className="flex flex-wrap mt-10">
        {eventCardInfos.map(({ title, creator, startDate, coverImageUrl, categories }) => (
          <div
            className="w-full sm:w-1/2 md:w-1/4 px-6 py-4"
            key={`${startDate}${creator}${title}`}
          >
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
                  <p className="mt-2 mx-1 text-2xl font-bold text-justify title">{title}</p>
                </div>
              </div>
            </MaterialCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsListSection;
