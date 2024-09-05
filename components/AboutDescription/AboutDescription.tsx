import type { ComponentProps } from 'react';
import style from './style.module.scss';
import Markdown from '@/components/Markdown';
import type { LocaleType } from '@/lib/types';
import { getAbout } from '@/lib/server/dataLoaders';
import { cls } from '@/lib/utils';


async function AboutDescription({
  locale,
  className,
  ...props
}: { locale: LocaleType } & ComponentProps<'section'>) {
  const { description } = await getAbout(locale);

  return (
    <section className={cls(style.AboutDescription, className)} {...props}>
      <Markdown>{description}</Markdown>
    </section>
  );
}

export default AboutDescription;
