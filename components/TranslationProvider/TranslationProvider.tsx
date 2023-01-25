import { createContext, FC, useMemo } from 'react';

import { Locale, Translation } from '~/types';

import { TranslationProviderProps } from './type';


export const TranslationContext = createContext({} as { translation: Translation, locale: Locale });


const TranslationProvider: FC<TranslationProviderProps> = ({ translation, locale, children }) => {
    const value = useMemo(() => ({ translation, locale }), [translation, locale]);
    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationProvider;
