import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import '~/styles/main.scss';
import '~/styles/properties.scss';
import { Metadata } from 'next';

import NetlifyIdentityWidget from '~/components/NetlifyIdentityWidget';
import { getAbout, getServerLocale, getTranslation } from '~/utils/server';


export async function generateMetadata(): Promise<Metadata> {
    const locale = getServerLocale();
    const { defaultTitle } = await getTranslation(locale);
    const { name, description, keywords } = await getAbout(locale);

    return {
        manifest: '/manifest.json',
        title: defaultTitle,
        description,
        keywords,
        authors: [{ name }],
        creator: name,
        twitter: {
            card: 'summary',
            description,
            title: defaultTitle,
        },
        openGraph: {
            type: 'website',
            description,
            locale,
            title: defaultTitle,
            url: '/',
            siteName: defaultTitle,
        },
    };
}


const RootLayout = async ({ children }: { children: React.ReactNode}) => {
    return (
        <html lang="en">
            <head />
            <body>
                {children}
                <NetlifyIdentityWidget />
            </body>
        </html>
    );
};

export default RootLayout;


