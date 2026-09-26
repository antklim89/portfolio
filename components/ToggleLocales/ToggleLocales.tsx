'use client';
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { locales } from '@/lib/constants';
import { cls, getCorrectLocale } from '@/lib/utils';
import style from './style.module.scss';

const localePathRegexp = /^\/[a-z]{2}/;

function ToggleLocales({ className, ...props }: ComponentProps<'section'>) {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = getCorrectLocale(params.locale);

  return (
    <section className={cls(style.ToggleLocales, className)} {...props}>
      {locales.map((locale) => (
        <Link
          scroll={false}
          href={pathname.replace(localePathRegexp, `/${locale}`)}
          key={locale}
          className={currentLocale === locale ? style.active : undefined}
        >
          {locale}
        </Link>
      ))}
    </section>
  );
}

export default ToggleLocales;
