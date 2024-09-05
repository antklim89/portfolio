import type { ComponentProps } from 'react';
import Technology from './TechnologyItem';
import style from './style.module.scss';
import type { LocaleType } from '@/lib/types';
import { getTechnologies } from '@/lib/server/dataLoaders';
import { getTranslation } from '@/lib/server/utils';
import { cls } from '@/lib/utils';


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
