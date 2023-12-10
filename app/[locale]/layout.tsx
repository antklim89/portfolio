import { redirect } from 'next/navigation';

import TranslationProvider from '~/components/TranslationProvider';
import { defaultLocale } from '~/constants';
import { isLocale, getTranslation } from '~/utils';


const RootLayout = async ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
    const { locale } = params;
    if (!isLocale(locale)) return redirect(`/${defaultLocale}`);

    const translation = await getTranslation(locale);

    return (
        <TranslationProvider locale={locale} translation={translation}>
            <title>{translation.defaultTitle}</title>
            <div className='main'>
                <aside>
                    Aside
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </TranslationProvider>
    );
};

export default RootLayout;


