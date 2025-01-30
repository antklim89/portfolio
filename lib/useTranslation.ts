'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { TranslationContext } from '@/components/TranslationProvider';
import type { LocaleType } from '@/lib/types';
import { isCorrectLocale } from './utils';


const localeRegex = /^\/(\w\w)(.*)/;

export function useTranslation() {
  const { translation, locale } = useContext(TranslationContext);
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = useCallback((newLocale: LocaleType) => {
    if (!isCorrectLocale(newLocale)) return;

    const newPath = pathname.replace(localeRegex, `/${newLocale}$2`);
    document.cookie = `locale=${newLocale};path=/`;
    router.replace(newPath, { scroll: false });
  }, [pathname, router]);

  return { t: translation, changeLocale, locale };
}
