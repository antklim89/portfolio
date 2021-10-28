import { FC } from 'react';


import style from './style.module.scss';
import { ContainerProps } from './types';

import { cls } from '~/utils';


const Container: FC<ContainerProps> = ({
    children,
    width = 'lg',
    backgroundWhite = false,
    fullHeight = false,
}) => {
    return (
        <div className={cls(backgroundWhite && style.backgroundWhite, fullHeight && style.fullHeight)}>
            <div className={cls(style.Container, style[width])}>
                {children}
            </div>
        </div>
    );
};

export default Container;

