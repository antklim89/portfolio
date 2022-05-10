import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

import style from './style.module.scss';

import Container from '~/components/Container';
import Markdown from '~/components/Markdown';
import { BlurData } from '~/types';
import { AboutType } from '~/types/about';
import { getImageUrl } from '~/utils';


const About: FC<BlurData<AboutType>> = ({ image, text, blurData }) => {
    const t = useTranslations();

    return (
        <section className="parallax">
            <Container className={style.About}>
                <div className={style.image}>
                    <Image
                        alt="About"
                        blurDataURL={blurData}
                        height={320}
                        layout="responsive"
                        placeholder="blur"
                        src={getImageUrl(image)}
                        width={320}
                    />
                </div>
                <div className={style.text}>
                    <h1 className="title">{t('about')}</h1>
                    <Markdown>
                        {text}
                    </Markdown>
                </div>
            </Container>
        </section>
    );
};

export default About;

