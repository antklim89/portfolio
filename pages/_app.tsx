import { NextIntlProvider } from 'next-intl';
import { AppProps } from 'next/app';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import 'normalize.css';

import Layout from '~/layouts/Layout';

import '~/styles/main.scss';
import '~/styles/properties.scss';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <NextIntlProvider messages={pageProps.messages} onError={(_err) => console.debug('_err: \n', _err)}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NextIntlProvider>
    );
};


export default MyApp;
