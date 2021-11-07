import { FC } from 'react';


import style from './style.module.scss';
import { ContainerProps } from './types';

import { cls } from '~/utils';


const Container: FC<ContainerProps> = ({
    children,
    width = 'lg',
}) => {
    return (
        <div className={cls(style.Container, style[width])}>
            {children}
        </div>
    );
};

export default Container;

