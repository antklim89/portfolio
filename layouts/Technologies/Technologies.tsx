import { FC } from 'react';

import Title from '~/components/Title';
import { getTranslation } from '~/utils';
import { getServerLocale, getTechnologies } from '~/utils/server';

import style from './style.module.scss';
import Technology from './TechnologyItem';


const Technologies = async () => {
    const locale = getServerLocale();
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

export default Technologies as unknown as FC;

