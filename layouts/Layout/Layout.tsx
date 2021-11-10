import { FC } from 'react';

import style from './style.module.scss';

import LeftSide from '~/layouts/LeftSide';
import { cls } from '~/utils';


const Layout: FC = ({ children }) => {
    return (
        <div className={style.Layout}>
            <LeftSide />
            <main>
                <div className={cls(style.topOffset, 'parallax')} />
                { children }
            </main>
        </div>
    );
};


export default Layout;
