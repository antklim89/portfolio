
import Title from '~/components/Title';
import { Locale } from '~/types';
import { getTranslation } from '~/utils';
import { getTechnologies } from '~/utils/server';

import style from './style.module.scss';
import Technology from './TechnologyItem';


const Technologies = async ({ locale }: {locale: Locale}) => {
    const t = await getTranslation(locale);
    const technologies = await getTechnologies(locale);

    return (
        <section className={style.Technologies} id="technologies">
            <Title underscore size="xl">
                {t.technologies}
            </Title>
            <div className={style.list}>
                {technologies.map((technology) => (
                    <Technology key={technology.slug} technology={technology} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;

