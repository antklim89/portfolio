import type { ReactNode } from 'react';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import '@/styles/main.scss';
import '@/styles/properties.scss';
import NetlifyIdentityWidget from '@/components/NetlifyIdentityWidget';


function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <NetlifyIdentityWidget />
      </body>
    </html>
  );
}

export default RootLayout;
