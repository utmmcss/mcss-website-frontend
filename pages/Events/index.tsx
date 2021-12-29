import { FC, useEffect, useState } from 'react';
import _ from 'underscore';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import Filter from '@components/Common/Filter';
import { getAllEvents, getAllEventCategories } from '@store/eventSlice';
import EventsListSection from '@components/Events/EventListSection';
import BlogHighlightSection from '@components/Events/EventHighlightSection';
import { removeElement } from '@utils/helper';

const Events: FC = () => {
  const dispatch = useAppDispatch();
  const { categories, events } = useAppSelector((state) => state.events);
  const optionNames = ['All', ...categories, 'Other'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);

  interface IOption {
    name: string;
    onClick: () => void;
  }

  const options = optionNames.reduce<IOption[]>(
    (accOptions, currOptionName) => [
      ...accOptions,
      {
        name: currOptionName,
        onClick: () => {
          let newSelectedCategories = selectedCategories.includes(currOptionName)
            ? removeElement(selectedCategories, currOptionName)
            : [...selectedCategories, currOptionName];

          /**
           * Case 1: Nothing is selected, then we should select 'All'
           * Case 2: Something other than 'All' is selected, then we should de-select 'All'
           */
          if (_.isEmpty(newSelectedCategories)) {
            newSelectedCategories = ['All'];
          } else if (
            newSelectedCategories.length > 1 &&
            currOptionName !== 'All' &&
            newSelectedCategories.includes('All')
          ) {
            newSelectedCategories = removeElement(newSelectedCategories, 'All');
          }

          setSelectedCategories(newSelectedCategories);
        },
      },
    ],
    [],
  );

  useEffect(() => {
    if (_.isEmpty(events)) {
      dispatch(getAllEvents());
    }

    if (_.isEmpty(categories)) {
      dispatch(getAllEventCategories());
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 ml-14">Featured</h1>
      <BlogHighlightSection />
      <h1 className="text-4xl font-bold my-10 ml-14">Events</h1>
      <Filter options={options} selectedOptions={selectedCategories} />
      <EventsListSection selectedCategories={selectedCategories} />
    </div>
  );
};

export default Events;
