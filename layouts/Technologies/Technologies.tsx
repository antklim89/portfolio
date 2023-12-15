import { Locale } from '~/types';
import { getTechnologies, getTranslation } from '~/utils/server';

import style from './style.module.scss';
import Technology from './TechnologyItem';


const Technologies = async ({ locale }: {locale: Locale}) => {
    const t = await getTranslation(locale);
    const technologies = await getTechnologies(locale);

    return (
        <section className={style.Technologies}>
            <h2 className='title' id="technologies">
                {t.technologies}
            </h2>
            <div className={style.list}>
                {technologies.map((technology) => (
                    <Technology key={technology.slug} technology={technology} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;

