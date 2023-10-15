import { FC, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import DetailPageContainer from '@components/Common/DetailPageContainer';
import HeadingCard from '@components/Common/HeadingCard';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getAllSponsors } from '@store/sponsorSlice';
import { formatDate } from '@utils/helper';
import Error from 'next/error';
import { useRouter } from 'next/router';
import _ from 'underscore';

const SponsorDetail: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { sponsors } = useAppSelector((state) => state.sponsors);
  const [loading, setLoading] = useState(_.isEmpty(sponsors));
  const { pid } = router.query;
  const currSponsor =
    _.isString(pid) && _.isNumber(parseInt(pid, 10)) ? sponsors[parseInt(pid, 10)] : null;

  useEffect(() => {
    (async () => {
      if (_.isEmpty(sponsors)) {
        await dispatch(getAllSponsors());
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

  if (_.isEmpty(sponsors) || !currSponsor) {
    return <Error statusCode={404} />;
  }

  const parsedCurrSponsor = {
    id: pid,
    title: currSponsor.title,
    lastUpdated: formatDate(currSponsor.updatedDatetime, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    coverImageUrl: currSponsor.coverImageUrl,
    content: currSponsor.content,
    sponsorUrl: currSponsor.sponsorUrl,
  };

  return (
    <DetailPageContainer>
      <HeadingCard
        title={parsedCurrSponsor.title}
        details={[
          {
            subHeading: 'Last Updated',
            info: parsedCurrSponsor.lastUpdated,
          },
        ]}
        coverImageUrl={parsedCurrSponsor.coverImageUrl}
        buttonProps={{
          text: 'More Info',
          url: parsedCurrSponsor.sponsorUrl,
        }}
      />
      <MarkdownDisplay>{parsedCurrSponsor.content}</MarkdownDisplay>
    </DetailPageContainer>
  );
};

export default SponsorDetail;
