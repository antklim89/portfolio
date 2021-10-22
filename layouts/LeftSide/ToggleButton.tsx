import { FC } from 'react';

import style from './style.module.scss';


const ToggleButton: FC<{toggle: () => void}> = ({ toggle }) => {
    return (
        <button className={style.ToggleButton} type="button" onClick={toggle}>
            =
        </button>
    );
};

export default ToggleButton;
