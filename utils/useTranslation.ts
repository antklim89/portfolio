import { useEffect, useState } from 'react';

import { Translation } from '~/types';

import { getClientLocale } from './getClientLocale';
import { getTranslation } from './getTranslation';


export function useTranslation() {
    const locale = getClientLocale();
    const [translation, setTranslation] = useState<null | Translation>(null);

    useEffect(() => {
        getTranslation(locale).then((responseTranslation) => {
            setTranslation(responseTranslation);
        });
    }, []);

    return translation;
}
