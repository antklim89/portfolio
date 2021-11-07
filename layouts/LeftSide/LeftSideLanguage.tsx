import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';

import style from './style.module.scss';


const LeftSideLanguage: FC = () => {
    const {
        locale, locales, replace, asPath, pathname, query,
    } = useRouter();
    const t = useTranslations();

    if (!locale || !locales) return null;

    const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        replace({ pathname, query }, asPath, { locale: e.target.value });
    };
    return (
        <div className={style.Language}>
            <label htmlFor="change-language">{t('Language')}: </label>
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

export default LeftSideLanguage;
