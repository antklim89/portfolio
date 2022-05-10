import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';
import { TechnologyProps } from './types';

import { cls, getImageUrl } from '~/utils';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
    return (
        <Link href={technology.link}>
            <a
                aria-label={`${technology.title} technology`} className={style.linkWrapper} rel="noopener noreferrer"
                target="_blank"
            >
                <section className={style.Technology}>
                    <h3 className={cls('title', style.title)}>{technology.title}</h3>
                    <div className={style.image}>
                        <Image
                            alt={technology.title}
                            blurDataURL={technology.blurData}
                            height={400}
                            layout="responsive"
                            placeholder="blur"
                            src={getImageUrl(technology.image)}
                            width={640}
                        />
                    </div>
                    <p className={style.body}>{technology.body}</p>
                </section>
            </a>
        </Link>
    );
};

export default TechnologyItem;
