import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async (locale) => {
  return {
    messages: (await import(`../locales/src/${locale}.json`)).default,
  };
});
//@shared-locales/${locale}
