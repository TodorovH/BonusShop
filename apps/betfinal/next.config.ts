import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;

// export const config = {
//   matcher: ['/', '/:path*'],
// };

// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin('../../packages/shared/i18n/i18n.ts');

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);
