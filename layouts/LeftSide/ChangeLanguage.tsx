import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import { Trans } from 'react-i18next';

import style from './style.module.scss';


const ChangeLanguage: FC = () => {
    const { locale, locales, replace, asPath } = useRouter();
    if (!locale || !locales) return null;

    const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        replace(asPath, {}, { locale: e.target.value });
    };

    return (
        <div className={style.ChangeLanguage}>
            <span><Trans>Language</Trans>: </span>
            <select value={locale} onChange={handleChangeLocale}>
                {locales.map((lang) => (
                    <option
                        key={lang}
                        value={lang}
                    >
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ChangeLanguage;
