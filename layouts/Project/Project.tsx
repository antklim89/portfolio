import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';

import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import { SITE_URL } from '~/constants';
import { ProjectType } from '~/types';


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
                        <a rel="noopener noreferrer" target="_blank">
                            <DiGithubBadge />
                            {t('GitHub')}
                        </a>
                    </Link>
                    <Link href={link}>
                        <a rel="noopener noreferrer" target="_blank">
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

            <div className={style.images}>
                {images.map((image) => (
                    <div className={style.image} key={image}>
                        <Image
                            alt={title}
                            height={220}
                            layout="responsive"
                            objectFit="contain"
                            objectPosition="50% 0%"
                            quality={40}
                            src={SITE_URL + image}
                            width={200}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Project;
