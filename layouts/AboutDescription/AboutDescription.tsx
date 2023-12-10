import Markdown from '~/components/Markdown';
import { Locale } from '~/types';
import { getAbout } from '~/utils/server';

import style from './style.module.scss';


const AboutDescription = async ({ locale }: { locale: Locale }) => {
    const { description } = await getAbout(locale);

    return (
        <section className={style.AboutDescription}>
            <Markdown>
                {description}
            </Markdown>
        </section>
    );
};

export default AboutDescription;
