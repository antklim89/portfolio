import { defaultLocale, locales } from '@/lib/constants';
import type { LocaleType } from '@/lib/types';


export function isCorrectLocale(locale: unknown): locale is LocaleType {
  if (typeof locale !== 'string') return false;
  return locales.includes(locale as LocaleType);
}

export function getCorrectLocale(locale: unknown): LocaleType {
  return isCorrectLocale(locale) ? locale : defaultLocale;
}

export function cls(...classes: Array<string | undefined | false | null>): string {
  return classes.reduce<string>((acc, item): string => {
    if (typeof item === 'string' && item.trim().length > 0) return `${acc} ${item}`;
    return acc;
  }, '');
}
