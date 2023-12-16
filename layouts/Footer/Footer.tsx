'use client';
import { locales } from '~/constants';
import { useTranslation } from '~/utils';

import style from './style.module.scss';


const Footer = () => {
    const { locale: currentLocale, changeLocale } = useTranslation();

    return (
        <section className={style.Footer}>
            <div className={style.localeButtons}>
                {locales.map((locale) => (
                    <button 
                        className={currentLocale === locale ? style.active : undefined} 
                        key={locale}
                        type='button'
                        onClick={() => changeLocale(locale)}
                    >
                        {locale}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Footer;
