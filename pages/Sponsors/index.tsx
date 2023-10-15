import { FC, useEffect, useState } from 'react';

import Filter from '@components/Common/Filter';
import SponsorHighlightSection from '@components/Sponsors/SponsorHighlightSection';
import SponsorListSection from '@components/Sponsors/SponsorListSection';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getAllSponsors } from '@store/sponsorSlice';
import { removeElement } from '@utils/helper';
import Head from 'next/head';
import _ from 'underscore';

const Sponsors: FC = () => {
  const dispatch = useAppDispatch();
  const { sponsors } = useAppSelector((state) => state.sponsors);
  const optionNames = ['All'];
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
    []
  );

  useEffect(() => {
    if (_.isEmpty(sponsors)) {
      dispatch(getAllSponsors());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>UTM MCSS | Sponsors</title>
      </Head>
      <div>
        <h1 className="text-4xl font-bold my-10 ml-14">Featured</h1>
        <SponsorHighlightSection />
        <h1 className="text-4xl font-bold my-10 ml-14">Sponsors</h1>
        <Filter options={options} selectedOptions={selectedCategories} />
        <SponsorListSection selectedCategories={selectedCategories} />
      </div>
    </>
  );
};

export default Sponsors;
