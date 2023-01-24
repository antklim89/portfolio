import { ReactNode } from 'react';

import { Translation } from '~/types';


export interface LocaleProviderProps {
    children: ReactNode
    translation: Translation
}
