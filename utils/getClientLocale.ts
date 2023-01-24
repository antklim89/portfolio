import { locales } from '~/constants';
import { Locale } from '~/types';

import { getCookie } from './cookie';


export function getClientLocale(): Locale {
    if (typeof window === 'undefined') return locales[0];

    const cookieLocale = getCookie('locale');
    if (cookieLocale) return cookieLocale as Locale;

    const htmlLocale = document.querySelector('html')?.getAttribute('lang');
    if (htmlLocale) return htmlLocale as Locale;

    return locales[0];
}
