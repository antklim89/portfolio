import Image from 'next/image';
import { FC } from 'react';

import { CardProps } from './types';


const Card: FC<CardProps> = ({
    title,
    body,
    image,
    actions = null,
}) => {
    return (
        <section>
            <h3>{title}</h3>
            <Image
                alt={title}
                src={image}
            />
            <p>{body}</p>
            {actions}
        </section>
    );
};

export default Card;
