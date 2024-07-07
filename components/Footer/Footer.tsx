'use client';
import type { ComponentProps } from 'react';
import { locales } from '~/constants';
import { cls, useTranslation } from '~/utils';
import style from './style.module.scss';

const Footer = ({ className, ...props }: ComponentProps<'section'>) => {
    const { locale: currentLocale, changeLocale } = useTranslation();

    return (
        <section className={cls(style.Footer, className)} {...props}>
            <div className={style.localeButtons}>
                {locales.map((locale) => (
                    <button
                        className={currentLocale === locale ? style.active : undefined}
                        key={locale}
                        type="button"
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
