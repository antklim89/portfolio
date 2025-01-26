import type { ComponentProps } from 'react';
import style from './style.module.scss';
import { getAbout } from '@/lib/actions';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';


async function AboutTitle({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const { name, profession, slogan } = await getAbout(locale);

  return (
    <section className={cls(style.AboutTitle, className)} {...props}>
      <h1>{name}</h1>
      <h3>{profession}</h3>
      <p>{slogan}</p>
    </section>
  );
}

export default AboutTitle;
