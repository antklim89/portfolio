import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import style from './style.module.scss';

import { IntroType } from '~/types/intro';


const Intro: FC<IntroType> = ({ text, title }) => {
    return (
        <section className={style.Intro}>
            <div className={style.Intro__window}>
                <h1>{title}</h1>
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default Intro;
