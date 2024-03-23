import { redirect } from 'next/navigation';

import TranslationProvider from '~/components/TranslationProvider';
import { defaultLocale } from '~/constants';
import AboutTitle from '~/layouts/AboutTitle';
import Footer from '~/layouts/Footer';
import Navigation from '~/layouts/Navigation';
import { isLocale } from '~/utils';
import { getTranslation } from '~/utils/server';


const RootLayout = async ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
    const { locale } = params;
    if (!isLocale(locale)) return redirect(`/${defaultLocale}`);

    const translation = await getTranslation(locale);

    return (
        <TranslationProvider locale={locale} translation={translation}>
            <title>{translation.defaultTitle}</title>
            <div className='main container'>
                <aside className='hide-lg'>
                    <div>
                        <AboutTitle locale={locale} />
                        <Navigation locale={locale} />
                        <Footer />
                    </div>
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </TranslationProvider>
    );
};

export default RootLayout;


