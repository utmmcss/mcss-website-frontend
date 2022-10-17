import { FC, useEffect, useState } from 'react';
import _ from 'underscore';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import Filter from '@components/Common/Filter';
import { getAllPartners, getAllPartnerCategories } from '@store/partnerSlice';
import PartnerListSection from '@components/Partners/PartnerListSection';
import PartnerHighlightSection from '@components/Partners/PartnerHighlightSection';
import { removeElement } from '@utils/helper';

const Partners: FC = () => {
  const dispatch = useAppDispatch();
  const { categories, partners } = useAppSelector((state) => state.partners);
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
           * Case 3: If 'All' is selected, then we should de-select everything other than 'All'
           */
          if (_.isEmpty(newSelectedCategories)) {
            newSelectedCategories = ['All'];
          } else if (
            newSelectedCategories.length > 1 &&
            currOptionName !== 'All' &&
            newSelectedCategories.includes('All')
          ) {
            newSelectedCategories = removeElement(newSelectedCategories, 'All');
          } else if (currOptionName === 'All') {
            newSelectedCategories = ['All'];
          }

          setSelectedCategories(newSelectedCategories);
        },
      },
    ],
    [],
  );

  useEffect(() => {
    if (_.isEmpty(partners)) {
      dispatch(getAllPartners());
    }

    if (_.isEmpty(categories)) {
      dispatch(getAllPartnerCategories());
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 ml-14">Featured</h1>
      <PartnerHighlightSection />
      <h1 className="text-4xl font-bold my-10 ml-14">Partners</h1>
      <Filter options={options} selectedOptions={selectedCategories} />
      <PartnerListSection selectedCategories={selectedCategories} />
    </div>
  );
};

export default Partners;