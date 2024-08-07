import type { ComponentProps } from 'react';
import Markdown from '~/components/Markdown';
import type { LocaleType } from '~/types';
import { cls } from '~/utils';
import { getAbout } from '~/utils/server';
import style from './style.module.scss';

const AboutDescription = async ({
    locale,
    className,
    ...props
}: { locale: LocaleType } & ComponentProps<'section'>) => {
    const { description } = await getAbout(locale);

    return (
        <section className={cls(style.AboutDescription, className)} {...props}>
            <Markdown>{description}</Markdown>
        </section>
    );
};

export default AboutDescription;
