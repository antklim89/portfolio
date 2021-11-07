import { HTMLAttributes } from 'react';


export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    width?: 'xs'|'sm'|'md'|'lg'|'xl'
    whiteBg?: boolean
    fullHeightBg?: boolean
}
