import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import Carousel from '~/components/ClientComponents/nuka-carusel';
import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import Title from '~/components/Title';
import { ProjectType } from '~/types';
import { getImageUrl, getTranslation } from '~/utils';
import { getServerLocale } from '~/utils/server';

import style from './style.module.scss';


const ProjectItem = async ({
    technologies, title, images, link, github, body,
}: ProjectType) => {
    const locale = getServerLocale();
    const t = await getTranslation(locale);

    return (
        <section className={style.ProjectItem}>
            <Carousel>
                {images.map((image) => (
                    <div className={style.images} key={image}>
                        <Image
                            alt={title}
                            className="img-cover"
                            height={200}
                            src={getImageUrl(image)}
                            width={400}
                        />
                    </div>
                ))}
            </Carousel>
            <div className={style.content}>
                <Title align="center" as="h3" size="lg">
                    {title}
                </Title>
                <div className={style.links}>
                    <Link href={github} rel="noopener noreferrer" target="_blank">
                        <DiGithubBadge size="3rem" />
                        {t.GitHub}
                    </Link>
                    <Link href={link} rel="noopener noreferrer" target="_blank">
                        <MdPublic size="3rem" />
                        {t.Site}
                    </Link>
                </div>
            </div>
            <Tags className={style.technologies} tags={technologies} />
            <div className={style.body}>
                <Markdown>
                    {body}
                </Markdown>
            </div>
        </section>
    );
};

export default ProjectItem as unknown as FC<ProjectType>;
