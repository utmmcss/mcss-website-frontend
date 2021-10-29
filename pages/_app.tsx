import '../scss/index.scss';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import Footer from '@components/Common/Footer';
import NavBar from '@components/Common/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
