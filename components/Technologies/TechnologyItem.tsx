import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import style from './style.module.scss';
import type { TechnologyProps } from './types';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
  const {
    body,
    image,
    link,
    title,
  } = technology;

  return (
    <Link
      aria-label={`${title} technology`}
      className={style.linkWrapper}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >

      <section className={style.Technology}>
        <div className={style.image}>
          <Image
            alt={title}
            blurDataURL={image.blurDataURL}
            height={image.height ?? 300}
            placeholder="blur"
            src={image.url}
            width={image.width ?? 300}
          />
        </div>
        <div className={style.content}>
          <h3 className="title-md">{title}</h3>
          <RichText data={body} />
        </div>
      </section>
    </Link>
  );
};

export default TechnologyItem;
