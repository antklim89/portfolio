export const Locale = {
  en: 'en',
  ru: 'ru',
} as const;

export const defaultLocale = Locale.en;
export const locales = Object.values(Locale);

export const Links = {
  HOME: 'home',
  PROJECTS: 'projects',
  CONTACTS: 'contacts',
  TECHNOLOGIES: 'technologies',
} as const;
export type Links = (typeof Links)[keyof typeof Links];

export const IMAGE_TECHNOLOGY_HEIGHT = 300;
export const IMAGE_TECHNOLOGY_WIDTH = 300;

export const IMAGE_PROJECT_HEIGHT = 320;
export const IMAGE_PROJECT_WIDTH = 580;

export const IMAGE_SEO_HEIGHT = 630;
export const IMAGE_SEO_WIDTH = 1200;
