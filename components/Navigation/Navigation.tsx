import { ComponentProps } from 'react';
import { FaHome } from 'react-icons/fa';

import { Locale } from '~/types';
import { cls } from '~/utils';
import { getTranslation } from '~/utils/server';

import style from './style.module.scss';


const Navigation = async ({ locale: currentLocale, className, ...props  }: { locale: Locale } & ComponentProps<'section'>) => {
    const t = await getTranslation(currentLocale);

    const links = [
        { hash: '#', body: t.home, icon: <FaHome /> },
        { hash: '#projects', body: t.projects },
        { hash: '#technologies', body: t.technologies },
        { hash: '#contacts', body: t.contacts },
    ] as const;

    return (
        <section className={cls(style.Navigation, className)} {...props} >
            <div className='hide-lg'>
                <ul>
                    {links.map(link => (
                        <li key={link.body}>
                            <a href={link.hash}>{link.body}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cls('show-lg', style.topLinks)}>
                <ul className="">
                    {links.map(link => (
                        <li key={link.body}>
                            <a href={link.hash}>{'icon' in link ? link.icon : link.body}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Navigation;
