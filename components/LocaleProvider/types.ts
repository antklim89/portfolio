import { ReactNode } from 'react';

import { Locale } from '~/types';


export interface LocaleProviderProps {
    children: ReactNode
    locale?: Locale
}
