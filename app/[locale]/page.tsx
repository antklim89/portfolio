import Container from '~/components/Container';
import { locales } from '~/constants';
import About from '~/layouts/About';
import Contacts from '~/layouts/Contacts';
import Projects from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import { Locale } from '~/types';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const HomePage = async ({ params }: {params: {locale: Locale}}) => {
    const { locale } = params;
    return (
        <>
            <About locale={locale} />
            <Container className="background">
                <Projects locale={locale} />
                <Technologies locale={locale} />
                <Contacts />
            </Container>
        </>
    );
};

export default HomePage;

export const dynamic = 'force-static';
