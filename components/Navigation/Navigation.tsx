'use client';
import { useEffect, useMemo, useState } from 'react';
import type { ComponentProps, JSX } from 'react';
import { FaHome } from 'react-icons/fa';
import style from './style.module.scss';
import { useTranslation } from '@/hooks/useTranslation';
import type { Links } from '@/lib/constants';
import { cls } from '@/lib/utils';


const icons: Partial<Record<Links, JSX.Element>> = {
  home: <FaHome />,
} as const;

function Navigation({ className, ...props }: ComponentProps<'section'>) {
  const { t } = useTranslation();

  const links = useMemo(() => [
    { id: 'home', body: t.home },
    { id: 'projects', body: t.projects },
    { id: 'technologies', body: t.technologies },
    { id: 'contacts', body: t.contacts },
  ] satisfies { id: Links; body: string }[], [t]);

  const [observedLinks, setObservedLinks] = useState<typeof links[number]['id'][]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setObservedLinks(prev => [entry.target.id as Links, ...prev]);
        else setObservedLinks(prev => prev.filter(id => id !== entry.target.id));
      }
    });

    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <section className={cls(style.Navigation, className)} {...props}>
      <div className="desktop">
        <ul>
          {links.map(link => (
            <li key={link.body}>
              <a href={`#${link.id}`}>
                <div style={{ paddingRight: observedLinks.includes(link.id) ? 25 : '' }} />
                <span>{link.body}</span>
                {' '}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={cls('mobile', style.mobile)}>
        <ul>
          {links.map(link => (
            <li key={link.body}>
              <a href={`#${link.id}`}>
                <div style={{ paddingRight: observedLinks.includes(link.id) ? 5 : '' }} />
                <span>{icons[link.id] ?? link.body}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
