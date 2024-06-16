import AboutDescription from '~/components/AboutDescription';
import AboutTitle from '~/components/AboutTitle';
import Contacts from '~/components/Contacts';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';
import Projects from '~/components/Projects';
import Technologies from '~/components/Technologies';
import { Locale } from '~/types';

import style from './style.module.scss';


const Main = ({ locale }: { locale: Locale }) => {
    return (
        <div className={style.Main}>
            <aside className='hide-lg'>
                <div>
                    <AboutTitle locale={locale} />
                    <Navigation locale={locale} />
                    <Footer />
                </div>
            </aside>
            <main className='show-lg'>
                <AboutDescription locale={locale} />
                <Projects id="projects" locale={locale} />
                <Technologies id="technologies" locale={locale} />
                <Contacts />
            </main>
            <main className='hide-lg'>
                <AboutTitle locale={locale} />
                <Navigation locale={locale} />
                <AboutDescription locale={locale} />
                <Projects id="projects" locale={locale} />
                <Technologies id="technologies" locale={locale} />
                <Contacts />
                <Footer />
            </main>
        </div>
    );
};

export default Main;
