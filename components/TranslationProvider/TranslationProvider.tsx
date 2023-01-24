import { createContext, FC } from 'react';

import { Translation } from '~/types';

import { LocaleProviderProps } from './types';


export const TranslationContext = createContext<Translation>({} as Translation);

const TranslationProvider: FC<LocaleProviderProps> = ({ children, translation }) => {

    return (
        <TranslationContext.Provider value={translation}>{children}</TranslationContext.Provider>
    );
};

export default TranslationProvider;
