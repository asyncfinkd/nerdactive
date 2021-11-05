import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import Actions from "actions/_app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Actions.Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          href="https://overreacted.io/favicon-32x32.png?v=8c19a894ebc3f54d282a8f2418cf5398"
          type="image/png"
        />
      </Actions.Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
