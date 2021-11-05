import { FC } from 'react';

import style from './style.module.scss';

// import Markdown from '~/components/Markdown';
import { IntroType } from '~/types/intro';


const Intro: FC<IntroType> = ({ text, title }) => {
    return (
        <section className={style.Intro}>
            <div className={style.Intro__window}>
                <h1 className="title">{title}</h1>
                {/* <Markdown> */}
                {text}
                {/* </Markdown> */}
            </div>
        </section>
    );
};

export default Intro;
