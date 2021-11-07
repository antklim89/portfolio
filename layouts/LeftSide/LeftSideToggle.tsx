import Link from 'next/link';
import { FC } from 'react';
import { MdMenu, MdClose } from 'react-icons/md/';

import style from './style.module.scss';

import { cls } from '~/utils';


const LeftSideToggle: FC<{toggle: () => void, show: boolean}> = ({ toggle, show }) => {
    return (
        <div className={cls(style.Toggle, show && style.Toggle__show)}>
            <button
                aria-label={show ? 'hide left side' : 'show left side'}
                className={style.button}
                type="button"
                onClick={toggle}
            >
                {show ? <MdClose /> : <MdMenu />}
            </button>

            <Link href="/">
                <a className={cls('link', style.logo)}>
                    PORTFOLIO
                </a>
            </Link>
        </div>
    );
};

export default LeftSideToggle;
