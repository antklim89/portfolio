import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';

import { IMAGE_TECHNOLOGY_HEIGHT, IMAGE_TECHNOLOGY_WIDTH } from '@/lib/constants';
import type { TechnologyType } from '@/lib/types';
import style from './style.module.scss';

function TechnologyItem({ technology }: { technology: TechnologyType }) {
  const { body, image, link, title } = technology;

  return (
    <a aria-label={`${title} technology`} href={link} rel="noopener noreferrer" target="_blank">
      <section className={style.TechnologyItem}>
        <div className={style.header}>
          <Image
            unoptimized
            alt={title}
            blurDataURL={image.blurDataURL}
            height={IMAGE_TECHNOLOGY_HEIGHT}
            placeholder="blur"
            src={image.url}
            width={IMAGE_TECHNOLOGY_WIDTH}
          />

          <h3 className="title-xl">{title}</h3>
        </div>
        <div className={style.content}>
          <RichText data={body} />
        </div>
      </section>
    </a>
  );
}

export default TechnologyItem;
