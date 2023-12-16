import { locales } from '~/constants';
import AboutDescription from '~/layouts/AboutDescription';
import AboutTitle from '~/layouts/AboutTitle';
import Contacts from '~/layouts/Contacts';
import Footer from '~/layouts/Footer';
import Navigation from '~/layouts/Navigation';
import Projects from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
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
