import type { ReactNode } from 'react';
import type { DefaultTranslation, LocaleType } from '@/lib/types';


export interface TranslationProviderProps {
  translation: DefaultTranslation;
  locale: LocaleType;
  children: ReactNode;
}
