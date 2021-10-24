import { ReactNode } from 'react';


export interface CardProps {
    title: string
    body: string
    image: string
    actions?: ReactNode
}
