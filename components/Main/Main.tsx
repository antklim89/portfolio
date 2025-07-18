import style from './style.module.scss';
import AboutDescription from '@/components/AboutDescription';
import AboutTitle from '@/components/AboutTitle';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import { Links } from '@/lib/constants';
import type { LocaleType } from '@/lib/types';


function Main({ locale }: { locale: LocaleType }) {
  const AboutTitleConst = <AboutTitle locale={locale} />;
  const NavigationConst = <Navigation />;
  const FooterConst = <Footer />;
  const AboutDescriptionConst = <AboutDescription locale={locale} />;
  const ProjectsConst = <Projects id={Links.PROJECTS} locale={locale} />;
  const TechnologiesConst = <Technologies id={Links.TECHNOLOGIES} locale={locale} />;
  const ContactsConst = <Contacts id={Links.CONTACTS} />;

  return (
    <div className={style.Main}>
      <div id={Links.HOME} style={{ height: 0 }} />
      <aside className="desktop">
        <div>
          {AboutTitleConst}
          {NavigationConst}
          {FooterConst}
        </div>
      </aside>
      <main className="desktop">
        {AboutDescriptionConst}
        {ProjectsConst}
        {TechnologiesConst}
        {ContactsConst}
      </main>
      <main className="mobile">
        {AboutTitleConst}
        {NavigationConst}
        {AboutDescriptionConst}
        {ProjectsConst}
        {TechnologiesConst}
        {ContactsConst}
        {FooterConst}
      </main>
    </div>
  );
}

export default Main;
