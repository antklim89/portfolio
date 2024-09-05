import type { Locale } from '@/lib/constants';
import type EnLocale from '@/lib/locales/en.json';


export type LocaleType = keyof typeof Locale;

export type Translation = typeof EnLocale;
