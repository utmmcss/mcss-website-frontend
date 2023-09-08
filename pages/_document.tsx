import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

/**
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-document
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://mcss.club" />
        <meta name="description" content="UTM Mathematical and Computational Sciences Society" />
        <meta name="keywords" content="UTM MCSS, Mathematical and Computational Sciences Society" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://example-website/script.js" />
      </body>
    </Html>
  );
}
