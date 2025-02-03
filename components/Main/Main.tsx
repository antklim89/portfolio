import style from './style.module.scss';
import AboutDescription from '@/components/AboutDescription';
import AboutTitle from '@/components/AboutTitle';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import type { LocaleType } from '@/lib/types';


function Main({ locale }: { locale: LocaleType }) {
  return (
    <div className={style.Main}>
      <div id="home" style={{ height: 0 }} />
      <aside className="desktop">
        <div>
          <AboutTitle locale={locale} />
          <Navigation />
          <Footer />
        </div>
      </aside>
      <main className="desktop">
        <AboutDescription locale={locale} />
        <Projects id="projects" locale={locale} />
        <Technologies id="technologies" locale={locale} />
        <Contacts id="contacts" />
      </main>
      <main className="mobile">
        <AboutTitle locale={locale} />
        <Navigation />
        <AboutDescription locale={locale} />
        <Projects id="projects" locale={locale} />
        <Technologies id="technologies" locale={locale} />
        <Contacts id="contacts" />
        <Footer />
      </main>
    </div>
  );
}

export default Main;
