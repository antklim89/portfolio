import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import { Trans } from 'react-i18next';

import style from './style.module.scss';


const ChangeLanguage: FC = () => {
    const {
        locale, locales, replace, asPath, pathname, query,
    } = useRouter();
    if (!locale || !locales) return null;

    const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        replace({ pathname, query }, asPath, { locale: e.target.value });
    };

    return (
        <div className={style.ChangeLanguage}>
            <label htmlFor="change-language"><Trans>Language</Trans>: </label>
            <select id="change-language" value={locale} onChange={handleChangeLocale}>
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