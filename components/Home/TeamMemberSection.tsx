import { FC } from 'react';

import HorizontalSkeletonLoader from '@components/Common/HorizontalSkeletonLoader';
import ScrollingAvatars from '@components/Common/ScrollingAvatars/ScrollingAvatarsContainer';
import SectionWrapper from '@components/Common/SectionWrapper';
import { useAppSelector } from '@store/hooks';
import _ from 'underscore';

const TeamMemberSection: FC = () => {
  const { members } = useAppSelector((state) => state.members);

  return (
    <SectionWrapper subtitle="EXECUTIVES & ASSOCIATES" title="OUR TEAM">
      {_.isEmpty(members) ? (
        <HorizontalSkeletonLoader numSkeletons={1} count={8} className="w-1/2" />
      ) : (
        <ScrollingAvatars rows={2} avatarInfos={members} />
      )}
    </SectionWrapper>
  );
};

export default TeamMemberSection;
