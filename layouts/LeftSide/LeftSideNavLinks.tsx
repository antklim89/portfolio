import { useTranslations } from 'next-intl';
import { FC } from 'react';

import style from './style.module.scss';
import { LeftSideNavLinksProps } from './types';


const LeftSideNavLinks: FC<LeftSideNavLinksProps> = ({ toggle }) => {
    const t = useTranslations();

    const links = [
        { href: '/#', body: t('home') },
        { href: '/#projects', body: t('projects') },
        { href: '/#technologies', body: t('technologies') },
        { href: '/contacts', body: t('contacts') },
    ];

    return (
        <nav className={style.NavLinks}>
            <ul>
                {links.map(({ href, body }) => (
                    <li key={href}>
                        <a
                            className="link"
                            href={href}
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

