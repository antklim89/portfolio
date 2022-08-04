import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import Title from '~/components/Title';
import { ProjectType } from '~/types';
import { getImageUrl } from '~/utils';

import style from './style.module.scss';


const ProjectItem: FC<ProjectType> = ({
    technologies, title, images, link, github, body,
}) => {
    const t = useTranslations();
    return (
        <section className={style.ProjectItem}>
            <Carousel>
                {images.map((image) => (
                    <div className={style.images} key={image}>
                        <Image
                            alt={title}
                            height={200}
                            layout="intrinsic"
                            objectFit="cover"
                            src={getImageUrl(image)}
                            width={400}
                        />
                    </div>
                ))}
            </Carousel>
            <div className={style.content}>
                <Title align="center" as="h3">
                    {title}
                </Title>
                <div className={style.actions}>
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
            <Tags className={style.technologies} tags={technologies} />
            <div className={style.body}>
                <Markdown>
                    {body}
                </Markdown>
            </div>
        </section>
    );
};

export default ProjectItem;
