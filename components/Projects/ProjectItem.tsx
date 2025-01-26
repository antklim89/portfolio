import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEarthEurope, FaGithub } from 'react-icons/fa6';
import style from './style.module.scss';
import type { LocaleType, ProjectType } from '@/lib/types';
import { cls } from '@/lib/utils';
import { getTranslation } from '@/lib/utils.server';


async function ProjectItem({ locale, project }: { project: ProjectType; locale: LocaleType }) {
  const {
    technologies,
    title,
    imageUrl,
    blurDataURL,
    link,
    github,
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
            alt={title}
            blurDataURL={blurDataURL}
            height={810 / 5}
            placeholder="blur"
            src={imageUrl}
            width={1440 / 5}
          />
        </Link>
        <div className={style.links}>
          <Link href={github} rel="noopener noreferrer" target="_blank">
            <FaGithub size="32px" />
            {t.GitHub}
          </Link>
          <Link href={link} rel="noopener noreferrer" target="_blank">
            <FaEarthEurope size="32px" />
            {t.Site}
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <h3 className="title-md">{title}</h3>
        <div className={style.body}>
          <RichText data={body} />
        </div>
        <div className={style.tags}>
          {technologies.map(technology => (
            <span className={style.technology} key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectItem;
