import type { ComponentProps } from 'react';

import { getProjects } from '@/lib/actions';
import { getTranslation } from '@/lib/services';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';
import ProjectItem from './ProjectItem';
import style from './style.module.scss';

async function Projects({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const t = await getTranslation(locale);
  const projects = await getProjects(locale);

  return (
    <section className={cls(style.Projects, className)} {...props}>
      <h2 className="title-lg">{t.projects}</h2>
      <div className={style.list}>
        {projects.map(project => (
          <ProjectItem key={project.title} locale={locale} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
