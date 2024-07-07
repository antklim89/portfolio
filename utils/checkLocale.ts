import { defaultLocale, locales } from '~/constants';
import type { LocaleType } from '~/types';

export function isLocale(locale: unknown): locale is LocaleType {
    if (typeof locale !== 'string') return false;
    return locales.includes(locale as LocaleType);
}

export function checkLocale(locale: unknown): LocaleType {
    return isLocale(locale) ? locale : defaultLocale;
}
