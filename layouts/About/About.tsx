import { FC } from 'react';

import style from './style.module.scss';

import { AboutType } from '~/types/about';


const About: FC<AboutType> = () => {
    return (
        <section className={style.About}>
            About
        </section>
    );
};

export default About;

