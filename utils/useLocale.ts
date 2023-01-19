import { useContext, useEffect, useState } from 'react';

import { LocaleContext } from '~/components/LocaleProvider';

import { getTranslations } from './getTranslations';


export function useLocale() {
    const currentLocale = useContext(LocaleContext);
    const [locale, setLocale] = useState({});

    useEffect(() => {
        getTranslations(currentLocale)
            .then((data) => {
                setLocale(data);
            });
    }, [currentLocale]);

    return locale;
}
