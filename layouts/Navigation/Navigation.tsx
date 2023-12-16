import { ComponentProps } from 'react';

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
        <section className={cls(style.Navigation, className)} {...props}>
            <nav>
                <ul>
                    {links.map(({ hash, body }) => (
                        <li key={hash}>
                            <a href={`/${currentLocale}${hash}`}>
                                {body} <span className={style.arrows}>&gt;&gt;</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Navigation;
