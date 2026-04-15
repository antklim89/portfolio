import { use, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { TranslationContext } from '@/components/TranslationProvider';
import type { LocaleType } from '@/lib/types';
import { isCorrectLocale } from '@/lib/utils';

export function useTranslation() {
  const context = use(TranslationContext);
  if (!context) throw new Error('No TranslationContext');
  const { translation, locale } = context;
  const router = useRouter();

  const changeLocale = useCallback(
    (newLocale: LocaleType) => {
      if (!isCorrectLocale(newLocale)) return;

      document.cookie = `locale=${newLocale};path=/`;
      router.refresh();
    },
    [router],
  );

  return { t: translation, changeLocale, locale };
}
