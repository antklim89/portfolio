'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { TranslationContext } from '@/components/TranslationProvider';
import type { LocaleType } from '@/lib/types';
import { isCorrectLocale } from './utils';


const localeRegex = /^\/(\w\w)(.*)/;

export function useTranslation() {
  const { translation, locale } = useContext(TranslationContext);
  const router = useRouter();
  const { locale: oldLocale } = useParams();
  const pathname = usePathname() || '';

  const changeLocale = useCallback(
    (newLocale: LocaleType) => {
      if (isCorrectLocale(oldLocale) && isCorrectLocale(newLocale)) {
        const newPath = pathname.replace(localeRegex, `/${newLocale}$2`);
        document.cookie = `locale=${newLocale};path=/`;
        router.replace(newPath, { scroll: false });
      }
    },
    [pathname, router, oldLocale],
  );

  return { t: translation, changeLocale, locale };
}
