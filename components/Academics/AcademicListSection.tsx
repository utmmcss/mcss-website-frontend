import { FC } from 'react';

import MaterialCard from '@components/Common/MaterialCard';
import Tag from '@components/Common/Tag';
import { useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'underscore';

interface IProps {
  selectedCategories: string[];
}

const AcademicListSection: FC<IProps> = ({ selectedCategories }) => {
  const { academics } = useAppSelector((state) => state.academics);
  const router = useRouter();
  const academicCardInfos = Object.entries(academics)
    .filter(
      ([, { categories }]) =>
        selectedCategories.includes('All') ||
        !_.isEmpty(categories.filter((category) => selectedCategories.includes(category)))
    )
    .map(([id, { title, creator, updatedDatetime, coverImageUrl, categories, description }]) => ({
      id,
      title,
      creator,
      updatedDatetime: formatDate(updatedDatetime, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      coverImageUrl,
      categories,
      description,
    }));

  return (
    <div className="academic-list-page mx-9">
      <div className="flex flex-wrap mt-5">
        {academicCardInfos.map(({ id, title, creator, description, coverImageUrl, categories }) => (
          <div
            className={classNames('w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4', {
              hidden:
                !selectedCategories.includes('All') &&
                _.isEmpty(categories.filter((category) => selectedCategories.includes(category))),
            })}
            key={id}
          >
            <MaterialCard
              className="w-full rounded-lg relative h-96"
              onClick={() => router.push(`Academics/${id}`)}
            >
              <Tag categories={categories} />
              <div className="h-1/2 w-full image-container">
                <Image src={coverImageUrl} layout="fill" priority />
              </div>
              <div className="h-1/2 p-5">
                <h3 className="mb-2">{`By: ${creator}`}</h3>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="description">{description}</p>
              </div>
            </MaterialCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicListSection;
