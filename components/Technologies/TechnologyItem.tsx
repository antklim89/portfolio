import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';

import type { TechnologyType } from '@/lib/types';
import style from './style.module.scss';

function TechnologyItem({ technology }: { technology: TechnologyType }) {
  const { body, image, link, title } = technology;

  return (
    <a
      aria-label={`${title} technology`}
      className={style.linkWrapper}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <section className={style.Technology}>
        <div className={style.image}>
          <Image
            unoptimized
            alt={title}
            blurDataURL={image.blurDataURL}
            height={300}
            placeholder="blur"
            src={`/media/technologies/${image.filename}`}
            width={300}
          />
        </div>
        <div className={style.content}>
          <h3 className="title-md">{title}</h3>
          <RichText data={body} />
        </div>
      </section>
    </a>
  );
}

export default TechnologyItem;
