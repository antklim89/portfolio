import Main from '~/components/Main';
import { locales } from '~/constants';
import { Locale } from '~/types';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const HomePage = async ({ params }: { params: {locale: Locale} }) => {
    const { locale } = params;
    
    return (
        <Main locale={locale} />
    );
};

export default HomePage;

export const dynamic = 'force-static';
