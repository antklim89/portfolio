import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';

import Tags from '~/components/Tags';
import { SITE_URL } from '~/constants';
import { ProjectPreviewType } from '~/types';
import { cls } from '~/utils';


const ProjectItem: FC<ProjectPreviewType> = ({ technologies, title, image, link, slug }) => {
    const t = useTranslations();
    return (
        <section className={style.Project}>
            <div>
                <Image
                    alt={title}
                    height={700}
                    layout="responsive"
                    src={SITE_URL + image}
                    width={640}
                />
            </div>
            <Tags className={style.technologies} tags={technologies} />
            <div className={style.body}>
                <Link href={`/projects/${slug}`}>
                    <a>
                        <h5 className={cls(style.title, 'title')}>{title}</h5>
                    </a>
                </Link>
                <div className={style.actions}>
                    <Link href={link}>
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
        </section>
    );
};

export default ProjectItem;
