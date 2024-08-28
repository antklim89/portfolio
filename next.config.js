/** @type {import('next').NextConfig} */
module.exports = {
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
    output: 'standalone',
};
