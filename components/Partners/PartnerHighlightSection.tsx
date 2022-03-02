import { FC } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';

import MaterialCard from '@components/Common/MaterialCard';
import Button from '@components/Common/Button';
import Tag from '@components/Common/Tag';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import { formatDate } from '@utils/helper';
import Slider from '@components/Common/Slider';

const PartnerHighlightSection: FC = () => {
  const { partners } = useAppSelector((state) => state.partners);
  const router = useRouter();

  const partnerCardInfos = Object.entries(partners)
    .filter(([__, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, updatedDatetime, coverImageUrl, categories, description }]) => ({
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
      categories,
      description,
    }));

  return (
    <div>
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {partnerCardInfos.map(({ id, coverImageUrl, title, description, categories }) => (
            <div className="w-full pb-4 px-14" key={id}>
              <MaterialCard
                className="mobile-partner-card h-96 w-full relative"
                onClick={() => router.push(`Partners/${id}`)}
              >
                <Tag categories={categories} />
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
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="partner-highlight-section">
          {partnerCardInfos.map(({ id, title, updatedDatetime, coverImageUrl, categories }) => (
            <MaterialCard
              key={id}
              className="partner-card h-96 w-10/12 lg:w-1/2 relative mb-10"
              onClick={() => router.push(`Partners/${id}`)}
            >
              <Tag categories={categories} />
              <div className="flex h-full">
                <div className="w-1/2 h-full image-container">
                  <Image src={coverImageUrl} layout="fill" priority />
                </div>
                <div className="w-1/2 h-full px-5 pt-3 pb-5">
                  <div className="h-1/4">
                    <h2 className="text-lg font-bold">Last Updated</h2>
                    <p>{updatedDatetime}</p>
                  </div>
                  <div className="h-3/4 flex flex-col justify-end">
                    <div className="h-3/4">
                      <p className="text-2xl font-bold text-justify title w-full">{title}</p>
                    </div>
                    <div className="h-1/4">
                      <Button className="w-full h-full" onClick={() => router.push(`Partners/${id}`)}>
                        More Info
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </MaterialCard>
          ))}
        </div>
      </MediaQueryContainer>
    </div>
  );
};

export default PartnerHighlightSection;
