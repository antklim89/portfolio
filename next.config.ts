import { withPayload } from '@payloadcms/next/withPayload';
import './lib/env';


/** @type {import('next').NextConfig} */
export default withPayload({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 60 * 24,
  },
  output: 'standalone',
  outputFileTracingIncludes: {
    '**': ['./node_modules/@libsql/linux-x64-musl/**'],
  },
});
