import { RichText } from '@payloadcms/richtext-lexical/react';
import type { ComponentProps } from 'react';
import style from './style.module.scss';
import { getAbout } from '@/lib/actions';
import type { LocaleType } from '@/lib/types';
import { cls } from '@/lib/utils';


async function AboutDescription({
  locale,
  className,
  ...props
}: { locale: LocaleType } & ComponentProps<'section'>) {
  const { description } = await getAbout(locale);

  return (
    <section className={cls(style.AboutDescription, className)} {...props}>
      <RichText data={description} />
    </section>
  );
}

export default AboutDescription;
