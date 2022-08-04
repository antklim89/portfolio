import { HTMLAttributes } from 'react';


export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    width?: 'xl' | 'lg' | 'md'
}
