import { FC } from 'react';

import style from './style.module.scss';
import { ContainerProps } from './types';

import { cls } from '~/utils';


const Container: FC<ContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cls(className, style.Container)}>
            {children}
        </div>
    );
};

export default Container;

