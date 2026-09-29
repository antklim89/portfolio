import { withPayload } from '@payloadcms/next/withPayload';

export default withPayload({
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
  },
  compress: true,
  output: 'standalone',
  cacheComponents: true,
});
