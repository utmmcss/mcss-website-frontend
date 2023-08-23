import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import Footer from '@components/Common/Footer';
import NavBar from '@components/Common/NavBar';
import { store } from '@store/store';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import theme from 'style/theme';

import '../scss/index.scss';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const NavBarBlackList = ['/NavMenu'];
  const FooterBlackList = ['/NavMenu'];

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            {!NavBarBlackList.includes(router.pathname) && <NavBar />}
            <Component {...pageProps} />
            {!FooterBlackList.includes(router.pathname) && <Footer />}
          </CssBaseline>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}
export default MyApp;
