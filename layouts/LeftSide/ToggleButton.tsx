import Link from 'next/link';
import { FC } from 'react';
import { MdMenu, MdClose } from 'react-icons/md/';

import style from './style.module.scss';

import { cls } from '~/utils';


const ToggleButton: FC<{toggle: () => void, show: boolean}> = ({ toggle, show }) => {
    return (
        <div className={cls(style.ToggleButton, show && style.ToggleButton__show)}>
            <button
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

export default ToggleButton;
