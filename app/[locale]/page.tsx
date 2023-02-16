import Container from '~/components/Container';
import About from '~/layouts/About';
import Contacts from '~/layouts/Contacts';
import Projects from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';


const HomePage = async () => {
    return (
        <>
            <About />
            <Container className="background">
                <Projects />
                <Technologies />
                <Contacts />
            </Container>
        </>
    );
};

export default HomePage;

export const dynamic = 'force-static';
