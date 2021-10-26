import { FC } from 'react';
import IconButton from '@components/Common/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollingAvatars from '@components/Common/ScrollingAvatars/ScrollingAvatarsContainer';
import SectionWrapper from '@components/Common/SectionWrapper';

const TeamMemberSection: FC = () => (
  <SectionWrapper subtitle="EXECUTIVES & ASSOICATES" title="OUR TEAM">
    <ScrollingAvatars
      rows={2}
      avatarInfos={[
        {
          name: 'John Wick',
          position: 'Co-Director of Technology',
          imgSrc: 'https://i.pravatar.cc/100',
        },
        {
          name: 'Peter Parker',
          position: 'Co-Director of Technology',
          imgSrc: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        },
        {
          name: 'Shang Chi',
          position: 'President',
          imgSrc: 'https://i.pravatar.cc/150?img=3',
        },
        {
          name: 'Shang Chi',
          position: 'President',
          imgSrc: 'https://i.pravatar.cc/150?img=4',
        },
        {
          name: 'Shang Chi',
          position: 'President',
          imgSrc: 'https://i.pravatar.cc/150?img=5',
        },
        {
          name: 'Shang Chi',
          position: 'President',
          imgSrc: 'https://i.pravatar.cc/150?img=6',
        },
      ]}
    />
    <div className="text-center mt-10">
      <IconButton className="w-48 h-14" icon={<ArrowForwardIcon className="ml-3" />}>
        Join Us
      </IconButton>
    </div>
  </SectionWrapper>
);

export default TeamMemberSection;
