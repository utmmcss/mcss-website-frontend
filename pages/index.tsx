import { FC, useEffect } from 'react';

import TeamMemberSection from '@components/Sections/Home/TeamMemberSection';
import EventSection from '@components/Sections/Home/EventSection';
import HomeIntroSection from '@components/Sections/Home/HomeIntroSection';
import AboutUsSection from '@components/Sections/Home/AboutUsSection';
import JoinUsSection from '@components/Sections/Home/JoinUsSections';
import WhatWeDoSection from '@components/Sections/Home/WhatWeDoSection';
import BlogsSection from '@components/Sections/Home/BlogsSection';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { getAllEvents } from '@store/eventSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events);

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div>
      <HomeIntroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <TeamMemberSection />
      <iframe
        width="100%"
        height="550"
        src="https://www.youtube.com/embed/_pZ0IyExtQ4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <JoinUsSection />
      <EventSection />
      <BlogsSection />
    </div>
  );
};

export default Home;
