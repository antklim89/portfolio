import type { ComponentProps } from 'react';
import style from './style.module.scss';
import Markdown from '@/components/Markdown';
import { getAbout } from '@/lib/server/dataLoaders';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';


async function AboutTitle({ locale, className, ...props }: { locale: LocaleType } & ComponentProps<'section'>) {
  const { title } = await getAbout(locale);

  return (
    <section className={cls(style.AboutTitle, className)} {...props}>
      <Markdown>{title}</Markdown>
    </section>
  );
}

export default AboutTitle;
