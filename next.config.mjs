import process from 'node:process';


/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 60 * 24,
    remotePatterns: [{ hostname: new URL(process.env.URL).hostname }],
  },
  env: {
    URL: process.env.URL,
    REPOSITORY_URL: process.env.REPOSITORY_URL,
  },
  generateBuildId: () => {
    return 'my-build-id';
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: 'standalone',
};
