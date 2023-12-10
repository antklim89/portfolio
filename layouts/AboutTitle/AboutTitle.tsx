import Markdown from '~/components/Markdown';
import { Locale } from '~/types';
import { getAbout } from '~/utils/server';

import style from './style.module.scss';


const AboutTitle = async ({ locale }: {locale: Locale}) => {
    const { title } = await getAbout(locale);

    return (
        <section className={style.AboutTitle}>
            <Markdown>
                {title}
            </Markdown>
        </section>
    );
};

export default AboutTitle;
