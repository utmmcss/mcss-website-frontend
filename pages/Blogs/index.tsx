import { FC, useEffect, useState } from 'react';

import BlogHighlightSection from '@components/Blogs/BlogHighlightSection';
import BlogListSection from '@components/Blogs/BlogListSection';
import Filter from '@components/Common/Filter';
import { getAllBlogCategories, getAllBlogs } from '@store/blogSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { removeElement } from '@utils/helper';
import _ from 'underscore';

const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const { categories, blogs } = useAppSelector((state) => state.blogs);
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
    []
  );

  useEffect(() => {
    if (_.isEmpty(blogs)) {
      dispatch(getAllBlogs());
    }

    if (_.isEmpty(categories)) {
      dispatch(getAllBlogCategories());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 ml-14">Featured</h1>
      <BlogHighlightSection />
      <h1 className="text-4xl font-bold my-10 ml-14">Blogs</h1>
      <Filter options={options} selectedOptions={selectedCategories} />
      <BlogListSection selectedCategories={selectedCategories} />
    </div>
  );
};

export default Blogs;
