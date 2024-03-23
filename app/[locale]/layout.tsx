import { redirect } from 'next/navigation';

import AboutTitle from '~/components/AboutTitle';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';
import TranslationProvider from '~/components/TranslationProvider';
import { defaultLocale } from '~/constants';
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


