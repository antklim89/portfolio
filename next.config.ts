import { withPayload } from '@payloadcms/next/withPayload';
import './lib/env';

export default withPayload({
  reactStrictMode: true,
  compress: true,
  output: 'standalone',
  allowedDevOrigins: ['127.0.0.1'],
  // cacheComponents: true,
  // typedRoutes: true,
  turbopack: {},
});
