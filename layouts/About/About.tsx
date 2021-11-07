import Image from 'next/image';
import { FC } from 'react';

import style from './style.module.scss';

import Container from '~/components/Container';
import Markdown from '~/components/Markdown';
import { SITE_URL } from '~/constants';
import { AboutType } from '~/types/about';


const About: FC<AboutType> = ({ image, title, text }) => {
    return (
        <section className="parallax">
            <Container className={style.About}>
                <div className={style.image}>
                    <Image
                        alt="About"
                        height={320}
                        layout="responsive"
                        src={SITE_URL + image}
                        width={320}
                    />
                </div>
                <div className={style.text}>
                    <h1 className="title">{title}</h1>
                    <Markdown>
                        {text}
                    </Markdown>
                </div>
            </Container>
        </section>
    );
};

export default About;

