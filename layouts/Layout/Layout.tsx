import { FC, ReactNode } from 'react';


import LeftSide from '~/layouts/LeftSide';
import { cls } from '~/utils';

import style from './style.module.scss';


const Layout: FC<{children: ReactNode}> = ({ children }) => {
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
