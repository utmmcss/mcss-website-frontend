import "../scss/index.scss";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
