import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '~/components/Title';

import style from './style.module.scss';
import Technology from './TechnologyItem';
import { TechnologiesProps } from './types';


const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
    const t = useTranslations();
    return (
        <section className={style.Technologies} id="technologies">
            <Title size="xl">
                {t('Technologies')}
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

