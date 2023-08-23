import { FC, useEffect } from 'react';

import Box from '@mui/material/Box';

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
import Head from 'next/head';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllBlogs());
    dispatch(getAllMembers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>UTM MCSS</title>
      </Head>
      <Box px={8}>
        <HomeIntroSection />
        <AboutUsSection />
        <WhatWeDoSection />
        <TeamMemberSection />
        <JoinUsSection />
        <EventSection />
        <BlogsSection />
      </Box>
    </>
  );
};

export default Home;
