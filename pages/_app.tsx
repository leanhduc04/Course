import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { Montserrat } from 'next/font/google';
import { color } from '../src/utils/Color/color';

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['vietnamese'],
});

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Course</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: color as any,
          headings: {
            fontFamily: `${montserrat.style.fontFamily}`,
          },
          fontFamily: `${montserrat.style.fontFamily}`,
        }}
      >
        <Component {...pageProps} />
        <Notifications />
      </MantineProvider>
    </>
  );
}
