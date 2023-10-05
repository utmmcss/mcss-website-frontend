import { FC, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import DetailPageContainer from '@components/Common/DetailPageContainer';
import HeadingCard from '@components/Common/HeadingCard';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';
import { getAllEvents } from '@store/eventSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import Error from 'next/error';
import { useRouter } from 'next/router';
import _ from 'underscore';

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
    <DetailPageContainer>
      <HeadingCard
        title={parsedCurrEvent.title}
        details={[
          {
            subHeading: 'Event Time',
            info: `${parsedCurrEvent.startDatetime} - ${parsedCurrEvent.endDatetime}`,
          },
          {
            subHeading: 'Location',
            info: parsedCurrEvent.location,
          },
          {
            subHeading: 'Creator',
            info: parsedCurrEvent.creator,
          },
        ]}
        categories={parsedCurrEvent.categories}
        coverImageUrl={parsedCurrEvent.coverImageUrl}
        buttonProps={{
          text: 'Register',
          url: parsedCurrEvent.registrationUrl,
        }}
      />
      <MarkdownDisplay>{parsedCurrEvent.content}</MarkdownDisplay>
    </DetailPageContainer>
  );
};

export default EventDetail;
