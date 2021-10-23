import { FC } from 'react';

import style from './style.module.scss';


const ToggleButton: FC<{toggle: () => void, show: boolean}> = ({ toggle, show }) => {
    return (
        <button className={`${style.ToggleButton} ${show ? style.ToggleButton__show : ''}`} type="button" onClick={toggle}>
            {show ? 'x' : '='}
        </button>
    );
};

export default ToggleButton;
