import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
  '../../packages/shared/i18n/request.ts'
);
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
