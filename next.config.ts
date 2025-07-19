import { withPayload } from '@payloadcms/next/withPayload';
import { env } from './lib/env';


/** @type {import('next').NextConfig} */
export default withPayload({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 60 * 24,
  },
  env: {
    URL: env.URL,
  },
  output: 'standalone',
  outputFileTracingIncludes: {
    '**': ['./node_modules/@libsql/linux-x64-musl/**'],
  },
});
