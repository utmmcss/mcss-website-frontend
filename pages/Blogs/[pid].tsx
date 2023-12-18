import { FC, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import DetailPageContainer from '@components/Common/DetailPageContainer';
import HeadingCard from '@components/Common/HeadingCard';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';
import { getAllBlogs } from '@store/blogSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { formatDate } from '@utils/helper';
import Error from 'next/error';
import { useRouter } from 'next/router';
import _ from 'underscore';

const BlogDetail: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { blogs } = useAppSelector((state) => state.blogs);
  const [loading, setLoading] = useState(_.isEmpty(blogs));
  const { pid } = router.query;
  const currBlog =
    _.isString(pid) && _.isNumber(parseInt(pid, 10)) ? blogs[parseInt(pid, 10)] : null;

  useEffect(() => {
    (async () => {
      if (_.isEmpty(blogs)) {
        await dispatch(getAllBlogs());
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <HashLoader size={50} color="#7C3AED" />
      </div>
    );
  }

  if (_.isEmpty(blogs) || !currBlog) {
    return <Error statusCode={404} />;
  }

  const tagStrings = currBlog.tags.map((tagObject) => tagObject.Tag);

  const parsedCurrBlog = {
    id: pid,
    title: currBlog.title,
    creator: currBlog.author,
    lastUpdated: formatDate(currBlog.updatedDatetime, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    coverImageUrl: currBlog.coverImageUrl,
    categories: tagStrings,
    content: currBlog.content,
    descr: currBlog.description,
  };

  return (
    <DetailPageContainer>
      <HeadingCard
        title={parsedCurrBlog.title}
        details={[
          {
            subHeading: 'Last Updated',
            info: parsedCurrBlog.lastUpdated,
          },
          {
            subHeading: 'Creator',
            info: parsedCurrBlog.creator,
          },
          {
            subHeading: 'Description',
            info: parsedCurrBlog.descr,
          },
        ]}
        categories={parsedCurrBlog.categories}
        coverImageUrl={parsedCurrBlog.coverImageUrl}
      />
      {parsedCurrBlog.content && <MarkdownDisplay>{parsedCurrBlog.content}</MarkdownDisplay>}
    </DetailPageContainer>
  );
};

export default BlogDetail;
