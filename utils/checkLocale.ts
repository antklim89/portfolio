import { defaultLocale, locales } from '@/constants';
import type { LocaleType } from '@/types';


export function isCorrectLocale(locale: unknown): locale is LocaleType {
  if (typeof locale !== 'string') return false;
  return locales.includes(locale as LocaleType);
}

export function getCorrectLocale(locale: unknown): LocaleType {
  return isCorrectLocale(locale) ? locale : defaultLocale;
}
