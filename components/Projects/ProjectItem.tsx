import Image from 'next/image';
import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import Markdown from '~/components/Markdown';
import { Locale, ProjectType } from '~/types';
import { cls } from '~/utils';
import { getTranslation } from '~/utils/server';

import style from './style.module.scss';


const ProjectItem = async ({ locale, project }: { project: ProjectType, locale: Locale }) => {
    const {
        technologies, title, image, link, github, body,    
    } = project;
    
    const t = await getTranslation(locale);

    return (
        <section className={style.ProjectItem}>
            <div className={cls(style.image, 'hide-sm')}>
                <Image
                    alt={title}
                    height={75}
                    src={image}
                    width={150}
                />
            </div>
            <div className={style.content}>
                <h4 className={style.title}>
                    {title}
                </h4>
                <div className={cls(style.image, 'show-sm')}>
                    <Image
                        alt={title}
                        height={75}
                        src={image}
                        width={150}
                    />
                </div>
                <div className={style.links}>
                    <Link href={github} rel="noopener noreferrer" target="_blank">
                        <DiGithubBadge size="32px" />
                        {t.GitHub}
                    </Link>
                    <Link href={link} rel="noopener noreferrer" target="_blank">
                        <MdPublic size="32px" />
                        {t.Site}
                    </Link>
                </div>
                <div className={style.body}>
                    <Markdown>
                        {body}
                    </Markdown>
                </div>
                <div className={style.tags}>
                    {technologies.map((technology) => (
                        <span className={style.technology} key={technology}>{technology}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectItem;
