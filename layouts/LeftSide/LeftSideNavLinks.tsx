import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';


const LeftSideNavLinks: FC = () => {
    const t = useTranslations();
    return (
        <nav className={style.NavLinks}>
            <ul>
                <li>
                    <Link href="/">
                        <a className="link">{t('home')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className="link">{t('projects')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/technologies">
                        <a className="link">{t('technologies')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="link">{t('about')}</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftSideNavLinks;

