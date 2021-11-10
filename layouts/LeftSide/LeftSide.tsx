import { FC, useCallback, useState } from 'react';


import LeftSideLanguage from './LeftSideLanguage';
import LeftSideLogo from './LeftSideLogo';
import LeftSideNavLinks from './LeftSideNavLinks';
import LeftSideToggle from './LeftSideToggle';
import style from './style.module.scss';

import { cls } from '~/utils';


const LeftSide:FC = () => {
    const [show, setShow] = useState(false);

    const toggle = useCallback(() => setShow((prevShow) => !prevShow), []);
    const close = useCallback(() => setShow(false), []);

    return (
        <aside className={cls(style.LeftSide, show && style.LeftSide__show, 'parallax')}>
            <div className={style.container}>
                <LeftSideToggle show={show} toggle={toggle} />
                <LeftSideLogo />
                <LeftSideNavLinks toggle={close} />
                <LeftSideLanguage />
            </div>
        </aside>
    );
};

export default LeftSide;
