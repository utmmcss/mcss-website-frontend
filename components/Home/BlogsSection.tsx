import { FC } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import HorizontalSkeletonLoader from '@components/Common/HorizontalSkeletonLoader';
import MaterialCard from '@components/Common/MaterialCard';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';
import SectionWrapper from '@components/Common/SectionWrapper';
import Slider from '@components/Common/Slider';
import Tag from '@components/Common/Tag';
import { useAppSelector } from '@store/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import _ from 'underscore';

const BlogsSection: FC = () => {
  const { blogs } = useAppSelector((state) => state.blogs);
  const router = useRouter();

  const blogCardInfos = Object.entries(blogs)
    .filter(([, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, creator, coverImageUrl, categories, description }]) => ({
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
        {_.isEmpty(blogCardInfos) ? (
          <HorizontalSkeletonLoader numSkeletons={1} count={8} className="w-1/2" />
        ) : (
          <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
            {blogCardInfos.map(({ id, coverImageUrl, creator, title, description, categories }) => (
              <div className="w-full px-10 py-4" key={id}>
                <MaterialCard
                  className="h-96 w-full relative"
                  onClick={() => router.push(`Blogs/${id}`)}
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
          </Slider>
        )}
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        {_.isEmpty(blogCardInfos) ? (
          <HorizontalSkeletonLoader />
        ) : (
          <div className="flex justify-center my-10">
            {blogCardInfos.map(({ id, coverImageUrl, creator, title, description, categories }) => (
              <MaterialCard
                className="w-full md:w-1/4 mx-10 h-96 relative"
                key={id}
                onClick={() => router.push(`Blogs/${id}`)}
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
            ))}
          </div>
        )}
      </MediaQueryContainer>
      <div className="text-center mt-10">
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => router.push('Blogs')}
        >
          More Blogs
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default BlogsSection;
