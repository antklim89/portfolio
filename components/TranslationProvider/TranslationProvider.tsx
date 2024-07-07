import { type FC, createContext, useMemo } from 'react';

import type { LocaleType, Translation } from '~/types';

import type { TranslationProviderProps } from './type';

export const TranslationContext = createContext({} as { translation: Translation; locale: LocaleType });

const TranslationProvider: FC<TranslationProviderProps> = ({ translation, locale, children }) => {
    const value = useMemo(() => ({ translation, locale }), [translation, locale]);
    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export default TranslationProvider;
