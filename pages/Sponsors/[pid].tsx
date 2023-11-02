import { FC, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import DetailPageContainer from '@components/Common/DetailPageContainer';
import HeadingCard from '@components/Common/HeadingCard';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';
import { formatDate } from '@utils/helper';
import useSponsors from 'hooks/useSponsors';
import Error from 'next/error';
import { useRouter } from 'next/router';
import _ from 'underscore';

const SponsorDetail: FC = () => {
  const router = useRouter();

  const { data } = useSponsors();
  const { pid } = router.query;
  const currSponsor =
    _.isString(pid) && _.isNumber(parseInt(pid, 10))
      ? data?.data.find((item) => item.id === parseInt(pid, 10))
      : null;

  if (_.isEmpty(data) || !currSponsor) {
    return <Error statusCode={404} />;
  }

  const parsedCurrSponsor = {
    id: pid,
    title: currSponsor.attributes.title,
    lastUpdated: formatDate(currSponsor.attributes.updatedAt, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${currSponsor.attributes.cover_image.data.attributes.url}`,
    content: currSponsor.attributes.content,
    sponsorUrl: currSponsor.attributes.sponsor_url,
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
