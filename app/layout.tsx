import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import 'normalize.css';
import '~/styles/main.scss';
import '~/styles/properties.scss';


const RootLayout = async ({ children }: { children: React.ReactNode}) => {
    return (
        <html lang="en">
            <head />
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;

