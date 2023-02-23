import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Provider from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
