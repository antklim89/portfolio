'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { isLocale } from './checkLocale';
import { setCookie } from './cookie';
import { TranslationContext } from '~/components/TranslationProvider';
import type { LocaleType } from '~/types';


const localeRegex = /^\/(\w\w)(.*)/;

export function useTranslation() {
  const { translation, locale } = useContext(TranslationContext);
  const router = useRouter();
  const { locale: oldLocale } = useParams();
  const pathname = usePathname() || '';

  const changeLocale = useCallback(
    (newLocale: LocaleType) => {
      if (isLocale(oldLocale) && isLocale(newLocale)) {
        const newPath = pathname.replace(localeRegex, `/${newLocale}$2`);
        setCookie('locale', newLocale);
        router.replace(newPath);
      }
    },
    [pathname, router, oldLocale],
  );

  return { t: translation, changeLocale, locale };
}
