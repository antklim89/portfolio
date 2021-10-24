const { i18n } = require('./next-i18next.config');


/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
    react: { useSuspense: false },
};
