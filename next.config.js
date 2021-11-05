
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        domains: [
            '192.168.90.19',
            'localhost',
            new URL(process.env.URL).host,
        ],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    react: { useSuspense: false },
    generateBuildId: async () => {
        return 'my-build-id';
    },
};
