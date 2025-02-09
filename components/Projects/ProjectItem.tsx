import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEarthEurope, FaGitAlt } from 'react-icons/fa6';
import style from './style.module.scss';
import type { LocaleType, ProjectType } from '@/lib/types';
import { cls } from '@/lib/utils';
import { getTranslation } from '@/lib/utils.server';


async function ProjectItem({ locale, project }: { project: ProjectType; locale: LocaleType }) {
  const {
    technologies,
    title,
    image,
    link,
    repository,
    body,
  } = project;

  const t = await getTranslation(locale);

  return (
    <section className={style.ProjectItem}>
      <div className={style.left}>
        <Link
          className={cls(style.image)}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            unoptimized
            alt={title}
            blurDataURL={image.blurDataURL}
            height={image.height}
            placeholder="blur"
            src={`/media/projects/${image.filename}`}
            width={image.width}
          />
        </Link>
        <div className={style.links}>
          <Link
            aria-label={t.Site}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            title={`${t.Site} ${link}`}
          >
            <FaEarthEurope size={32} />
          </Link>
          <Link
            aria-label={t.Repository}
            href={repository}
            rel="noopener noreferrer"
            target="_blank"
            title={`${t.Repository} ${repository}`}
          >
            <FaGitAlt size={32} />
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="title-md">{title}</h3>
        </Link>
        <div className={style.body}>
          <RichText data={body} />
        </div>
        <div className={style.tags}>
          {technologies.map(technology => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectItem;
