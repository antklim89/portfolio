import { FC } from 'react';

import { locales } from '~/constants';
import { checkLocale, useTranslation } from '~/utils';

import style from './style.module.scss';


const LeftSideLanguageSelect: FC = () => {
    const { t, changeLocale, locale } = useTranslation();

    return (
        <div className={style.Language}>
            <label htmlFor="change-language">{t.Language}: </label>
            <select id="change-language" value={locale} onChange={(e) => changeLocale(checkLocale(e.target.value))}>
                {locales.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    );
};

export default LeftSideLanguageSelect;
