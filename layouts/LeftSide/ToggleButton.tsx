import { FC } from 'react';
import { MdMenu, MdClose } from 'react-icons/md/';

import style from './style.module.scss';

import { cls } from '~/utils';


const ToggleButton: FC<{toggle: () => void, show: boolean}> = ({ toggle, show }) => {
    return (
        <button
            className={cls(style.ToggleButton, show && style.ToggleButton__show)}
            type="button"
            onClick={toggle}
        >
            {show ? <MdClose /> : <MdMenu />}
        </button>
    );
};

export default ToggleButton;
