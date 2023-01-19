import LocaleProvider from '~/components/LocaleProvider';


const RootLayout = ({ children, ...props }: { children: React.ReactNode}) => {

    return (
        <html lang="en">
            <head />
            <LocaleProvider>
                <body>{children}</body>
            </LocaleProvider>
        </html>
    );
};

export default RootLayout;
