'use client';
import type { ComponentProps } from 'react';
import style from './style.module.scss';
import { locales } from '~/constants';
import { cls, useTranslation } from '~/utils';


function Footer({ className, ...props }: ComponentProps<'section'>) {
  const { locale: currentLocale, changeLocale } = useTranslation();

  return (
    <section className={cls(style.Footer, className)} {...props}>
      <div className={style.localeButtons}>
        {locales.map(locale => (
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
}

export default Footer;
