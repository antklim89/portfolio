import { FC } from 'react';


import style from './style.module.scss';
import { ContainerProps } from './types';

import { cls } from '~/utils';


const Container: FC<ContainerProps> = ({
    children,
    width = 'lg',
    whiteBg = true,
    fullHeightBg = true,
}) => {
    return (
        <div className={cls(whiteBg && style.whiteBg, fullHeightBg && style.fullHeightBg)}>
            <div className={cls(style.Container, style[width])}>
                {children}
            </div>
        </div>
    );
};

export default Container;

