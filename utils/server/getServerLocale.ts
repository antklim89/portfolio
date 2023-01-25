import { cookies, headers } from 'next/headers';

import { defaultLocale } from '~/constants';
import { Locale } from '~/types';

import { isLocale } from '../checkLocale';


export function getServerLocale(): Locale {
    const coociesLocale = cookies().get('locale')?.value;
    if (isLocale(coociesLocale)) return coociesLocale;

    const headerLocale = headers()
        .get('accept-language')
        ?.replace(/.*,(.*);.*/i, '$1');
    if (isLocale(headerLocale)) return headerLocale;

    return defaultLocale;
}
