import { FC } from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import _ from 'underscore';

import SectionWrapper from '@components/Common/SectionWrapper';
import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import Slider from '@components/Common/Slider';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import { useAppSelector } from '@store/hooks';

const BlogsSection: FC = () => {
  const { blogs } = useAppSelector((state) => state.blogs);
  const router = useRouter();

  const blogCardInfos = Object.entries(blogs)
    .filter(([__, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, creator, updatedDatetime, coverImageUrl, categories, description }]) => ({
      id,
      title,
      creator,
      coverImageUrl,
      categories,
      description,
    }));

  return (
    <SectionWrapper
      title="ARTICLES "
      subtitle="BLOGS"
      className="blogs-section md:m-0 lg:px-20 2xl:px-40 py-10"
    >
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {blogCardInfos.map(({ id, coverImageUrl, creator, title, description }) => (
            <div className="w-full px-10 py-4" key={id}>
              <MaterialCard className="h-96 w-full relative">
                <div className="tag">Courses</div>
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
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="flex justify-center my-10">
          {blogCardInfos.map(({ id, coverImageUrl, creator, title, description }) => (
            <MaterialCard className="w-full md:w-1/4 mx-10 h-96 relative" key={id}>
              <div className="tag">Courses</div>
              <div className="h-1/2 w-full image-container">
                <Image src={coverImageUrl} layout="fill" priority />
              </div>
              <div className="h-1/2 p-5">
                <h3 className="mb-2">{`By: ${creator}`}</h3>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="description">{description}</p>
              </div>
            </MaterialCard>
          ))}
        </div>
      </MediaQueryContainer>
      <div className="text-center mt-10">
        <IconButton
          className="w-48 h-14"
          icon={<ArrowForwardIcon className="ml-3" />}
          onClick={() => router.push('Blogs')}
        >
          More Blogs
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default BlogsSection;
