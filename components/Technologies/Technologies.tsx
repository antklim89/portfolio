import type { ComponentProps } from 'react';
import style from './style.module.scss';
import { getTechnologies } from '@/lib/actions';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';
import { getTranslation } from '@/lib/utils.server';
import Technology from './TechnologyItem';


async function Technologies({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const t = await getTranslation(locale);
  const technologies = await getTechnologies(locale);

  return (
    <section
      className={cls(style.Technologies, className)}
      {...props}
    >
      <h2 className="title-lg">{t.technologies}</h2>
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
