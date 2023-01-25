import { useTranslation } from '~/utils';

import style from './style.module.scss';
import { LeftSideNavLinksProps } from './types';


const LeftSideNavLinks = ({ toggle }: LeftSideNavLinksProps) => {
    const { t } = useTranslation();

    const links = [
        { href: '/#', body: t.home },
        { href: '/#projects', body: t.projects },
        { href: '/#technologies', body: t.technologies },
        { href: '/contacts', body: t.contacts },
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

