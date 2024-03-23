import { ComponentProps } from 'react';
import { FaBars } from 'react-icons/fa';

import { Locale } from '~/types';
import { cls } from '~/utils';
import { getTranslation } from '~/utils/server';

import style from './style.module.scss';


const Navigation = async ({ locale: currentLocale, className, ...props  }: { locale: Locale } & ComponentProps<'section'>) => {
    const t = await getTranslation(currentLocale);

    const links = [
        { hash: '#', body: t.home },
        { hash: '#projects', body: t.projects },
        { hash: '#technologies', body: t.technologies },
        { hash: '#contacts', body: t.contacts },
    ];

    return (
        <section className={cls(style.Navigation, className)} {...props} >
            <div className='hide-lg'>
                <ul>
                    {links.map(link => (
                        <li key={link.body}><a href={link.hash}>{link.body}</a></li>
                    ))}
                </ul>
            </div>
            <div className={cls('show-lg', style.dropdown)}>
                <div className='dropdown'>
                    <div className={cls(style.toggle)} role="button" tabIndex={0}><FaBars /></div>
                    <ul className="dropdown-content">
                        {links.map(link => (
                            <li key={link.body}><a href={link.hash}>{link.body}</a></li>

                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navigation;
