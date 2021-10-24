import React, { FC } from 'react';

import TeamMemberSection from '@components/Sections/Home/TeamMemberSection';
import EventSection from '@components/Sections/Home/EventSection';
import HomeIntro from '@components/Sections/Home/HomeIntro';
import AboutUs from '@components/Sections/Home/AboutUs';
import JoinUsSection from '@components/Sections/JoinUsSections';

const Home: FC = () => (
  <div>
    <HomeIntro />
    <AboutUs />
    <TeamMemberSection />
    <EventSection />
    <JoinUsSection />
  </div>
);

export default Home;
