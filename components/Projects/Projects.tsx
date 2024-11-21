import type { ComponentProps } from 'react';
import style from './style.module.scss';
import { locales } from '@/lib/constants';
import { getProjects } from '@/lib/server/dataLoaders';
import { getTranslation } from '@/lib/server/utils';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';
import ProjectItem from './ProjectItem';


export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

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
