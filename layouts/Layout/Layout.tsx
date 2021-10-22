import { FC } from 'react';

import style from './style.module.scss';

import Background from '~/layouts/Background';
import LeftSide from '~/layouts/LeftSide';


const Layout: FC = ({ children }) => {
    return (
        <div className={style.Layout}>
            <LeftSide />
            <main>{children}</main>
            <Background />
        </div>
    );
};


export default Layout;
