import { useRouter, usePathname } from 'next/navigation';
import { useCallback, useContext } from 'react';

import { TranslationContext } from '~/components/TranslationProvider';
import { Locale } from '~/types';

import { isLocale } from './checkLocale';
import { setCookie } from './cookie';


const localeRegex = /^\/(\w\w)(.*)/i;

export function useTranslation() {
    const { translation, locale } = useContext(TranslationContext);
    const { replace } = useRouter();
    const pathname = usePathname() || '';

    const changeLocale = useCallback((newLocale: Locale) => {
        const oldLocale = pathname.replace(localeRegex, '$1');

        if (isLocale(oldLocale) && isLocale(newLocale)) {
            const newPath = pathname.replace(localeRegex, `/${newLocale}$2`);
            setCookie('locale', newLocale);
            replace(newPath);
        }
    }, []);

    return { t: translation, changeLocale, locale };
}
