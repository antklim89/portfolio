import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import type { ReactNode } from 'react';
import NetlifyIdentityWidget from '@/components/NetlifyIdentityWidget';
import '@/styles/main.scss';
import '@/styles/properties.scss';


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
