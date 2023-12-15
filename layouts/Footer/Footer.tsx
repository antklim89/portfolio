'use client';
import { locales } from '~/constants';
import { useTranslation } from '~/utils';

import style from './style.module.scss';


const Footer = () => {
    const { changeLocale } = useTranslation();

    return (
        <section className={style.Footer}>

            <div className={style.localeButtons}>
                {locales.map((locale) => (
                    <button key={locale} type='button' onClick={() => changeLocale(locale)}>{locale}</button>
                ))}
            </div>
        </section>
    );
};

export default Footer;
