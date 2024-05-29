export const Locale = {
    en: 'en',
    ru: 'ru',
} as const;

export const defaultLocale = Locale.en;
export const locales = Object.values(Locale);

export const RESEND_KEY = process.env.RESEND_KEY || (() => { throw new Error(`RESEND_KEY env variable is required`) })()
export const RESEND_TO = process.env.RESEND_TO || (() => { throw new Error(`RESEND_TO env variable is required`) })()
export const SITE_URL = process.env.URL || (() => { throw new Error(`URL env variable is required`) })()
export const MAIL_LOCALE = process.env.MAIL_LOCALE
