import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaEarthEurope } from 'react-icons/fa6';

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
            <div className={style.left}>
                <div className={cls(style.image)}>
                    <Image
                        alt={title}
                        height={75}
                        src={image}
                        width={150}
                    />
                </div>
                <div className={style.links}>
                    <Link href={github} rel="noopener noreferrer" target="_blank">
                        <FaGithub size="32px" />
                        {t.GitHub}
                    </Link>
                    <Link href={link} rel="noopener noreferrer" target="_blank">
                        <FaEarthEurope size="32px" />
                        {t.Site}
                    </Link>
                </div>
            </div>
            <div className={style.right}>
                <h4 className={style.title}>
                    {title}
                </h4>
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
