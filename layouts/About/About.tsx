import Image from 'next/image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import style from './style.module.scss';

import { SITE_URL } from '~/constants';
import { AboutType } from '~/types/about';


const About: FC<AboutType> = ({ image, title, text }) => {
    return (
        <section className={style.About}>
            <div className={style.image}>
                <Image
                    alt="About"
                    height={700}
                    layout="responsive"
                    src={SITE_URL + image}
                    width={700}
                />
            </div>
            <div className={style.text}>
                <h1 className="title">{title}</h1>
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default About;

