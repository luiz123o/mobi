import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

import createEmotionCache from "../lib/emotionCache";
import theme from "../lib/theme";

import type { EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { FipeProvider } from "../context/fipe";

type AppPropsWithCache = AppProps & {
  Component: NextPage;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithCache) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FipeProvider>
          <Component {...pageProps} />
        </FipeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
