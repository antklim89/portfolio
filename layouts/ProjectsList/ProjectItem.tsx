import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';

import { SITE_URL } from '~/constants';
import { ProjectPreviewType } from '~/types';
import { cls } from '~/utils';


const ProjectItem: FC<ProjectPreviewType> = ({ technologies, title, image, link, slug }) => {
    return (
        <section className={style.ProjectItem}>
            <div className={style.image}>
                <Image
                    alt={title}
                    height={700}
                    src={SITE_URL + image}
                    width={640}
                />
            </div>
            <div className={style.technologies}>
                {technologies.map((technology) => (
                    <span className={style.technology} key={technology}>{technology}</span>
                ))}
            </div>
            <Link href={`/projects/${slug}`}>
                <a>
                    <h5 className={cls(style.title, 'title')}>{title}</h5>
                </a>
            </Link>
            <div className={style.actions}>
                <Link href={link}>
                    <a rel="noopener noreferrer" target="_blank"><DiGithubBadge />GitHub</a>
                </Link>
                <Link href={link}>
                    <a rel="noopener noreferrer" target="_blank"><MdPublic />Site</a>
                </Link>
            </div>
        </section>
    );
};

export default ProjectItem;
