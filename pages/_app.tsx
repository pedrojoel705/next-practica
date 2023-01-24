import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes/themes';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>

  )
}