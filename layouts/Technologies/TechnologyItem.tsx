import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Title from '~/components/Title';
import { getImageUrl } from '~/utils';

import style from './style.module.scss';
import { TechnologyProps } from './types';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
    return (
        <Link href={technology.link}>
            <a
                aria-label={`${technology.title} technology`}
                className={style.linkWrapper}
                rel="noopener noreferrer"
                target="_blank"
            >
                <section className={style.Technology}>
                    <Title align="center" as="h3" size="md">
                        {technology.title}
                    </Title>
                    <div className={style.image}>
                        <Image
                            alt={technology.title}
                            height={400}
                            layout="responsive"
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
