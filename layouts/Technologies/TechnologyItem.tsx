import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';
import { TechnologyProps } from './types';

import { SITE_URL } from '~/constants';
import { cls } from '~/utils';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
    return (
        <Link href={technology.link}>
            <a aria-label={`${technology.title} technology`} rel="noopener noreferrer" target="_blank">
                <section className={style.Technology}>
                    <h2 className={cls('title', style.title)}>{technology.title}</h2>
                    <div>
                        <Image
                            alt={technology.title}
                            blurDataURL={technology.blurData}
                            height={400}
                            layout="responsive"
                            placeholder="blur"
                            src={SITE_URL + technology.image}
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