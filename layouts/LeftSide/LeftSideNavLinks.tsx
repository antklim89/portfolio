import { useTranslation } from '~/utils';

import style from './style.module.scss';
import { LeftSideNavLinksProps } from './types';


const LeftSideNavLinks = ({ toggle }: LeftSideNavLinksProps) => {
    const { t, locale } = useTranslation();

    const links = [
        { hash: '#', body: t.home },
        { hash: '#projects', body: t.projects },
        { hash: '#technologies', body: t.technologies },
        { hash: '#contacts', body: t.contacts },
    ];

    return (
        <nav className={style.NavLinks}>
            <ul>
                {links.map(({ hash, body }) => (
                    <li key={hash}>
                        <a
                            className="link"
                            href={`/${locale}${hash}`}
                            tabIndex={0}
                            onClick={toggle}
                            onKeyDown={(e) => e.key === 'Space' && toggle()}
                        >
                            {body}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default LeftSideNavLinks;

