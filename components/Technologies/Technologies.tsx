import type { ComponentProps } from 'react';
import Technology from './TechnologyItem';
import style from './style.module.scss';
import type { LocaleType } from '~/types';
import { cls } from '~/utils';
import { getTechnologies, getTranslation } from '~/utils/server';


async function Technologies({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const t = await getTranslation(locale);
  const technologies = await getTechnologies(locale);

  return (
    <section
      className={cls(style.Technologies, className)}
      {...props}
    >
      <h2 className="title">{t.technologies}</h2>
      <div className={style.list}>
        {technologies.map(technology => (
          <Technology
            key={technology.title}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}

export default Technologies;
