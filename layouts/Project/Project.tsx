import { FC } from 'react';

import style from './style.module.scss';

import Tags from '~/components/Tags';
import { ProjectType } from '~/types';


const Project: FC<ProjectType> = ({ technologies, title, body }) => {
    return (
        <section className={style.Project}>
            <h1 className="title">{title}</h1>
            <Tags tags={technologies} />
            <div className={style.Project__body}>
                {body}
            </div>
        </section>
    );
};

export default Project;
