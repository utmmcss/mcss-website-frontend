import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Image from 'next/image';
import _ from 'underscore';

import { useAppSelector, useAppDispatch } from '@store/hooks';
import { getAllEvents } from '@store/eventSlice';
import { HashLoader } from 'react-spinners';
import { formatDate } from '@utils/helper';
import Button from '@components/Common/Button';
import MaterialCard from '@components/Common/MaterialCard';
import Tag from '@components/Common/Tag';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';

const EventDetail: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { events } = useAppSelector((state) => state.events);
  const [loading, setLoading] = useState(_.isEmpty(events));
  const { pid } = router.query;
  const currEvent =
    _.isString(pid) && _.isNumber(parseInt(pid, 10)) ? events[parseInt(pid, 10)] : null;

  useEffect(() => {
    (async () => {
      if (_.isEmpty(events)) {
        await dispatch(getAllEvents());
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <HashLoader size={50} color="#7C3AED" />
      </div>
    );
  }

  if (_.isEmpty(events) || !currEvent) {
    return <Error statusCode={404} />;
  }

  const parsedCurrEvent = {
    id: pid,
    title: currEvent.title,
    creator: currEvent.creator,
    startDatetime: formatDate(currEvent.startDatetime, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    endDatetime: formatDate(currEvent.endDatetime, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    coverImageUrl: currEvent.coverImageUrl,
    categories: currEvent.categories,
    location: currEvent.location,
    registrationUrl: currEvent.registrationUrl,
    content: currEvent.content,
  };

  return (
    <div className="event-detail px-5 md:px-28 lg:px-64 py-10">
      <MaterialCard className="w-full h-full rounded-t-md relative">
        <div className="overview-card flex flex-col md:flex-row">
          <Tag categories={parsedCurrEvent.categories} />
          <div className="w-full h-1/3 md:w-2/3 md:h-full image-container relative">
            <Image src={parsedCurrEvent.coverImageUrl} layout="fill" priority />
          </div>
          <div className="h-2/3 md:w-1/3 md:h-full px-5 pt-3 pb-5">
            <div className="h-1/2">
              <h2 className="text-lg font-bold">Event time</h2>
              <p>{`${parsedCurrEvent.startDatetime} - ${parsedCurrEvent.endDatetime}`}</p>
              <h2 className="text-lg mt-1 font-bold">Location</h2>
              <p>{parsedCurrEvent.location}</p>
              <h2 className="text-lg mt-1 font-bold">Creator</h2>
              <p>{parsedCurrEvent.creator}</p>
            </div>
            <div className="h-1/2 flex flex-col justify-end">
              <div className="h-3/4">
                <p className="text-2xl font-bold text-justify title w-full">
                  {parsedCurrEvent.title}
                </p>
              </div>
              <div className="h-1/4">
                <Button
                  className="w-full h-full"
                  onClick={() => {
                    window.location.href = parsedCurrEvent.registrationUrl;
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaterialCard>
      <MaterialCard className="mt-5 w-full h-full p-5 rounded-b-md">
        <MarkdownDisplay>{parsedCurrEvent.content}</MarkdownDisplay>
      </MaterialCard>
    </div>
  );
};

export default EventDetail;
