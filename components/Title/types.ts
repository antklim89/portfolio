import { HTMLAttributes } from 'react';


export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
     size?: 'md' | 'lg' | 'xl'
     align?: 'center' | 'left'
     as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
     underscore?: boolean
}
