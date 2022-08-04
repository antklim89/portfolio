import { FC } from 'react';

import { cls } from '~/utils';

import style from './style.module.scss';
import { ContainerProps } from './types';


const Container: FC<ContainerProps> = ({
    children,
    className,
    width = 'xl',
}) => {
    return (
        <div className={cls(className, style.Container, style[width])}>
            {children}
        </div>
    );
};

export default Container;

