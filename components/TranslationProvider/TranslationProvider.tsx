import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

import type { DefaultTranslation, LocaleType } from '@/lib/types';

export const TranslationContext = createContext<{ translation: DefaultTranslation; locale: LocaleType } | null>(null);

const TranslationProvider = ({
  translation,
  locale,
  children,
}: {
  translation: DefaultTranslation;
  locale: LocaleType;
  children: ReactNode;
}) => {
  const value = useMemo(() => ({ translation, locale }), [translation, locale]);
  return <TranslationContext value={value}>{children}</TranslationContext>;
};

export default TranslationProvider;
