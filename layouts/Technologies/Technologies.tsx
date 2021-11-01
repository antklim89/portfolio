import { FC } from 'react';

import style from './style.module.scss';
import Technology from './Technology';
import { TechnologiesProps } from './types';


const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <section className={style.Technologies}>
            <h1 className="title">Technologies</h1>
            <div className={style.list}>
                {technologies.map((technology) => (
                    <Technology key={technology.slug} technology={technology} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;

