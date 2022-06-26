import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import { ProjectPreviewType } from '~/types';
import { cls, getImageUrl } from '~/utils';

import style from './style.module.scss';


const ProjectItem: FC<ProjectPreviewType> = ({
    technologies, title, images, link, github, slug, body,
}) => {
    const t = useTranslations();
    return (
        <section className={style.ProjectItem}>
            <Carousel>
                {images.map((image) => (
                    <Image
                        alt={title}
                        height={400}
                        key={image}
                        layout="responsive"
                        objectFit="cover"
                        src={getImageUrl(image)}
                        width={640}
                    />
                ))}
            </Carousel>
            <div className={style.content}>
                <Link href={`/projects/${slug}`}>
                    <a>
                        <h3 className={cls(style.title, 'title')}>{title}</h3>
                    </a>
                </Link>
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
