import { defaultLocale, locales } from '~/constants';
import { Locale } from '~/types';


export function isLocale(locale: unknown): locale is Locale {
    if (typeof locale !== 'string') return false;
    return locales.includes(locale as Locale);
}


export function checkLocale(locale: unknown): Locale {
    return isLocale(locale) ? locale : defaultLocale;
}
