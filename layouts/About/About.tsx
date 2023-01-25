import Image from 'next/image';
import { FC } from 'react';

import Container from '~/components/Container';
import Markdown from '~/components/Markdown';
import Title from '~/components/Title';
import { getImageUrl } from '~/utils';
import { getAbout, getServerLocale } from '~/utils/server';

import style from './style.module.scss';


const About = async () => {
    const { image, text, title } = await getAbout(getServerLocale());

    return (
        <section className="parallax">
            <Container className={style.About} width="md" >
                <div className={style.image}>
                    <Image
                        alt="About"
                        className="img-responsible"
                        height={320}
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

export default About as unknown as FC;
