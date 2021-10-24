import { FC } from 'react';

import style from './style.module.scss';

import { ProjectType } from '~/types';


const Project: FC<ProjectType> = ({ technologies, title, image, link, body }) => {
    return (
        <section className={style.Project}>
            {body}
        </section>
    );
};

export default Project;
