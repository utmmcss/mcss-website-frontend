import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import Footer from '@components/Common/Footer';
import NavBar from '@components/Common/NavBar';
import { store } from '@store/store';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { theme } from 'style/theme';

import { APIProvider } from '../contexts/useAPI';

import '../scss/index.scss';
import 'tailwindcss/tailwind.css';

/**
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <APIProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Script
                strategy="lazyOnload"
                src="https://www.googletagmanager.com/gtag/js?id=G-BDH3ZFVNEG"
              />
              <Script strategy="lazyOnload">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-BDH3ZFVNEG', {
                  page_path: window.location.pathname,
                  });
                `}
              </Script>
              <NavBar />
              <Component {...pageProps} />
              <Footer />
            </CssBaseline>
          </ThemeProvider>
        </StyledEngineProvider>
        <ReactQueryDevtools />
      </APIProvider>
    </Provider>
  );
}
