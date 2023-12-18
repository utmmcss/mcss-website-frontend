import { FC } from 'react';

import Button from '@mui/material/Button';

import MaterialCard from '@components/Common/MaterialCard';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import Slider from '@components/Common/Slider';
import { formatDate } from '@utils/helper';
import useSponsors from 'hooks/useSponsors';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SponsorHighlightSection: FC = () => {
  const { data } = useSponsors();
  const router = useRouter();

  let sponsorCardInfos: {
    id: number;
    title: string;
    description: string;
    coverImageUrl: string;
    featured: boolean;
  }[] = [];
  if (data) {
    sponsorCardInfos = Object.entries(data.data)
      .filter(([, { attributes }]) => attributes.featured)
      .slice(0, 3)
      .map(([, { id, attributes }]) => {
        const { title, cover_image: coverImage, description, featured } = attributes;
        return {
          id,
          title,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${coverImage.data.attributes.url}`,
          description,
          featured,
        };
      });
  }

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
          {sponsorCardInfos.map(({ id, title, coverImageUrl }) => (
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
