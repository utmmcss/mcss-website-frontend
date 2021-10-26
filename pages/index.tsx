import React, { FC } from 'react';

import TeamMemberSection from '@components/Sections/Home/TeamMemberSection';
import EventSection from '@components/Sections/Home/EventSection';
import HomeIntro from '@components/Sections/Home/HomeIntro';
import AboutUs from '@components/Sections/Home/AboutUs';
import JoinUsSection from '@components/Sections/Home/JoinUsSections';

const Home: FC = () => (
  <div>
    <HomeIntro />
    <AboutUs />
    <TeamMemberSection />
    <iframe
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/_pZ0IyExtQ4"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <JoinUsSection />
    <EventSection />
  </div>
);

export default Home;
