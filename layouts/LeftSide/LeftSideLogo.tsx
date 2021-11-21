import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';

import { cls } from '~/utils';


const LeftSideLogo: FC = () => {
    return (
        <Link href="/">
            <a className={cls('link', style.Logo)}>
                PORTFOLIO
            </a>
        </Link>
    );
};

export default LeftSideLogo;