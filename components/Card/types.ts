import { ReactNode } from 'react';


export interface CardProps {
    title: string
    technologies: string[]
    image: string
    actions?: ReactNode
}
