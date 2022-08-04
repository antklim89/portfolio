import Image from 'next/image';
import { FC } from 'react';

import Container from '~/components/Container';
import Markdown from '~/components/Markdown';
import Title from '~/components/Title';
import { AboutType } from '~/types/about';
import { getImageUrl } from '~/utils';

import style from './style.module.scss';


const About: FC<AboutType> = ({ image, text, title }) => {
    return (
        <section className="parallax">
            <Container className={style.About} width="md" >
                <div className={style.image}>
                    <Image
                        alt="About"
                        height={320}
                        layout="responsive"
                        src={getImageUrl(image)}
                        width={320}
                    />
                </div>
                <div className={style.text}>
                    <Title as="h1" size="xl">
                        {title}
                    </Title>
                    <Markdown>
                        {text}
                    </Markdown>
                </div>
                <div className={style.down}>
                    <a href="#projects" type="button">&darr;</a>
                </div>
            </Container>
        </section>
    );
};

export default About;

