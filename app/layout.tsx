
import { getServerLocale } from '../utils/server/getServerLocale';


const RootLayout = ({ children }: { children: React.ReactNode}) => {
    const locale = getServerLocale();

    return (
        <html lang={locale}>
            <head />
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;


