import { FC, useCallback, useState } from 'react';


import ChangeLanguage from './ChangeLanguage';
import Logo from './Logo';
import NavLinks from './NavLinks';
import style from './style.module.scss';
import ToggleButton from './ToggleButton';

import { cls } from '~/utils';


const LeftSide:FC = () => {
    const [show, setShow] = useState(false);

    const toggle = useCallback(() => setShow((prevShow) => !prevShow), []);

    return (
        <aside className={cls(style.container, show && style.container__show)}>
            <div className={style.LeftSide}>
                <ToggleButton show={show} toggle={toggle} />
                <Logo />
                <NavLinks />
                <ChangeLanguage />
            </div>
        </aside>
    );
};

export default LeftSide;
