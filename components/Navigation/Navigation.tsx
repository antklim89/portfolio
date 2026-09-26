'use client';

import type { ComponentProps, JSX } from 'react';
import { FaHome } from 'react-icons/fa';

import { useObservableLinks } from '@/hooks/useObservableLinks';
import { useTranslation } from '@/hooks/useTranslation';
import { Links } from '@/lib/constants';
import { cls } from '@/lib/utils';
import style from './style.module.scss';

const icons: Partial<Record<Links, JSX.Element>> = {
  home: <FaHome />,
} as const;

function Navigation({ className, ...props }: ComponentProps<'section'>) {
  const { t } = useTranslation();

  const { observedLinks } = useObservableLinks(Object.values(Links));

  return (
    <section className={cls(style.Navigation, className)} {...props}>
      <div className="desktop">
        <ul>
          {Object.values(Links).map((link) => (
            <li key={link}>
              <a href={`#${link}`}>
                <div style={{ paddingRight: observedLinks.has(link) ? 25 : '' }} />
                <span>{t[link]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={cls('mobile', style.mobile)}>
        <ul>
          {Object.values(Links).map((link) => (
            <li key={link}>
              <a href={`#${link}`}>
                <div style={{ paddingRight: observedLinks.has(link) ? 5 : '' }} />
                <span>{icons[link] ?? t[link]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
