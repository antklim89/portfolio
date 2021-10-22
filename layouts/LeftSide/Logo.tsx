import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';


const Logo: FC = () => {
    return (
        <Link href="/">
            <a className={`link ${style.Logo}`}>
                PORTFOLIO
            </a>
        </Link>
    );
};

export default Logo;
