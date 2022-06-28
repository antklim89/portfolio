import { FC, ReactNode } from 'react';

import LeftSide from '~/layouts/LeftSide';

import style from './style.module.scss';


const Layout: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div className={style.Layout}>
            <LeftSide />
            <main>
                { children }
            </main>
        </div>
    );
};


export default Layout;
