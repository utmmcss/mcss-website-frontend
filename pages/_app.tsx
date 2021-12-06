import '../scss/index.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Footer from '@components/Common/Footer';
import NavBar from '@components/Common/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const NavBarBlackList = ['/NavMenu'];
  const FooterBlackList = ['/NavMenu'];

  return (
    <>
      {!NavBarBlackList.includes(router.pathname) && <NavBar />}
      <Component {...pageProps} />
      {!FooterBlackList.includes(router.pathname) && <Footer />}
    </>
  );
}
export default MyApp;
