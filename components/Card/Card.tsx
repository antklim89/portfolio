import Image from 'next/image';
import { FC } from 'react';

import style from './style.module.scss';
import { CardProps } from './types';

import { SITE_URL } from '~/constants';
import { cls } from '~/utils';


const Card: FC<CardProps> = ({
    title,
    technologies,
    image,
    actions = null,
}) => {
    return (
        <section className={style.card}>
            <h5 className={cls(style.title, 'title')}>{title}</h5>
            <Image
                alt={title}
                height={400}
                src={SITE_URL + image}
                width={270}
            />
            <div className={style.technologies}>
                {technologies.map((technology) => (
                    <span className={style.technology} key={technology}>{technology}</span>
                ))}
            </div>
            <div className={style.actions}>
                {actions}
            </div>
        </section>
    );
};

export default Card;
