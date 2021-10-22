import { FC } from 'react';

import style from './style.module.scss';

import { IntroType } from '~/types/intro';


const Intro: FC<IntroType> = ({ text, title }) => {
    return (
        <section className={style.Intro}>
            <h1>{title}</h1>
            <div className={style.Intro__body}>
                {text}
            </div>
        </section>
    );
};

export default Intro;
