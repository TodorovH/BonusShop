// import createNextIntlPlugin from 'next-intl/plugin';
// const withNextIntl = createNextIntlPlugin(
//   '../../packages/shared/i18n/request.ts'
// );
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {};

// export default withNextIntl(nextConfig);
import type { NextConfig } from 'next';

const withTM = require('next-transpile-modules')([
  '@repo/components',
  '@repo/custom-types',
  '@repo/mockups',
  '@repo/utils',
]);

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default withTM(nextConfig);
