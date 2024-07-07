/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        remotePatterns: [{ hostname: new URL(process.env.URL).hostname }],
    },
    env: {
        URL: process.env.URL,
        GITHUB_REPO: process.env.GITHUB_REPO,
    },
    generateBuildId: () => {
        return 'my-build-id';
    },
    output: 'standalone',
};
