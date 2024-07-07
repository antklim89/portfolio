'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { TranslationContext } from '~/components/TranslationProvider';
import type { LocaleType } from '~/types';
import { isLocale } from './checkLocale';
import { setCookie } from './cookie';

const localeRegex = /^\/(\w\w)(.*)/i;

export function useTranslation() {
    const { translation, locale } = useContext(TranslationContext);
    const { replace } = useRouter();
    const { locale: oldLocale } = useParams();
    const pathname = usePathname() || '';

    const changeLocale = useCallback(
        (newLocale: LocaleType) => {
            if (isLocale(oldLocale) && isLocale(newLocale)) {
                const newPath = pathname.replace(localeRegex, `/${newLocale}$2`);
                setCookie('locale', newLocale);
                replace(newPath);
            }
        },
        [pathname.replace, replace, oldLocale],
    );

    return { t: translation, changeLocale, locale };
}
