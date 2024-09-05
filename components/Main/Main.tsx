import style from './style.module.scss';
import AboutDescription from '~/components/AboutDescription';
import AboutTitle from '~/components/AboutTitle';
import Contacts from '~/components/Contacts';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';
import Projects from '~/components/Projects';
import Technologies from '~/components/Technologies';
import type { LocaleType } from '~/types';


function Main({ locale }: { locale: LocaleType }) {
  return (
    <div className={style.Main}>
      <div id="home" />
      <aside className="hide-lg">
        <div>
          <AboutTitle locale={locale} />
          <Navigation />
          <Footer />
        </div>
      </aside>
      <main>
        <AboutTitle className="show-lg" locale={locale} />
        <Navigation className="show-lg" />
        <AboutDescription locale={locale} />
        <Projects id="projects" locale={locale} />
        <Technologies id="technologies" locale={locale} />
        <Contacts id="contacts" />
        <Footer className="show-lg" />
      </main>
    </div>
  );
}

export default Main;
