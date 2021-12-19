import { FC, useEffect, useState } from 'react';
import _ from 'underscore';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import Filter from '@components/Common/Filter';
import { getAllEvents, getAllCategories } from '@store/eventSlice';
import EventsListSection from '@components/Events/EventListSection';

interface IProps {}

function removeElement<Type>(arr: Type[], element: Type) {
  const index = arr.indexOf(element);
  if (index > -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return arr;
}

const Events: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { categories, events } = useAppSelector((state) => state.events);
  const optionNames = ['All', ...categories, 'Other'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);

  interface Test {
    name: string;
    onClick: () => void;
  }

  const options = optionNames.reduce<Test[]>(
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
      dispatch(getAllCategories());
    }
  }, []);

  return (
    <div>
      <Filter options={options} selectedOptions={selectedCategories} />
      <EventsListSection selectedCategories={selectedCategories} />
    </div>
  );
};

export default Events;
