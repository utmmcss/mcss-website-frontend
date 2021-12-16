import '../scss/index.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import Footer from '@components/Common/Footer';
import NavBar from '@components/Common/NavBar';
import { store } from '@store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const NavBarBlackList = ['/NavMenu'];
  const FooterBlackList = ['/NavMenu'];

  return (
    <Provider store={store}>
      {!NavBarBlackList.includes(router.pathname) && <NavBar />}
      <Component {...pageProps} />
      {!FooterBlackList.includes(router.pathname) && <Footer />}
    </Provider>
  );
}
export default MyApp;
