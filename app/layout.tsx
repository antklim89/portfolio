import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import '~/styles/main.scss';
import '~/styles/properties.scss';
import NetlifyIdentityWidget from '~/components/NetlifyIdentityWidget';


const RootLayout = async ({ children }: { children: React.ReactNode}) => {
    return (
        <html lang="en">
            <head />
            <body>
                {children}
                <NetlifyIdentityWidget />
            </body>
        </html>
    );
};

export default RootLayout;


