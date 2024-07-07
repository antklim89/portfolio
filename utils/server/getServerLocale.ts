import { cookies, headers } from 'next/headers';
import { defaultLocale } from '~/constants';
import type { LocaleType } from '~/types';
import { isLocale } from '../checkLocale';

export function getServerLocale(): LocaleType {
    const cookiesLocale = cookies().get('locale')?.value;
    if (isLocale(cookiesLocale)) return cookiesLocale;

    const headerLocale = headers()
        .get('accept-language')
        ?.replace(/.*,(.*);.*/i, '$1');
    if (isLocale(headerLocale)) return headerLocale;

    return defaultLocale;
}
