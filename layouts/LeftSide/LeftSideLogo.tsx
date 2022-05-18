import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from './portfolio-logo.svg';
import style from './style.module.scss';

import { cls } from '~/utils';


const LeftSideLogo: FC = () => {
    return (
        <Link href="/">
            <a className={cls('link', style.Logo)}>
                <Image {...logo} alt="logo" />
            </a>
        </Link>
    );
};

export default LeftSideLogo;
