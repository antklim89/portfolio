import { createContext, FC } from 'react';

import { Locale } from '~/types';

import { LocaleProviderProps } from './types';


export const LocaleContext = createContext<Locale>(Locale.en);

const LocaleProvider: FC<LocaleProviderProps> = ({ children, locale = Locale.en }) => {

    return (
        <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
    );
};

export default LocaleProvider;
