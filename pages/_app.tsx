import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          href="https://overreacted.io/favicon-32x32.png?v=8c19a894ebc3f54d282a8f2418cf5398"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
