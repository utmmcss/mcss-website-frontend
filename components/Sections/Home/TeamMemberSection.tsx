import { FC } from 'react';
import IconButton from '@components/Common/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollingAvatars from '@components/Common/ScrollingAvatars/ScrollingAvatarsContainer';

const TeamMemberSection: FC = () => (
  <div className="my-20">
    <hr className="mt-3 w-8 h-1 text-center mx-auto mb-2 bg-purple-600" />
    <p className="text-center text-gray-400 mb-2">EXECUTIVES & ASSOICATES</p>
    <h1 className="text-4xl text-center font-bold mb-5">OUR TEAM</h1>
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
  </div>
);

export default TeamMemberSection;
