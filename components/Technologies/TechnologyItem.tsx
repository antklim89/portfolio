import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import style from './style.module.scss';
import type { TechnologyProps } from './types';
import { getImageUrl } from '@/utils';


const TechnologyItem: FC<TechnologyProps> = ({ technology }) => {
  return (
    <Link
      aria-label={`${technology.title} technology`}
      className={style.linkWrapper}
      href={technology.link}
      rel="noopener noreferrer"
      target="_blank"
    >

      <section className={style.Technology}>
        <div about="" className={style.image}>
          <Image
            alt={technology.title}
            height={75}
            src={getImageUrl(technology.image)}
            width={150}
          />
        </div>
        <div className={style.content}>
          <h4 className={style.title}>{technology.title}</h4>
          <p>{technology.body}</p>
        </div>
      </section>
    </Link>
  );
};

export default TechnologyItem;
