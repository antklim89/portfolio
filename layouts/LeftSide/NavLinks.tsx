import Link from 'next/link';
import { FC } from 'react';
import { Trans } from 'react-i18next';

import style from './style.module.scss';


const NavLinks: FC = () => {
    return (
        <nav className={style.NavLinks}>
            <ul>
                <li>
                    <Link href="/">
                        <a className="link"><Trans>home</Trans></a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className="link"><Trans>projects</Trans></a>
                    </Link>
                </li>
                <li>
                    <Link href="/technologies">
                        <a className="link"><Trans>technologies</Trans></a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="link"><Trans>about</Trans></a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;

