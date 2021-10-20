import React, { FC } from 'react';
import Card from '@components/Card';
import NavBar from '@components/NavBar';
import ScrollingAvatars from '@components/ScrollingAvatars/ScrollingAvatarsContainer';
import EventSection from '@components/EventSection';
import Button from '@components/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home: FC = () => (
  <div className="h-screen">
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
    <NavBar />
    <Card className="m-10 h-2/3 flex p-20 bg-gradient-to-b from-blue-600 to-white">
      <div className="flex-1 p-10 text-white items-center">
        <h1 className="text-5xl py-5">Welcome to MCSS!</h1>
        We exist to support Math and Computer Science students in everything you do. From info, to
        advocacy, to events, the MCSS exists so that you can change the future.
      </div>
      <div className="flex-1 p-10">This is some other content</div>
    </Card>
    <Card className="m-10 h-2/5 flex items-center p-20 bg-white">
      <div className="flex justify-between flex-row gap-20 p-50">
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">
            CALL TO ACTION
          </div>
          <div className="m-5 text-6xl font-medium">
            JOIN OUR TEAM
          </div>
          <div className="m-5 text-grey font-semibold">
            CONTRIBUTE TO OUR COMMUNITY
          </div>
        </div>
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">
            EXECUTIVES
          </div>
          <div className="m-5 text-6xl font-medium">
            0
          </div>
        </div>
        <div className="flex-col">
          <div className="m-5 text-grey font-semibold">
            ASSOCIATES
          </div>
          <div className="m-5 text-6xl font-medium">
            0
          </div>
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
  </div>
);

export default Home;
