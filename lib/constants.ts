export const Locale = {
  en: 'en',
  ru: 'ru',
} as const;

export const defaultLocale = Locale.en;
export const locales = Object.values(Locale);

export const DEFAULT_BLUR_DATA = `data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk4vpvDAACgQFIuAF96wAAAABJRU5ErkJggg==`;

export const Links = {
  HOME: 'home',
  PROJECTS: 'projects',
  CONTACTS: 'contacts',
  TECHNOLOGIES: 'technologies',
} as const;
export type Links = typeof Links[keyof typeof Links];
