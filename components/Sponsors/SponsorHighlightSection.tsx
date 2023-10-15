import { FC } from 'react';

import Button from '@mui/material/Button';

import MaterialCard from '@components/Common/MaterialCard';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import Slider from '@components/Common/Slider';
import Tag from '@components/Common/Tag';
import { useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SponsorHighlightSection: FC = () => {
  const { sponsors } = useAppSelector((state) => state.sponsors);
  const router = useRouter();

  const sponsorCardInfos = Object.entries(sponsors)
    .filter(([, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, updatedDatetime, coverImageUrl, description }]) => ({
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
    }));

  return (
    <div>
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {sponsorCardInfos.map(({ id, coverImageUrl, title, description }) => (
            <div className="w-full pb-4 px-14" key={id}>
              <MaterialCard
                className="mobile-sponsor-card h-96 w-full relative"
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
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="sponsor-highlight-section">
          {sponsorCardInfos.map(({ id, title, updatedDatetime, coverImageUrl }) => (
            <MaterialCard
              key={id}
              className="sponsor-card h-96 w-10/12 lg:w-1/2 relative mb-10"
              onClick={() => router.push(`Sponsors/${id}`)}
            >
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
                    <div className="h-4/5">
                      <p className="text-2xl font-bold text-justify title w-full">{title}</p>
                    </div>
                    <div className="h-1/5">
                      <Button
                        variant="contained"
                        className="w-full h-full"
                        onClick={() => router.push(`Sponsors/${id}`)}
                      >
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

export default SponsorHighlightSection;
