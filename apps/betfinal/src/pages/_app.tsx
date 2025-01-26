import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
// import { getMessages, getLocale } from 'next-intl/server';

import { DataProvider } from '@repo/utils/data';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // const locale = await getLocale();
  // const messages = await getMessages();
  console.log(pageProps.messages);
  console.log(pageProps.locale);
  return (
    <DataProvider>
      <NextIntlClientProvider
        locale={pageProps.locale}
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </DataProvider>
  );
}
