import { FC, useEffect, useState } from 'react';
import _ from 'underscore';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import Filter from '@components/Common/Filter';
import { getAllAcademics, getAllAcademicCategories } from '@store/academicsSlice';
import AcademicListSection from '@components/Academics/AcademicListSection';
import AcademicHighlightSection from '@components/Academics/AcademicHighlightSection';
import { removeElement } from '@utils/helper';

const Academics: FC = () => {
  const dispatch = useAppDispatch();
  const { categories, academics } = useAppSelector((state) => state.academics);
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
    []
  );

  useEffect(() => {
    if (_.isEmpty(academics)) {
      dispatch(getAllAcademics());
    }

    if (_.isEmpty(categories)) {
      dispatch(getAllAcademicCategories());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 ml-14">Featured</h1>
      <AcademicHighlightSection />
      <h1 className="text-4xl font-bold my-10 ml-14">Academics</h1>
      <Filter options={options} selectedOptions={selectedCategories} />
      <AcademicListSection selectedCategories={selectedCategories} />
    </div>
  );
};

export default Academics;
