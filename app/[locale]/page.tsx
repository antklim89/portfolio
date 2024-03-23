import AboutDescription from '~/components/AboutDescription';
import AboutTitle from '~/components/AboutTitle';
import Contacts from '~/components/Contacts';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';
import Projects from '~/components/Projects';
import Technologies from '~/components/Technologies';
import { locales } from '~/constants';
import { Locale } from '~/types';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const HomePage = async ({ params }: { params: {locale: Locale} }) => {
    const { locale } = params;
    return (
        <>
            <AboutTitle className='show-lg' locale={locale} />
            <Navigation className='show-lg' locale={locale} />
            <AboutDescription locale={locale} />
            <Projects id="projects" locale={locale} />
            <Technologies id="technologies" locale={locale} />
            <Contacts />
            <Footer className='show-lg' />
        </>
    );
};

export default HomePage;

export const dynamic = 'force-static';
