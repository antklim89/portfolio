import type { Locale } from '~/constants';

export type LocaleType = keyof typeof Locale;

export type Translation = typeof import('~/locales/en.json');
