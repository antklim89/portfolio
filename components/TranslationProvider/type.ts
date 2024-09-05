import type { ReactNode } from 'react';

import type { LocaleType, Translation } from '@/lib/types';


export interface TranslationProviderProps {
  translation: Translation;
  locale: LocaleType;
  children: ReactNode;
}
