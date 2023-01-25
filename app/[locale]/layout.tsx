import { redirect } from 'next/navigation';

import TranslationProvider from '~/components/TranslationProvider';
import { defaultLocale } from '~/constants';
import Layout from '~/layouts/Layout';
import { isLocale, getTranslation } from '~/utils';


const RootLayout = async ({ children, params }: { children: React.ReactNode, params: {locale: string}}) => {
    const { locale } = params;
    if (!isLocale(locale)) return redirect(`/${defaultLocale}`);

    const translation = await getTranslation(locale);

    return (
        <TranslationProvider locale={locale} translation={translation}>
            <Layout>
                {children}
            </Layout>
        </TranslationProvider>
    );
};

export default RootLayout;


