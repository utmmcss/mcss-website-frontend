import { FC } from 'react';
import SectionWrapper from '@components/Common/SectionWrapper';
import MaterialCard from '@components/Common/MaterialCard';
import IconButton from '@components/Common/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

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
      title: 'HOW TO SURVIVE MAT102',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet faucibus tellus vitae gravida. ',
    },
    {
      imgSrc: '/chef.jpg',
      author: 'Brian Li',
      title: 'HOW TO SURVIVE MAT102',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet faucibus tellus vitae gravida. ',
    },
  ];

  return (
    <SectionWrapper title="ARTICLES " subtitle="BLOGS" className="blogs-section">
      <div className="flex justify-center my-20">
        {cardInfo.map(({ imgSrc, author, title, description }) => (
          <MaterialCard classNames="flex flex-col w-1/4 2xl:w-1/5 mx-10 justify-center h-96">
            <div className="h-1/2 w-full image-container">
              <Image src={imgSrc} layout="fill" />
            </div>
            <div className="h-1/2 p-5">
              <h3 className="mb-2">{`By: ${author}`}</h3>
              <h2 className="text-lg font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </MaterialCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
          More Events
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default BlogsSection;
