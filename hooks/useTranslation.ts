'use client';
import { use, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { TranslationContext } from '@/components/TranslationProvider';
import type { LocaleType } from '@/lib/types';
import { isCorrectLocale } from '@/lib/utils';

export function useTranslation() {
  const { translation, locale } = use(TranslationContext);
  const router = useRouter();

  const changeLocale = useCallback(
    async (newLocale: LocaleType) => {
      if (!isCorrectLocale(newLocale)) return;

      await cookieStore.set({
        name: 'locale',
        value: newLocale,
      });
      router.refresh();
    },
    [router],
  );

  return { t: translation, changeLocale, locale };
}
