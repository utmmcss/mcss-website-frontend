import AboutUsSection from '@components/Home/AboutUsSection';
import HomeIntroSection from '@components/Home/HomeIntroSection';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>UTM MCSS</title>
      </Head>
      <HomeIntroSection />
      <AboutUsSection />
    </>
  );
};

export default Home;
