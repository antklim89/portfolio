import { createContext, type FC, useMemo } from 'react';
import type { LocaleType, Translation } from '@/lib/types';
import type { TranslationProviderProps } from './type';


// eslint-disable-next-line react-refresh/only-export-components
export const TranslationContext = createContext({} as { translation: Translation; locale: LocaleType });

const TranslationProvider: FC<TranslationProviderProps> = ({ translation, locale, children }) => {
  const value = useMemo(() => ({ translation, locale }), [translation, locale]);
  return <TranslationContext value={value}>{children}</TranslationContext>;
};

export default TranslationProvider;
