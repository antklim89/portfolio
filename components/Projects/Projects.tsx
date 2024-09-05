import type { ComponentProps } from 'react';
import ProjectItem from './ProjectItem';
import style from './style.module.scss';
import { locales } from '@/lib/constants';
import type { LocaleType } from '@/lib/types';
import { getProjects } from '@/lib/server/dataLoaders';
import { cls } from '@/lib/utils';


export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

async function Projects({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const projects = await getProjects(locale);

  return (
    <section className={cls(style.Projects, className)} {...props}>
      <div className={style.list}>
        {projects.map(project => (
          <ProjectItem key={project.title} locale={locale} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
