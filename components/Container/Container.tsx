import { FC } from 'react';


import style from './style.module.scss';
import { ContainerProps } from './types';

import { cls } from '~/utils';


const Container: FC<ContainerProps> = ({
    children,
    width = 'lg',
    className,
}) => {
    return (
        <div className={cls(className, style.Container, style[width])}>
            {children}
        </div>
    );
};

export default Container;

