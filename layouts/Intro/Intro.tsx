import { FC } from 'react';


import Markdown from '~/components/Markdown';
import { IntroType } from '~/types/intro';

import style from './style.module.scss';


const Intro: FC<IntroType> = ({ text, title }) => {
    return (
        <section className={`${style.Intro} parallax`}>
            <div className={style.Intro__window}>
                <h2 className="title">{title}</h2>
                <Markdown>
                    {text}
                </Markdown>
            </div>
            <a className={style.down} href="#projects" type="button">&darr;</a>
        </section>
    );
};

export default Intro;
