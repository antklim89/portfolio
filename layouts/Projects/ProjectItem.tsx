import Image from 'next/image';
import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import Markdown from '~/components/Markdown';
import { ProjectType } from '~/types';
import { getTranslation } from '~/utils';
import { getServerLocale } from '~/utils/server';

import style from './style.module.scss';


const ProjectItem = async ({
    technologies, title, image, link, github, body,
}: ProjectType) => {
    const locale = getServerLocale();
    const t = await getTranslation(locale);

    return (
        <section className={style.ProjectItem}>
            <div className={style.image}>
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
