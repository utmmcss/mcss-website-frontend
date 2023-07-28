import { FC, useEffect } from 'react';

import AboutUsSection from '@components/Home/AboutUsSection';
import BlogsSection from '@components/Home/BlogsSection';
import EventSection from '@components/Home/EventSection';
import HomeIntroSection from '@components/Home/HomeIntroSection';
import JoinUsSection from '@components/Home/JoinUsSections';
import TeamMemberSection from '@components/Home/TeamMemberSection';
import WhatWeDoSection from '@components/Home/WhatWeDoSection';
import { getAllBlogs } from '@store/blogSlice';
import { getAllEvents } from '@store/eventSlice';
import { useAppDispatch } from '@store/hooks';
import { getAllMembers } from '@store/memberSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllBlogs());
    dispatch(getAllMembers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
