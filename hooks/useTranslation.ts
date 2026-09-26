import { use } from 'react';

import { TranslationContext } from '@/components/TranslationProvider';

export function useTranslation() {
  const context = use(TranslationContext);
  if (!context) throw new Error('No TranslationContext');
  const { translation, locale } = context;

  return { t: translation, locale };
}
