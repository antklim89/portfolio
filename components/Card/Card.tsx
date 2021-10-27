import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';
import { CardProps } from './types';

import { SITE_URL } from '~/constants';
import { cls } from '~/utils';


const Card: FC<CardProps> = ({
    title,
    technologies,
    image,
    githubLink,
    siteLink,
}) => {
    return (
        <section className={style.card}>
            <div className={style.image}>
                <Image
                    alt={title}
                    height={700}
                    src={SITE_URL + image}
                    width={640}
                />
            </div>
            <div className={style.technologies}>
                {technologies.map((technology) => (
                    <span className={style.technology} key={technology}>{technology}</span>
                ))}
            </div>
            <h5 className={cls(style.title, 'title')}>{title}</h5>
            <div className={style.actions}>
                <Link href={githubLink}>
                    <a rel="noopener noreferrer" target="_blank"><DiGithubBadge />GitHub</a>
                </Link>
                <Link href={siteLink}>
                    <a rel="noopener noreferrer" target="_blank"><MdPublic />Site</a>
                </Link>
            </div>
        </section>
    );
};

export default Card;
