import { withPayload } from '@payloadcms/next/withPayload';
import process from 'node:process';


/** @type {import('next').NextConfig} */
export default withPayload({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 60 * 24,
  },
  env: {
    URL: process.env.URL,
  },
  output: 'standalone',
  outputFileTracingIncludes: {
    '**': ['./node_modules/@libsql/linux-x64-musl/**'],
  },
});
