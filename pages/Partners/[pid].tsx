import { FC, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import DetailPageContainer from '@components/Common/DetailPageContainer';
import HeadingCard from '@components/Common/HeadingCard';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getAllPartners } from '@store/partnerSlice';
import { formatDate } from '@utils/helper';
import Error from 'next/error';
import { useRouter } from 'next/router';
import _ from 'underscore';

const PartnerDetail: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { partners } = useAppSelector((state) => state.partners);
  const [loading, setLoading] = useState(_.isEmpty(partners));
  const { pid } = router.query;
  const currPartner =
    _.isString(pid) && _.isNumber(parseInt(pid, 10)) ? partners[parseInt(pid, 10)] : null;

  useEffect(() => {
    (async () => {
      if (_.isEmpty(partners)) {
        await dispatch(getAllPartners());
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

  if (_.isEmpty(partners) || !currPartner) {
    return <Error statusCode={404} />;
  }

  const parsedCurrPartner = {
    id: pid,
    title: currPartner.title,
    lastUpdated: formatDate(currPartner.updatedDatetime, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
    coverImageUrl: currPartner.coverImageUrl,
    categories: currPartner.categories,
    content: currPartner.content,
    partnerUrl: currPartner.partnerUrl,
  };

  return (
    <DetailPageContainer>
      <HeadingCard
        title={parsedCurrPartner.title}
        details={[
          {
            subHeading: 'Last Updated',
            info: parsedCurrPartner.lastUpdated,
          },
        ]}
        categories={parsedCurrPartner.categories}
        coverImageUrl={parsedCurrPartner.coverImageUrl}
        buttonProps={{
          text: 'More Info',
          url: parsedCurrPartner.partnerUrl,
        }}
      />
      <MarkdownDisplay>{parsedCurrPartner.content}</MarkdownDisplay>
    </DetailPageContainer>
  );
};

export default PartnerDetail;
