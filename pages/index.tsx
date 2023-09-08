import { useEffect } from 'react';

import Container from '@mui/material/Container';

import AboutUsSection from '@components/Home/AboutUsSection';
import HomeIntroSection from '@components/Home/HomeIntroSection';
import TeamMemberSection from '@components/Home/TeamMemberSection';
import WhatWeDoSection from '@components/Home/WhatWeDoSection';
import { getAllBlogs } from '@store/blogSlice';
import { getAllEvents } from '@store/eventSlice';
import { useAppDispatch } from '@store/hooks';
import { getAllMembers } from '@store/memberSlice';
import Head from 'next/head';

const Home = () => {
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
      <Container>
        <HomeIntroSection />
        <AboutUsSection />
        <WhatWeDoSection />
        <TeamMemberSection />
      </Container>
    </>
  );
};

export default Home;
