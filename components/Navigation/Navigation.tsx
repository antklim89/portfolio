'use client';
import { useEffect, useState } from 'react';
import type { ComponentProps } from 'react';
import { FaHome } from 'react-icons/fa';
import style from './style.module.scss';
import { useTranslation } from '@/lib/useTranslation';
import { cls } from '@/lib/utils';


function Navigation({ className, ...props }: ComponentProps<'section'>) {
  const { t } = useTranslation();

  const [links, setLinks] = useState({
    home: {
      id: 'home',
      body: t.home,
      icon: <FaHome />,
      observed: false,
    },
    projects: { id: 'projects', body: t.projects, observed: false },
    technologies: { id: 'technologies', body: t.technologies, observed: false },
    contacts: { id: 'contacts', body: t.contacts, observed: false },
  });
  const linksArray = Object.values(links);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        setLinks(p => ({
          ...p,
          [entry.target.id]: {
            ...p[entry.target.id as keyof typeof links],
            observed: entry.isIntersecting,
          },
        }));
      }
    });

    for (const { id } of linksArray) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [linksArray]);

  return (
    <section className={cls(style.Navigation, className)} {...props}>
      <div className="hide-lg">
        <ul>
          {linksArray.map(link => (
            <li key={link.body}>
              <a href={`#${link.id}`}>
                <div style={{ paddingRight: link.observed ? 25 : '' }} />
                <span>{link.body}</span>
                {' '}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={cls('show-lg', style.topLinks)}>
        <ul className="">
          {linksArray.map(link => (
            <li key={link.body}>
              <a href={`#${link.id}`}>
                <div style={{ paddingRight: link.observed ? 5 : '' }} />
                <span>{'icon' in link ? link.icon : link.body}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
