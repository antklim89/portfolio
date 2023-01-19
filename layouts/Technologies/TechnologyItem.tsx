import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Title from '~/components/Title';
import { getImageUrl } from '~/utils';

import style from './style.module.scss';
import { TechnologyProps } from './types';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
    return (
        <Link
            aria-label={`${technology.title} technology`}
            className={style.linkWrapper}
            href={technology.link}
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
                        className="img-contain"
                        height={400}
                        src={getImageUrl(technology.image)}
                        width={640}
                    />
                </div>
                <p className={style.body}>{technology.body}</p>
            </section>
        </Link>
    );
};

export default TechnologyItem;
