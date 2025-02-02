import { createContext, useMemo } from 'react';
import type { FC } from 'react';
import type { DefaultTranslation, LocaleType } from '@/lib/types';
import type { TranslationProviderProps } from './type';


// eslint-disable-next-line react-refresh/only-export-components
export const TranslationContext = createContext({} as { translation: DefaultTranslation; locale: LocaleType });

const TranslationProvider: FC<TranslationProviderProps> = ({ translation, locale, children }) => {
  const value = useMemo(() => ({ translation, locale }), [translation, locale]);
  return <TranslationContext value={value}>{children}</TranslationContext>;
};

export default TranslationProvider;
