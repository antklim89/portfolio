import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { FC, memo } from 'react';

import { CREATOR, DEFAULT_DESCRIPTION } from '~/constants';

import { SeoProps } from './types';


const Seo: FC<SeoProps> = ({
    description,
    keywords = [],
    title,
}) => {
    const t = useTranslations();

    const metaDescription = `${DEFAULT_DESCRIPTION} ${description || ''}`.trim();
    const defaultTitle = `${title ? `${title} | ` : ''}${t('defaultTitle')}`;

    return (
        <Head>
            <title>{defaultTitle}</title>
            <link href="/favicon.ico" rel="icon" />
            <meta content={metaDescription} name="description" />
            <meta content={['grocery', 'shop', ...keywords].join(', ')} name="keywords" />
            <meta content={metaDescription} name="description" />
            <meta content={title} property="og:title" />
            <meta content={metaDescription} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={CREATOR} name="twitter:creator" />
            <meta content={title} name="twitter:title" />
            <meta content={metaDescription} name="twitter:description" />
        </Head>
    );
};

export default memo(Seo);
