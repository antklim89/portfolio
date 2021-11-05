
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        domains: ['localhost', '192.168.90.19'],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
    react: { useSuspense: false },
};
