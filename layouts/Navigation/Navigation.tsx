import { Locale } from '~/types';
import { getTranslation } from '~/utils/server';

import style from './style.module.scss';


const Navigation = async ({ locale: currentLocale }: { locale: Locale }) => {
    const t = await getTranslation(currentLocale);

    const links = [
        { hash: '#', body: t.home },
        { hash: '#projects', body: t.projects },
        { hash: '#technologies', body: t.technologies },
        { hash: '#contacts', body: t.contacts },
    ];

    return (
        <div className={style.Navigation}>
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
        </div>
    );
};

export default Navigation;
