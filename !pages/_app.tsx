import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import 'normalize.css';

import TranslationProvider from '~/components/TranslationProvider';
import Layout from '~/layouts/Layout';
import '~/styles/main.scss';
import '~/styles/properties.scss';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <TranslationProvider translation={pageProps.translation}>
            <NextIntlProvider
                messages={pageProps.translation || {}}
                onError={(err) => (pageProps.translations ? console.error('NextIntl Error: \n', err) : null)}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NextIntlProvider>
        </TranslationProvider>
    );
};


export default MyApp;
