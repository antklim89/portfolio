import { ComponentProps } from 'react';

import Markdown from '~/components/Markdown';
import { Locale } from '~/types';
import { cls } from '~/utils';
import { getAbout } from '~/utils/server';

import style from './style.module.scss';


const AboutTitle = async ({ locale, className, ...props  }: { locale: Locale } & ComponentProps<'section'>) => {
    const { title } = await getAbout(locale);

    return (
        <section className={cls(style.AboutTitle, className)} {...props}>
            <Markdown>
                {title}
            </Markdown>
        </section>
    );
};

export default AboutTitle;
