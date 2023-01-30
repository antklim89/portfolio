import { getTranslation } from '~/utils';
import { getAbout, getServerLocale } from '~/utils/server';


const Head = async () => {
    const locale = getServerLocale();
    const { defaultTitle } = await getTranslation(locale);
    const { text, creator, keywords } = await getAbout(locale);

    return (
        <>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link href="/favicon.ico" rel="icon" />
            <title>{defaultTitle}</title>
            <link href="/favicon.ico" rel="icon" />
            <meta content={text} name="description" />
            <meta content={keywords.join(', ')} name="keywords" />
            <meta content={text} name="description" />
            <meta content={defaultTitle} property="og:title" />
            <meta content={text} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={creator} name="twitter:creator" />
            <meta content={defaultTitle} name="twitter:title" />
            <meta content={text} name="twitter:description" />
        </>
    );
};

export default Head;
