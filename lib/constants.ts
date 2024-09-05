export const Locale = {
  en: 'en',
  ru: 'ru',
} as const;

export const defaultLocale = Locale.en;
export const locales = Object.values(Locale);
