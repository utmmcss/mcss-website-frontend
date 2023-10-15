import { FC } from 'react';

import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import MaterialCard from '@components/Common/MaterialCard';
import Tag from '@components/Common/Tag';
import { useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'underscore';

interface IProps {
  selectedCategories: string[];
}

const EventsListSection: FC<IProps> = ({ selectedCategories }) => {
  const { events } = useAppSelector((state) => state.events);
  const router = useRouter();
  const eventCardInfos = Object.entries(events).map(
    ([id, { title, startDatetime, coverImageUrl, tags }]) => ({
      id,
      title,
      startDate: formatDate(startDatetime),
      coverImageUrl,
      tags: tags.map((t) => t.Tag),
    })
  );

  return (
    <div className="event-list-page mx-9">
      <div className="flex flex-wrap mt-5">
        {eventCardInfos.map(({ id, title, startDate, coverImageUrl, tags }) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4" key={id}>
            <MaterialCard
              className="w-full rounded-lg relative h-96"
              onClick={() => router.push(`Events/${id}`)}
            >
              <Tag categories={tags} />
              <div className="w-full h-1/2 image-container">
                <Image src={coverImageUrl} layout="fill" priority />
              </div>
              <div className="h-1/2 p-1 px-3">
                <div className="flex h-1/3 items-center">
                  <div className="flex w-1/2">
                    <EventOutlinedIcon className="mr-1" />
                    <p>{startDate}</p>
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
