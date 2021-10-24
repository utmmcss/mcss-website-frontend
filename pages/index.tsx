import React, { FC } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Card from '@components/Common/Card';
import ScrollingAvatars from '@components/Common/ScrollingAvatars/ScrollingAvatarsContainer';
import EventSection from '@components/Sections/Home/EventSection';
import Button from '@components/Common/Button';
import HomeIntro from '@components/Sections/Home/HomeIntro';
import AboutUs from '@components/Sections/Home/AboutUs';

const Home: FC = () => (
  <>
    <HomeIntro />
    <AboutUs />
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
    <EventSection
      eventCardInfos={[
        {
          imgSrc: '/chef.jpg',
          date: 'Sept 25',
          author: 'Brian Li',
          description: 'Masterchef Series: TA vs Professors',
        },
        {
          imgSrc: '/chef.jpg',
          date: 'Sept 26',
          author: 'Brian Li',
          description: 'Masterchef Series: TA vs Professors',
        },
        {
          imgSrc: '/chef.jpg',
          date: 'Sept 27',
          author: 'Brian Li',
          description: 'Masterchef Series: TA vs Professors',
        },
        {
          imgSrc: '/chef.jpg',
          date: 'Sept 28',
          author: 'Brian Li',
          description: 'Masterchef Series: TA vs Professors',
        },
      ]}
    />
    <Card className="m-10 h-2/5 flex items-center p-20 bg-white">
      <div className="flex justify-between flex-row gap-20 p-50">
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">CALL TO ACTION</div>
          <div className="m-5 text-6xl font-medium">JOIN OUR TEAM</div>
          <div className="m-5 text-grey font-semibold">CONTRIBUTE TO OUR COMMUNITY</div>
        </div>
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">EXECUTIVES</div>
          <div className="m-5 text-6xl font-medium">0</div>
        </div>
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">ASSOCIATES</div>
          <div className="m-5 text-6xl font-medium">0</div>
        </div>
        <div className="flex flex-col justify-center">
          <Button>
            <div className="flex align-middle">
              Join Us
              <ArrowForwardIcon className="ml-3" />
            </div>
          </Button>
        </div>
      </div>
    </Card>
  </>
);

export default Home;
