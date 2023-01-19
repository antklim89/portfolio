
export const Locale = {
    ru: 'ru',
    en: 'en',
} as const;

export type Locale = keyof typeof Locale
