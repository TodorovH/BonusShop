import createMiddleware from 'next-intl/server';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/:path*'],
};
