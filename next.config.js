const { i18n } = require('./next-i18next.config');


/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60 * 60 * 60 * 24,
        domains: ['localhost', '192.168.90.19'],
    },
    i18n,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
    react: { useSuspense: false },
};
