import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import style from './style.module.scss';
import type { TechnologyProps } from './types';


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
        <div className={style.image}>
          <Image
            alt={technology.title}
            height={75}
            src={technology.image}
            width={150}
          />
        </div>
        <div className={style.content}>
          <h3 className="title-md">{technology.title}</h3>
          <p>{technology.body}</p>
        </div>
      </section>
    </Link>
  );
};

export default TechnologyItem;
