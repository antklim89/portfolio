import type { ReactNode } from 'react';

import type { LocaleType, Translation } from '~/types';

export interface TranslationProviderProps {
    translation: Translation;
    locale: LocaleType;
    children: ReactNode;
}
