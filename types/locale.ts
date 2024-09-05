import type { Locale } from '@/constants';
import type EnLocale from '@/locales/en.json';


export type LocaleType = keyof typeof Locale;

export type Translation = typeof EnLocale;
