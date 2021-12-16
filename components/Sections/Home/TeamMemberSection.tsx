import { FC, useEffect } from 'react';
import { useAppSelector } from '@store/hooks';
import _ from 'underscore';

import IconButton from '@components/Common/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollingAvatars from '@components/Common/ScrollingAvatars/ScrollingAvatarsContainer';
import SectionWrapper from '@components/Common/SectionWrapper';

const TeamMemberSection: FC = () => {
  const { members } = useAppSelector((state) => state.members);

  if (_.isEmpty(members)) return <div>loading...</div>;

  return (
    <SectionWrapper subtitle="EXECUTIVES & ASSOICATES" title="OUR TEAM">
      <ScrollingAvatars rows={2} avatarInfos={members} />
      <div className="text-center mt-10">
        <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
          Join Us
        </IconButton>
      </div>
    </SectionWrapper>
  );
};

export default TeamMemberSection;
