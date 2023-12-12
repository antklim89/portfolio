import { Locale } from '~/types';
import { getTranslation } from '~/utils';

import style from './style.module.scss';


const Navigation = async ({ locale }: {locale: Locale}) => {
    const t = await getTranslation(locale);

    const links = [
        { hash: '#', body: t.home },
        { hash: '#projects', body: t.projects },
        { hash: '#technologies', body: t.technologies },
        { hash: '#contacts', body: t.contacts },
    ];

    return (
        <nav className={style.Navigation}>
            <ul>
                {links.map(({ hash, body }) => (
                    <li key={hash}>
                        <a href={`/${locale}${hash}`}>
                            {body}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
