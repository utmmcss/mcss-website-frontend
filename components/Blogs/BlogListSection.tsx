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

const BlogListSection: FC<IProps> = ({ selectedCategories }) => {
  const { blogs } = useAppSelector((state) => state.blogs);
  const router = useRouter();
  const blogCardInfos = Object.entries(blogs)
    .filter(
      ([, { tags }]) =>
        selectedCategories.includes('All') ||
        !_.isEmpty(tags.filter((category) => selectedCategories.includes(category.Tag)))
    )
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
    <div className="blog-list-page mx-9">
      <div className="flex flex-wrap mt-5">
        {blogCardInfos.map(({ id, title, author, description, coverImageUrl, tags }) => (
          <div
            className={classNames('w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4', {
              hidden:
                !selectedCategories.includes('All') &&
                _.isEmpty(tags.filter((category) => selectedCategories.includes(category))),
            })}
            key={id}
          >
            <MaterialCard
              className="w-full rounded-lg relative h-96"
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
      </div>
    </div>
  );
};

export default BlogListSection;
