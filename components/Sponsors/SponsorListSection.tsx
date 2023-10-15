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

const SponsorListSection: FC<IProps> = ({ selectedCategories }) => {
  const { sponsors } = useAppSelector((state) => state.sponsors);
  const router = useRouter();
  const sponsorCardInfos = Object.entries(sponsors).map(
    ([id, { title, updatedDatetime, coverImageUrl, description }]) => ({
      id,
      title,
      updatedDatetime: formatDate(updatedDatetime, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      coverImageUrl,
      description,
    })
  );

  return (
    <div className="sponsor-list-page mx-9">
      <div className="flex flex-wrap mt-5">
        {sponsorCardInfos.map(({ id, title, description, coverImageUrl }) => (
          <div className={classNames('w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4')} key={id}>
            <MaterialCard
              className="w-full rounded-lg relative h-96"
              onClick={() => router.push(`Sponsors/${id}`)}
            >
              <div className="h-1/2 w-full image-container">
                <Image src={coverImageUrl} layout="fill" priority />
              </div>
              <div className="h-1/2 p-5">
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

export default SponsorListSection;
