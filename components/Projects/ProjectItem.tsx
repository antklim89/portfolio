import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import { FaEarthEurope, FaGitAlt } from 'react-icons/fa6';

import { IMAGE_PROJECT_HEIGHT, IMAGE_PROJECT_WIDTH } from '@/lib/constants';
import { getTranslation } from '@/lib/services';
import type { LocaleType, ProjectType } from '@/lib/types';
import style from './style.module.scss';

async function ProjectItem({ locale, project }: { project: ProjectType; locale: LocaleType }) {
  const { technologies, title, image, link, repository, body } = project;
  const t = await getTranslation(locale);

  return (
    <section className={style.ProjectItem}>
      <div className={style.header}>
        <a
          tabIndex={-1}
          aria-label={t.Site}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          title={`${t.Site} ${link}`}
        >
          <Image
            unoptimized
            alt={title}
            blurDataURL={image.blurDataURL}
            height={IMAGE_PROJECT_HEIGHT}
            placeholder="blur"
            src={image.url}
            width={IMAGE_PROJECT_WIDTH}
          />
        </a>

        <div className={style.headerLeft}>
          <a
            tabIndex={-1}
            aria-label={t.Site}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            title={`${t.Site} ${link}`}
          >
            <h3 className="title-md">{title}</h3>
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

          <div className={style.tags}>
            {technologies.map(technology => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={style.content}>
        <RichText data={body} />
      </div>
    </section>
  );
}

export default ProjectItem;
