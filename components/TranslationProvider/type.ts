import { ReactNode } from 'react';

import { Locale, Translation } from '~/types';


export interface TranslationProviderProps {
    translation: Translation
    locale: Locale
    children: ReactNode
}
