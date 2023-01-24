import { headers, cookies } from 'next/headers';

import { locales } from '~/constants';
import { Locale } from '~/types';


export function getServerLocale(): Locale {
    const cookieLocale = cookies().get('loclae')?.value;
    if (cookieLocale) return cookieLocale as Locale;

    const headerLocale = headers()
        .get('accept-language')
        ?.replace(/.*,(.*);.*/i, '$1');
    if (headerLocale) return headerLocale as Locale;

    return locales[0];
}
