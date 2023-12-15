import { getAbout, getServerLocale, getTranslation } from '~/utils/server';


const Head = async () => {
    const locale = getServerLocale();
    const { defaultTitle } = await getTranslation(locale);
    const { name, description, keywords } = await getAbout(locale);

    return (
        <>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link href="/favicon.ico" rel="icon" />
            <title>{defaultTitle}</title>
            <link href="/favicon.ico" rel="icon" />
            <meta content={description} name="description" />
            <meta content={keywords.join(', ')} name="keywords" />
            <meta content={description} name="description" />
            <meta content={defaultTitle} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={name} name="twitter:creator" />
            <meta content={defaultTitle} name="twitter:title" />
            <meta content={description} name="twitter:description" />
        </>
    );
};

export default Head;
