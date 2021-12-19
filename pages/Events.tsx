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
        onClick: () =>
          selectedCategories.includes(currOptionName)
            ? setSelectedCategories(removeElement(selectedCategories, currOptionName))
            : setSelectedCategories([...selectedCategories, currOptionName]),
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
