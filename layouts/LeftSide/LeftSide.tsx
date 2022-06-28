import { FC, useCallback, useState } from 'react';

import { cls } from '~/utils';

import LeftSideLanguageSelect from './LeftSideLanguageSelect';
import LeftSideLogo from './LeftSideLogo';
import LeftSideNavLinks from './LeftSideNavLinks';
import LeftSideToggleButton from './LeftSideToggleButton';
import style from './style.module.scss';


const LeftSide:FC = () => {
    const [show, setShow] = useState(false);

    const toggle = useCallback(() => setShow((prevShow) => !prevShow), []);
    const close = useCallback(() => setShow(false), []);

    return (
        <aside className={cls(style.LeftSide, 'parallax', show && style.LeftSideShow)}>
            <div className={style.container}>
                <LeftSideToggleButton show={show} toggle={toggle} />
                <LeftSideLogo />
                <LeftSideNavLinks toggle={close} />
                <LeftSideLanguageSelect />
            </div>
        </aside>
    );
};

export default LeftSide;
