import { FC } from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import SectionWrapper from '@components/Common/SectionWrapper';
import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import Slider from '@components/Common/Slider';
import MediaQueryContainer from '@components/Common/MediaQueryContainer';

const BlogsSection: FC = () => {
  const cardInfo = [
    {
      imgSrc: '/chef.jpg',
      author: 'Brian Li',
      title: 'HOW TO SURVIVE MAT102',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet faucibus tellus vitae gravida. ',
    },
    {
      imgSrc: '/chef.jpg',
      author: 'Brian Li',
      title: 'HOW TO SURVIVE CSC108',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet faucibus tellus vitae gravida. ',
    },
    {
      imgSrc: '/chef.jpg',
      author: 'Brian Li',
      title: 'HOW TO SURVIVE CSC148',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet faucibus tellus vitae gravida. ',
    },
  ];

  return (
    <SectionWrapper
      title="ARTICLES "
      subtitle="BLOGS"
      className="blogs-section md:m-0 lg:px-20 2xl:px-40 py-10"
    >
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {cardInfo.map(({ imgSrc, author, title, description }) => (
            <div className="w-full px-10 py-4" key={`${title}${author}${description}`}>
              <MaterialCard className="h-96 w-full relative">
                <div className="tag">Courses</div>
                <div className="h-1/2 w-full image-container">
                  <Image src={imgSrc} layout="fill" priority />
                </div>
                <div className="h-1/2 p-5">
                  <h3 className="mb-2">{`By: ${author}`}</h3>
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p>{description}</p>
                </div>
              </MaterialCard>
            </div>
          ))}
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="flex justify-center my-10">
          {cardInfo.map(({ imgSrc, author, title, description }) => (
            <MaterialCard
              className="w-full md:w-1/4 mx-10 h-96 relative"
              key={`${title}${author}${description}`}
            >
              <div className="tag">Courses</div>
              <div className="h-1/2 w-full image-container">
                <Image src={imgSrc} layout="fill" priority />
              </div>
              <div className="h-1/2 p-5">
                <h3 className="mb-2">{`By: ${author}`}</h3>
                <h2 className="text-lg font-bold">{title}</h2>
                <p>{description}</p>
              </div>
            </MaterialCard>
          ))}
        </div>
      </MediaQueryContainer>
      <div className="text-center mt-10">
        <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
          More Blogs
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default BlogsSection;
