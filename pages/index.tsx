import Container from '@mui/material/Container';

import AboutUsSection from '@components/Home/AboutUsSection';
import HomeIntroSection from '@components/Home/HomeIntroSection';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>UTM MCSS</title>
      </Head>
      <Container>
        <HomeIntroSection />
        <AboutUsSection />
      </Container>
    </>
  );
};

export default Home;
