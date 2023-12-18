import { FC, useEffect, useState } from 'react';

import MaterialCard from '@components/Common/MaterialCard';
import { formatDate } from '@utils/helper';
import classNames from 'classnames';
import useSponsors from 'hooks/useSponsors';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
  selectedCategories: string[];
}

const SponsorListSection: FC<IProps> = () => {
  const { data } = useSponsors();
  const router = useRouter();
  let sponsorCardInfos: {
    id: number;
    title: string;
    description: string;
    coverImageUrl: string;
  }[] = [];
  if (data) {
    sponsorCardInfos = Object.entries(data.data).map(([, { id, attributes }]) => {
      const { title, cover_image: coverImage, description } = attributes;
      return {
        id,
        title,
        coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${coverImage.data.attributes.url}`,
        description,
      };
    });
  }

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
