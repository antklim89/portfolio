
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        remotePatterns: [{ hostname: new URL(process.env.URL).hostname }],
    },
    generateBuildId: async () => {
        return 'my-build-id';
    },
};
