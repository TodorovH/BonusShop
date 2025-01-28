import { IntlProvider } from 'next-intl';
// import { getMessages, getLocale } from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';

import { DataProvider } from '@repo/utils/data';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // const messages = await getMessages();
  // const locale = await getLocale();

  return (
    <SessionProvider session={pageProps.session}>
      <DataProvider>
        <IntlProvider locale={pageProps.locale} messages={pageProps.messages}>
          <Component {...pageProps} />
        </IntlProvider>
      </DataProvider>
    </SessionProvider>
  );
}
