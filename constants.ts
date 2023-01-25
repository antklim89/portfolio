
export const CREATOR = 'Me';
export const DEFAULT_DESCRIPTION = 'Portfolio';
export const DEFAULT_TITLE = 'Portfolio';


export const Locale = {
    en: 'en',
    ru: 'ru',
} as const;

export const defaultLocale = Locale.en;
export const locales = Object.values(Locale);
