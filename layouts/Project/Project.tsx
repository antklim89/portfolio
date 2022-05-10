import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';

import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import { ProjectType } from '~/types';
import { getImageUrl } from '~/utils';


const Project: FC<ProjectType> = ({
    technologies, title, body, link, github, images,
}) => {
    const t = useTranslations();

    return (
        <section className={style.Project}>
            <div className={style.head}>
                <h1 className="title">{title}</h1>
                <Tags tags={technologies} />
                <div>
                    <Link href={github}>
                        <a className={style.link} rel="noopener noreferrer" target="_blank">
                            <DiGithubBadge />
                            {t('GitHub')}
                        </a>
                    </Link>
                    <Link href={link}>
                        <a className={style.link} rel="noopener noreferrer" target="_blank">
                            <MdPublic />
                            {t('Site')}
                        </a>
                    </Link>
                </div>
            </div>

            <div className={style.body}>
                <Markdown >
                    {body}
                </Markdown>
            </div>

            <Carousel>
                {images.map((image) => (
                    <Image
                        alt={title}
                        height={400}
                        key={image}
                        layout="responsive"
                        objectFit="contain"
                        quality={40}
                        src={getImageUrl(image)}
                        width={620}
                    />
                ))}
            </Carousel>

        </section>
    );
};

export default Project;
