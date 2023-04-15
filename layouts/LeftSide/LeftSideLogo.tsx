import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { cls } from '~/utils';

import logo from './portfolio-logo.svg';
import style from './style.module.scss';


const LeftSideLogo: FC = () => {
    return (
        <Link className={cls('link', style.Logo)} href="/">
            <Image alt="logo" src={logo} />
        </Link>
    );
};

export default LeftSideLogo;
