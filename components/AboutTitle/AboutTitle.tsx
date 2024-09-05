import type { ComponentProps } from 'react';
import style from './style.module.scss';
import Markdown from '@/components/Markdown';
import type { LocaleType } from '@/types';
import { cls } from '@/utils';
import { getAbout } from '@/utils/server';


async function AboutTitle({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const { title } = await getAbout(locale);

  return (
    <section className={cls(style.AboutTitle, className)} {...props}>
      <Markdown>{title}</Markdown>
    </section>
  );
}

export default AboutTitle;
