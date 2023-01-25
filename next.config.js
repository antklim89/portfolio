
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        domains: [new URL(process.env.URL).host],
    },
    generateBuildId: async () => {
        return 'my-build-id';
    },
    experimental: { appDir: true },
};
