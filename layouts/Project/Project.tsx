import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import { DiGithubBadge } from 'react-icons/di/';
import { MdPublic } from 'react-icons/md/';

import style from './style.module.scss';

import Markdown from '~/components/Markdown';
import Tags from '~/components/Tags';
import { ProjectType } from '~/types';


const Project: FC<ProjectType> = ({ technologies, title, body, link, github }) => {
    const t = useTranslations();

    return (
        <section className={style.Project}>
            <div className={style.Project__head}>
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
            <div className={style.Project__body}>
                <Markdown >
                    {body}
                </Markdown>
            </div>
        </section>
    );
};

export default Project;
