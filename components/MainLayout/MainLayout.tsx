import type { ReactNode } from 'react';

import { Links } from '@/lib/constants';
import style from './style.module.scss';

function MainLayout({
  aboutTitleSlot,
  navigationSlot,
  footerSlot,
  aboutDescriptionSlot,
  projectsSlot,
  technologiesSlot,
  contactsSlot,
}: {
  aboutTitleSlot: ReactNode;
  navigationSlot: ReactNode;
  footerSlot: ReactNode;
  aboutDescriptionSlot: ReactNode;
  projectsSlot: ReactNode;
  technologiesSlot: ReactNode;
  contactsSlot: ReactNode;
}) {
  return (
    <div className={style.Main}>
      <div id={Links.HOME} style={{ height: 0 }} />
      <aside className="desktop">
        <div>
          {aboutTitleSlot}
          {navigationSlot}
          {footerSlot}
        </div>
      </aside>
      <main>
        <div className="mobile">
          {aboutTitleSlot}
          {navigationSlot}
        </div>
        <div>
          {aboutDescriptionSlot}
          {projectsSlot}
          {technologiesSlot}
          {contactsSlot}
        </div>
        <div className="mobile">{footerSlot}</div>
      </main>
    </div>
  );
}

export default MainLayout;
