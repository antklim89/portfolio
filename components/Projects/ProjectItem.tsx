import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import { FaEarthEurope, FaGitAlt } from 'react-icons/fa6';

import { getTranslation } from '@/lib/services';
import type { LocaleType, ProjectType } from '@/lib/types';
import { cls } from '@/lib/utils';
import style from './style.module.scss';

async function ProjectItem({ locale, project }: { project: ProjectType; locale: LocaleType }) {
  const { technologies, title, image, link, repository, body } = project;
  const t = await getTranslation(locale);

  return (
    <section className={style.ProjectItem}>
      <div className={style.left}>
        <a className={cls(style.image)} href={link} rel="noopener noreferrer" target="_blank">
          <Image
            unoptimized
            alt={title}
            blurDataURL={image.blurDataURL}
            height={image.height}
            placeholder="blur"
            src={image.url}
            width={image.width}
          />
        </a>
        <div className={style.links}>
          <a aria-label={t.Site} href={link} rel="noopener noreferrer" target="_blank" title={`${t.Site} ${link}`}>
            <FaEarthEurope size={32} />
          </a>
          <a
            aria-label={t.Repository}
            href={repository}
            rel="noopener noreferrer"
            target="_blank"
            title={`${t.Repository} ${repository}`}
          >
            <FaGitAlt size={32} />
          </a>
        </div>
      </div>
      <div className={style.right}>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <h3 className="title-md">{title}</h3>
        </a>
        <div className={style.body}>
          <RichText data={body} />
        </div>
        <div className={style.tags}>
          {technologies.map(technology => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectItem;
