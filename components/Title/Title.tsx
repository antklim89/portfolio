import { FC, createElement } from 'react';

import { cls } from '~/utils';

import style from './style.module.scss';
import { TitleProps } from './types';


const Title: FC<TitleProps> = ({ as = 'h2', align = 'left', size = 'lg', underscore = false, ...props }) => {
    return (
        createElement(as, {
            className: cls(style.Title, style[align], style[size], underscore && style.underscore),
            ...props,
        })
    );
};

export default Title;

