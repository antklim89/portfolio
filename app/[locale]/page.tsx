import Container from '~/components/Container';
import About from '~/layouts/About';
import Contacts from '~/layouts/Contacts';
import Projects from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';


const HomePage = async () => {
    return (
        <>
            <About />
            <Container>
                <Projects />
                <Technologies />
                <Contacts />
            </Container>
            <div id="netlify-identity-widget" />
        </>
    );
};

export default HomePage;

export const dynamic = 'force-static';
