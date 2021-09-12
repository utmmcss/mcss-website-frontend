import { FC } from 'react';
import Card from '@components/Card';
import ScrollingAvatars from '@components/ScrollingAvatars/ScrollingAvatars';

const Home: FC = () => (
  <div className="h-screen">
    <div>This is home</div>
    <Card className="m-10 h-2/3 flex p-20 bg-gradient-to-b from-blue-600 to-white">
      <div className="flex-1 p-10 text-white items-center">
        <h1 className="text-5xl py-5">Welcome to MCSS!</h1>
        We exist to support Math and Computer Science students in everything you do. From info, to
        advocacy, to events, the MCSS exists so that you can change the future.
      </div>
      <div className="flex-1 p-10">This is some other content</div>
    </Card>
    <ScrollingAvatars
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
      ]}
    />
  </div>
);

export default Home;
