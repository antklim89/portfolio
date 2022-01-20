import Link from 'next/link';
import { FC } from 'react';
import { MdMenu, MdClose } from 'react-icons/md/';

import style from './style.module.scss';
import { LeftSideToggleButtonProps } from './types';

import { cls } from '~/utils';


const LeftSideToggleButton: FC<LeftSideToggleButtonProps> = ({ toggle, show }) => {
    return (
        <div className={style.ToggleButton}>
            <button
                aria-label={show ? 'hide left side' : 'show left side'}
                className={cls(style.button, show && style.show)}
                type="button"
                onClick={toggle}
            >
                {show ? <MdClose /> : <MdMenu />}
            </button>

            <Link href="/">
                <a className={cls('link', style.logo, show && style.show)}>
                    PORTFOLIO
                </a>
            </Link>
        </div>
    );
};

export default LeftSideToggleButton;
