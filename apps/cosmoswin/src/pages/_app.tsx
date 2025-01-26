import { IntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider {...pageProps}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
