import Image from 'next/image';
import Link from 'next/link';
import { FaEarthEurope, FaGithub } from 'react-icons/fa6';
import style from './style.module.scss';
import Markdown from '@/components/Markdown';
import type { LocaleType, ProjectType } from '@/lib/types';
import { getTranslation } from '@/lib/server/utils';
import { cls } from '@/lib/utils';


async function ProjectItem({ locale, project }: { project: ProjectType; locale: LocaleType }) {
  const {
    technologies,
    title,
    image,
    link,
    github,
    body,
  } = project;

  const t = await getTranslation(locale);

  return (
    <section className={style.ProjectItem}>
      <div className={style.left}>
        <div className={cls(style.image)}>
          <Image
            alt={title}
            height={75}
            src={image}
            width={150}
          />
        </div>
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
          <Markdown>{body}</Markdown>
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
