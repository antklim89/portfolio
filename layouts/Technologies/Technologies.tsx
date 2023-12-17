import { ComponentProps } from 'react';

import { Locale } from '~/types';
import { cls } from '~/utils';
import { getTechnologies, getTranslation } from '~/utils/server';

import style from './style.module.scss';
import Technology from './TechnologyItem';


const Technologies = async ({ locale, className, ...props  }: { locale: Locale } & ComponentProps<'section'>) => {
    const t = await getTranslation(locale);
    const technologies = await getTechnologies(locale);

    return (
        <section className={cls(style.Technologies, className)} {...props}>
            <h2 className='title'>
                {t.technologies}
            </h2>
            <div className={style.list}>
                {technologies.map((technology) => (
                    <Technology key={technology.title} technology={technology} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;

