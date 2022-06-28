import { FC } from 'react';
import { MdMenu, MdClose } from 'react-icons/md/';

import { cls } from '~/utils';

import style from './style.module.scss';
import { LeftSideToggleButtonProps } from './types';


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
        </div>
    );
};

export default LeftSideToggleButton;
