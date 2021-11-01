import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';
import { TechnologyProps } from './types';

import { SITE_URL } from '~/constants';
import { cls } from '~/utils';


const Technology: FC<TechnologyProps> = ({ technology }) => {
    return (
        <Link href={technology.link}>
            <a rel="noopener noreferrer" target="_blank">
                <section className={style.Technology}>
                    <h2 className={cls('title', style.title)}>{technology.title}</h2>
                    <Image
                        alt={technology.title}
                        height={400}
                        layout="responsive"
                        src={SITE_URL + technology.image}
                        width={640}
                    />
                    <p className={style.body}>{technology.body}</p>
                </section>
            </a>
        </Link>
    );
};

export default Technology;
