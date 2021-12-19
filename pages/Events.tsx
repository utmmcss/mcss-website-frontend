import { FC, useEffect } from 'react';
import _ from 'underscore';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import Filter from '@components/Common/Filter';
import { getAllEvents, getAllCategories } from '@store/eventSlice';
import EventsListSection from '@components/Events/EventListSection';

interface IProps {}

const Events: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { categories, events } = useAppSelector((state) => state.events);
  const options = ['All', ...categories, 'Other'];

  useEffect(() => {
    if (_.isEmpty(events)) {
      dispatch(getAllEvents());
    }

    if (_.isEmpty(categories)) {
      dispatch(getAllCategories());
    }
  }, []);

  return (
    <div>
      <Filter optionNames={options} />
      <EventsListSection />
    </div>
  );
};

export default Events;
