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

const BlogHighlightSection: FC = () => {
  const { blogs } = useAppSelector((state) => state.blogs);
  const router = useRouter();

  const blogCardInfos = Object.entries(blogs)
    .filter(([, { featured }]) => featured)
    .slice(0, 3)
    .map(([id, { title, author, updatedDatetime, coverImageUrl, tags, description }]) => ({
      id,
      title,
      author,
      updatedDatetime: formatDate(updatedDatetime, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      coverImageUrl,
      tags: tags.map((t) => t.Tag),
      description,
    }));

  return (
    <div>
      <MediaQueryContainer showOnMobile>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
          {blogCardInfos.map(({ id, coverImageUrl, author, title, description, tags }) => (
            <div className="w-full pb-4 px-14" key={id}>
              <MaterialCard
                className="mobile-blog-card h-96 w-full relative"
                onClick={() => router.push(`Blogs/${id}`)}
              >
                <Tag categories={tags} />
                <div className="h-1/2 w-full image-container">
                  <Image src={coverImageUrl} layout="fill" priority />
                </div>
                <div className="h-1/2 p-5">
                  <h3 className="mb-2">{`By: ${author}`}</h3>
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p className="description">{description}</p>
                </div>
              </MaterialCard>
            </div>
          ))}
        </Slider>
      </MediaQueryContainer>
      <MediaQueryContainer hideOnMobile>
        <div className="blog-highlight-section">
          {blogCardInfos.map(({ id, title, updatedDatetime, coverImageUrl, tags, author }) => (
            <MaterialCard
              key={id}
              className="blog-card h-96 w-10/12 lg:w-1/2 relative mb-10"
              onClick={() => router.push(`Blogs/${id}`)}
            >
              <Tag categories={tags} />
              <div className="flex h-full">
                <div className="w-1/2 h-full image-container">
                  <Image src={coverImageUrl} layout="fill" priority />
                </div>
                <div className="w-1/2 h-full px-5 pt-3 pb-5">
                  <div className="h-1/2">
                    <h2 className="text-lg font-bold">Last Updated</h2>
                    <p>{updatedDatetime}</p>
                    <h2 className="text-lg mt-5 font-bold">Creator</h2>
                    <p>{author}</p>
                  </div>
                  <div className="h-1/2 flex flex-col justify-end">
                    <div className="h-3/4">
                      <p className="text-2xl font-bold text-justify title w-full">{title}</p>
                    </div>
                    <div className="h-1/4">
                      <Button
                        variant="contained"
                        className="w-full h-full"
                        onClick={() => router.push(`Blogs/${id}`)}
                      >
                        Read
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

export default BlogHighlightSection;
