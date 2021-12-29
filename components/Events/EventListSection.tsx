import { FC } from 'react';
import Image from 'next/image';
import _ from 'underscore';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';

import Tag from '@components/Common/Tag';
import MaterialCard from '@components/Common/MaterialCard';
import { formatDate } from '@utils/helper';

interface IProps {
  selectedCategories: string[];
}

const EventsListSection: FC<IProps> = ({ selectedCategories }) => {
  const { events } = useAppSelector((state) => state.events);
  const router = useRouter();
  const eventCardInfos = Object.entries(events)
    .filter(
      ([__, { categories }]) =>
        selectedCategories.includes('All') ||
        !_.isEmpty(categories.filter((category) => selectedCategories.includes(category))),
    )
    .map(([id, { title, creator, startDatetime, coverImageUrl, categories }]) => ({
      id,
      title,
      creator,
      startDate: formatDate(startDatetime),
      coverImageUrl,
      categories,
    }));

  return (
    <div className="event-list-page mx-9">
      <div className="flex flex-wrap mt-5">
        {eventCardInfos.map(({ id, title, creator, startDate, coverImageUrl, categories }) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4" key={id}>
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
      </div>
    </div>
  );
};

export default EventsListSection;
